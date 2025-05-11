import axios from "axios";
import { getAccessToken } from "@/lib/spotify";

export async function POST() {
  const token = getAccessToken();
  await axios.put(
    "https://api.spotify.com/v1/me/player/pause",
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  return new Response("Paused");
}
