const overlay = document.querySelector(".overlay"); 
const newGameBtn = document.getElementById("newGame");
const loadGameBtn = document.getElementById("loadGame");

// GIF-tider
const initialDelay = 3002; // tid innan overlay visas
const overlayDuration = 2000; // tid overlay är synlig

function startLoop() {
  overlay.classList.add("hidden"); // Dölj overlay först

  // Vänta initialDelay innan overlay visas
  setTimeout(() => {
    overlay.classList.remove("hidden"); // Visa overlay

    // Efter overlayDuration → göm overlay och loopa direkt
    setTimeout(() => {
      overlay.classList.add("hidden");
      startLoop(); // starta om GIF-timing
    }, overlayDuration);

  }, initialDelay);
}

// Event för knappar
newGameBtn.onclick = () => {
  console.log("New Game startar om...");
};

loadGameBtn.onclick = () => {
  console.log("Load Game startar från senaste sparningen...");
};

// Start loop när sidan laddas
window.onload = startLoop;
