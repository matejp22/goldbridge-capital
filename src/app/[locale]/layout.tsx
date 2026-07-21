import { Inter, Cormorant_Garamond } from "next/font/google";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

type MetadataProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  const baseUrl = "https://goldbridge-capital.com";
  const canonicalUrl = `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),

    title: t("title"),
    description: t("description"),

    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en`,
        de: `${baseUrl}/de`,
        it: `${baseUrl}/it`,
        "x-default": `${baseUrl}/en`,
      },
    },

    openGraph: {
      type: "website",
      siteName: "Gold Bridge Capital",
      title: t("title"),
      description: t("description"),
      url: canonicalUrl,
      locale:
        locale === "de"
          ? "de_DE"
          : locale === "it"
            ? "it_IT"
            : "en_GB",
    },

    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}