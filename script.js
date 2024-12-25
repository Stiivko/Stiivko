<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gaming-Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<header>
    <nav>
        <a href="#">Home</a>
        <a href="#">Featured Games</a>
        <a href="#">Forum</a>
        <a href="#">News</a>
        <a href="#">User Reviews</a>
        <a href="#" class="dropdown">Profile
            <div class="dropdown-content">
                <a href="#">My Profile</a>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
            </div>
        </a>
    </nav>
</header>

<!-- Hero Section -->
<section class="hero">
    <div class="hero-text">
        <h2>Willkommen auf unserer Gaming-Plattform!</h2>
        <p>Finde deine Lieblingsspiele und diskutiere mit der Community!</p>
        <button class="cta-button">Jetzt Entdecken</button>
    </div>
</section>

<!-- Featured Games -->
<section class="featured-games">
    <h2>Featured Games</h2>
    <div class="game-list">
        <div class="game-card">
            <img src="game1.jpg" alt="Game 1">
            <h3>Game 1</h3>
            <p>Beschreibung des Spiels.</p>
            <button class="game-btn">Jetzt Spielen</button>
        </div>
        <div class="game-card">
            <img src="game2.jpg" alt="Game 2">
            <h3>Game 2</h3>
            <p>Beschreibung des Spiels.</p>
            <button class="game-btn">Jetzt Spielen</button>
        </div>
        <div class="game-card">
            <img src="game3.jpg" alt="Game 3">
            <h3>Game 3</h3>
            <p>Beschreibung des Spiels.</p>
            <button class="game-btn">Jetzt Spielen</button>
        </div>
    </div>
</section>

<!-- User Reviews -->
<section class="user-reviews">
    <h2>Benutzerbewertungen</h2>
    <div class="user-reviews-container">
        <div class="review-card">
            <h4>Game 1</h4>
            <p>“Toller Titel! Sehr spannend.”</p>
        </div>
        <div class="review-card">
            <h4>Game 2</h4>
            <p>“Ein Muss für jeden Gamer!”</p>
        </div>
    </div>
</section>

<!-- Footer -->
<footer>
    <p>&copy; 2024 Gaming Website</p>
    <p><a href="#">Impressum</a> | <a href="#">Datenschutz</a></p>
</footer>

<script src="script.js"></script>
</body>
</html>
