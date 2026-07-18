import { Inter, Cormorant_Garamond } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

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
    <html
  lang="en"
  className={`${inter.variable} ${cormorant.variable}`}
>
  <body>{children}</body>
</html>
  );
}