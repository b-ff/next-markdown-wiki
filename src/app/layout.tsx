import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { config } from "@/config";

export const metadata: Metadata = {
  ...config.metadata,
  generator: "Next Markdown Wiki - https://github.com/b-ff/next-markdown-wiki",
};

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[montserrat.className].join(" ")}>{children}</body>
      {config.googleTagManagerId ? (
        <GoogleTagManager gtmId={config.googleTagManagerId} />
      ) : null}
    </html>
  );
}
