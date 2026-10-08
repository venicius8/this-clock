import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "This Clock",
  description: "Learn how to read a clock in a fun and interactive way.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
