const overlay = document.querySelector(".overlay");
const newGameBtn = document.getElementById("newGame");
const loadGameBtn = document.getElementById("loadGame");

// GIF-tider
const timeFrames1to19 = 3002; // tid för frame 1–19
const timeFrame20 = 2000;      // tid för frame 20

function startLoop() {
  overlay.classList.add("hidden"); // Dölj overlay först

  // Vänta tills frame 1–19 är färdiga
  setTimeout(() => {
    overlay.classList.remove("hidden"); // Visa overlay precis när frame 20 börjar

    // Efter frame 20 → göm overlay
    setTimeout(() => {
      overlay.classList.add("hidden");
      startLoop(); // starta om GIF-timing
    }, timeFrame20);

  }, timeFrames1to19); // vänta tills frame 1–19 är klar
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
