import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home</h1>
      <p>All API routes are exposed here</p>
      <ul>
        <li>
          <a href="/api/spotify/login">/api/spotify/login</a>
        </li>
        <li>
          <a href="/api/spotify/callback">/api/spotify/callback</a>
        </li>
        <li>
          <a href="/api/spotify/play">/api/spotify/play</a>
        </li>
        <li>
          <a href="/api/spotify/pause">/api/spotify/pause</a>
        </li>
        <li>
          <a href="/api/spotify/now-playing">/api/spotify/now-playing</a>
        </li>
        <li>
          <a href="/api/spotify/followed-artists">
            /api/spotify/followed-artists
          </a>
        </li>
        <li>
          <a href="/api/spotify/top-tracks">/api/spotify/top-tracks</a>
        </li>
        <li>
          <a href="/api/spotify/test">/api/spotify/test</a>
        </li>
      </ul>
    </div>
  );
}
