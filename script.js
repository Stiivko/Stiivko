document.addEventListener("DOMContentLoaded", () => {
    // Beispiel-Spiele-Daten
    const games = [
        {
            id: 1,
            title: "Counter-Strike: Global Offensive",
            image: "https://via.placeholder.com/300x200",
            description: "Ein actiongeladener Multiplayer-Shooter.",
            rating: 4.5,
            reviews: 120,
        },
        {
            id: 2,
            title: "Dota 2",
            image: "https://via.placeholder.com/300x200",
            description: "Ein strategisches MOBA-Spiel mit epischen Heldenkämpfen.",
            rating: 4.0,
            reviews: 85,
        },
        {
            id: 3,
            title: "The Witcher 3: Wild Hunt",
            image: "https://via.placeholder.com/300x200",
            description: "Ein episches Action-RPG mit einer tiefgründigen Geschichte.",
            rating: 5.0,
            reviews: 1000,
        },
        {
            id: 4,
            title: "Minecraft",
            image: "https://via.placeholder.com/300x200",
            description: "Ein Sandbox-Spiel, in dem du deine eigene Welt erschaffen kannst.",
            rating: 4.8,
            reviews: 2000,
        },
        {
            id: 5,
            title: "Grand Theft Auto V",
            image: "https://via.placeholder.com/300x200",
            description: "Ein Open-World-Spiel, das Freiheit und Spannung vereint.",
            rating: 4.7,
            reviews: 1500,
        },
        // Weitere Spiele hinzufügen...
    ];

    // Beispiel-Foren-Daten
    const threads = [
        {
            id: 1,
            title: "Wie man in CS:GO gewinnt",
            creator: "Max123",
            createdAt: "2024-12-20",
        },
        {
            id: 2,
            title: "Beste Dota 2 Helden",
            creator: "NoobMaster",
            createdAt: "2024-12-18",
        },
        {
            id: 3,
            title: "Top 5 Tipps für GTA V",
            creator: "GamerPro",
            createdAt: "2024-12-15",
        },
        // Weitere Threads hinzufügen...
    ];

    // Spiele-Daten dynamisch einfügen
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

    // Forum-Threads dynamisch einfügen
    const threadContainer = document.getElementById("
