// -----------------------------
// Inställningar
// -----------------------------
let egg = document.getElementById('egg');
const title = document.querySelector('.title');
const buttons = document.querySelector('.buttons');
const downloadBtn = document.getElementById('downloadBtn');

const CYCLE_MS = 6000;    // total cykeltid (4s egg + 2s title)
const EGG_MS = 4000;      // hur länge ägget visas
const ORIGINAL_SRC = egg.getAttribute('data-src') || egg.src;

// -----------------------------
// Hjälpfunktion: starta om GIF genom att ersätta <img>
// (vi lägger till en timestamp som cache-buster så browsern laddar om GIF:en)
// -----------------------------
function restartGIF() {
  const parent = egg.parentNode;
  const newImg = document.createElement('img');

  newImg.id = 'egg';
  newImg.className = egg.className;
  newImg.alt = egg.alt || 'Egg animation';
  // cache-buster så bilden verkligen startar om
  newImg.src = ORIGINAL_SRC + '?_=' + Date.now();

  parent.replaceChild(newImg, egg);
  egg = newImg; // uppdatera referensen så vi jobbar med nya elementet framåt
}

// -----------------------------
// En cykel: visa gif i 4s, därefter titel+knappar i 2s
// -----------------------------
function cycleOnce() {
  // Visa ägget och göm titel/knappar
  egg.classList.remove('hidden');
  title.classList.add('hidden');
  buttons.classList.add('hidden');

  // Starta om GIF så den börjar från början
  restartGIF();

  // Efter EGG_MS: göm ägget och visa titel/knappar
  setTimeout(() => {
    egg.classList.add('hidden');
    title.classList.remove('hidden');
    buttons.classList.remove('hidden');
  }, EGG_MS);
}

// Starta genast och sätt upp ett intervall som kör cykeln regelbundet
cycleOnce();
setInterval(cycleOnce, CYCLE_MS);

// -----------------------------
// Nedladdningsknapp
// -----------------------------
downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'din-fil.pdf';              // byt ut mot din fil/URL
  link.download = 'min-nedladdning.pdf';  // filnamn som sparas lokalt
  document.body.appendChild(link);
  link.click();
  link.remove();
});
