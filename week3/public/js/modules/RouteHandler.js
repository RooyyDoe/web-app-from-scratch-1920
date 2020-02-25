import {
    showLoadingAnimation,
    removeLoadingAnimation
} from './utils.js'
import {
    getGenres,
    getGames,
    getGameDetails
} from './getData.js'
import {
    renderGenre,
    renderGames,
    renderGameDetails
} from './render.js'

// Will handle everything that happens in the genre routing
export async function genreOverview() {
    try {
        // Shows loading state when data is not ready yet.
        showLoadingAnimation()
        // Puts data out of the API call in a variable
        const genreData = getGenres()
        // Gives through the data to renderGenre() but only when it's ready
        renderGenre(await genreData)
    } catch (err) {
        console.log(err)
    } finally {
        // Removes loading state when the data is loaded in.
        removeLoadingAnimation()
        console.log("Done?")
    }
}

// Will handle everything that happens in the game routing
export async function gamesOverview(genre) {
    try {
        showLoadingAnimation()
        const gamesData = getGames(genre)
        renderGames(await gamesData)
    } catch (err) {
        console.log(err)
    } finally {
        removeLoadingAnimation()
        console.log("Done? games")
    }
}

// Will handle everything that happens in the gameDetail routing
export async function gameDetails(name) {
    try {
        const gameDetailsData = getGameDetails(name)
        // console.log("help", await gameDetailsData)
        renderGameDetails(await gameDetailsData)
    } catch (err) {
        console.log(err)
    } finally {
        console.log("Done? details")
    }
}