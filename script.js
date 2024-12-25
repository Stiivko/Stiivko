// Initialisiere Zähler
let counter = 0;

// Button und Display-Elemente holen
const button = document.getElementById("counter-btn");
const display = document.getElementById("counter-display");

// Event-Listener für den Button
button.addEventListener("click", () => {
    counter++;
    display.textContent = `Zähler: ${counter}`;
});
