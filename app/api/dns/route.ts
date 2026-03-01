import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("domain");
  const type = searchParams.get("type");

  const r = await fetch(`https://dns.google/resolve?name=${domain}&type=${type}`);
  const data = await r.json();
  return NextResponse.json(data);
}