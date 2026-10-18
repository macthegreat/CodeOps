import { auth } from "./auth.js";

export default auth((request) => {
  if (!request.auth) {
    const url = new URL("/signin", request.url);
    url.searchParams.set("next", request.nextUrl.pathname);

    return Response.redirect(url);
  }
});

export const config = {
  matcher: ["/checkout/:path*", "/orders/:path*"],
};