import { db } from "../../../db.js";

export async function GET() {
  const dishes = await db.dish.findMany();

  return Response.json(dishes);
}