const overlay = document.getElementById("overlay");
const newGameBtn = document.getElementById("newGame");
const loadGameBtn = document.getElementById("loadGame");

// GIF-tider
const timeFrames1to19 = 3002;
const timeFrame20 = 2000;

function startLoop() {
  overlay.classList.add("hidden"); // dölj overlay först

  // Efter frame 1–19 tid → visa overlay ovanpå GIF
  setTimeout(() => {
    overlay.classList.remove("hidden");

    // Efter frame 20 tid → göm overlay och loopa
    setTimeout(() => {
      overlay.classList.add("hidden");
      startLoop(); // repeat
    }, timeFrame20);

  }, timeFrames1to19);
}

// Event för knappar
newGameBtn.onclick = () => {
  console.log("New Game startar om...");
  // Lägg till kod för att nollställa spelet
};

loadGameBtn.onclick = () => {
  console.log("Load Game startar från senaste sparningen...");
  // Lägg till kod för att ladda sparning
};

// Start loop när sidan laddas
window.onload = startLoop;
