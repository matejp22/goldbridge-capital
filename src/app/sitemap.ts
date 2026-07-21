import type { MetadataRoute } from "next";

const baseUrl = "https://goldbridge-capital.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          de: `${baseUrl}/de`,
          it: `${baseUrl}/it`,
        },
      },
    },
    {
      url: `${baseUrl}/de`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          de: `${baseUrl}/de`,
          it: `${baseUrl}/it`,
        },
      },
    },
    {
      url: `${baseUrl}/it`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          de: `${baseUrl}/de`,
          it: `${baseUrl}/it`,
        },
      },
    },
  ];
}