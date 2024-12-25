// Dropdown Menü Steuerung
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    dropdown.addEventListener('mouseenter', function() {
        dropdownContent.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', function() {
        dropdownContent.style.display = 'none';
    });
});

// Kommentar hinzufügen
const commentButton = document.querySelector('.comment-section button');
const commentInput = document.querySelector('.comment-section input[type="text"]');
const commentsContainer = document.querySelector('.comments');

commentButton.addEventListener('click', function() {
    const commentText = commentInput.value.trim();
    if (commentText) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<p><strong>Du:</strong> ${commentText}</p>`;
        commentsContainer.appendChild(commentElement);
        commentInput.value = ''; // Eingabefeld zurücksetzen
    }
});

// Benutzerprofil-Statistiken (Demonstration der Funktionalität)
const profileStats = document.querySelector('.user-profile .profile-stats');

function updateProfileStats() {
    profileStats.innerHTML = `
        <div>
            <h3>Level</h3>
            <p>${Math.floor(Math.random() * 10) + 1}</p>
        </div>
        <div>
            <h3>Gespeicherte Spiele</h3>
            <p>${Math.floor(Math.random() * 20) + 1}</p>
        </div>
        <div>
            <h3>Freunde</h3>
            <p>${Math.floor(Math.random() * 50) + 1}</p>
        </div>
    `;
}

// Simuliere Profilupdate alle 5 Sekunden
setInterval(updateProfileStats, 5000);

// Tooltip-Funktion (für Zukunftsverwendung)
function showTooltip(element, message) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = message;
    element.appendChild(tooltip);
    
    element.addEventListener('mouseenter', () => {
        tooltip.style.visibility = 'visible';
    });

    element.addEventListener('mouseleave', () => {
        tooltip.style.visibility = 'hidden';
    });
}
