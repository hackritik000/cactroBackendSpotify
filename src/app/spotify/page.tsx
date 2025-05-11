export default async function SpotifyPage() {
  const res = await fetch("/api/spotify/top-tracks");
  const data = await res.json();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
