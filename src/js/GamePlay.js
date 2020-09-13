import createHTML from './createHTML';

export default class GamePlay {
	constructor() {
		this.container = null;
		this.borderSize = 4;
	}

	bindToDOM(container) {
		if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
		}
		
    this.container = container;
  }

	drawField() {
		this.htmlTrue();

		createHTML('div', this.container, (this.borderSize ** 2));
	}

	goblin() {
		this.htmlTrue();

		const arrayCell = this.container.querySelectorAll('.cell');
		arrayCell[0].classList.add('active_cell');
		let beforeindex = 0;

		setInterval(() => {
			let index = Math.floor(Math.random() * arrayCell.length);
		
			if(index != beforeindex) {
				arrayCell[beforeindex].classList.remove('active_cell');
				arrayCell[index].classList.add('active_cell');
				beforeindex = index;
			}
		}, 1000);
	}

	game() {
		let result = 0;
		let losing = 0;

		this.container.addEventListener('click', (event) => {
			if(event.target.classList.contains('active_cell')) {
				result++;
			} else {
				losing++;
			};

			if(losing === 5) {
				alert('Вы проиграли!!!');
				result = 0;
				losing = 0;
			};
		
			if(result === 5) {
				alert('Вы выиграли!!!');
				result = 0;
				losing = 0;
			};
		})
	}

	htmlTrue() {
		if (!(this.container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
	}
}
