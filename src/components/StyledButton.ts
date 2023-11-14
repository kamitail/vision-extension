export const StyledButton = (id: string, buttonText: string, clickAction: (ev: MouseEvent) => any, iconPath: string) => {
	const button = document.createElement('button');
	button.className = 'yt-spec-button-shape-next yt-spec-button-shape-next--outline yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading';
  button.style.backgroundColor = 'red';
	button.id = id;
	button.addEventListener('click', clickAction);
	button.setAttribute('aria-label', 'Edit playlist');

	const buttonTextElement = document.createElement('span');
	buttonTextElement.className = 'yt-core-attributed-string yt-core-attributed-string--white-space-no-wrap';
	buttonTextElement.setAttribute('role', 'text');
	buttonTextElement.textContent = buttonText;

	const iconElement = document.createElement('svg');
	iconElement.setAttribute('viewBox', '0 0 24 24');
	iconElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
	iconElement.setAttribute('focusable', 'false');
	iconElement.className = 'style-scope yt-icon';

	const path = document.createElement('path');
	path.innerHTML = iconPath;
	path.className = 'style-scope yt-icon';

	iconElement.appendChild(path);

	const iconContainer = document.createElement('div');
	iconContainer.className = 'yt-spec-button-shape-next__icon';
	iconContainer.setAttribute('aria-hidden', 'true');
	iconContainer.appendChild(iconElement);



	const buttonContent = document.createElement('div');
	buttonContent.className = 'yt-spec-button-shape-next__button-text-content';
	buttonContent.appendChild(buttonTextElement);

	const touchFeedback = document.createElement('div');
	touchFeedback.className = 'yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response';
	touchFeedback.setAttribute('aria-hidden', 'true');
	touchFeedback.innerHTML = '<div class="yt-spec-touch-feedback-shape__stroke" style=""></div><div class="yt-spec-touch-feedback-shape__fill" style=""></div>';

	const touchFeedbackShape = document.createElement('yt-touch-feedback-shape');
	touchFeedbackShape.style.borderRadius = 'inherit';
	touchFeedbackShape.appendChild(touchFeedback);

	const paperTooltip = document.createElement('tp-yt-paper-tooltip');
	paperTooltip.setAttribute('fit-to-visible-bounds', '');
	paperTooltip.setAttribute('offset', '8');
	paperTooltip.setAttribute('disable-upgrade', '');

	button.appendChild(iconContainer);
	button.appendChild(buttonContent);
	button.appendChild(touchFeedbackShape);
	button.appendChild(paperTooltip);


	return button;
};
