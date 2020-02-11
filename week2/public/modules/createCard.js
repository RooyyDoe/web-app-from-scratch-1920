export default function insertGames(data) {
    
    let card = document.querySelector('.gameGenres__card'),
        image = card.querySelector('img'),
        genreName = card.querySelector('.genreName'),
        totalGames = card.querySelector('.totalGames');

    image.src = data.image_background;
    genreName.textContent = data.name;
    totalGames.textContent = data.games_count;

    return card;

}
