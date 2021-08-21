class Friend extends AutonomousBall {
  x;
  y;
  speedX;
  speedY;
  color;
  radius;
  index;

  constructor(x, y, index) {
    super(x, y);
    this.x = x;
    this.y = y;
    this.index = index;

    this.speedX = 10;
    this.speedY = 10;
    this.color = "black";
    this.radius = 20;
  }

  checkCollisionAgainstPlayer() {
    const distance = Math.sqrt(
      (player.x - this.x) ** 2 + (player.y - this.y) ** 2
    );
    if (distance < player.radius + this.radius) {
      incrementScore();
      friends.splice(this.index, 1);
      return distance;
    }
  }

  removeOnEdge() {
    if (this.x < 0 || this.x > screenWidth) {
      friends.splice(this.index, 1);
    }

    if (this.y < 0 || this.y > screenHeight) {
      friends.splice(this.index, 1);
    }
  }
}
