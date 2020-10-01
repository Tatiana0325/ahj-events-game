import createHTML from "./createHTML";

export default class GamePlay {
  constructor() {
    this.container = null;
    this.borderSize = 4;
    this.click = false;
    this.result = 0;
    this.losing = 0;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error("container is not HTMLElement");
    }

    this.container = container;
  }

  drawField() {
    this.htmlTrue();

    createHTML("div", this.container, this.borderSize ** 2);
  }

  goblin() {
    this.htmlTrue();

    const arrayCell = this.container.querySelectorAll(".cell");
    arrayCell[0].classList.add("active_cell");
    let beforeindex = 0;

    setInterval(() => {
      let index = Math.floor(Math.random() * arrayCell.length);

      if (index != beforeindex) {
        arrayCell[beforeindex].classList.remove("active_cell");
        arrayCell[index].classList.add("active_cell");

        beforeindex = index;

        if (!this.click) {
          this.losing++;
        }

        if (this.result === 5) {
          alert("Вы выиграли!!!");
          this.result = 0;
          this.losing = 0;
        }

        if (this.losing === 5) {
          alert("Вы проиграли!!!");
          this.result = 0;
          this.losing = 0;
        }
      }
    }, 1000);
  }

  game() {
    this.container.addEventListener("click", (event) => {
      this.click = true;

      if (event.target.classList.contains("active_cell")) {
        this.result++;
        this.click = false;
      } else {
        this.losing++;
        this.click = false;
      }
    });
  }

  htmlTrue() {
    if (!(this.container instanceof HTMLElement)) {
      throw new Error("container is not HTMLElement");
    }
  }
}
