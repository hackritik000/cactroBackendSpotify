import axios from "axios";
import { getAccessToken } from "@/lib/spotify";

export async function GET() {
  const token = getAccessToken();
  const res = await axios.get(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  return Response.json(res.data);
}
