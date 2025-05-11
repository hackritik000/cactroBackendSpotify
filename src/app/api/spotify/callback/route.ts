import { handleCallback } from "@/lib/spotify";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code") || "";
  await handleCallback(code);
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/",
    },
  });
}
