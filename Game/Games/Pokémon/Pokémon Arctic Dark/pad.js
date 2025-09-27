const gif = document.getElementById('egg');
const overlay = document.getElementById('overlay');

function startAnimation() {
  // Visa GIF
  gif.style.display = 'block';
  overlay.style.opacity = 0;

  // Efter 4 sekunder, göm GIF och visa overlay
  setTimeout(() => {
    gif.style.display = 'none';
    overlay.style.opacity = 1;

    // Efter 2 sekunder, göm overlay och starta om animationen
    setTimeout(() => {
      overlay.style.opacity = 0;
      startAnimation();
    }, 2000);

  }, 4000);
}

// Starta animationen
startAnimation();
