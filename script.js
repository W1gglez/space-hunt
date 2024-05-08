onReady();

function onReady() {
  console.log('DOM is ready');
}

function startGame(event) {
  const playArea = document.querySelector('#play-area');

  playArea.innerHTML += 'Hello World!';
}

function resetGame(event) {}

function gameLoop() {}
