class Ball {
  x;
  y;
  color;
  radius;
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    drawCircle(this.x, this.y, this.radius, this.color);
  }
}
