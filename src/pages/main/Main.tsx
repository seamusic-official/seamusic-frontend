import { ContentTop, MainHeader, MainLogo, MainMenu } from '@/shared/components';
import styles from './Main.module.scss';

export function Main() {
  return (
    <div className={styles.main}>
      <MainLogo />
      <MainHeader />
      <MainMenu />
      <div className={styles.mainContent}>
        <ContentTop />
        <div className={styles.contentTracks}>contentTracks</div>
        <div className={styles.contentArtists}>contentArtists</div>
        <div className={styles.contentProducers}>contentProducers</div>
        <div className={styles.contentBeats}>contentBeats</div>
        <div className={styles.contentAlbums}>contentAlbums</div>
        <div className={styles.contentPlaylists}>contentPlaylists</div>
      </div>
    </div>
  )
}
