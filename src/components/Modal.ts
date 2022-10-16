import { closeIcon } from 'assets/close-icon';

export const Modal = (height: string, width: string, id: string): HTMLDivElement => {
  const modal: HTMLDivElement = document.createElement('div');
  const modalContent: HTMLDivElement = document.createElement('div');
  const closeButton: HTMLDivElement = document.createElement('div');

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
  modalContent.classList.add('scroll-bar');
  modalContent.id = `${id}-content`;

  closeButton.style.position = 'relative';
  closeButton.style.zIndex = '300';
  closeButton.style.left = '0';
  closeButton.style.top = '0';
  closeButton.style.cursor = 'pointer';
  closeButton.style.width = 'fit-content';
  closeButton.innerHTML = closeIcon;

  const closeModal = () => {
    document.querySelector('body')!.style.overflow = 'visible';
    modal.style.display = 'none';
    modalContent.style.margin = '5vh auto';
    document.querySelector('body')!.removeChild(modal);
  };

  closeButton.addEventListener('click', closeModal);

  window.onclick = (event) => {
    if (!(event.target === modal)) return;

    closeModal();
  };

  modalContent.append(closeButton);
  modal.appendChild(modalContent);

  return modal;
};
