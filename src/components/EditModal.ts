import { Modal } from './Modal';

export const EditModal = (id: string, text: string, inputAction: (ev: Event) => any): HTMLDivElement => {
  const modal = Modal('25vh', '50%', id);
  const modalContent = modal.firstElementChild! as HTMLElement;
  const closeButton: HTMLDivElement = document.createElement('div');
  const inputBox: HTMLDivElement = document.createElement('div');
  const inputField: HTMLInputElement = document.createElement('input');

  inputBox.classList.add('search-box');
  inputBox.classList.add('style-scope');
  inputBox.classList.add('ytmusic-search-box');
  inputBox.style.height = '40px';
  inputBox.style.padding = '10px';
  inputBox.style.marginTop = '40px';

  inputField.classList.add('style-scope');
  inputField.classList.add('ytmusic-search-box');
  inputField.value = text;
  inputField.style.color = 'white';

  inputField.addEventListener('keypress', (ev) => {
    if (ev.key !== 'Enter') return;
    inputAction(ev);
    document.querySelector('body')!.style.overflow = 'visible';
    modal.style.display = 'none';
    modalContent.style.margin = '5vh auto';
    document.querySelector('body')!.removeChild(modal);
  });

  inputBox.append(inputField);
  modalContent.append(closeButton);
  modalContent.append(inputBox);
  modal.replaceChild(modalContent, modal.firstElementChild!);

  return modal;
};
