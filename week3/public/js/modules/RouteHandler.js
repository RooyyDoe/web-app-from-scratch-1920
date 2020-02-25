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

export async function genreOverview() {
    try {
        showLoadingAnimation()
        const genreData = getGenres()

        renderGenre(await genreData)
    } catch (err) {
        console.log(err)
    } finally {
        removeLoadingAnimation()
        console.log("Done?")
    }
}

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

export async function gameDetails(name) {
    try {
        const gameDetailsData = getGameDetails(name)
        console.log("help", await gameDetailsData)
        renderGameDetails(await gameDetailsData)
    } catch (err) {
        console.log(err)
    } finally {
        console.log("Done? details")
    }
}