import { getLoginURL } from "@/lib/spotify";

export async function GET() {
  return Response.redirect(getLoginURL(), 302);
}
