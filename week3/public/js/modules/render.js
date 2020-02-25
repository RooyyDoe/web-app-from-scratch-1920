// import { sortData } from './utils.js'

export function renderGenre(genreData) {
    
    const genreTemplate = document.getElementById("genreTemplate").textContent;
    const compiledTemplate = Handlebars.compile(genreTemplate, genreData);
    const genreGeneratedHTML = compiledTemplate(genreData);

    const genreContainer = document.getElementById('main');
    genreContainer.insertAdjacentHTML("afterbegin", genreGeneratedHTML);

}

export function renderGames(gamesData) {

    const main = document.getElementById('main')
    const children = main.children;
    main.removeChild(children[0])

    const gamesTemplate = document.getElementById("gamesTemplate").textContent;
    const compiledTemplate = Handlebars.compile(gamesTemplate, gamesData);
    const gamesGeneratedHTML = compiledTemplate(gamesData);

    const gamesContainer = document.getElementById('main');
    gamesContainer.insertAdjacentHTML("afterbegin", gamesGeneratedHTML);

}

export function renderGameDetails(gameDetailsData) {

    const main = document.getElementById('main')
    const children = main.children;
    main.removeChild(children[0])

    const detailTemplate = document.getElementById("detailTemplate").textContent;
    const compiledTemplate = Handlebars.compile(detailTemplate, gameDetailsData);
    const gameDetailsGeneratedHTML = compiledTemplate(gameDetailsData);

    const gameDetailsContainer = document.getElementById('main');
    console.log(gameDetailsGeneratedHTML)
    gameDetailsContainer.insertAdjacentHTML("afterbegin", gameDetailsGeneratedHTML);

}