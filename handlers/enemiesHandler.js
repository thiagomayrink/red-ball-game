function summonEnemy() {
  enemies.push(new Enemy(0, 0));
}

function moveEnemies() {
  enemies.forEach((enemy) => enemy.move());
}

function handleEnemiesBounce() {
  enemies.forEach((enemy) => enemy.bounceOnEdge());
}

function increaseEnemiesSpeed() {
  enemies.forEach((enemy) => enemy.increaseSpeed());
}

function drawEnemies() {
  enemies.forEach((enemy) => enemy.draw());
}
