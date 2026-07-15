import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const outputDirectory = new URL("../docs/", import.meta.url);
const clientDirectory = new URL("../dist/client/", import.meta.url);
const workerUrl = new URL(`../dist/server/index.js?export=${Date.now()}`, import.meta.url);

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(clientDirectory, outputDirectory, { recursive: true });

const { default: worker } = await import(workerUrl.href);
const runtime = {
  ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
};
const executionContext = { waitUntil() {}, passThroughOnException() {} };

for (const route of ["/", "/v2"]) {
  const response = await worker.fetch(
    new Request(`https://lucifer688688-ctrl.github.io${route}`, {
      headers: { accept: "text/html" },
    }),
    runtime,
    executionContext,
  );

  if (!response.ok) {
    throw new Error(`GitHub Pages export failed for ${route} with HTTP ${response.status}.`);
  }

  const routeDirectory = route === "/" ? outputDirectory : new URL("./v2/", outputDirectory);
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(new URL("index.html", routeDirectory), await response.text(), "utf8");
}

await writeFile(new URL(".nojekyll", outputDirectory), "", "utf8");
