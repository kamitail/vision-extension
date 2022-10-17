export const UserDetailsRow = (id: string, text: string, icon: string, clickAction: (ev: MouseEvent) => any) => {
  const row: HTMLDivElement = document.createElement('div');
  const rowIcon: HTMLDivElement = document.createElement('div');
  const rowText: HTMLDivElement = document.createElement('div');

  row.classList.add('style-scope');
  row.classList.add('yt-multi-page-menu-section-renderer');
  row.addEventListener('click', clickAction);
  row.style.fontSize = '1.4rem';
  row.style.lineHeight = '2rem';
  row.style.fontWeight = '400';
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.cursor = 'pointer';
  row.style.padding = '10px 36px 10px 20px';
  row.id = id;

  row.addEventListener('click', () => {
    (document.querySelectorAll('tp-yt-iron-dropdown') as NodeListOf<HTMLElement>).forEach(
      (dropdown) => (dropdown.style.display = 'none'),
    );
  });

  rowIcon.classList.add('style-scope');
  rowIcon.classList.add('ytd-compact-link-renderer');
  rowIcon.style.marginRight = '17px';
  rowIcon.style.height = '18px';
  rowIcon.style.width = '18px';
  rowIcon.style.filter = 'invert(60%) sepia(100%) saturate(0%)';
  rowIcon.innerHTML = icon;

  rowText.classList.add('style-scope');
  rowText.classList.add('ytd-compact-link-renderer');
  rowText.innerText = text;

  row.append(rowIcon);
  row.append(rowText);

  return row;
};
