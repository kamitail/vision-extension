export const StyledButton = (id: string, buttonText: string, clickAction: (ev: MouseEvent) => any, icon: string) => {
  const button = document.createElement('button');
  button.style.height = '36px';
  button.style.display = 'flex';
  button.style.alignItems = 'center';
  button.style.fontSize = '14px';
  button.style.fontWeight = '500';
  button.style.fontFamily = 'Roboto,Noto Naskh Arabic UI,Arial,sans-serif';
  button.style.justifyContent = 'center';
  button.style.backgroundColor = 'red';
  button.style.border = '1px solid #aaa';
  button.style.color = 'white';
  button.style.padding = '0.7em 1.25em 0.7em 0.7em';
  button.style.borderRadius = '2px';
  button.style.boxSizing = 'border-box';
  button.style.whiteSpace = 'nowrap';
  button.innerHTML = icon;
  button.innerHTML += buttonText;
  button.addEventListener('click', clickAction);
  button.id = id;

  const buttonIcon: SVGSVGElement = button.querySelector('svg')!;
  buttonIcon.style.marginRight = '7px';
  buttonIcon.style.height = '25px';
  buttonIcon.style.width = '20px';
  buttonIcon.style.filter = 'invert(100%) sepia(100%) saturate(100%)';

  return button;
};
