import { NextResponse, type NextRequest } from "next/server";

const FILE = /\.[^/]+$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/media") ||
    FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (
    pathname === "/en" ||
    pathname.startsWith("/en/") ||
    pathname === "/es" ||
    pathname.startsWith("/es/")
  ) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/es" : `/es${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
