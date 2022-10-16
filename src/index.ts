import { resetIcon } from 'assets/reset-icon';
import { statisticsIcon } from 'assets/statistics-icon';
import { syncIcon } from 'assets/sync-icon';
import { usersIcon } from 'assets/users-icon';
import { EditModal } from 'components/EditModal';
import { QueueRow } from 'components/QueueRow';
import { StatisticsModal } from 'components/StatisticsModal';
import { TooltipItem } from 'components/TooltipItem';
import { UsersModal } from 'components/UsersModal';
import { PLAYLIST_API_ENDPOINT } from 'constants';
import { styles } from 'styles';
import { User } from 'types/user';
import { FloatButton } from './components/FloatButton';
import { StyledButton } from './components/StyledButton';
import {
  areSongsEqual,
  deleteTag,
  formatSongsElements,
  formatUsers,
  getPlaylistId,
  getPlaylistTotalTime,
  getSongId,
  getSongLength,
  getSongsUsers,
  isPlaylistPage,
  isSongHeard,
  isSongSkipable,
  isSongsPage,
  isSongUserChecked,
  isTagExist,
} from './functions';
import { Playlist } from './types/playlist';
import { Song } from './types/song';

const style = document.createElement('style');
style.innerHTML = styles;
document.getElementsByTagName('HEAD')[0].appendChild(style);

let getToBottomInterval: number;
let isGoingBottom: boolean = false;
let queueSongInAction: Song;
let songElementInAction: Element;
let playlistId: string;
let localPlaylist: Playlist;

const getToBottom = () => {
  getToBottomInterval = setInterval(() => window.scrollTo(0, document.body.scrollHeight), 1000);
  isGoingBottom = true;
};

const editPaylistImage = (imgUrl: string) => {
  localPlaylist = { ...localPlaylist, img: imgUrl };

  fetch(`${PLAYLIST_API_ENDPOINT}/api/sync`, {
    method: 'POST',
    body: JSON.stringify({
      playlistId,
      playlistData: localPlaylist,
    }),
  })
    .then((res) => res.json())
    .then(console.log);

  (document.getElementById('img') as HTMLImageElement).src = imgUrl;
};

const saveUsersState = (id: string) => {
  const users = [...document.getElementsByClassName(`${id}-user-checkbox`)].map(
    (userCheckbox: Element): User => ({
      name: (userCheckbox as HTMLInputElement).value,
      isChecked: (userCheckbox as HTMLInputElement).checked,
    }),
  );

  localPlaylist = { ...localPlaylist, users };

  fetch(`${PLAYLIST_API_ENDPOINT}/api/sync`, {
    method: 'POST',
    body: JSON.stringify({
      playlistId,
      playlistData: localPlaylist,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
};

const manageSongUsers = (id: string, song: Song): string[] => {
  const localSongs: Song[] = localPlaylist?.songs || [];
  const songUsers: string[] = [];

  const users = [...document.getElementsByClassName(`${id}-user-checkbox`)].map(
    (userCheckbox: Element): User => ({
      name: (userCheckbox as HTMLInputElement).value,
      isChecked: (userCheckbox as HTMLInputElement).checked,
    }),
  );

  users.forEach((user: User) => {
    user.isChecked && songUsers.push(user.name);
  });

  localPlaylist = {
    ...localPlaylist,
    songs: localSongs.map(
      (localSong: Song): Song => ({
        ...localSong,
        users: areSongsEqual(localSong, song) ? songUsers : localSong.users,
      }),
    ),
  };

  fetch(`${PLAYLIST_API_ENDPOINT}/api/sync`, {
    method: 'POST',
    body: JSON.stringify({
      playlistId,
      playlistData: localPlaylist,
    }),
  })
    .then((res) => res.json())
    .then(console.log);

  return songUsers;
};

const returnToTop = () => {
  isGoingBottom = false;
  clearInterval(getToBottomInterval);
  window.scrollTo(0, 0);
};

const showModal = (id: string) => {
  document.querySelector('body')!.style.overflow = 'hidden';
  document.getElementById(id)!.style.display = 'block';

  setTimeout(() => {
    document.getElementById(`${id}-content`)!.style.margin = '10vh auto';
  }, 0);
};

const resetAllHeardSongs = () => {
  const localSongs: Song[] = localPlaylist?.songs || [];

  localPlaylist = {
    ...localPlaylist,
    songs: localSongs.map((localSong: Song): Song => ({ ...localSong, isHeard: false })),
  };

  fetch(`${PLAYLIST_API_ENDPOINT}/api/sync`, {
    method: 'POST',
    body: JSON.stringify({
      playlistId,
      playlistData: localPlaylist,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
};

const resetHeardSong = (song: Song) => {
  const localSongs: Song[] = localPlaylist?.songs || [];

  localPlaylist = {
    ...localPlaylist,
    songs: localSongs.map(
      (localSong: Song): Song => ({ ...localSong, isHeard: !areSongsEqual(localSong, song) && localSong.isHeard }),
    ),
  };

  fetch(`${PLAYLIST_API_ENDPOINT}/api/sync`, {
    method: 'POST',
    body: JSON.stringify({
      playlistId,
      playlistData: localPlaylist,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
};

const hearSong = (song: Song) => {
  const localSongs: Song[] = localPlaylist?.songs || [];

  localPlaylist = {
    ...localPlaylist,
    songs: localSongs.map(
      (localSong: Song): Song => ({ ...localSong, isHeard: areSongsEqual(localSong, song) || localSong.isHeard }),
    ),
  };

  fetch(`${PLAYLIST_API_ENDPOINT}/api/sync`, {
    method: 'POST',
    body: JSON.stringify({
      playlistId,
      playlistData: localPlaylist,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
};

const skipSong = () => {
  (
    document
      .getElementById('left-controls')!
      .getElementsByClassName('left-controls-buttons')[0]
      .getElementsByClassName('next-button')[0] as HTMLElement
  ).click();
};

const syncMusic = () => {
  const songsElements: NodeListOf<Element> = document.querySelectorAll('ytmusic-responsive-list-item-renderer');
  const localSongs: Song[] = localPlaylist?.songs || [];
  const localUsers: User[] = localPlaylist?.users || [];
  const formattedSongsElements: Song[] = formatSongsElements(songsElements, localSongs);
  const songsUsers: User[] = getSongsUsers(formattedSongsElements, localUsers);
  localPlaylist = { ...localPlaylist, songs: formattedSongsElements, users: songsUsers };

  fetch(`${PLAYLIST_API_ENDPOINT}/api/sync`, {
    method: 'POST',
    body: JSON.stringify({
      playlistId,
      playlistData: localPlaylist,
    }),
  })
    .then((res) => res.json())
    .then(console.log);

  document
    .getElementsByClassName('metadata')[0]
    .getElementsByClassName('second-subtitle')[0]
    .getElementsByTagName('span')[2].innerHTML = getPlaylistTotalTime(formattedSongsElements);

  document.querySelector('body')!.removeChild(document.getElementById('users-modal')!);

  document.querySelector('body')!.appendChild(
    UsersModal('users-modal', songsUsers || [], () => {
      saveUsersState('users-modal');
    }),
  );
};

const addSongUsersToTitle = (song: Song) => {
  if (!!document.getElementsByClassName('advertisement style-scope ytmusic-player-bar')[0]) {
    document.getElementsByClassName('advertisement style-scope ytmusic-player-bar')[0].id = 'song-users-bar-id';
  }

  const usersData: HTMLElement = document.getElementById('song-users-bar-id')!;
  usersData.hidden = false;
  usersData.id = 'song-users-bar-id';
  usersData.classList.replace('advertisement', 'byline');
  usersData.style.whiteSpace = 'nowrap';
  usersData.innerHTML !== `${song.users.join(', ')} •&nbsp;` &&
    (usersData.innerHTML = `${song.users.join(', ')} •&nbsp;`);

  deleteTag(document.getElementById('like-button-renderer')!);
  (
    document.getElementsByClassName('middle-controls style-scope ytmusic-player-bar')[0] as HTMLElement
  ).style.justifyContent = 'left';
};

const getShownSongDetails = (): Song => {
  const songContent: Element = document
    .getElementsByClassName('middle-controls')[0]
    .getElementsByClassName('content-info-wrapper')[0];

  const songTitle: string = (songContent.getElementsByClassName('title')[0] as HTMLElement).innerText;
  const songSubtitle: Element = songContent.getElementsByClassName('subtitle')[0].getElementsByClassName('byline')[0];
  let artist: string = '';
  let index = 0;

  const songLink: string = (
    document.getElementsByClassName('ytp-title-link yt-uix-sessionlink')[0] as HTMLAnchorElement
  ).href;

  const songId: string = getSongId(songLink);

  while ((songSubtitle.getElementsByClassName('style-scope')[index] as HTMLElement).innerText !== ' • ') {
    artist += (songSubtitle.getElementsByClassName('style-scope')[index] as HTMLElement).innerText;
    index++;
  }

  return {
    id: songId,
    album: (songSubtitle.getElementsByClassName('style-scope')[index + 1] as HTMLElement).innerText,
    artist,
    isHeard: false,
    length: 0,
    name: songTitle,
    users: [],
  };
};

setInterval(() => {
  const pageUrl = location.href;

  if (isPlaylistPage(pageUrl)) {
    const playlistBottomShelf = document.querySelector('ytmusic-carousel-shelf-renderer');
    isTagExist(playlistBottomShelf) && deleteTag(playlistBottomShelf);
  }

  if (isPlaylistPage(pageUrl) || isSongsPage(pageUrl)) {
    if (playlistId !== getPlaylistId(pageUrl)) {
      playlistId = getPlaylistId(pageUrl);
      fetch(`${PLAYLIST_API_ENDPOINT}/api/playlists/${playlistId}`)
        .then((res) => res.json())
        .then((data) => (localPlaylist = data));
    }

    const isMusicShown = !!document
      .getElementsByClassName('middle-controls')[0]
      .getElementsByClassName('content-info-wrapper')[0]
      .getElementsByClassName('subtitle')[0]
      .getElementsByClassName('byline')[0];

    if (isMusicShown) {
      const localSongs: Song[] = localPlaylist?.songs || [];
      const localUsers: User[] = localPlaylist?.users || [];

      const shownSongDetails: Song = getShownSongDetails();
      const currSong: Song | undefined = localSongs.find((localSong) => areSongsEqual(localSong, shownSongDetails));

      if (
        (!!currSong?.isHeard && isSongSkipable(document.querySelector('video'), currSong.length)) ||
        (!!currSong && !isSongUserChecked(localUsers, currSong))
      )
        skipSong();
    }
  }

  if (isSongsPage(pageUrl)) {
    const localUsers: User[] = localPlaylist?.users || [];

    if (!document.getElementsByClassName('video-size')) {
      const mainPanel: HTMLElement = document.getElementById('main-panel')!;
      mainPanel.classList.add('video-size');
    }

    if (!!document.querySelector('tp-yt-paper-listbox')) {
      !document.getElementById('reset-is-heard') &&
        queueSongInAction?.isHeard &&
        document.querySelector('tp-yt-paper-listbox')?.prepend(
          TooltipItem('reset-is-heard', 'Reset Hearing', () => {
            resetHeardSong(queueSongInAction);
            queueSongInAction.isHeard = false;
          }),
        );

      !document.getElementById('change-song-users') &&
        document.querySelector('tp-yt-paper-listbox')?.prepend(
          TooltipItem('change-song-users', "Song's Users Management", () => {
            !document.getElementById('song-users-modal') &&
              document.querySelector('body')!.appendChild(
                UsersModal('song-users-modal', formatUsers(queueSongInAction.users || [], localUsers), () => {
                  queueSongInAction.users = manageSongUsers('song-users-modal', queueSongInAction);
                  songElementInAction.innerHTML = (queueSongInAction.users || []).join(', ');
                }),
              );
            showModal('song-users-modal');
          }),
        );
    }
  }
}, 100);

setInterval(() => {
  const pageUrl = location.href;
  const localSongs: Song[] = localPlaylist?.songs || [];

  if (isPlaylistPage(location.href)) {
    if (!document.getElementsByClassName('animeme').length && !!document.getElementById('img')) {
      const playlistImg: HTMLImageElement = document.getElementById('img') as HTMLImageElement;
      playlistImg?.classList.add('animeme');
      !!localPlaylist?.img && (playlistImg.src = localPlaylist.img);
      playlistImg.style.cursor = 'pointer';

      playlistImg.addEventListener('mouseover', () => {
        playlistImg.style.opacity = '0.7';
      });

      playlistImg.addEventListener('mouseout', () => {
        playlistImg.style.opacity = '1';
      });

      playlistImg.addEventListener('click', () => {
        document.querySelector('body')!.append(
          EditModal('edit-playlist-img', localPlaylist?.img || 'Enter URL For Playlist Image', (ev) => {
            editPaylistImage((ev.target as HTMLInputElement).value);
          }),
        );
        showModal('edit-playlist-img');
      });
    }

    !document.getElementById('get-down-button') &&
      document.querySelector('body')!.appendChild(
        FloatButton('get-down-button', () => {
          (isGoingBottom ? returnToTop : getToBottom)();
        }),
      );

    !document.getElementById('sync-songs-button') &&
      document.getElementById('top-level-buttons')!.appendChild(
        StyledButton(
          'sync-songs-button',
          'SYNC SONGS',
          () => {
            syncMusic();
          },
          syncIcon,
        ),
      );

    document.querySelectorAll('ytmusic-toggle-button-renderer').forEach((button) => {
      button.innerHTML.toLowerCase().includes('add to library') &&
        document.getElementById('top-level-buttons')!.removeChild(button);
    });

    !document.getElementById('users-management-button') &&
      document.getElementById('top-level-buttons')!.appendChild(
        StyledButton(
          'users-management-button',
          'USERS MANAGEMENT',
          () => {
            showModal('users-modal');
          },
          usersIcon,
        ),
      );

    !document.getElementById('statistics-button') &&
      document.getElementById('top-level-buttons')!.appendChild(
        StyledButton(
          'statistics-button',
          'STATISTICS',
          () => {
            document.querySelector('body')!.append(StatisticsModal('statistics-modal', localPlaylist));
            showModal('statistics-modal');
          },
          statisticsIcon,
        ),
      );

    !document.getElementById('reset-all-songs-button') &&
      document.getElementById('top-level-buttons')!.appendChild(
        StyledButton(
          'reset-all-songs-button',
          'RESET PLAYED SONGS',
          () => {
            resetAllHeardSongs();
          },
          resetIcon,
        ),
      );

    !document.getElementById('users-modal') &&
      document.querySelector('body')!.appendChild(
        UsersModal('users-modal', localPlaylist?.users || [], () => {
          saveUsersState('users-modal');
        }),
      );

    if (
      !!localPlaylist?.songs?.length &&
      !!document
        .getElementsByClassName('metadata')?.[0]
        ?.getElementsByClassName('second-subtitle')?.[0]
        ?.getElementsByTagName('span')?.[2] &&
      !document.getElementById('playlist-length')
    ) {
      document
        .getElementsByClassName('metadata')[0]
        .getElementsByClassName('second-subtitle')[0]
        .getElementsByTagName('span')[2].id = 'playlist-length';
      document.getElementById('playlist-length')!.innerHTML = getPlaylistTotalTime(localPlaylist?.songs || []);
    }
  }

  if (isPlaylistPage(pageUrl) || isSongsPage(pageUrl)) {
    const isMusicShown = !!document
      .getElementsByClassName('middle-controls')[0]
      .getElementsByClassName('content-info-wrapper')[0]
      .getElementsByClassName('subtitle')[0]
      .getElementsByClassName('byline')[0];

    if (isMusicShown) {
      const shownSongDetails: Song = getShownSongDetails();
      const currSong: Song | undefined = localSongs.find((localSong) => areSongsEqual(localSong, shownSongDetails));

      if (!!currSong) {
        !currSong.isHeard && isSongHeard(document.querySelector('video'), currSong.length) && hearSong(currSong);
        addSongUsersToTitle(currSong);

        document
          ?.getElementsByClassName('middle-controls-buttons style-scope ytmusic-player-bar')?.[0]
          ?.querySelector('tp-yt-paper-icon-button')
          ?.addEventListener('click', () => {
            queueSongInAction = currSong;
          });
      }
    }
  }

  if (isSongsPage(pageUrl)) {
    const sidePanel: HTMLElement = document.getElementsByClassName(
      'side-panel modular style-scope ytmusic-player-page',
    )[0] as HTMLElement;

    if (!document.getElementById('side-panel-id')) {
      sidePanel.style.width = '90vw';
      sidePanel.id = 'side-panel-id';
    }

    if (
      !!document.getElementById('song-users-modal') &&
      document.getElementById('song-users-modal')?.style.display === 'none'
    ) {
      document.querySelector('body')!.removeChild(document.getElementById('song-users-modal')!);
    }

    if (!!document.getElementById('tab-renderer')) {
      const queueSongs: HTMLCollectionOf<Element> = document
        .getElementById('tab-renderer')!
        .getElementsByClassName('queue scroller scroller-on-hover style-scope ytmusic-tab-renderer')[0]
        .getElementsByTagName('ytmusic-player-queue-item');

      [...queueSongs].forEach((song: Element) => {
        const songName: string | undefined = (song?.getElementsByClassName('song-title')?.[0] as HTMLElement)
          ?.innerText;

        const songDuration: string = (song.getElementsByClassName('duration')[0] as HTMLElement).innerText;
        const songLength: number = getSongLength(songDuration);

        const sameLocalSong: Song | undefined = localSongs.find(
          (localSong: Song) => localSong.name === songName && localSong.length === songLength,
        );

        const rowText: string = (sameLocalSong?.users || []).join(', ');

        if (
          !!song?.getElementsByClassName('kuwewe-row')?.length &&
          song.getElementsByClassName('song-info')[0].getElementsByClassName('kuwewe-row')[0].innerHTML === rowText
        )
          return;

        (song as HTMLElement).style.height = '75px';
        (song as HTMLElement).style.cssText += '--ytmusic-player-queue-item-thumbnail-size:60px;';

        sameLocalSong &&
          song
            .querySelector('ytmusic-menu-renderer')!
            .querySelector('tp-yt-paper-icon-button')!
            .addEventListener('click', () => {
              queueSongInAction = sameLocalSong;
              songElementInAction = song.getElementsByClassName('song-info')[0].getElementsByClassName('kuwewe-row')[0];
            });

        song.getElementsByClassName('song-info')[0].appendChild(QueueRow());
        song.getElementsByClassName('song-info')[0].getElementsByClassName('kuwewe-row')[0].innerHTML = rowText;
      });
    }
  }
}, 1000);
