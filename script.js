// Beispiel für dynamische Spiel-Updates
const gameUpdates = [
    { title: "Dota 2: Neues Update", content: "Ein neues Update für Dota 2 wurde veröffentlicht. Viel Spaß!" },
    { title: "Rocket League: Saison 6", content: "Die neue Saison von Rocket League ist jetzt live!" }
];

const gameUpdatesContainer = document.getElementById("game-updates-container");
gameUpdates.forEach(update => {
    const updateCard = document.createElement("div");
    updateCard.className = "update-card";
    updateCard.innerHTML = `
        <h3>${update.title}</h3>
        <p>${update.content}</p>
    `;
    gameUpdatesContainer.appendChild(updateCard);
});

// Labyrinth-Spiel
const canvas = document.getElementById("maze");
const ctx = canvas.getContext("2d");
const blockSize = 30;
const maze = [
    "1111111111111111",
    "1000000000000001",
    "1011111111101111",
    "1010000000101001",
    "1010111110101011",
    "1000000000100001",
    "1111111111101111",
];
let player = { x: 1, y: 1 };

function drawMaze() {
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            if (maze[y][x] === '1') {
                ctx.fillStyle = 'black';
                ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
            } else {
                ctx.fill
