const eggContainer = document.getElementById("eggContainer");
const egg = document.getElementById("egg");
const cracks = [
  document.getElementById("crack1"),
  document.getElementById("crack2"),
  document.getElementById("crack3"),
  document.getElementById("crack4"),
  document.getElementById("crack5")
];
const content = document.getElementById("content");

let step = 0;

function nextStep() {
  if (step < cracks.length) {
    // Skaka hela containern (ägget + alla synliga sprickor)
    eggContainer.classList.add("shake");

    setTimeout(() => {
      // Visa nästa spricka på sin fasta plats
      cracks[step].classList.add("show");

      // Sluta skaka
      eggContainer.classList.remove("shake");

      step++;
      setTimeout(nextStep, 800);
    }, 400);

  } else {
    // Alla sprickor synliga -> skaka + glow
    eggContainer.classList.add("shake");
    cracks.forEach(c => c.classList.add("glow"));

    setTimeout(() => {
      // Fade out ägg + sprickor
      cracks.forEach(c => c.classList.remove("show", "glow"));
      egg.style.opacity = "0";
      eggContainer.classList.remove("shake");

      // Visa text + knapp
      content.classList.add("show");

      setTimeout(() => {
        // Dölj text + knapp
        content.classList.remove("show");

        // Återställ äggets synlighet
        egg.style.opacity = "1";

        // Återställ steg och starta om
        step = 0;
        setTimeout(nextStep, 1000);
      }, 2000);
    }, 600); // glow-varaktighet
  }
}

// Starta animationen
setTimeout(nextStep, 1000);
