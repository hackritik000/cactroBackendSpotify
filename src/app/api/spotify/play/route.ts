import axios from "axios";
import { getAccessToken } from "@/lib/spotify";

export async function POST(req: Request) {
  const url = new URL(req.url);
  const uri = url.searchParams.get("uri");

  if (!uri) return new Response("Missing uri", { status: 400 });

  const token = getAccessToken();

  await axios.put(
    "https://api.spotify.com/v1/me/player/play",
    { uris: [uri] },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  return new Response(`Playing ${uri}`);
}
