import { handleCallback } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code") || "";
  const token = await handleCallback(code);

  const response = NextResponse.json({ message: "Cookie set!" });

  // Set cookie
  response.cookies.set({
    name: "token",
    value: token,
    httpOnly: true, // prevent client-side JS access
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  return response;
}
