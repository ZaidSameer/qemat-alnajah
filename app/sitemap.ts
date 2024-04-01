import { MetadataRoute } from "next";



export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://qematalnajah.com.iq",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://qematalnajah.com.iq/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://qematalnajah.com.iq/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
