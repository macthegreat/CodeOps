import { auth } from "../auth.js";

export async function getSession() {
  return await auth();
}
