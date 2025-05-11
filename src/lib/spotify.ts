import axios from "axios";
import { cookies } from "next/headers";

const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI!;

let access_token = "";
let refresh_token = "";

export function getLoginURL() {
  const scope = [
    "user-read-private",
    "user-read-email",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-top-read",
    "user-follow-read",
    "user-read-currently-playing",
  ].join(" ");

  const query = new URLSearchParams({
    response_type: "code",
    client_id,
    scope,
    redirect_uri,
  }).toString();

  return `https://accounts.spotify.com/authorize?${query}`;
}

export async function handleCallback(code: string): Promise<string> {
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({
      grant_type: "authorization_code",
      redirect_uri,
      code,
    }).toString(),
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(client_id + ":" + client_secret).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  access_token = response.data.access_token as string;
  refresh_token = response.data.refresh_token;
  return access_token;
}

export async function refreshAccessToken() {
  if (!refresh_token) throw new Error("Missing refresh token");

  const res = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }).toString(),
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(`${client_id}:${client_secret}`).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  access_token = res.data.access_token;
  return access_token;
}

export async function getAccessToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (token) {
    access_token = token.value;
  }
  return access_token;
}
