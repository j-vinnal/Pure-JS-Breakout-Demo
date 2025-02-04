import {BALL_COLOR} from '../colors.js';

export default class Ball {
  radius = 25;
  left = 0;
  top = 0;
  color = BALL_COLOR;
  dx = 2; // x-direction speed
  dy = -2; // y-direction speed
  isMoving = false;

  constructor(left, top, radius) {
    this.left = left;
    this.top = top;
    this.radius = radius;
  }

  startMove() {
    this.isMoving = true;
  }

  stopMove() {
    this.isMoving = false;
  }
}
