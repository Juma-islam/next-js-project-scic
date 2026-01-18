import { NextResponse } from "next/server";

export function middleware(request) {
  const auth = request.cookies.get("auth");

  if (!auth && request.nextUrl.pathname.startsWith("/add-item")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/add-item/:path*']
};