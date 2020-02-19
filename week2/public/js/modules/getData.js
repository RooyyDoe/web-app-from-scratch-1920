import { Fetcher } from './fetcher.js';

// Set variables
const baseUrl = "https://api.rawg.io/api/";
const genres = "genres";
const genreUrl = `${baseUrl}${genres}`;


// Function to show the results
export async function getGenres(){
    return Fetcher.get(genreUrl)
        .then((genreData) => {
            return genreData;
        })
}

// Function to show the results
export async function getGames(genre){
    console.log(genre, "is dit caps?")
    return Fetcher.get(`https://api.rawg.io/api/games?genres=${genre}`)
        .then((gamesData) => {
            return gamesData;
        })
}
     
// Function to show the results
export async function getGameDetails(name){
    console.log(name)

    return Fetcher.get(`https://api.rawg.io/api/games/${name}`)
        .then((gameDetailsData) => {
            console.log(gameDetailsData)
            return gameDetailsData;
        })
}
