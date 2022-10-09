export const FloatButton = (id: string, clickAction: (ev: MouseEvent) => any): HTMLButtonElement => {
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
