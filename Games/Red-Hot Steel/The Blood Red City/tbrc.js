const overlay = document.querySelector(".overlay");
const newGameBtn = document.getElementById("newGame");
const loadGameBtn = document.getElementById("loadGame");

// GIF-tider (ms)
const timeFrames1to10_total = 2000; // frames 1–10 visas totalt i 2 s
const timeFrame11 = 3000;           // frame 11 visas i 3 s

let loopTimer1 = null;
let loopTimer2 = null;
let loopActive = false;

// Spelstate
const defaultState = { good: 0, bad: 0, chaos: 0, startedAt: null };
let currentState = null;

/* Loop som styr overlay-synlighet */
function clearLoopTimers() {
  clearTimeout(loopTimer1);
  clearTimeout(loopTimer2);
}

function loopCycle() {
  if (!loopActive) return;
  overlay.classList.add("hidden"); // göm overlay (frames 1–10)

  // Efter frames 1–10
  loopTimer1 = setTimeout(() => {
    if (!loopActive) return;
    overlay.classList.remove("hidden"); // visa overlay under frame 11

    // När frame 11 slutar
    loopTimer2 = setTimeout(() => {
      overlay.classList.add("hidden");
      if (loopActive) loopCycle();
    }, timeFrame11);

  }, timeFrames1to10_total);
}

function startGifOverlayLoop() {
  loopActive = true;
  clearLoopTimers();
  loopCycle();
}

function stopGifOverlayLoop() {
  loopActive = false;
  clearLoopTimers();
  overlay.classList.add("hidden");
}

/* Sparning */
function saveGame(state) {
  localStorage.setItem("rpgSave", JSON.stringify(state));
}

function deleteSave() {
  localStorage.removeItem("rpgSave");
}

function loadSave() {
  const raw = localStorage.getItem("rpgSave");
  return raw ? JSON.parse(raw) : null;
}

/* Spelstart */
function startNewGame() {
  deleteSave();
  currentState = { ...defaultState, startedAt: Date.now() };
  saveGame(currentState);
  stopGifOverlayLoop();
  alert("New Game startar. Här placerar du din spelkod.");
}

function startLoadGame() {
  const saved = loadSave();
  if (!saved) {
    alert("Ingen sparning hittades.");
    return;
  }
  currentState = saved;
  stopGifOverlayLoop();
  alert("Load Game startar från sparning. Här placerar du din spelkod.");
}

/* Event-lyssnare */
newGameBtn.addEventListener("click", startNewGame);
loadGameBtn.addEventListener("click", startLoadGame);

/* Starta overlay-loop vid sidladdning */
window.addEventListener("load", startGifOverlayLoop);
