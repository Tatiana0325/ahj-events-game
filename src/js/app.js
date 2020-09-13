import GamePlay from './GamePlay';

const game = new GamePlay;
game.bindToDOM(document.querySelector('.table-game'));
game.drawField();
game.goblin();
game.game();
