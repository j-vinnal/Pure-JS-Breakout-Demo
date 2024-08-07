import {PADDLE_COLOR} from '../colors.js';

export default class Paddle {
  width = 200;
  height = 50;
  left = 0;
  top = 0;
  color = PADDLE_COLOR;
  moveDirection = 0; // -1 for left, 1 for right
  intervalId = null;

  constructor(left, top) {
    this.left = left;
    this.top = top;
  }

  startMove(step, borderThickness, gameWidth) {
    this.moveDirection = step;
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.updatePosition(step, borderThickness, gameWidth);
      }, 20);
    }
  }

  updatePosition(step, borderThickness, gameWidth) {
    let newLeft = this.left + step * 10;

    if (newLeft < borderThickness) {
      this.left = borderThickness;
    } else if (newLeft + this.width > gameWidth - borderThickness) {
      this.left = gameWidth - this.width - borderThickness;
    } else {
      this.left = newLeft;
    }
  }

  stopMove() {
    this.moveDirection = 0;
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}
