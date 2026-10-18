
import { getDishes } from "../lib/getDishes";

const baseUrl = "https://addiseats.et";

export default async function sitemap() {
  const dishes = await getDishes();

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/menu`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...dishes.map((dish) => ({
      url: `${baseUrl}/menu/${dish.id}`,
      changeFrequency: "weekly",
      priority: 0.7,
    })),
  ];
}
