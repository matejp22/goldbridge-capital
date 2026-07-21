import type { MetadataRoute } from "next";

const baseUrl = "https://goldbridge-capital.com";

const locales = ["en", "de", "it"] as const;

const pages = [
  {
    path: "",
    changeFrequency: "monthly" as const,
    priority: 1,
  },
  {
    path: "/privacy",
    changeFrequency: "yearly" as const,
    priority: 0.4,
  },
  {
    path: "/terms",
    changeFrequency: "yearly" as const,
    priority: 0.4,
  },
  {
    path: "/legal",
    changeFrequency: "yearly" as const,
    priority: 0.4,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority:
        page.path === "" && locale !== "en"
          ? 0.9
          : page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}/en${page.path}`,
          de: `${baseUrl}/de${page.path}`,
          it: `${baseUrl}/it${page.path}`,
          "x-default": `${baseUrl}/en${page.path}`,
        },
      },
    }))
  );
}