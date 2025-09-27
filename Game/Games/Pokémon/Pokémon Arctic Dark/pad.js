const egg = document.getElementById("egg");
const cracks = [
  document.getElementById("crack1"),
  document.getElementById("crack2"),
  document.getElementById("crack3"),
  document.getElementById("crack4")
];
const content = document.getElementById("content");

let step = 0;

function nextStep() {
  if (step < cracks.length) {
    egg.classList.add("shake");
    setTimeout(() => {
      cracks[step].classList.add("show");
      egg.classList.remove("shake");
      step++;
      setTimeout(nextStep, 1000);
    }, 400);
  } else {
    // öppna toppen
    egg.style.transform = "translateY(30px) scaleY(0.7)";

    // visa text + knapp
    content.classList.add("show");

    // ta bort sprickorna och ägget direkt
    cracks.forEach(c => c.classList.remove("show"));
    egg.style.opacity = "0";

    // låt text+knapp synas i 2 sek
    setTimeout(() => {
      // dölj content
      content.classList.remove("show");

      // återställ ägget
      egg.style.transform = "translateY(0) scaleY(1)";
      egg.style.opacity = "1";

      step = 0;

      // starta om efter liten delay
      setTimeout(nextStep, 1000);
    }, 2000);
  }
}

// starta animation efter liten delay
setTimeout(nextStep, 1000);
