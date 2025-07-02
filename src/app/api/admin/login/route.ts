import { NextRequest, NextResponse } from "next/server";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "123456";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set("admin_auth", "yes", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 8,
    });
    return res;
  }
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
