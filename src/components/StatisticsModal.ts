import { Playlist } from 'types/playlist';
import { Song } from 'types/song';
import { User } from 'types/user';
import { Modal } from './Modal';
import { mode, uniq } from '../functions/generic-use';
import { getTotalSongsTime } from '../functions';

export const StatisticsModal = (id: string, localPlaylist: Playlist) => {
  const modal = Modal('75vh', '80%', id);
  const modalContent = modal.firstElementChild!;
  const statsContent: HTMLDivElement = document.createElement('div');
  const tabsWrapper: HTMLDivElement = document.createElement('div');
  const tabs: HTMLDivElement[] = [1, 2, 3].map(() => document.createElement('div'));

  let currArtistsSort: number = 0;
  let currUsersSort: number = 0;

  let currTabIndex: number = 0;
  const users: User[] = localPlaylist?.users || [];
  const songs: Song[] = localPlaylist?.songs || [];

  tabsWrapper.style.width = '100%';
  tabsWrapper.style.display = 'flex';
  tabsWrapper.style.justifyContent = 'center';
  tabsWrapper.classList.add('tabs-content');
  tabsWrapper.classList.add('fit-container');
  tabsWrapper.classList.add('style-scope');

  tabs[0].classList.add('tab-header');
  tabs[0].classList.add('style-scope');
  tabs[0].classList.add('ytmusic-player-page');
  tabs[0].innerText = 'USERS';

  tabs[1].classList.add('tab-header');
  tabs[1].classList.add('style-scope');
  tabs[1].classList.add('ytmusic-player-page');
  tabs[1].innerText = 'SONGS';

  tabs[2].classList.add('tab-header');
  tabs[2].classList.add('style-scope');
  tabs[2].classList.add('ytmusic-player-page');
  tabs[2].innerText = 'ARTISTS';

  const rerenderTabs = (newTabIndex: number) => {
    modalContent.contains(statsContent) && modalContent.removeChild(statsContent);
    statsContent.innerHTML = '';
    currTabIndex = newTabIndex;
    renderTabs();
  };

  const renderTabs = () =>
    tabs.forEach((tab, index) => {
      tab.style.color = 'white';
      tab.style.padding = '20px 70px';
      tab.style.fontSize = '16px';
      tab.style.cursor = 'pointer';
      tab.style.borderBottom = `${currTabIndex === index ? '1' : '0'}px solid white`;

      tab.addEventListener('click', () => rerenderTabs(index));

      if (currTabIndex === 0 && index === 0) {
        type UserWithSongs = User & { songs: Song[] }

        const sortByNameAsc = (prevUser: UserWithSongs, user: UserWithSongs) => prevUser.name.localeCompare(user.name);
        const sortByNameDesc = (prevUser: UserWithSongs, user: UserWithSongs) => user.name.localeCompare(prevUser.name);
        const sortByNicknameAsc = (prevUser: UserWithSongs, user: UserWithSongs) => prevUser.nickname.localeCompare(user.nickname);
        const sortByNickNameDesc = (prevUser: UserWithSongs, user: UserWithSongs) => user.nickname.localeCompare(prevUser.nickname);
        const sortBySongQuantityAsc = (prevUser: UserWithSongs, user: UserWithSongs) => prevUser.songs.length - user.songs.length;
        const sortBySongQuantityDesc = (prevUser: UserWithSongs, user: UserWithSongs) => user.songs.length - prevUser.songs.length;
        const sortByHeardSongQuantityAsc = (prevUser: UserWithSongs, user: UserWithSongs) => prevUser.songs.filter((song) => song.isHeard).length - user.songs.filter((song) => song.isHeard).length;
        const sortByHeardSongQuantityDesc = (prevUser: UserWithSongs, user: UserWithSongs) => user.songs.filter((song) => song.isHeard).length - prevUser.songs.filter((song) => song.isHeard).length;

        const sortingFunctions = [sortByNameAsc, sortByNameDesc, sortByNicknameAsc, sortByNickNameDesc, sortBySongQuantityAsc, sortBySongQuantityDesc, sortByHeardSongQuantityAsc, sortByHeardSongQuantityDesc];

        const usersWithSongs: UserWithSongs[] = users.map((user) => {
          const userSongs: Song[] = songs.filter((song) => song.users.includes(user.name));


          return { ...user, songs: userSongs };
        }).sort(sortingFunctions[currUsersSort]);

        const row: HTMLDivElement = document.createElement('div');
        const username: HTMLDivElement = document.createElement('div');
        const nickname: HTMLDivElement = document.createElement('div');
        const songsQuantity: HTMLDivElement = document.createElement('div');
        const heardSongsQuantity: HTMLDivElement = document.createElement('div');
        const favoriteArtist: HTMLDivElement = document.createElement('div');
        const breakLine: HTMLHRElement = document.createElement('hr');

        row.style.width = '100%';
        row.style.display = 'flex';
        row.style.height = '7vh';
        row.style.marginTop = '2vh';

        username.style.width = '20%';
        username.style.color = 'white';
        username.style.fontSize = '18px';
        username.style.textAlign = 'left';
        username.style.fontWeight = '500';
        username.innerText = 'Username';
        username.classList.add('clickable');
        username.classList.add(currUsersSort === 0 ? 'sorted-row-header-asc' : currUsersSort === 1 ? 'sorted-row-header-desc' : 'sortable-row-header');
        username.addEventListener('click', () => {
          if (currUsersSort === 0) {
            currUsersSort = 1;
            username.classList.add('sorted-row-header-asc');
          } else {
            currUsersSort = 0;
          }

          rerenderTabs(index);
        });

        nickname.style.width = '20%';
        nickname.style.color = 'white';
        nickname.style.fontSize = '18px';
        nickname.style.textAlign = 'left';
        nickname.style.fontWeight = '500';
        nickname.innerText = 'Nickname';
        nickname.classList.add('clickable');
        nickname.classList.add(currUsersSort === 2 ? 'sorted-row-header-asc' : currUsersSort === 3 ? 'sorted-row-header-desc' : 'sortable-row-header');
        nickname.addEventListener('click', () => {
          if (currUsersSort === 2) {
            currUsersSort = 3;
            nickname.classList.add('sorted-row-header-asc');
          } else {
            currUsersSort = 2;
          }

          rerenderTabs(index);
        });

        songsQuantity.style.width = '20%';
        songsQuantity.style.color = 'white';
        songsQuantity.style.fontSize = '18px';
        songsQuantity.style.textAlign = 'left';
        songsQuantity.style.fontWeight = '500';
        songsQuantity.innerText = 'Songs Quantity (Len)';
        songsQuantity.classList.add('clickable');
        songsQuantity.classList.add(currUsersSort === 4 ? 'sorted-row-header-asc' : currUsersSort === 5 ? 'sorted-row-header-desc' : 'sortable-row-header');
        songsQuantity.addEventListener('click', () => {
          if (currUsersSort === 5) {
            currUsersSort = 4;
            songsQuantity.classList.add('sorted-row-header-asc');
          } else {
            currUsersSort = 5;
          }

          rerenderTabs(index);
        });

        heardSongsQuantity.style.width = '20%';
        heardSongsQuantity.style.color = 'white';
        heardSongsQuantity.style.fontSize = '18px';
        heardSongsQuantity.style.textAlign = 'left';
        heardSongsQuantity.style.fontWeight = '500';
        heardSongsQuantity.innerText = 'Played Songs Quantity (Len)';
        heardSongsQuantity.classList.add('clickable');
        heardSongsQuantity.classList.add(currUsersSort === 6 ? 'sorted-row-header-asc' : currUsersSort === 7 ? 'sorted-row-header-desc' : 'sortable-row-header');
        heardSongsQuantity.addEventListener('click', () => {
          if (currUsersSort === 7) {
            currUsersSort = 6;
            heardSongsQuantity.classList.add('sorted-row-header-asc');
          } else {
            currUsersSort = 7;
          }

          rerenderTabs(index);
        });

        favoriteArtist.style.width = '20%';
        favoriteArtist.style.color = 'white';
        favoriteArtist.style.fontSize = '18px';
        favoriteArtist.style.textAlign = 'left';
        favoriteArtist.style.fontWeight = '500';
        favoriteArtist.innerText = 'Favorite Artist (Quantity/Played)';

        breakLine.style.backgroundColor = '#3c3c3c';
        breakLine.style.height = '1px';
        breakLine.style.marginBottom = '5px';

        row.append(username);
        row.append(nickname);
        row.append(songsQuantity);
        row.append(heardSongsQuantity);
        row.append(favoriteArtist);
        statsContent.append(row);
        statsContent.append(breakLine);

        usersWithSongs.forEach((user: UserWithSongs) => {
          const row: HTMLDivElement = document.createElement('div');
          const username: HTMLDivElement = document.createElement('div');
          const nickname: HTMLDivElement = document.createElement('div');
          const songsQuantityElem: HTMLDivElement = document.createElement('div');
          const heardSongsQuantityElem: HTMLDivElement = document.createElement('div');
          const favoriteArtistElem: HTMLDivElement = document.createElement('div');
          const breakLine: HTMLHRElement = document.createElement('hr');

          const userSongs: Song[] = user.songs;
          const songsQuantity: number = userSongs.length;
          const heardSongs = userSongs.filter((song) => song.isHeard);
          const heardSongsQuantity: number = userSongs.filter((song) => song.isHeard).length;
          const {
            totalHours: totalSongsHours,
            totalMinutes: totalSongsMinutes,
            totalSeconds: totalSongsSeconds,
          } = getTotalSongsTime(userSongs);
          const {
            totalHours: totalHeardSongsHours,
            totalMinutes: totalHeardSongsMinutes,
            totalSeconds: totalHeardSongsSeconds,
          } = getTotalSongsTime(heardSongs);
          const userArtists: string[] = userSongs.map((song) => song.artist);
          const favoriteArtist = mode(userArtists);
          const favoriteArtistSongQuantity = userArtists.filter(artist => artist === favoriteArtist).length;
          const favoriteArtistSongPlayedQuantity = heardSongs.filter(song => song.artist === favoriteArtist).length;

          row.style.width = '100%';
          row.style.display = 'flex';
          row.style.height = '7vh';
          row.style.alignItems = 'center';

          username.style.width = '20%';
          username.style.color = 'white';
          username.style.fontSize = '18px';
          username.style.textAlign = 'left';
          username.innerText = user.name;

          nickname.style.width = '20%';
          nickname.style.color = 'white';
          nickname.style.fontSize = '18px';
          nickname.style.textAlign = 'left';
          nickname.innerText = user.nickname;

          songsQuantityElem.style.width = '20%';
          songsQuantityElem.style.color = 'white';
          songsQuantityElem.style.fontSize = '18px';
          songsQuantityElem.style.textAlign = 'left';
          songsQuantityElem.innerText = `${songsQuantity} songs (${totalSongsHours}h, ${totalSongsMinutes}m, ${totalSongsSeconds}s)`;

          heardSongsQuantityElem.style.width = '20%';
          heardSongsQuantityElem.style.color = 'white';
          heardSongsQuantityElem.style.fontSize = '18px';
          heardSongsQuantityElem.style.textAlign = 'left';
          heardSongsQuantityElem.innerText = `${heardSongsQuantity} songs (${totalHeardSongsHours}h, ${totalHeardSongsMinutes}m, ${totalHeardSongsSeconds}s)`;

          favoriteArtistElem.style.width = '20%';
          favoriteArtistElem.style.color = 'white';
          favoriteArtistElem.style.fontSize = '18px';
          favoriteArtistElem.style.textAlign = 'left';
          favoriteArtistElem.innerText = `${favoriteArtist} (${favoriteArtistSongQuantity}/${favoriteArtistSongPlayedQuantity})`;

          breakLine.style.backgroundColor = '#3c3c3c';
          breakLine.style.height = '1px';
          breakLine.style.marginBottom = '10px';

          row.append(username);
          row.append(nickname);
          row.append(songsQuantityElem);
          row.append(heardSongsQuantityElem);
          row.append(favoriteArtistElem);
          statsContent.append(row);
          statsContent.append(breakLine);
          modalContent.append(statsContent);
        });
      } else if (currTabIndex === 2 && index === 2) {
        const sortByNameAsc = (prevArtist: Artist, artist: Artist) => prevArtist.name.localeCompare(artist.name);
        const sortByNameDesc = (prevArtist: Artist, artist: Artist) => artist.name.localeCompare(prevArtist.name);
        const sortBySongQuantityAsc = (prevArtist: Artist, artist: Artist) => prevArtist.songs.length - artist.songs.length;
        const sortBySongQuantityDesc = (prevArtist: Artist, artist: Artist) => artist.songs.length - prevArtist.songs.length;
        const sortByHeardSongQuantityAsc = (prevArtist: Artist, artist: Artist) => prevArtist.songs.filter((song) => song.isHeard).length - artist.songs.filter((song) => song.isHeard).length;
        const sortByHeardSongQuantityDesc = (prevArtist: Artist, artist: Artist) => artist.songs.filter((song) => song.isHeard).length - prevArtist.songs.filter((song) => song.isHeard).length;

        const sortingFunctions = [sortByNameAsc, sortByNameDesc, sortBySongQuantityAsc, sortBySongQuantityDesc, sortByHeardSongQuantityAsc, sortByHeardSongQuantityDesc];

        type Artist = { name: string, songs: Song[] }

        const getArtist = (song: Song): string[] => song.artist.split(/, | & /);
        const artistsNames = uniq(songs.map(getArtist).flat());


        const artists: Artist[] = artistsNames.map(artistName => {
          const artistSongs: Song[] = songs.filter((song) => song.artist.split('/, | & /').includes(artistName));

          return { name: artistName, songs: artistSongs };
        }).sort(sortingFunctions[currArtistsSort]);

        const row: HTMLDivElement = document.createElement('div');
        const artistName: HTMLDivElement = document.createElement('div');
        const songsQuantity: HTMLDivElement = document.createElement('div');
        const heardSongsQuantity: HTMLDivElement = document.createElement('div');
        const breakLine: HTMLHRElement = document.createElement('hr');

        row.style.width = '100%';
        row.style.display = 'flex';
        row.style.height = '7vh';
        row.style.marginTop = '2vh';

        artistName.style.width = '20%';
        artistName.style.color = 'white';
        artistName.style.fontSize = '18px';
        artistName.style.textAlign = 'left';
        artistName.style.fontWeight = '500';
        artistName.classList.add('clickable');
        artistName.classList.add(currArtistsSort === 0 ? 'sorted-row-header-asc' : currArtistsSort === 1 ? 'sorted-row-header-desc' : 'sortable-row-header');
        artistName.innerText = 'Artist';
        artistName.addEventListener('click', () => {
          if (currArtistsSort === 0) {
            currArtistsSort = 1;
            artistName.classList.add('sorted-row-header-asc');
          } else {
            currArtistsSort = 0;
          }

          rerenderTabs(index);
        });

        songsQuantity.style.width = '20%';
        songsQuantity.style.color = 'white';
        songsQuantity.style.fontSize = '18px';
        songsQuantity.style.textAlign = 'left';
        songsQuantity.style.fontWeight = '500';
        songsQuantity.innerText = 'Songs Quantity (Len)';
        songsQuantity.classList.add('clickable');
        songsQuantity.classList.add(currArtistsSort === 2 ? 'sorted-row-header-asc' : currArtistsSort === 3 ? 'sorted-row-header-desc' : 'sortable-row-header');
        songsQuantity.addEventListener('click', () => {
          if (currArtistsSort === 3) {
            currArtistsSort = 2;
          } else {
            currArtistsSort = 3;
          }

          rerenderTabs(index);
        });

        heardSongsQuantity.style.width = '20%';
        heardSongsQuantity.style.color = 'white';
        heardSongsQuantity.style.fontSize = '18px';
        heardSongsQuantity.style.textAlign = 'left';
        heardSongsQuantity.style.fontWeight = '500';
        heardSongsQuantity.innerText = 'Played Songs Quantity (Len)';
        heardSongsQuantity.classList.add('clickable');
        heardSongsQuantity.classList.add(currArtistsSort === 4 ? 'sorted-row-header-asc' : currArtistsSort === 5 ? 'sorted-row-header-desc' : 'sortable-row-header');
        heardSongsQuantity.addEventListener('click', () => {
          if (currArtistsSort === 5) {
            currArtistsSort = 4;
          } else {
            currArtistsSort = 5;
          }

          rerenderTabs(index);
        });

        breakLine.style.backgroundColor = '#3c3c3c';
        breakLine.style.height = '1px';
        breakLine.style.marginBottom = '5px';

        row.append(artistName);
        row.append(songsQuantity);
        row.append(heardSongsQuantity);
        statsContent.append(row);
        statsContent.append(breakLine);

        artists.forEach((artist: Artist) => {
          const row: HTMLDivElement = document.createElement('div');
          const artistName: HTMLDivElement = document.createElement('div');
          const songsQuantityElem: HTMLDivElement = document.createElement('div');
          const heardSongsQuantityElem: HTMLDivElement = document.createElement('div');
          const breakLine: HTMLHRElement = document.createElement('hr');


          const heardSongs = artist.songs.filter((song) => song.isHeard);
          const songsQuantity: number = artist.songs.length;
          const heardSongsQuantity: number = heardSongs.length;
          const {
            totalHours: totalSongsHours,
            totalMinutes: totalSongsMinutes,
            totalSeconds: totalSongsSeconds,
          } = getTotalSongsTime(artist.songs);
          const {
            totalHours: totalHeardSongsHours,
            totalMinutes: totalHeardSongsMinutes,
            totalSeconds: totalHeardSongsSeconds,
          } = getTotalSongsTime(heardSongs);


          row.style.width = '100%';
          row.style.display = 'flex';
          row.style.height = '7vh';
          row.style.alignItems = 'center';

          artistName.style.width = '20%';
          artistName.style.color = 'white';
          artistName.style.fontSize = '18px';
          artistName.style.textAlign = 'left';
          artistName.innerText = artist.name;

          songsQuantityElem.style.width = '20%';
          songsQuantityElem.style.color = 'white';
          songsQuantityElem.style.fontSize = '18px';
          songsQuantityElem.style.textAlign = 'left';
          songsQuantityElem.innerText = `${songsQuantity} songs (${totalSongsHours}h, ${totalSongsMinutes}m, ${totalSongsSeconds}s)`;

          heardSongsQuantityElem.style.width = '20%';
          heardSongsQuantityElem.style.color = 'white';
          heardSongsQuantityElem.style.fontSize = '18px';
          heardSongsQuantityElem.style.textAlign = 'left';
          heardSongsQuantityElem.innerText = `${heardSongsQuantity} songs (${totalHeardSongsHours}h, ${totalHeardSongsMinutes}m, ${totalHeardSongsSeconds}s)`;

          breakLine.style.backgroundColor = '#3c3c3c';
          breakLine.style.height = '1px';
          breakLine.style.marginBottom = '10px';

          row.append(artistName);
          row.append(songsQuantityElem);
          row.append(heardSongsQuantityElem);
          statsContent.append(row);
          statsContent.append(breakLine);
          modalContent.append(statsContent);
        });
      }

    });

  renderTabs();

  tabs.forEach((tab) => tabsWrapper.append(tab));
  modalContent.firstElementChild!.after(tabsWrapper);

  return modal;
};
