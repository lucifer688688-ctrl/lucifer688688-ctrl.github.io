import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Infinite Dimension brand homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>无限维度 \| AI 应用开发与企业智能化赋能<\/title>/);
  assert.match(html, /让人工智能成为企业可用、可管、可持续进化的能力。/);
  assert.match(html, /无限维度 AI 志愿/);
  assert.match(html, /咨询解决方案/);
  assert.match(html, /ai-enterprise-architecture\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("keeps brand assets, metadata, and temporary preview files scoped correctly", async () => {
  const [page, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /aria-modal="true"/);
  assert.match(page, /handleSubmit/);
  assert.match(page, /infinite-dimension-mark\.jpg/);
  assert.match(layout, /lang="zh-CN"/);
  assert.match(layout, /无限维度 \| AI 应用开发与企业智能化赋能/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /@media \(max-width: 480px\)/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await Promise.all([
    access(new URL("public/images/infinite-dimension-mark.jpg", templateRoot)),
    access(new URL("public/images/ai-enterprise-architecture.png", templateRoot)),
  ]);
  await assert.rejects(access(new URL("app/_sites-preview", templateRoot)));
});
