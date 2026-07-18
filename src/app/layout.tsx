import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gold Bridge Capital | Financiranje z zastavo zlata",
  description:
    "Mednarodno kratkoročno financiranje z zastavo fizičnega investicijskega zlata.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl">
      <body>{children}</body>
    </html>
  );
}