import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Đọc Tarot",
  description: "Giải mã hành trình của bạn cùng Alex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
