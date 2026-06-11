import { MetadataRoute } from "next";
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.paysages-azureens.fr/sitemap.xml",
    host: "https://www.paysages-azureens.fr",
  };
}
