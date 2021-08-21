function incrementScore() {
  playerScore++;
}

function resetScore() {
  playerScore = 0;
}

function drawScore() {
  context.font = "48px Arial";
  context.fillStyle = "#000000";
  const middleX = screenWidth / 2;
  context.fillText(`Score: ${playerScore}`, middleX - 80, 52);
}
