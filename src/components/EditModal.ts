import { closeIcon } from 'assets/close-icon';

export const EditModal = (id: string, placeholder: string, inputAction: (ev: Event) => any): HTMLDivElement => {
  const modal: HTMLDivElement = document.createElement('div');
  const modalContent: HTMLDivElement = document.createElement('div');
  const closeButton: HTMLDivElement = document.createElement('div');
  const inputBox: HTMLDivElement = document.createElement('div');
  const inputField: HTMLInputElement = document.createElement('input');

  modal.style.display = 'none';
  modal.style.position = 'fixed';
  modal.style.zIndex = '100';
  modal.style.left = '0';
  modal.style.top = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.overflow = 'hidden';
  modal.style.backgroundColor = 'rgba(0,0,0,0.4)';
  modal.id = id;

  modalContent.style.backgroundColor = '#030303d9';
  modalContent.style.margin = '5vh auto';
  modalContent.style.padding = '20px';
  modalContent.style.border = '1px solid #888';
  modalContent.style.width = '50%';
  modalContent.style.overflow = 'auto';
  modalContent.style.height = '25vh';
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

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.style.margin = '5vh auto';
  });

  window.onclick = (event) => {
    if (!(event.target === modal)) return;

    modal.style.display = 'none';
    modalContent.style.margin = '5vh auto';
  };

  inputBox.append(inputField);
  modalContent.append(closeButton);
  modalContent.append(inputBox);
  modal.appendChild(modalContent);

  return modal;
};
