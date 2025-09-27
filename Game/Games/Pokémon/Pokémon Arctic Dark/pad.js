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
    // Skaka ägget och synliga sprickor
    egg.classList.add("shake");
    cracks.slice(0, step).forEach(c => c.classList.add("shake"));

    setTimeout(() => {
      cracks[step].classList.add("show");
      egg.classList.remove("shake");
      cracks.slice(0, step + 1).forEach(c => c.classList.remove("shake"));
      step++;
      setTimeout(nextStep, 800);
    }, 400);
  } else {
}

    // Alla sprickor syns, lägg glow
    cracks.forEach(c => c.classList.add("glow"));
    egg.style.opacity = "0.3"; // ljusa upp ägget lite

    setTimeout(() => {
      // Dölj ägg + sprickor
      cracks.forEach(c => c.classList.remove("show", "glow"));
      egg.style.opacity = "1";

      // Visa text + knapp
      content.classList.add("show");

      setTimeout(() => {
        // Dölj text + knapp
        content.classList.remove("show");

        // Återställ steget
        step = 0;
        setTimeout(nextStep, 1000); // starta om
      }, 2000);

    }, 600); // glow-varaktighet
  }
}

// starta animation
setTimeout(nextStep, 1000);
