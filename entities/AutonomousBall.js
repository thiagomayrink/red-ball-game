class AutonomousBall extends Ball {
  x;
  y;
  speedX;
  speedY;
  color;
  radius;

  constructor(x, y) {
    super(x, y);
    this.x = x;
    this.y = y;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  increaseSpeed() {
    this.speedX *= 1.001;
    this.speedY *= 1.001;
  }
}
