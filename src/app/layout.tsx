import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Next Markdown Wiki",
    template: "%s :: Next Markdown Wiki",
  },
  generator: "Next Markdown Wiki",
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
    </html>
  );
}
