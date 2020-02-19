import { getGenres, getGames, getGameDetails } from './getData.js'
import { renderGenre, renderGames, renderGameDetails } from './render.js'

export async function genreOverview() {
    try {
        const genreData = await getGenres() 
        // console.log(data)
        renderGenre(genreData)
    } catch {
        console.log("error")
    } finally {
        console.log("Done?")
    }
} 

export async function gamesOverview(genre) {
    try {
        const gamesData = await getGames(genre) 
        console.log(gamesData)
        renderGames(gamesData)
    } catch {
        console.log("error games")
    } finally {
        console.log("Done? games")
    }
} 

export async function gameDetails(name) {
    try {
        const gameDetailsData = await getGameDetails(name) 
        console.log("help", gameDetailsData)
        renderGameDetails(gameDetailsData)
    } catch {
        console.log("error details")
    } finally {
        console.log("Done? details")
    }
} 