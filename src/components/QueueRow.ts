export const QueueRow = () => {
  const row: HTMLElement = document.createElement('yt-formatted-string');

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
