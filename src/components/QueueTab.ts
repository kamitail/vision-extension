export const QueueTab = (id: string) => {
  const tab: HTMLElement = document.createElement('tp-yt-paper-tab');
  tab.classList.add('tab-header');
  tab.classList.add('style-scope');
  tab.classList.add('ytmusic-player-page');
  tab.classList.add('iron-selected');
  tab.style.color = 'rgb(171 171 171)';
  tab.id = id;

  return tab;
};
