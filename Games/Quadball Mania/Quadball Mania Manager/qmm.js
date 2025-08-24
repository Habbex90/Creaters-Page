const ball = document.getElementById('ball');
const goalText = document.getElementById('goal');
const menu = document.getElementById('menu');
const title = document.getElementById('title');

function startAnimation() {
  goalText.style.display = 'none';
  title.style.display = 'none';
  menu.style.display = 'none';

  ball.style.animation = 'none';
  ball.offsetHeight; 
  ball.style.animation = 'moveBall 3s linear forwards';
}

ball.addEventListener('animationend', () => {
  goalText.style.display = 'block';
  let count = 0;
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'cyan', 'magenta', 'lime', 'pink'];

  const interval = setInterval(() => {
    goalText.style.color = colors[count % colors.length];
    count++;
    if (count >= 10) {
      clearInterval(interval);
      goalText.style.display = 'none';
      title.style.display = 'block';
      menu.style.display = 'block';

      setTimeout(() => {
        startAnimation();
      }, 500);
    }
  }, 50);
});

document.getElementById('playBtn').addEventListener('click', () => {
  menu.style.display = 'none';
  title.style.display = 'none';
  startGame(); 
});

document.getElementById('settingsBtn').addEventListener('click', () => {
  openSettings(); 
});

document.getElementById('quitBtn').addEventListener('click', () => {
  window.location.href = 'game.html';
});

function startGame() {
  console.log("Spelet startar...");
}

function openSettings() {
  console.log("Inställningar öppnas...");
}

startAnimation();
