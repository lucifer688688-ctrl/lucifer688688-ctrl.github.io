import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "无限维度 | AI 应用开发与企业智能化赋能",
  description: "无限维度专注人工智能应用开发、企业 AI 赋能与长期技术服务。",
  openGraph: {
    title: "无限维度 | AI 应用开发与企业智能化赋能",
    description: "将人工智能能力落到真实业务现场。",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Infinite Dimension 企业 AI 应用" }],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
