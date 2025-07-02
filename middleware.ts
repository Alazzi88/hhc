import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith("/admin") &&
    req.nextUrl.pathname !== "/admin/login"
  ) {
    const auth = req.cookies.get("admin_auth");
    if (auth?.value !== "yes") {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }
}
