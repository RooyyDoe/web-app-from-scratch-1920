import { removeChildren } from './utils.js'

export function renderGenre(genreData) {

    console.log(genreData)

    const secondSection = document.getElementById('gameOverview__container')
    removeChildren(secondSection)
    
    const genreTemplate = document.getElementById("genreTemplate").textContent;
    const compiledTemplate = Handlebars.compile(genreTemplate, genreData);
    const genreGeneratedHTML = compiledTemplate(genreData);

    const genreContainer = document.getElementById('gameGenres__container');
    genreContainer.insertAdjacentHTML("afterbegin", genreGeneratedHTML);

}

export function renderGames(gamesData) {

    const firstSection = document.getElementById('gameGenres__container')
    removeChildren(firstSection)

    const gamesTemplate = document.getElementById("gamesTemplate").textContent;
    const compiledTemplate = Handlebars.compile(gamesTemplate, gamesData);
    const gamesGeneratedHTML = compiledTemplate(gamesData);

    const gameContainer = document.getElementById('gameOverview__container');
    gameContainer.insertAdjacentHTML("afterbegin", gamesGeneratedHTML);

}

export function renderGameDetails(gameDetailsData) {

    console.log(gameDetailsData)

    const thirdsection = document.getElementById('gameOverview__container')
    removeChildren(thirdsection)

    const detailTemplate = document.getElementById("detailTemplate").textContent;
    const compiledTemplate = Handlebars.compile(detailTemplate, gameDetailsData);
    const gameDetailsGeneratedHTML = compiledTemplate(gameDetailsData);

    const gameDetailsContainer = document.getElementById('gameDetails__container');
    gameDetailsContainer.insertAdjacentHTML("afterbegin", gameDetailsGeneratedHTML);

}