import { User } from 'types/user';

export const UsersCheckList = (listName: string, users: User[], saveUsersState: () => void): HTMLDivElement => {
  const list: HTMLDivElement = document.createElement('div');
  list.id = listName;

  users.forEach(({ isChecked, name }: User) => {
    const row: HTMLDivElement = document.createElement('div');
    const checkbox: HTMLInputElement = document.createElement('input');
    const costumCheckbox: HTMLSpanElement = document.createElement('span');
    const checkmark: HTMLSpanElement = document.createElement('span');
    const username: HTMLDivElement = document.createElement('div');
    const breakLine: HTMLHRElement = document.createElement('hr');

    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.marginTop = '10px';
    row.style.justifyContent = 'left';

    checkbox.setAttribute('type', 'checkbox');
    checkbox.value = name;
    checkbox.classList.add(`${listName}-user-checkbox`);
    checkbox.classList.add('babini');
    checkbox.style.height = '0';
    checkbox.style.width = '0';
    checkbox.checked = isChecked;

    costumCheckbox.style.height = '25px';
    costumCheckbox.style.width = '25px';
    costumCheckbox.style.backgroundColor = 'black';
    costumCheckbox.style.border = '2px solid white';
    costumCheckbox.style.display = 'flex';
    costumCheckbox.style.justifyContent = 'center';
    costumCheckbox.style.alignItems = 'center';
    costumCheckbox.style.borderRadius = '4px';
    costumCheckbox.style.marginRight = '7px';
    costumCheckbox.style.cursor = 'pointer';
    costumCheckbox.style.position = 'relative';

    checkmark.style.width = '75%';
    checkmark.style.height = '75%';
    checkmark.style.borderRadius = '2.3px';
    checkmark.style.transitionProperty = 'background';
    checkmark.style.transitionDuration = '0.3s';
    checkmark.style.backgroundColor = isChecked ? 'white' : 'black';
    checkmark.style.position = 'absolute';

    costumCheckbox.appendChild(checkmark);

    costumCheckbox.addEventListener('click', () => {
      checkbox.checked = !checkbox.checked;
      checkmark.style.backgroundColor = checkbox.checked ? 'white' : 'black';
      saveUsersState();
    });

    username.style.fontSize = '18px';
    username.style.color = 'white';
    username.textContent = name;

    row.appendChild(checkbox);
    row.appendChild(costumCheckbox);
    row.appendChild(username);

    breakLine.style.backgroundColor = '#3c3c3c';
    breakLine.style.height = '1px';
    breakLine.style.marginTop = '7px';

    list.appendChild(row);
    list.appendChild(breakLine);
  });

  return list;
};
