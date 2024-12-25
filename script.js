document.addEventListener("DOMContentLoaded", () => {
    // Beispielhafte Spiel-Daten
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
        {
            id: 3,
            title: "The Witcher 3",
            image: "https://via.placeholder.com/300x200",
            description: "Ein episches Open-World-RPG mit einer fesselnden Story.",
            rating: 5.0,
            reviews: 500
        },
        // Weitere Spiele...
    ];

    // Dummy Threads
    const threads = [
        {
            id: 1,
            title: "Wie man in CS:GO gewinnt",
            creator: "Max123",
            createdAt: "2024-12-20",
            comments: []
        },
        {
            id: 2,
            title: "Beste Dota 2 Helden",
            creator: "NoobMaster",
            createdAt: "2024-12-18",
            comments: []
        },
        // Weitere Threads...
    ];

    const gameContainer = document.getElementById("game-container");
    const threadContainer = document.getElementById("thread-container");

    // Spiele anzeigen
    function displayGames(games) {
        gameContainer.innerHTML = '';
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
    }

    // Threads anzeigen
    function displayThreads(threads) {
        threadContainer.innerHTML = '';
        threads.forEach(thread => {
            const threadCard = document.createElement("div");
            threadCard.classList.add("thread-card");
            threadCard.innerHTML = `
                <h3>${thread.title}</h3>
                <p>Erstellt von: ${thread.creator} am ${thread.createdAt}</p>
                <button onclick="viewThread(${thread.id})">Antworten</button>
            `;
            threadContainer.appendChild(threadCard);
        });
    }

    // Funktion zum Suchen der Spiele
    window.searchGames = function() {
        const searchQuery = document.getElementById('search-bar').value.toLowerCase();
        const filteredGames = games.filter(game => game.title.toLowerCase().includes(searchQuery));
        displayGames(filteredGames);
    };

    // Bewertungsfunktion
    window.rateGame = function(gameId) {
        const newRating = prompt("Gib deine Bewertung (1-5 Sterne) ein:");
        if (newRating >= 1 && newRating <= 5) {
            alert(`Danke für deine Bewertung von ${newRating} Stern(en) für Spiel #${gameId}!`);
        } else {
            alert("Ungültige Bewertung. Bitte gib eine Zahl zwischen 1 und 5 ein.");
        }
    };

    // Kommentare anzeigen
    window.viewComments = function(gameId) {
        alert(`Kommentare für Spiel #${gameId} werden hier angezeigt.`);
    };

    // Thread anzeigen
    window.viewThread = function(threadId) {
        alert(`Diskussion für Thread #${threadId} wird hier angezeigt.`);
    };

    // Initiale Anzeige
    displayGames(games);
    displayThreads(threads);
});
