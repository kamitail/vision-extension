import { User } from 'types/user';
import { Modal } from './Modal';
import { UsersCheckList } from './UsersCheckList';

export const UsersModal = (id: string, users: User[], saveUsersState: () => void): HTMLDivElement => {
  const modal = Modal('75vh', '20%', id);
  const modalContent = modal.firstElementChild!

  modalContent.appendChild(
    UsersCheckList(id, users, () => {
      saveUsersState();
    }),
  );

  modal.replaceChild(modalContent ,modal.firstElementChild!);

  return modal;
};
