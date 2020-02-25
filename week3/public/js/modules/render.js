import { sortAlphabetical } from './utils.js'

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

    console.log(gamesData)

    // addEventListener
    // console.log(sortAlphabetical(gamesData.results))
    // let x = gamesData.results.sort(function(a, b) {
    //     return a.name.localeCompare(b.name.toLowerCase());
    //  });

    //  console.log(x)


    //  let v = gamesData.results.sort((highest, lowest) => highest.rating - lowest.rating)

    //  console.log(v)

    // [gamesData].sort((highest, lowest) => { if (highest.name < lowest.name) return -1 })

    // gamesData.results.map(object => {
    //     console.log(object)

    //     data.sort((a, b) => { if (a.name < b.name) return -1 })
    // })

    const gamesTemplate = document.getElementById("gamesTemplate").textContent;
    const compiledTemplate = Handlebars.compile(gamesTemplate, gamesData);
    const gamesGeneratedHTML = compiledTemplate(gamesData);

    const gamesContainer = document.getElementById('main');
    gamesContainer.insertAdjacentHTML("afterbegin", gamesGeneratedHTML);

    const dropDown = document.querySelector('.sort-games')
    dropDown.addEventListener('change', () => {
        const selectValue = dropDown.options[dropDown.selectedIndex].value;

        const sortedData = sortAlphabetical(gamesData.results, selectValue)
        console.log("test", sortedData)
        renderGames(sortedData)
    })
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