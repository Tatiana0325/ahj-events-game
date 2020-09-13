export default function createHTML(teg, perentElement, quantity) {
	for (let i = 0; i < quantity; i++) {
		let element = document.createElement(teg);
		element.classList.add('cell');

		perentElement.insertAdjacentElement("beforeend", element);
	};
}
