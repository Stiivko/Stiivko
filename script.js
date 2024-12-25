document.addEventListener("DOMContentLoaded", () => {
    const games = [
        { 
            id: 1,
            title: "Counter-Strike: Global Offensive",
            image: "https://via.placeholder.com/300x200",
            description: "Ein actiongeladener Multiplayer-Shooter.",
            rating: 4.5,
            reviews: 120
        },
        {
            id: 2,
            title: "Dota 2",
            image: "https://via.placeholder.com/300x200",
            description: "Ein strategisches MOBA-Spiel mit epischen Heldenkämpfen.",
            rating: 4.0,
            reviews: 85
        },
        // Weitere Spiele...
    ];

    const gameContainer = document.getElementById("game-container");

    games.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h2>${game.title}</h2>
            <p>${game.description}</p>
            <p>Bewertung: ⭐ ${game.rating} (${game.reviews} Bewertungen)</p>
            <button onclick="rateGame(${game.id})">Bewerten</button>
            <button onclick="viewComments(${game.id})">Kommentare anzeigen</button>
        `;

        gameContainer.appendChild(gameCard);
    });
});

function rateGame(gameId) {
    const newRating = prompt("Gib deine Bewertung (1-5 Sterne) ein:");
    if (newRating >= 1 && newRating <= 5) {
        alert(`Danke für deine Bewertung von ${newRating} Stern(en) für Spiel #${gameId}!`);
        // In einer echten Anwendung würde hier die neue Bewertung an das Backend gesendet.
    } else {
        alert("Ungültige Bewertung. Bitte gib eine Zahl zwischen 1 und 5 ein.");
    }
}

function viewComments(gameId) {
    alert(`Kommentare für Spiel #${gameId} werden hier angezeigt (Demo).`);
    // Hier könnte ein Modal-Fenster geöffnet oder Kommentare dynamisch geladen werden.
}
