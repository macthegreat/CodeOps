import dishes from "@/data/dishes";

export async function getDishes() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return dishes;
}