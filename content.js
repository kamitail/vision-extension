'use strict';

const closeIcon = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512; height: 20px; width: 20px;" xml:space="preserve">
<path style="fill:#FF3F62;" d="M437.02,74.98C388.668,26.629,324.38,0,256,0S123.333,26.629,74.981,74.98
	c-99.814,99.814-99.815,262.223-0.002,362.038C123.331,485.371,187.62,512,256,512s132.668-26.629,181.02-74.982
	C536.833,337.203,536.833,174.794,437.02,74.98z"/>
<path id="SVGCleanerId_0" style="fill:#830018;" d="M371.193,338.28L288.912,256l82.28-82.281c9.089-9.087,9.089-23.824,0-32.912
	c-9.087-9.089-23.824-9.087-32.912,0L256,223.088l-82.282-82.282c-9.087-9.089-23.824-9.089-32.912,0
	c-9.089,9.087-9.089,23.824,0,32.912L223.087,256l-82.282,82.282c-9.089,9.087-9.089,23.824,0,32.912
	c4.544,4.546,10.501,6.817,16.455,6.817c5.955,0,11.913-2.273,16.455-6.817L256,288.912l82.281,82.28
	c4.544,4.544,10.501,6.817,16.455,6.817s11.913-2.273,16.455-6.817C380.282,362.105,380.282,347.369,371.193,338.28z"/>
<path style="fill:#FF3F62;" d="M256,0v223.088l82.28-82.282c9.087-9.087,23.824-9.089,32.912,0c9.089,9.087,9.089,23.824,0,32.912
	L288.912,256l82.281,82.28c9.089,9.087,9.089,23.824,0,32.912c-4.544,4.544-10.501,6.817-16.457,6.817
	c-5.956,0-11.913-2.273-16.455-6.817L256,288.912V512c68.38,0,132.668-26.629,181.02-74.982c99.814-99.815,99.814-262.225,0-362.038
	C388.668,26.629,324.38,0,256,0z"/>
<path id="SVGCleanerId_1" style="fill:#FF0C38;" d="M173.718,371.194c-4.544,4.544-10.501,6.817-16.455,6.817
	c-5.956,0-11.913-2.271-16.457-6.817c-9.089-9.087-9.089-23.824,0-32.912L223.087,256l-82.282-82.281
	c-9.089-9.087-9.089-23.824,0-32.912c9.087-9.089,23.825-9.089,32.912,0L256,223.088V0C187.62,0,123.333,26.629,74.981,74.98
	c-99.814,99.814-99.815,262.223-0.002,362.038C123.331,485.371,187.62,512,256,512V288.912L173.718,371.194z"/>
<g>
	<path id="SVGCleanerId_0_1_" style="fill:#830018;" d="M371.193,338.28L288.912,256l82.28-82.281
		c9.089-9.087,9.089-23.824,0-32.912c-9.087-9.089-23.824-9.087-32.912,0L256,223.088l-82.282-82.282
		c-9.087-9.089-23.824-9.089-32.912,0c-9.089,9.087-9.089,23.824,0,32.912L223.087,256l-82.282,82.282
		c-9.089,9.087-9.089,23.824,0,32.912c4.544,4.546,10.501,6.817,16.455,6.817c5.955,0,11.913-2.273,16.455-6.817L256,288.912
		l82.281,82.28c4.544,4.544,10.501,6.817,16.455,6.817s11.913-2.273,16.455-6.817C380.282,362.105,380.282,347.369,371.193,338.28z"
		/>
</g>
<g>
	<path id="SVGCleanerId_1_1_" style="fill:#FF0C38;" d="M173.718,371.194c-4.544,4.544-10.501,6.817-16.455,6.817
		c-5.956,0-11.913-2.271-16.457-6.817c-9.089-9.087-9.089-23.824,0-32.912L223.087,256l-82.282-82.281
		c-9.089-9.087-9.089-23.824,0-32.912c9.087-9.089,23.825-9.089,32.912,0L256,223.088V0C187.62,0,123.333,26.629,74.981,74.98
		c-99.814,99.814-99.815,262.223-0.002,362.038C123.331,485.371,187.62,512,256,512V288.912L173.718,371.194z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;

const Modal = (height, width, id) => {
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');
    const closeButton = document.createElement('div');
    modal.setAttribute('style', 'backdrop-filter: blur(3px)');
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.zIndex = '100';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.overflow = 'hidden';
    modal.id = id;
    modalContent.style.backgroundColor = '#030303';
    modalContent.style.margin = '5vh auto';
    modalContent.style.padding = '20px';
    modalContent.style.border = '1px solid #888';
    modalContent.style.width = width;
    modalContent.style.overflow = 'auto';
    modalContent.style.height = height;
    modalContent.style.transitionProperty = 'margin';
    modalContent.style.transitionDuration = '0.3s';
    modalContent.id = `${id}-content`;
    closeButton.style.position = 'relative';
    closeButton.style.zIndex = '300';
    closeButton.style.left = '0';
    closeButton.style.top = '0';
    closeButton.style.cursor = 'pointer';
    closeButton.style.width = 'fit-content';
    closeButton.innerHTML = closeIcon;
    const closeModal = () => {
        document.querySelector('body').style.overflow = 'visible';
        modal.style.display = 'none';
        modalContent.style.margin = '5vh auto';
        document.querySelector('body').removeChild(modal);
    };
    closeButton.addEventListener('click', closeModal);
    window.onclick = (event) => {
        if (!(event.target === modal))
            return;
        closeModal();
    };
    modalContent.append(closeButton);
    modal.appendChild(modalContent);
    return modal;
};

const EditModal = (id, placeholder, inputAction) => {
    const modal = Modal('25vh', '50%', id);
    const modalContent = modal.firstElementChild;
    const closeButton = document.createElement('div');
    const inputBox = document.createElement('div');
    const inputField = document.createElement('input');
    inputBox.classList.add('search-box');
    inputBox.classList.add('style-scope');
    inputBox.classList.add('ytmusic-search-box');
    inputBox.style.height = '40px';
    inputBox.style.padding = '10px';
    inputBox.style.marginTop = '40px';
    inputField.classList.add('style-scope');
    inputField.classList.add('ytmusic-search-box');
    inputField.placeholder = placeholder;
    inputField.style.color = 'white';
    inputField.addEventListener('input', inputAction);
    inputBox.append(inputField);
    modalContent.append(closeButton);
    modalContent.append(inputBox);
    modal.replaceChild(modalContent, modal.firstElementChild);
    return modal;
};

const QueueRow = () => {
    const row = document.createElement('yt-formatted-string');
    row.classList.add('byline');
    row.classList.add('style-scope');
    row.classList.add('ytmusic-player-queue-item');
    row.classList.add('complex-string');
    row.classList.add('kuwewe-row');
    row.style.marginTop = '4px';
    row.style.fontSize = '18px';
    row.style.color = 'white';
    row.style.fontWeight = '500';
    row.style.display = 'block';
    row.addEventListener('click', (ev) => {
        ev.preventDefault();
        console.log('hello');
    });
    return row;
};

const last = (array) => array[array.length - 1];
const sum = (array) => array.reduce((totalSum, currValue) => totalSum + currValue);
const sumBy = (array, key) => sum(array.map((element) => element[key]));

const isTagExist = (tagContent) => !!tagContent && tagContent.innerHTML !== '';
const isPlaylistPage = (pageUrl) => pageUrl.includes('playlist?list=');
const isSongsPage = (pageUrl) => pageUrl.includes('watch?v=');
const getPlaylistId = (pageUrl) => last(pageUrl.split('='));
const deleteTag = (tagContent) => (tagContent.innerHTML = '');
const getSongLength = (lengthStr) => {
    const [minutes, seconds] = lengthStr.split(':');
    return +minutes * 60 + +seconds;
};
const getPlaylistTotalTime = (songs) => {
    const songsTotalTime = sumBy(songs, 'length');
    const totalHours = (songsTotalTime / 3600).toFixed(0);
    const totalMinutes = ((songsTotalTime % 3600) / 60).toFixed(0);
    const totalSeconds = ((songsTotalTime % 3600) % 60).toFixed(0);
    return `${totalHours} שעות, ${totalMinutes} דקות ו-${totalSeconds} שניות`;
};
const areSongsEqual = (songA, songB) => songA.album.trim() === songB.album.trim() &&
    songA.artist.trim() === songB.artist.trim() &&
    songA.name.trim() === songB.name.trim();
const formatSongsElements = (songsElements, localSongs) => {
    const formattedSongs = [...songsElements].map((song) => {
        var _a;
        const songData = song.getElementsByClassName('flex-columns')[0];
        const songTitle = songData
            .getElementsByClassName('title-column')[0]
            .querySelectorAll('yt-formatted-string');
        const songDetails = songData
            .getElementsByClassName('secondary-flex-columns')[0]
            .querySelectorAll('yt-formatted-string');
        const songLength = song
            .getElementsByClassName('fixed-columns')[0]
            .querySelectorAll('yt-formatted-string')[0].title;
        const formattedSong = {
            name: songTitle[0].title,
            artist: songDetails[0].title,
            album: songDetails[1].title,
            users: ((_a = songDetails[2]) === null || _a === void 0 ? void 0 : _a.title) ? [songDetails[2].title] : [],
            isHeard: false,
            length: getSongLength(songLength),
        };
        const sameLocalSong = localSongs.find((localSong) => areSongsEqual(formattedSong, localSong));
        if (!!sameLocalSong) {
            formattedSong.users.push(...sameLocalSong.users.filter((user) => !formattedSong.users.includes(user)));
            formattedSong.isHeard = sameLocalSong.isHeard;
        }
        return formattedSong;
    });
    return formattedSongs;
};
const getSongsUsers = (songs, localUsers) => {
    const songsUsers = songs.reduce((users, song) => {
        const addedUsers = song.users.filter((user) => !users.includes(user));
        return [...users, ...addedUsers];
    }, []);
    return songsUsers.map((user) => {
        const sameLocalUser = localUsers.find((localUser) => localUser.name === user);
        return { name: user, isChecked: !!sameLocalUser && sameLocalUser.isChecked };
    });
};
const isSongSkipable = (video, videoDuration) => !!video && videoDuration > video.currentTime + 5;
const isSongHeard = (video, videoDuration) => !!video && videoDuration < video.currentTime + 4;
const isSongUserChecked = (users, currSong) => users.some((user) => user.isChecked && currSong.users.includes(user.name));
const formatUsers = (usernames, users) => users.map(({ name }) => ({ name, isChecked: usernames.includes(name) }));

const StatisticsModal = (id) => {
    const modal = Modal('75vh', '80%', id);
    const modalContent = modal.firstElementChild;
    const statsContent = document.createElement('div');
    const tabsWrapper = document.createElement('div');
    const tabs = [1, 2].map(() => document.createElement('div'));
    let currTabIndex = 0;
    const playlist = JSON.parse(localStorage.getItem(getPlaylistId(location.href)) || '{}');
    const users = playlist.users || [];
    const songs = playlist.songs || [];
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
    const renderTabs = () => tabs.forEach((tab, index) => {
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
            const row = document.createElement('div');
            const username = document.createElement('div');
            const songsQuantity = document.createElement('div');
            const heardSongsQuantity = document.createElement('div');
            const breakLine = document.createElement('hr');
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
            users.forEach((user) => {
                const row = document.createElement('div');
                const username = document.createElement('div');
                const songsQuantityElem = document.createElement('div');
                const heardSongsQuantityElem = document.createElement('div');
                const breakLine = document.createElement('hr');
                const userSongs = songs.filter((song) => song.users.includes(user.name));
                const songsQuantity = userSongs.length;
                const heardSongsQuantity = userSongs.filter((song) => song.isHeard).length;
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
    return modal;
};

const listItemIcon = `
<svg width="24px" height="24px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<defs>
		<linearGradient id="linearGradient-1" gradientUnits="userSpaceOnUse" x1="63.3343" y1="757.83" x2="241.6165" y2="757.83" gradientTransform="matrix(1 0 0 1 -4.63 -580.8098)">
			<stop  offset="0" style="stop-color:#0C59A4"/>
			<stop  offset="1" style="stop-color:#114A8B"/>
		</linearGradient>
		<radialGradient id="radialGradient-1" cx="161.83" cy="788.4008" r="95.38" gradientTransform="matrix(0.9999 0 0 0.9498 -4.6217 -570.3868)" gradientUnits="userSpaceOnUse">
			<stop  offset="0.72" style="stop-color:#000000;stop-opacity:0"/>
			<stop  offset="0.95" style="stop-color:#000000;stop-opacity:0.53"/>
			<stop  offset="1" style="stop-color:#000000"/>
		</radialGradient>
		<linearGradient id="linearGradient-2" gradientUnits="userSpaceOnUse" x1="157.4013" y1="680.5561" x2="46.0276" y2="801.8683" gradientTransform="matrix(1 0 0 1 -4.63 -580.8098)">
			<stop  offset="0" style="stop-color:#1B9DE2"/>
			<stop  offset="0.16" style="stop-color:#1595DF"/>
			<stop  offset="0.67" style="stop-color:#0680D7"/>
			<stop  offset="1" style="stop-color:#0078D4"/>
		</linearGradient>
		<radialGradient id="radialGradient-2" cx="-773.6357" cy="746.7146" r="143.24" gradientTransform="matrix(0.15 -0.9898 0.8 0.12 -410.7182 -656.3412)" gradientUnits="userSpaceOnUse">
			<stop  offset="0.76" style="stop-color:#000000;stop-opacity:0"/>
			<stop  offset="0.95" style="stop-color:#000000;stop-opacity:0.5"/>
			<stop  offset="1" style="stop-color:#000000"/>
		</radialGradient>
		<radialGradient id="radialGradient-3" cx="230.5926" cy="-106.0381" r="202.4299" gradientTransform="matrix(-3.999750e-02 0.9998 -2.1299 -7.998414e-02 -190.7749 -191.6354)" gradientUnits="userSpaceOnUse">
			<stop  offset="0" style="stop-color:#35C1F1"/>
			<stop  offset="0.11" style="stop-color:#34C1ED"/>
			<stop  offset="0.23" style="stop-color:#2FC2DF"/>
			<stop  offset="0.31" style="stop-color:#2BC3D2"/>
			<stop  offset="0.67" style="stop-color:#36C752"/>
		</radialGradient>
		<radialGradient id="radialGradient-4" cx="536.3567" cy="-117.7029" r="97.34" gradientTransform="matrix(0.28 0.9598 -0.78 0.23 -1.9279 -410.3179)" gradientUnits="userSpaceOnUse">
			<stop  offset="0" style="stop-color:#66EB6E"/>
			<stop  offset="1" style="stop-color:#66EB6E;stop-opacity:0"/>
		</radialGradient>
	</defs>
	<g>
		<path fill="url(#linearGradient-1)" d="M231,190.5c-3.4,1.8-6.9,3.4-10.5,4.7c-11.5,4.3-23.6,6.5-35.9,6.5c-47.3,0-88.5-32.5-88.5-74.3 c0.1-11.4,6.4-21.9,16.4-27.3c-42.8,1.8-53.8,46.4-53.8,72.5c0,73.9,68.1,81.4,82.8,81.4c7.9,0,19.8-2.3,27-4.6l1.3-0.4 c27.6-9.5,51-28.1,66.6-52.8c1.2-1.9,0.6-4.3-1.2-5.5C233.9,189.9,232.3,189.8,231,190.5z"/>
		<path opacity="0.35" fill="url(#radialGradient-1)" enable-background="new    " d="M231,190.5c-3.4,1.8-6.9,3.4-10.5,4.7 c-11.5,4.3-23.6,6.5-35.9,6.5c-47.3,0-88.5-32.5-88.5-74.3c0.1-11.4,6.4-21.9,16.4-27.3c-42.8,1.8-53.8,46.4-53.8,72.5 c0,73.9,68.1,81.4,82.8,81.4c7.9,0,19.8-2.3,27-4.6l1.3-0.4c27.6-9.5,51-28.1,66.6-52.8c1.2-1.9,0.6-4.3-1.2-5.5 C233.9,189.9,232.3,189.8,231,190.5z"/>
		<path fill="url(#linearGradient-2)" d="M105.7,241.4c-8.9-5.5-16.6-12.8-22.7-21.3c-26.3-36-18.4-86.5,17.6-112.8c3.8-2.7,7.7-5.2,11.9-7.2 c3.1-1.5,8.4-4.1,15.5-4c10.1,0.1,19.6,4.9,25.7,13c4,5.4,6.3,11.9,6.4,18.7c0-0.2,24.5-79.6-80-79.6c-43.9,0-80,41.7-80,78.2 c-0.2,19.3,4,38.5,12.1,56c27.6,58.8,94.8,87.6,156.4,67.1C147.5,256.1,124.5,253.2,105.7,241.4L105.7,241.4z"/>
		<path opacity="0.41" fill="url(#radialGradient-2)" enable-background="new    " d="M105.7,241.4c-8.9-5.5-16.6-12.8-22.7-21.3 c-26.3-36-18.4-86.5,17.6-112.8c3.8-2.7,7.7-5.2,11.9-7.2c3.1-1.5,8.4-4.1,15.5-4c10.1,0.1,19.6,4.9,25.7,13 c4,5.4,6.3,11.9,6.4,18.7c0-0.2,24.5-79.6-80-79.6c-43.9,0-80,41.7-80,78.2c-0.2,19.3,4,38.5,12.1,56 c27.6,58.8,94.8,87.6,156.4,67.1C147.5,256.1,124.5,253.2,105.7,241.4L105.7,241.4z"/>
		<path fill="url(#radialGradient-3)" d="M152.3,148.9c-0.8,1-3.3,2.5-3.3,5.7c0,2.6,1.7,5.1,4.7,7.2c14.4,10,41.5,8.7,41.6,8.7 c10.7,0,21.1-2.9,30.3-8.3c18.8-11,30.4-31.1,30.4-52.9c0.3-22.4-8-37.3-11.3-43.9C223.5,23.9,177.7,0,128,0C58,0,1,56.2,0,126.2 c0.5-36.5,36.8-66,80-66c3.5,0,23.5,0.3,42,10.1c16.3,8.6,24.9,18.9,30.8,29.2c6.2,10.7,7.3,24.1,7.3,29.5 C160.1,134.3,157.4,142.3,152.3,148.9z"/>
		<path fill="url(#radialGradient-4)" d="M152.3,148.9c-0.8,1-3.3,2.5-3.3,5.7c0,2.6,1.7,5.1,4.7,7.2c14.4,10,41.5,8.7,41.6,8.7 c10.7,0,21.1-2.9,30.3-8.3c18.8-11,30.4-31.1,30.4-52.9c0.3-22.4-8-37.3-11.3-43.9C223.5,23.9,177.7,0,128,0C58,0,1,56.2,0,126.2 c0.5-36.5,36.8-66,80-66c3.5,0,23.5,0.3,42,10.1c16.3,8.6,24.9,18.9,30.8,29.2c6.2,10.7,7.3,24.1,7.3,29.5 C160.1,134.3,157.4,142.3,152.3,148.9z"/>
	</g>
</svg>`;

const TooltipItem = (id, text, clickAction) => {
    const item = document.createElement('div');
    const itemContent = document.createElement('div');
    const itemIcon = document.createElement('div');
    const itemText = document.createElement('div');
    item.classList.add('style-scope');
    item.classList.add('ytmusic-menu-popup-renderer');
    item.classList.add('iron-selected');
    item.id = id;
    item.addEventListener('click', clickAction);
    itemContent.classList.add('yt-simple-endpoint');
    itemContent.classList.add('style-scope');
    itemContent.classList.add('ytmusic-menu-navigation-item-renderer');
    itemIcon.classList.add('icon');
    itemIcon.classList.add('style-scope');
    itemIcon.classList.add('ytmusic-menu-navigation-item-renderer');
    itemIcon.innerHTML = listItemIcon;
    itemText.classList.add('text');
    itemText.classList.add('style-scope');
    itemText.classList.add('ytmusic-menu-navigation-item-renderer');
    itemText.setAttribute('dir', 'rtl');
    itemText.innerText = text;
    itemContent.append(itemIcon);
    itemContent.append(itemText);
    item.append(itemContent);
    return item;
};

const UsersCheckList = (listName, users, saveUsersState) => {
    const list = document.createElement('div');
    users.forEach(({ isChecked, name }) => {
        const row = document.createElement('div');
        const checkbox = document.createElement('input');
        const costumCheckbox = document.createElement('span');
        const checkmark = document.createElement('span');
        const username = document.createElement('div');
        const breakLine = document.createElement('hr');
        row.style.display = 'flex';
        row.style.alignItems = 'center';
        row.style.marginTop = '10px';
        row.style.justifyContent = 'left';
        checkbox.setAttribute('type', 'checkbox');
        checkbox.value = name;
        checkbox.classList.add(`${listName}-user-checkbox`);
        checkbox.classList.add('babini');
        checkbox.style.height = '0';
        checkbox.style.width = '0';
        checkbox.checked = isChecked;
        costumCheckbox.style.height = '25px';
        costumCheckbox.style.width = '25px';
        costumCheckbox.style.backgroundColor = 'black';
        costumCheckbox.style.border = '2px solid white';
        costumCheckbox.style.display = 'flex';
        costumCheckbox.style.justifyContent = 'center';
        costumCheckbox.style.alignItems = 'center';
        costumCheckbox.style.borderRadius = '4px';
        costumCheckbox.style.marginRight = '7px';
        costumCheckbox.style.cursor = 'pointer';
        costumCheckbox.style.position = 'relative';
        checkmark.style.width = '75%';
        checkmark.style.height = '75%';
        checkmark.style.borderRadius = '2.3px';
        checkmark.style.transitionProperty = 'background';
        checkmark.style.transitionDuration = '0.3s';
        checkmark.style.backgroundColor = isChecked ? 'white' : 'black';
        checkmark.style.position = 'absolute';
        costumCheckbox.appendChild(checkmark);
        costumCheckbox.addEventListener('click', () => {
            checkbox.checked = !checkbox.checked;
            checkmark.style.backgroundColor = checkbox.checked ? 'white' : 'black';
            saveUsersState();
        });
        username.style.fontSize = '18px';
        username.style.color = 'white';
        username.textContent = name;
        row.appendChild(username);
        row.appendChild(checkbox);
        row.appendChild(costumCheckbox);
        breakLine.style.backgroundColor = '#3c3c3c';
        breakLine.style.height = '1px';
        breakLine.style.marginTop = '7px';
        list.appendChild(row);
        list.appendChild(breakLine);
    });
    return list;
};

const UsersModal = (id, users, saveUsersState) => {
    const modal = Modal('75vh', '20%', id);
    const modalContent = modal.firstElementChild;
    modalContent.appendChild(UsersCheckList(id, users, () => {
        saveUsersState();
    }));
    return modal;
};

const FloatButton = (id, clickAction) => {
    const floatButton = document.createElement('button');
    floatButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
</svg>`;
    floatButton.style.height = '50px';
    floatButton.style.width = '50px';
    floatButton.style.position = 'fixed';
    floatButton.style.top = '13vh';
    floatButton.style.left = '2vw';
    floatButton.style.fontSize = '17px';
    floatButton.style.fontWeight = '500';
    floatButton.style.fontFamily = 'Roboto,Noto Naskh Arabic UI,Arial,sans-serif';
    floatButton.style.justifyContent = 'center';
    floatButton.style.backgroundColor = 'red';
    floatButton.style.border = '1px solid #aaa';
    floatButton.style.color = 'white';
    floatButton.style.borderRadius = '50%';
    floatButton.style.boxSizing = 'border-box';
    floatButton.addEventListener('click', clickAction);
    floatButton.id = id;
    return floatButton;
};

const StyledButton = (id, buttonText, clickAction) => {
    const button = document.createElement('button');
    button.style.height = '36px';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.fontSize = '14px';
    button.style.fontWeight = '400';
    button.style.fontFamily = 'Roboto,Noto Naskh Arabic UI,Arial,sans-serif';
    button.style.justifyContent = 'center';
    button.style.backgroundColor = 'red';
    button.style.border = '1px solid #aaa';
    button.style.color = 'white';
    button.style.padding = '0.7em 1.25em 0.7em 1em';
    button.style.borderRadius = '2px';
    button.style.boxSizing = 'border-box';
    button.textContent = buttonText;
    button.addEventListener('click', clickAction);
    button.id = id;
    return button;
};

let getToBottomInterval;
let isGoingBottom = false;
let queueSongInAction;
let songElementInAction;
const getToBottom = () => {
    getToBottomInterval = setInterval(() => window.scrollTo(0, document.body.scrollHeight), 1000);
    isGoingBottom = true;
};
const editPaylistImage = (imgUrl) => {
    const playlistId = getPlaylistId(location.href);
    const localPlaylist = JSON.parse(localStorage.getItem(playlistId) || '{}');
    localStorage.setItem(playlistId, JSON.stringify(Object.assign(Object.assign({}, localPlaylist), { img: imgUrl })));
    document.getElementById('img').src = imgUrl;
};
const saveUsersState = (id) => {
    const playlistId = getPlaylistId(location.href);
    const localPlaylist = JSON.parse(localStorage.getItem(playlistId) || '{}');
    const users = [...document.getElementsByClassName(`${id}-user-checkbox`)].map((userCheckbox) => ({
        name: userCheckbox.value,
        isChecked: userCheckbox.checked,
    }));
    localStorage.setItem(playlistId, JSON.stringify(Object.assign(Object.assign({}, localPlaylist), { users })));
};
const manageSongUsers = (id, song) => {
    const playlistId = getPlaylistId(location.href);
    const localPlaylist = JSON.parse(localStorage.getItem(playlistId) || '{}');
    const localSongs = localPlaylist.songs || [];
    const songUsers = [];
    const users = [...document.getElementsByClassName(`${id}-user-checkbox`)].map((userCheckbox) => ({
        name: userCheckbox.value,
        isChecked: userCheckbox.checked,
    }));
    users.forEach((user) => {
        user.isChecked && songUsers.push(user.name);
    });
    localStorage.setItem(getPlaylistId(location.href), JSON.stringify(Object.assign(Object.assign({}, localPlaylist), { songs: localSongs.map((localSong) => (Object.assign(Object.assign({}, localSong), { users: areSongsEqual(localSong, song) ? songUsers : localSong.users }))) })));
    return songUsers;
};
const returnToTop = () => {
    isGoingBottom = false;
    clearInterval(getToBottomInterval);
    window.scrollTo(0, 0);
};
const showModal = (id) => {
    document.querySelector('body').style.overflow = 'hidden';
    document.getElementById(id).style.display = 'block';
    setTimeout(() => {
        document.getElementById(`${id}-content`).style.margin = '10vh auto';
    }, 0);
};
const resetAllHeardSongs = () => {
    const localPlaylist = JSON.parse(localStorage.getItem(getPlaylistId(location.href)) || '{}');
    const localSongs = localPlaylist.songs || [];
    localStorage.setItem(getPlaylistId(location.href), JSON.stringify(Object.assign(Object.assign({}, localPlaylist), { songs: localSongs.map((localSong) => (Object.assign(Object.assign({}, localSong), { isHeard: false }))) })));
};
const resetHeardSong = (song) => {
    const localPlaylist = JSON.parse(localStorage.getItem(getPlaylistId(location.href)) || '{}');
    const localSongs = localPlaylist.songs || [];
    localStorage.setItem(getPlaylistId(location.href), JSON.stringify(Object.assign(Object.assign({}, localPlaylist), { songs: localSongs.map((localSong) => (Object.assign(Object.assign({}, localSong), { isHeard: !areSongsEqual(localSong, song) && localSong.isHeard }))) })));
};
const hearSong = (song) => {
    const localPlaylist = JSON.parse(localStorage.getItem(getPlaylistId(location.href)) || '{}');
    const localSongs = localPlaylist.songs || [];
    localStorage.setItem(getPlaylistId(location.href), JSON.stringify(Object.assign(Object.assign({}, localPlaylist), { songs: localSongs.map((localSong) => (Object.assign(Object.assign({}, localSong), { isHeard: areSongsEqual(localSong, song) || localSong.isHeard }))) })));
};
const skipSong = () => {
    document
        .getElementById('left-controls')
        .getElementsByClassName('left-controls-buttons')[0]
        .getElementsByClassName('next-button')[0].click();
};
const syncMusic = () => {
    const songsElements = document.querySelectorAll('ytmusic-responsive-list-item-renderer');
    const localPlaylist = JSON.parse(localStorage.getItem(getPlaylistId(location.href)) || '{}');
    const localSongs = localPlaylist.songs || [];
    const localUsers = localPlaylist.users || [];
    const formattedSongsElements = formatSongsElements(songsElements, localSongs);
    const songsUsers = getSongsUsers(formattedSongsElements, localUsers);
    localStorage.setItem(getPlaylistId(location.href), JSON.stringify(Object.assign(Object.assign({}, localPlaylist), { songs: formattedSongsElements, users: songsUsers })));
    document
        .getElementsByClassName('metadata')[0]
        .getElementsByClassName('second-subtitle')[0]
        .getElementsByTagName('span')[2].innerHTML = getPlaylistTotalTime(formattedSongsElements);
    document.querySelector('body').removeChild(document.getElementById('users-modal'));
    document.querySelector('body').appendChild(UsersModal('users-modal', songsUsers || [], () => {
        saveUsersState('users-modal');
    }));
};
const addSongUsersToTitle = (song) => {
    const songContent = document
        .getElementsByClassName('middle-controls')[0]
        .getElementsByClassName('content-info-wrapper')[0];
    const songSubtitle = songContent.getElementsByClassName('subtitle')[0].getElementsByClassName('byline')[0];
    const usersData = last([...songSubtitle.getElementsByClassName('style-scope')]);
    usersData.innerHTML !== song.users.join(', ') && (usersData.innerHTML = song.users.join(', '));
    deleteTag(document.getElementById('like-button-renderer'));
    document.getElementsByClassName('middle-controls style-scope ytmusic-player-bar')[0].style.justifyContent = 'right';
    document.getElementById('right-controls').style.width = '92px';
};
const getShownSongDetails = () => {
    const songContent = document
        .getElementsByClassName('middle-controls')[0]
        .getElementsByClassName('content-info-wrapper')[0];
    const songTitle = songContent.getElementsByClassName('title')[0].innerText;
    const songSubtitle = songContent.getElementsByClassName('subtitle')[0].getElementsByClassName('byline')[0];
    let artist = '';
    let index = 0;
    while (songSubtitle.getElementsByClassName('style-scope')[index].innerText !== ' • ') {
        artist += songSubtitle.getElementsByClassName('style-scope')[index].innerText;
        index++;
    }
    return {
        album: songSubtitle.getElementsByClassName('style-scope')[index + 1].innerText,
        artist,
        isHeard: false,
        length: 0,
        name: songTitle,
        users: [],
    };
};
setInterval(() => {
    var _a, _b;
    const pageUrl = location.href;
    if (isPlaylistPage(pageUrl)) {
        const playlistBottomShelf = document.querySelector('ytmusic-carousel-shelf-renderer');
        isTagExist(playlistBottomShelf) && deleteTag(playlistBottomShelf);
    }
    if (isPlaylistPage(pageUrl) || isSongsPage(pageUrl)) {
        const isMusicShown = !!document
            .getElementsByClassName('middle-controls')[0]
            .getElementsByClassName('content-info-wrapper')[0]
            .getElementsByClassName('subtitle')[0]
            .getElementsByClassName('byline')[0];
        if (isMusicShown) {
            const localPlaylist = JSON.parse(localStorage.getItem(getPlaylistId(pageUrl)) || '{}');
            const localSongs = localPlaylist.songs || [];
            const localUsers = localPlaylist.users || [];
            const shownSongDetails = getShownSongDetails();
            const currSong = localSongs.find((localSong) => areSongsEqual(localSong, shownSongDetails));
            if ((!!(currSong === null || currSong === void 0 ? void 0 : currSong.isHeard) && isSongSkipable(document.querySelector('video'), currSong.length)) ||
                (!!currSong && !isSongUserChecked(localUsers, currSong)))
                skipSong();
        }
    }
    if (isSongsPage(pageUrl)) {
        const localPlaylist = JSON.parse(localStorage.getItem(getPlaylistId(pageUrl)) || '{}');
        const localUsers = localPlaylist.users || [];
        if (!!document.querySelector('tp-yt-paper-listbox')) {
            !document.getElementById('reset-is-heard') &&
                queueSongInAction.isHeard &&
                ((_a = document.querySelector('tp-yt-paper-listbox')) === null || _a === void 0 ? void 0 : _a.prepend(TooltipItem('reset-is-heard', 'איפוס השמעה', () => {
                    resetHeardSong(queueSongInAction);
                    queueSongInAction.isHeard = false;
                })));
            !document.getElementById('change-song-users') &&
                ((_b = document.querySelector('tp-yt-paper-listbox')) === null || _b === void 0 ? void 0 : _b.prepend(TooltipItem('change-song-users', 'ניהול משתמשים', () => {
                    !document.getElementById('song-users-modal') &&
                        document.querySelector('body').appendChild(UsersModal('song-users-modal', formatUsers(queueSongInAction.users || [], localUsers), () => {
                            queueSongInAction.users = manageSongUsers('song-users-modal', queueSongInAction);
                            songElementInAction.innerHTML = (queueSongInAction.users || []).join(', ');
                        }));
                    showModal('song-users-modal');
                })));
        }
    }
}, 100);
setInterval(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const pageUrl = location.href;
    const localPlaylist = JSON.parse(localStorage.getItem(getPlaylistId(pageUrl)) || '{}');
    const localSongs = localPlaylist.songs || [];
    if (isPlaylistPage(location.href)) {
        if (!document.getElementsByClassName('animeme').length && !!document.getElementById('img')) {
            const playlistImg = document.getElementById('img');
            playlistImg === null || playlistImg === void 0 ? void 0 : playlistImg.classList.add('animeme');
            !!localPlaylist.img && (playlistImg.src = localPlaylist.img);
            playlistImg.style.cursor = 'pointer';
            playlistImg.addEventListener('mouseover', () => {
                playlistImg.style.opacity = '0.7';
            });
            playlistImg.addEventListener('mouseout', () => {
                playlistImg.style.opacity = '1';
            });
            playlistImg.addEventListener('click', () => {
                document.querySelector('body').append(EditModal('edit-playlist-img', localPlaylist.img || 'קישור לתמונת פלייליסט', (ev) => {
                    editPaylistImage(ev.target.value);
                }));
                showModal('edit-playlist-img');
            });
        }
        !document.getElementById('get-down-button') &&
            document.querySelector('body').appendChild(FloatButton('get-down-button', () => {
                (isGoingBottom ? returnToTop : getToBottom)();
            }));
        !document.getElementById('sync-songs-button') &&
            document.getElementById('top-level-buttons').appendChild(StyledButton('sync-songs-button', 'סנכרון שירים', () => {
                syncMusic();
            }));
        document.querySelectorAll('ytmusic-toggle-button-renderer').forEach((button) => {
            button.innerHTML.includes('הוספה לספרייה') && document.getElementById('top-level-buttons').removeChild(button);
        });
        !document.getElementById('users-management-button') &&
            document.getElementById('top-level-buttons').appendChild(StyledButton('users-management-button', 'ניהול משתמשים', () => {
                showModal('users-modal');
            }));
        !document.getElementById('statistics-button') &&
            document.getElementById('top-level-buttons').appendChild(StyledButton('statistics-button', 'סטטיסטיות', () => {
                document.querySelector('body').append(StatisticsModal('statistics-modal'));
                showModal('statistics-modal');
            }));
        !document.getElementById('reset-all-songs-button') &&
            document.getElementById('top-level-buttons').appendChild(StyledButton('reset-all-songs-button', 'איפוס שירים', () => {
                resetAllHeardSongs();
            }));
        !document.getElementById('users-modal') &&
            document.querySelector('body').appendChild(UsersModal('users-modal', localPlaylist.users || [], () => {
                saveUsersState('users-modal');
            }));
        if (!!((_a = localPlaylist.songs) === null || _a === void 0 ? void 0 : _a.length) &&
            !!((_f = (_e = (_d = (_c = (_b = document
                .getElementsByClassName('metadata')) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.getElementsByClassName('second-subtitle')) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.getElementsByTagName('span')) === null || _f === void 0 ? void 0 : _f[2]) &&
            !document.getElementById('playlist-length')) {
            document
                .getElementsByClassName('metadata')[0]
                .getElementsByClassName('second-subtitle')[0]
                .getElementsByTagName('span')[2].id = 'playlist-length';
            document.getElementById('playlist-length').innerHTML = getPlaylistTotalTime(localPlaylist.songs);
        }
    }
    if (isPlaylistPage(pageUrl) || isSongsPage(pageUrl)) {
        const isMusicShown = !!document
            .getElementsByClassName('middle-controls')[0]
            .getElementsByClassName('content-info-wrapper')[0]
            .getElementsByClassName('subtitle')[0]
            .getElementsByClassName('byline')[0];
        if (isMusicShown) {
            const shownSongDetails = getShownSongDetails();
            const currSong = localSongs.find((localSong) => areSongsEqual(localSong, shownSongDetails));
            if (!!currSong) {
                !currSong.isHeard && isSongHeard(document.querySelector('video'), currSong.length) && hearSong(currSong);
                addSongUsersToTitle(currSong);
                (_j = (_h = (_g = document === null || document === void 0 ? void 0 : document.getElementsByClassName('middle-controls-buttons style-scope ytmusic-player-bar')) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.querySelector('tp-yt-paper-icon-button')) === null || _j === void 0 ? void 0 : _j.addEventListener('click', () => {
                    queueSongInAction = currSong;
                });
            }
        }
    }
    if (isSongsPage(pageUrl)) {
        const sidePanel = document.getElementsByClassName('side-panel modular style-scope ytmusic-player-page')[0];
        if (!document.getElementById('side-panel-id')) {
            sidePanel.style.width = '90vw';
            sidePanel.id = 'side-panel-id';
        }
        if (!!document.getElementById('song-users-modal') &&
            ((_k = document.getElementById('song-users-modal')) === null || _k === void 0 ? void 0 : _k.style.display) === 'none') {
            document.querySelector('body').removeChild(document.getElementById('song-users-modal'));
        }
        if (!!document.getElementById('tab-renderer')) {
            const queueSongs = document
                .getElementById('tab-renderer')
                .getElementsByClassName('queue scroller scroller-on-hover style-scope ytmusic-tab-renderer')[0]
                .getElementsByTagName('ytmusic-player-queue-item');
            [...queueSongs].forEach((song) => {
                var _a, _b, _c;
                const songName = (_b = (_a = song === null || song === void 0 ? void 0 : song.getElementsByClassName('song-title')) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.innerText;
                const songDuration = song.getElementsByClassName('duration')[0].innerText;
                const songLength = getSongLength(songDuration);
                const sameLocalSong = localSongs.find((localSong) => localSong.name === songName && localSong.length === songLength);
                const rowText = ((sameLocalSong === null || sameLocalSong === void 0 ? void 0 : sameLocalSong.users) || []).join(', ');
                if (!!((_c = song === null || song === void 0 ? void 0 : song.getElementsByClassName('kuwewe-row')) === null || _c === void 0 ? void 0 : _c.length) &&
                    song.getElementsByClassName('song-info')[0].getElementsByClassName('kuwewe-row')[0].innerHTML === rowText)
                    return;
                song.style.height = '75px';
                song.style.cssText += '--ytmusic-player-queue-item-thumbnail-size:60px;';
                sameLocalSong &&
                    song
                        .querySelector('ytmusic-menu-renderer')
                        .querySelector('tp-yt-paper-icon-button')
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
