document.addEventListener("DOMContentLoaded", function () {
    const lateral = document.querySelector('.lateral');
    const links = document.querySelectorAll('.inl');

    // Stocke le texte complet de chaque lien
    const fullTexts = Array.from(links).map(link => link.title.trim());

    // Réduit à une seule lettre au survol
    lateral.addEventListener('mouseenter', () => {
        links.forEach((link, i) => {
            link.textContent = fullTexts[i];
        });
    });

    // Restaure le texte complet quand la souris sort
    lateral.addEventListener('mouseleave', () => {
        links.forEach((link, i) => {
            link.textContent = fullTexts[i][0];
        });
    });
});
