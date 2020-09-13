import createHTML from './createHTML';

createHTML('div', 16);

const arrayCell = document.querySelectorAll('.cell');
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