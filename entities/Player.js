class Player extends Ball {
  x;
  y;
  color;
  radius;
  constructor(x, y) {
    super(x, y);
    this.x = x;
    this.y = y;

    this.radius = 100;
    this.color = "red";
  }
  draw() {
    drawCircle(this.x, this.y, this.radius, this.color);
  }

  initialPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
