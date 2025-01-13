import { ContentTitle, TrackItem } from '@/shared/ui';
import s from './ContentTracks.module.scss';
import { TrackItemType } from '@/shared/ui/track-item/TrackItem';
import trackItemImg from '@/shared/assets/main/track_item_01.png';

const CONTENT_TRACKS = {
  title: {
    left: 'Tracks of the Day',
    right: 'See all',
  },
};

const TRACK_ITEM_TITLE: TrackItemType = {
  number: '№',
  cover: {
      title: 'Cover',
  },
  name: {
    title: 'Name',
  },
  album: 'Album',
  listens: 'Listens',
  playTime: 'Play time',
  like: '',
  isTitle: true,
};

const TRACK_ITEMS: TrackItemType[] = [
  {
    number: '1',
    cover: {
      title: 'Album cover',
      cover: trackItemImg,
    },
    name: {
      title: 'Los del Espasio',
      author: 'Rusherking',
    },
    album: 'El Espasio',
    listens: '213',
    playTime: '5:38',
    like: '',
  },
  {
    number: '2',
    cover: {
      title: 'Album cover',
      cover: trackItemImg,
    },
    name: {
      title: 'Los del Espasio',
      author: 'Rusherking',
    },
    album: 'El Espasio',
    listens: '213',
    playTime: '5:38',
    like: '',
  },
  {
    number: '3',
    cover: {
      title: 'Album cover',
      cover: trackItemImg,
    },
    name: {
      title: 'Los del Espasio',
      author: 'Rusherking',
    },
    album: 'El Espasio',
    listens: '213',
    playTime: '5:38',
    like: '',
  },
];

export function ContentTracks() {
  return (
    <div className={s.wrapper}>
      <ContentTitle left={CONTENT_TRACKS.title.left} right={CONTENT_TRACKS.title.right} />
      <div className={s.contentMain}>
        <TrackItem data={TRACK_ITEM_TITLE} />
        <div className={s.contentItems}>
          {
            TRACK_ITEMS.map((item) => (
              <TrackItem key={item.number} data={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
