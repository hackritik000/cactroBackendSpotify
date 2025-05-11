"use client";
import { useEffect, useState } from "react";

export default function SpotifyPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/spotify/top-tracks")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
