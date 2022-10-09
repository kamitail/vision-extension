import { editIcon } from 'assets/edit-icon';

export const EditButton = () => {
  const editButton: HTMLDivElement = document.createElement('div');

  editButton.style.position = 'relative';
  editButton.style.zIndex = '300';
  editButton.style.left = '0';
  editButton.style.top = '0';
  editButton.style.cursor = 'pointer';
  editButton.style.width = 'fit-content';
  editButton.innerHTML = editIcon;

  return editButton;
};
