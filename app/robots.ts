import { MetadataRoute } from "next";
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://paysages-azureens.fr/sitemap.xml",
    host: "https://paysages-azureens.fr",
  };
}
