// Warten, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM vollständig geladen. Skript wird ausgeführt.");

    // Top 15 Steam-Spiele (Dummy-Daten mit Platzhalterbildern)
    const games = [
        { title: "Counter-Strike: Global Offensive", image: "https://via.placeholder.com/300x200", description: "Ein actiongeladener Multiplayer-Shooter." },
        { title: "Dota 2", image: "https://via.placeholder.com/300x200", description: "Ein strategisches MOBA-Spiel mit epischen Heldenkämpfen." },
        { title: "Apex Legends", image: "https://via.placeholder.com/300x200", description: "Ein beliebtes Battle-Royale-Spiel." },
        { title: "Cyberpunk 2077", image: "https://via.placeholder.com/300x200", description: "Ein futuristisches Rollenspiel in einer offenen Welt." },
        { title: "The Witcher 3: Wild Hunt", image: "https://via.placeholder.com/300x200", description: "Ein preisgekröntes Rollenspiel mit einer epischen Geschichte." },
        { title: "Elden Ring", image: "https://via.placeholder.com/300x200", description: "Ein herausforderndes Action-Rollenspiel." },
        { title: "Stardew Valley", image: "https://via.placeholder.com/300x200", description: "Ein charmantes Farming- und Lebenssimulation-Spiel." },
        { title: "Grand Theft Auto V", image: "https://via.placeholder.com/300x200", description: "Ein Open-World-Spiel voller Abenteuer und Chaos." },
        { title: "PUBG: Battlegrounds", image: "https://via.placeholder.com/300x200", description: "Das Spiel, das Battle Royale populär gemacht hat." },
        { title: "Team Fortress 2", image: "https://via.placeholder.com/300x200", description: "Ein klassischer Multiplayer-Shooter." },
        { title: "Dark Souls III", image: "https://via.placeholder.com/300x200", description: "Ein düsteres Action-Rollenspiel." },
        { title: "Hades", image: "https://via.placeholder.com/300x200", description: "Ein preisgekröntes Roguelike-Actionspiel." },
        { title: "Among Us", image: "https://via.placeholder.com/300x200", description: "Ein unterhaltsames Spiel über Täuschung und Teamarbeit." },
        { title: "Half-Life: Alyx", image: "https://via.placeholder.com/300x200", description: "Ein immersives VR-Erlebnis." },
        { title: "Terraria", image: "https://via.placeholder.com/300x200", description: "Ein kreatives Sandbox-Spiel mit Abenteuerelementen." }
    ];

    // Container für die Spieleliste
    const gameList = document.querySelector(".game-list");

    // Spiele dynamisch hinzufügen
    games.forEach(game => {
        // Erstellen eines Spiele-Cards
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        // Innerer HTML-Inhalt für jedes Spiel
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h2>${game.title}</h2>
            <p>${game.description}</p>
        `;

        // Spiel zu der Liste hinzufügen
        gameList.appendChild(gameCard);
    });

    console.log("Spiele erfolgreich hinzugefügt.");
});
