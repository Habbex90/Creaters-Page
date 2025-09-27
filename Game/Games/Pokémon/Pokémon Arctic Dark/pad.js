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
    // Skaka ägget och redan synliga sprickor
    egg.classList.add("shake");
    cracks.slice(0, step).forEach(c => c.classList.add("shake"));

    setTimeout(() => {
      // Visa nästa spricka
      cracks[step].classList.add("show");

      // Sluta skaka
      egg.classList.remove("shake");
      cracks.slice(0, step + 1).forEach(c => c.classList.remove("shake"));

      step++;
      setTimeout(nextStep, 800);
    }, 400);

  } else {
    // Alla sprickor är synliga, lägg till glow och skaka dem
    cracks.forEach(c => c.classList.add("glow", "shake"));
    egg.classList.add("shake");

    setTimeout(() => {
      // Dölj ägget och sprickorna tillsammans
      cracks.forEach(c => c.classList.remove("show", "glow", "shake"));
      egg.style.opacity = "0";
      egg.classList.remove("shake");

      // Visa text + knapp
      content.classList.add("show");

      setTimeout(() => {
        // Dölj text + knapp
        content.classList.remove("show");

        // Återställ äggets synlighet
        egg.style.opacity = "1";

        // Återställ steget och starta om animationen
        step = 0;
        setTimeout(nextStep, 1000);
      }, 2000); // text och knapp visas i 2 sekunder

    }, 600); // glow-varaktighet
  }
}

// starta animation
setTimeout(nextStep, 1000);
