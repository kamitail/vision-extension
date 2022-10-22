export const rerenderPlaylistImage = () =>
  !!document.getElementById('img') &&
  document.getElementById('img')?.classList.contains('animeme') &&
  document.getElementById('img')!.classList.remove('animeme');

export const rerenderUsersManagementModal = () =>
  !!document.getElementById('users-modal') && document.getElementById('users-modal')?.remove();

export const rerenderPlaylistTime = () =>
  !!document.getElementById('playlist-length') &&
  (document.getElementById('playlist-length')!.id = 'not-playlist-length');

export const rerenderSongsPageUsers = () => {
  if (!document.getElementById('songs-page-users')) return;

  document.getElementById('songs-page-users')?.remove();
  document.getElementById('users-wrapper')?.remove();
};

export const localPlaylistChangedRender = () => {
  rerenderPlaylistImage();
  rerenderUsersManagementModal();
  rerenderPlaylistTime();
  rerenderSongsPageUsers();
};
