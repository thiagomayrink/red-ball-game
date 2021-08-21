class Enemy extends AutonomousBall {
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

    this.speedX = 10;
    this.speedY = 10;
    this.color = "blue";
    this.radius = 30;
  }

  checkCollisionAgainstPlayer() {
    const distance = Math.sqrt(
      (player.x - this.x) ** 2 + (player.y - this.y) ** 2
    );

    return distance < player.radius + this.radius;
  }

  bounceOnEdge() {
    if (this.x < 0 || this.x > screenWidth) {
      this.speedX *= -1;
    }

    if (this.y < 0 || this.y > screenHeight) {
      this.speedY *= -1;
    }
  }
}
