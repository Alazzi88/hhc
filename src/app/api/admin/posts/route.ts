import { NextRequest, NextResponse } from "next/server";

let posts: {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  username: string;
  createdAt: string;
}[] = [];

// رفع صورة (base64 أو رابط مؤقت)
function saveImage(base64: string) {
  // في التطبيق الجدي: خزنها في cloud مثلاً، هنا بنسوي فقط echo للرابط
  return base64;
}

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const { title, content, image, username } = await req.json();
  const id = Date.now().toString();
  const createdAt = new Date().toLocaleString("ar-EG");
  const imageUrl = image ? saveImage(image) : undefined;
  posts.unshift({ id, title, content, imageUrl, username, createdAt });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  posts = posts.filter((p) => p.id !== id);
  return NextResponse.json({ ok: true });
}
