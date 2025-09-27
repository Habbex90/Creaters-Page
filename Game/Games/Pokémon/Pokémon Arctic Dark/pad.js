const egg = document.getElementById('egg');
const cracks = [
  document.getElementById('crack1'),
  document.getElementById('crack2'),
  document.getElementById('crack3'),
  document.getElementById('crack4'),
  document.getElementById('crack5')
];
const message = document.getElementById('message');

// Sprickornas längder
const midLength = 50;
const lengths = [
  midLength,
  midLength - 2,
  midLength - 3,
  midLength - 4,
  midLength - 6
];

// Sprickornas positioner (px från mitten)
const positions = [
  0,     // mitten
  -20,   // vänster om mitten
  20,    // höger om mitten
  -40,   // vänster om andra sprickan
  50     // höger om tredje sprickan
];

// Ställ in sprickor
cracks.forEach((crack, i) => {
  crack.style.height = lengths[i] + 'px';
  crack.style.left = `calc(50% + ${positions[i]}px)`;
});

// Funktion för att skaka ägget
function shakeEgg(times, duration, callback) {
  let i = 0;
  const interval = setInterval(() => {
    egg.style.transform = `rotate(${i % 2 === 0 ? 5 : -5}deg)`;
    i++;
    if (i > times) {
      clearInterval(interval);
      egg.style.transform = 'rotate(0deg)';
      if (callback) callback();
    }
  }, duration);
}

// Animationssekvens
function animateCracks() {
  egg.style.opacity = 1;
  message.style.display = 'none';
  cracks.forEach(c => c.style.opacity = 0);
  
  function showCrack(index) {
    if (index >= cracks.length) {
      // Alla sprickor är synliga, lägg på glow
      cracks.forEach(c => c.classList.add('glow'));
      setTimeout(() => {
        egg.style.opacity = 0;
        cracks.forEach(c => c.style.opacity = 0);
        cracks.forEach(c => c.classList.remove('glow'));
        message.style.display = 'block';
      }, 2000);
      return;
    }
    cracks[index].style.opacity = 1;
    // Skaka ägget med alla synliga sprickor
    shakeEgg(6, 50, () => showCrack(index + 1));
  }
  
  showCrack(0);
}

// Starta animationen
animateCracks();

// Restartknapp
function restartAnimation() {
  animateCracks();
}
