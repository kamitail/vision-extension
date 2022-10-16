import { listItemIcon } from 'assets/list-item';

export const TooltipItem = (id: string, text: string, clickAction: () => any) => {
  const item: HTMLDivElement = document.createElement('div');
  const itemContent: HTMLDivElement = document.createElement('div');
  const itemIcon: HTMLDivElement = document.createElement('div');
  const itemText: HTMLDivElement = document.createElement('div');

  item.classList.add('style-scope');
  item.classList.add('ytmusic-menu-popup-renderer');
  item.classList.add('iron-selected');
  item.id = id;
  item.addEventListener('click', clickAction);
  item.addEventListener('click', () => {
    (document.querySelector('tp-yt-iron-dropdown') as HTMLElement).style.display = 'none';
  });

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
