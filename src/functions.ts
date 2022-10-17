import { Song } from './types/song';
import { last, sumBy } from './functions/generic-use';
import { User } from 'types/user';
import { VIDEO_GUARDS } from 'constants';

export const isTagExist = (tagContent: Element | null): tagContent is Element =>
  !!tagContent && tagContent.innerHTML !== '';

export const isPlaylistPage = (pageUrl: string) => pageUrl.includes('playlist?list=');

export const isSongsPage = (pageUrl: string) => pageUrl.includes('watch?v=');

export const getPlaylistId = (pageUrl: string) => last(pageUrl.split('='));

export const getSongId = (pageUrl: string) => pageUrl.split('v=')[1].split('&')[0];

export const deleteTag = (tagContent: Element) => (tagContent.innerHTML = '');

export const getSongLength = (lengthStr: string): number => {
  const [minutes, seconds]: string[] = lengthStr.split(':');

  return +minutes * 60 + +seconds;
};

export const getPlaylistTotalTime = (songs: Song[]): string => {
  const songsTotalTime: number = sumBy(songs, 'length');
  const totalHours: string = (songsTotalTime / 3600).toFixed(0);
  const totalMinutes: string = ((songsTotalTime % 3600) / 60).toFixed(0);
  const totalSeconds: string = ((songsTotalTime % 3600) % 60).toFixed(0);

  return `${totalHours} hours, ${totalMinutes} minutes and ${totalSeconds} seconds`;
};

export const areSongsEqual = (songA: Song, songB: Song) => songA.id === songB.id;

export const formatSongsElements = (songsElements: NodeListOf<Element>, localSongs: Song[]): Song[] => {
  let formattedSongs: Song[] = [];

  [...songsElements].forEach((song: Element) => {
    try {
      const songData: Element = song.getElementsByClassName('flex-columns')[0];

      const songTitle: HTMLElement = songData
        .getElementsByClassName('title-column')[0]
        .querySelectorAll<HTMLElement>('yt-formatted-string')[0];

      const songLink: string = songTitle.querySelector('a')!.href;
      const songId = getSongId(songLink);

      const songDetails: NodeListOf<HTMLElement> = songData
        .getElementsByClassName('secondary-flex-columns')[0]
        .querySelectorAll<HTMLElement>('yt-formatted-string');

      const songLength: string = song
        .getElementsByClassName('fixed-columns')[0]
        .querySelectorAll<HTMLElement>('yt-formatted-string')[0].title;

      const formattedSong: Song = {
        id: songId,
        name: songTitle.title,
        artist: songDetails[0].title,
        album: songDetails[1].title,
        users: [songDetails[2].title],
        isHeard: false,
        length: getSongLength(songLength),
      };

      const isSongAlreadyExist: boolean = formattedSongs.some(({ id }) => id === songId);

      if (isSongAlreadyExist) {
        formattedSongs = formattedSongs.map((song) => ({
          ...song,
          users:
            song.id === songId
              ? song.users.concat(formattedSong.users.filter((user) => !song.users.includes(user)))
              : song.users,
        }));
        return;
      }

      const sameLocalSong: Song | undefined = localSongs.find((localSong) => areSongsEqual(formattedSong, localSong));

      if (!!sameLocalSong) {
        formattedSong.users.push(...sameLocalSong.users.filter((user) => !formattedSong.users.includes(user)));
        formattedSong.isHeard = sameLocalSong.isHeard;
      }

      formattedSongs.push(formattedSong);
    } catch (error) {
      return;
    }
  });

  return formattedSongs;
};

export const getSongsUsers = (songs: Song[], localUsers: User[]): User[] => {
  const songsUsers: string[] = songs.reduce((users: string[], song: Song) => {
    const addedUsers: string[] = song.users.filter((user: string) => !users.includes(user));
    return [...users, ...addedUsers];
  }, []);

  return songsUsers.map((user: string): User => {
    const sameLocalUser: User | undefined = localUsers.find((localUser) => localUser.name === user);
    return {
      name: user,
      isChecked: !sameLocalUser || sameLocalUser.isChecked,
      nickname: !!sameLocalUser ? sameLocalUser.nickname : user,
    };
  });
};

export const isSongSkipable = (video: HTMLVideoElement | null, videoDuration: number): boolean =>
  !!video && videoDuration > video.currentTime + 5;

export const isSongHeard = (video: HTMLVideoElement | null, videoDuration: number): boolean =>
  !!video && videoDuration < video.currentTime + 4;

export const isSongUserChecked = (users: User[], currSong: Song): boolean =>
  users.some((user: User) => user.isChecked && currSong.users.includes(user.name));

export const formatUsers = (usernames: string[], users: User[]) =>
  users.map((user: User): User => ({ ...user, isChecked: usernames.includes(user.name) }));

export const getRandomVideoGuard = () => VIDEO_GUARDS[Math.floor(Math.random() * VIDEO_GUARDS.length)];
