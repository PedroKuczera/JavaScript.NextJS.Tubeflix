import styles from './page.module.css'
import MusicsPage from "./musics/page";
import VideosPage from "./videos/page";

export default function Home() {
  return (
    <>
      <h2 className={styles.title}>Início</h2>
      <VideosPage />
      <MusicsPage />
    </>
  );
}
