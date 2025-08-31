const ball = document.getElementById('ball');
const goalText = document.getElementById('goal');
const menu = document.getElementById('menu');
const title = document.getElementById('title');

function startAnimation() {
  goalText.style.display = 'none';
  title.style.display = 'none';
  menu.style.display = 'none';

  ball.style.animation = 'none';
  ball.offsetHeight; // trigger reflow
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
      menu.style.display = 'flex'; // visa menyn

      setTimeout(() => {
        startAnimation();
      }, 500);
    }
  }, 50);
});

  // Skapa en funktion som skickar till sidan
  function goToUnderConstruction() {
    window.location.href = 'Under Construction/under-construction.html';
  }

  // Hämta knapparna och koppla onclick
  document.getElementById('playBtn').onclick = goToUnderConstruction;
  document.getElementById('settingsBtn').onclick = goToUnderConstruction;
  document.getElementById('quitBtn').onclick = goToUnderConstruction;

// starta animationen direkt
startAnimation();
