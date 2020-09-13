export default function createHTML(teg, quantity) {
	const perentElement = document.querySelector('.table-game');

	for (let i = 0; i < quantity; i++) {
		let element = document.createElement(teg);
		element.classList.add('cell');

		perentElement.insertAdjacentElement("beforeend", element);
	};
}
