// Hämta element
const egg = document.querySelector(".egg");
const title = document.querySelector(".title");
const buttons = document.querySelector(".buttons");
const downloadBtn = document.getElementById("downloadBtn");

// Funktion som kör animationen
function startAnimation() {
  // Visa bara ägget först
  egg.classList.remove("hidden");
  title.classList.add("hidden");
  buttons.classList.add("hidden");

  // Efter 4 sekunder -> visa titel + knappar
  setTimeout(() => {
    egg.classList.add("hidden");
    title.classList.remove("hidden");
    buttons.classList.remove("hidden");
  }, 4000);

  // Efter totalt 6 sekunder -> börja om
  setTimeout(() => {
    startAnimation();
  }, 6000);
}

// Starta loop
startAnimation();

// Ladda ner fil när man klickar på knappen
downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "din-fil.pdf"; // <-- byt till din fil/URL
  link.download = "min-nedladdning.pdf"; // <-- filnamn vid nedladdning
  link.click();
});
