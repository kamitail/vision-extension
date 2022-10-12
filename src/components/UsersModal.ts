import { closeIcon } from 'assets/close-icon';
import { User } from 'types/user';
import { UsersCheckList } from './UsersCheckList';

export const UsersModal = (id: string, users: User[], saveUsersState: () => void): HTMLDivElement => {
  const modal: HTMLDivElement = document.createElement('div');
  const modalContent: HTMLDivElement = document.createElement('div');
  const closeButton: HTMLDivElement = document.createElement('div');

  modal.setAttribute('style',"backdrop-filter: blur(3px)")
  modal.style.display = 'none';
  modal.style.position = 'fixed';
  modal.style.zIndex = '100';
  modal.style.left = '0';
  modal.style.top = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.overflow = 'hidden';
  modal.id = id;

  modalContent.style.backgroundColor = '#030303d9';
  modalContent.style.margin = '5vh auto';
  modalContent.style.padding = '20px';
  modalContent.style.border = '1px solid #888';
  modalContent.style.width = '20%';
  modalContent.style.overflow = 'auto';
  modalContent.style.height = '75vh';
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

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.style.margin = '5vh auto';
  });

  window.onclick = (event) => {
    if (!(event.target === modal)) return;

    modal.style.display = 'none';
    modalContent.style.margin = '5vh auto';
  };

  modalContent.append(closeButton);
  modalContent.appendChild(
    UsersCheckList(id, users, () => {
      saveUsersState();
    }),
  );

  modal.appendChild(modalContent);

  return modal;
};
