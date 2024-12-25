const axios = require('axios');

const getSteamGameReviews = async (appId) => {
    try {
        const response = await axios.get(`https://store.steampowered.com/api/appreviews/${appId}`, {
            params: {
                key: 'DEIN_STEAM_API_KEY',
                filter: 'recent',
                language: 'german',
                review_type: 'all',
                purchase_type: 'all',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Fehler beim Abrufen der Steam-Bewertungen:', error);
    }
};

// Beispielaufruf für das Spiel mit der App-ID 730 (Counter-Strike: Global Offensive)
getSteamGameReviews(730).then((reviews) => {
    console.log(reviews);
});
