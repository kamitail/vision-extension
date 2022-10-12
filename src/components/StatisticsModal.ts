import { getPlaylistId } from 'functions';
import { Playlist } from 'types/playlist';
import { Song } from 'types/song';
import { User } from 'types/user';
import { Modal } from './Modal';

export const StatisticsModal = (id: string) => {
  const modal = Modal('75vh', '80%', id);
  const modalContent = modal.firstElementChild!
  const statsContent: HTMLDivElement = document.createElement('div');
  const closeButton: HTMLDivElement = document.createElement('div');
  const tabsWrapper: HTMLDivElement = document.createElement('div');
  const tabs: HTMLDivElement[] = [1, 2].map(() => document.createElement('div'));

  let currTabIndex: number = 0;
  const playlist: Playlist = JSON.parse(localStorage.getItem(getPlaylistId(location.href)) || '{}');
  const users: User[] = playlist.users || [];
  const songs: Song[] = playlist.songs || [];

  tabsWrapper.style.width = '100%';
  tabsWrapper.style.display = 'flex';
  tabsWrapper.style.justifyContent = 'center';
  tabsWrapper.classList.add('tabs-content');
  tabsWrapper.classList.add('fit-container');
  tabsWrapper.classList.add('style-scope');

  tabs[0].classList.add('tab-header');
  tabs[0].classList.add('style-scope');
  tabs[0].classList.add('ytmusic-player-page');
  tabs[0].innerText = 'משתמשים';

  tabs[1].classList.add('tab-header');
  tabs[1].classList.add('style-scope');
  tabs[1].classList.add('ytmusic-player-page');
  tabs[1].innerText = 'שירים';

  const renderTabs = () =>
    tabs.forEach((tab, index) => {
      tab.style.color = 'white';
      tab.style.padding = '20px 70px';
      tab.style.fontSize = '16px';
      tab.style.cursor = 'pointer';
      tab.style.borderBottom = `${currTabIndex === index ? '1' : '0'}px solid white`;

      tab.addEventListener('click', () => {
        modalContent.contains(statsContent) && modalContent.removeChild(statsContent);
        statsContent.innerHTML = '';
        currTabIndex = index;
        renderTabs();
      });

      if (currTabIndex === 0 && index === 0) {
        const row: HTMLDivElement = document.createElement('div');
        const username: HTMLDivElement = document.createElement('div');
        const songsQuantity: HTMLDivElement = document.createElement('div');
        const heardSongsQuantity: HTMLDivElement = document.createElement('div');
        const breakLine: HTMLHRElement = document.createElement('hr');

        row.style.width = '100%';
        row.style.display = 'flex';
        row.style.height = '7vh';
        row.style.marginTop = '2vh';

        username.style.width = '20%';
        username.style.color = 'white';
        username.style.fontSize = '18px';
        username.style.textAlign = 'right';
        username.style.fontWeight = '500';
        username.innerText = 'שם משתמש';

        songsQuantity.style.width = '20%';
        songsQuantity.style.color = 'white';
        songsQuantity.style.fontSize = '18px';
        songsQuantity.style.textAlign = 'right';
        songsQuantity.style.fontWeight = '500';
        songsQuantity.innerText = 'סה"כ שירים';

        heardSongsQuantity.style.width = '20%';
        heardSongsQuantity.style.color = 'white';
        heardSongsQuantity.style.fontSize = '18px';
        heardSongsQuantity.style.textAlign = 'right';
        heardSongsQuantity.style.fontWeight = '500';
        heardSongsQuantity.innerText = 'סה"כ שירים שהושמעו';

        breakLine.style.backgroundColor = '#3c3c3c';
        breakLine.style.height = '1px';
        breakLine.style.marginBottom = '5px';

        row.append(username);
        row.append(songsQuantity);
        row.append(heardSongsQuantity);
        statsContent.append(row);
        statsContent.append(breakLine);

        users.forEach((user: User) => {
          const row: HTMLDivElement = document.createElement('div');
          const username: HTMLDivElement = document.createElement('div');
          const songsQuantityElem: HTMLDivElement = document.createElement('div');
          const heardSongsQuantityElem: HTMLDivElement = document.createElement('div');
          const breakLine: HTMLHRElement = document.createElement('hr');

          const userSongs: Song[] = songs.filter((song) => song.users.includes(user.name));
          const songsQuantity: number = userSongs.length;
          const heardSongsQuantity: number = userSongs.filter((song) => song.isHeard).length;

          row.style.width = '100%';
          row.style.display = 'flex';
          row.style.height = '7vh';
          row.style.alignItems = 'center';

          username.style.width = '20%';
          username.style.color = 'white';
          username.style.fontSize = '18px';
          username.style.textAlign = 'right';
          username.innerText = user.name;

          songsQuantityElem.style.width = '20%';
          songsQuantityElem.style.color = 'white';
          songsQuantityElem.style.fontSize = '18px';
          songsQuantityElem.style.textAlign = 'right';
          songsQuantityElem.innerText = `${songsQuantity} שירים`;

          heardSongsQuantityElem.style.width = '20%';
          heardSongsQuantityElem.style.color = 'white';
          heardSongsQuantityElem.style.fontSize = '18px';
          heardSongsQuantityElem.style.textAlign = 'right';
          heardSongsQuantityElem.innerText = `${heardSongsQuantity} שירים`;

          breakLine.style.backgroundColor = '#3c3c3c';
          breakLine.style.height = '1px';
          breakLine.style.marginBottom = '10px';

          row.append(username);
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
  modalContent.prepend(tabsWrapper);
  modalContent.prepend(closeButton);
  modal.replaceChild(modalContent ,modal.firstElementChild!);


  return modal;
};
