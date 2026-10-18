
const baseUrl = "https://addiseats.et";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/menu"],
      disallow: ["/cart", "/checkout", "/orders", "/signin", "/api"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
