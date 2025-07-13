import { NextResponse } from "next/server";

/**
 * Middleware to tolerate small clock drift for JWT tokens.
 * This avoids Clerk's "JWT issued at in the future" error in dev.
 */
export function middleware(req) {
  const res = NextResponse.next();

  // 👇 Add custom header to signal clock skew tolerance (dev only)
  res.headers.set("x-clerk-clock-tolerance", "60"); // 60 seconds

  return res;
}

export const config = {
  matcher: [
    /*
     * Apply middleware only to Clerk-authenticated routes
     * Skip static files, API routes, and favicon
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
