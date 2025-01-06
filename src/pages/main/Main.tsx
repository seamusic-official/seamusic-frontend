import { ContentTop, MainHeader, MainLogo, MainMenu } from '@/shared/components';
import s from './Main.module.scss';

export function Main() {
  return (
    <div className={s.main}>
      <MainLogo />
      <MainHeader />
      <MainMenu />
      <div className={s.mainContent}>
        <ContentTop />
        <div className={s.contentTracks}>contentTracks</div>
        <div className={s.contentArtists}>contentArtists</div>
        <div className={s.contentProducers}>contentProducers</div>
        <div className={s.contentBeats}>contentBeats</div>
        <div className={s.contentAlbums}>contentAlbums</div>
        <div className={s.contentPlaylists}>contentPlaylists</div>
      </div>
    </div>
  )
}
