import {
    sortingGameData
} from './utils.js'

export function renderGenre(genreData) {
    // gets the genre template from the HTML
    const genreTemplate = document.getElementById("genreTemplate").textContent
    // Compiles the HTML to a handlebars template
    const compiledTemplate = Handlebars.compile(genreTemplate)
    // Ads the genreData to the compiled template.
    const genreGeneratedHTML = compiledTemplate(genreData)

    // selects a element in the HTML
    const genreContainer = document.getElementById('main')
    // Inserts the handlebars template into HTML
    genreContainer.insertAdjacentHTML("afterbegin", genreGeneratedHTML)

}

export function renderGames(gamesData) {
    // gets the main element and puts it into a variable
    const main = document.getElementById('main')
    // gets the first child of the main element
    const children = main.children
    // removes the child of the main element
    main.removeChild(children[0])

    const gamesTemplate = document.getElementById("gamesTemplate").textContent
    const compiledTemplate = Handlebars.compile(gamesTemplate)
    const gamesGeneratedHTML = compiledTemplate(gamesData)

    const gamesContainer = document.getElementById('main')
    gamesContainer.insertAdjacentHTML("afterbegin", gamesGeneratedHTML)

    // Selects the sort option wrapper and puts it into a variable
    const dropDown = document.querySelector('.sort-games')
    // Add a eventlistener on the dropdown that will re-render the data
    // when the input of the dropdown will change.
    dropDown.addEventListener('change', () => {
        // Gets value of the selected input in the dropdown
        const selectValue = dropDown.options[dropDown.selectedIndex].value
        // Giving through the data that the sort function needs. it will 
        // give throught the gamesData.results where it needs to filter on
        // the .name and .rating, Also the selectValue will be given through
        // this will be the value that is clicked on by the user and will be
        // running one of the switch cases that has the same value.
        const sortedData = sortingGameData(gamesData.results, selectValue)
        console.log("test", sortedData)

        // Re-renders the page with the sortedData.
        renderGames(sortedData)
    })
}

export function renderGameDetails(gameDetailsData) {

    const main = document.getElementById('main')
    const children = main.children
    main.removeChild(children[0])

    const detailTemplate = document.getElementById("detailTemplate").textContent
    const compiledTemplate = Handlebars.compile(detailTemplate)
    const gameDetailsGeneratedHTML = compiledTemplate(gameDetailsData)

    const gameDetailsContainer = document.getElementById('main')
    console.log(gameDetailsGeneratedHTML)
    gameDetailsContainer.insertAdjacentHTML("afterbegin", gameDetailsGeneratedHTML)

}