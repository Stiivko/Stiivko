<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Steam-Spiele Forum</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="logo-container">
            <h1 class="logo">Steam-Spiele Forum</h1>
        </div>
        <nav>
            <a href="/login.html">Anmelden</a>
            <a href="/register.html">Registrieren</a>
            <a href="/profile.html">Profil</a>
            <a href="/games.html">Spiele</a>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="hero-text">
                <h2>Willkommen im <span class="highlight">Steam-Spiele Forum</span></h2>
                <p>Entdecke und diskutiere die besten Spiele von Steam. Tausche dich mit der Community aus!</p>
            </div>
        </section>

        <section class="game-list">
            <h2>Entdecke die besten Steam-Spiele!</h2>
            <div id="game-container">
                <!-- Spiele werden hier dynamisch geladen -->
            </div>
        </section>

        <section class="latest-threads">
            <h2>Neueste Diskussionen</h2>
            <div id="thread-container">
                <!-- Threads werden hier dynamisch geladen -->
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Steam-Spiele Forum. Alle Rechte vorbehalten.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
