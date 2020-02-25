import {
    Fetcher
} from './fetcher.js'
import {
    cleanTagsData
} from './utils.js'
import {
    renderGames
} from './render.js'

// Fetch call to get the genre data.
export function getGenres() {
    return Fetcher.get(`https://api.rawg.io/api/genres`)
}

// Fetch call to get the games data. with a parameter 'genre'
// that will be linked to the genre that is selected on the 'genre page'
export function getGames(genre) {
    return Fetcher.get(`https://api.rawg.io/api/games?genres=${genre}&page_size=40`)
        // Cleans up the gaming tags so that I could use 
        //them on the way I want to.
        .then((data) => cleanTagsData(data))
        // Function for pagination. Still need to clean this up but had no more
        // time to do that and hopefully This is enough.. Well When it works..
        // it works right??? :D
        .then((data) => {
            console.log(data)
            // Getting the next, previous page fetch URL
            let nextPage = data.next;
            let previousPage = data.previous;

            // Creating a button for previous
            const previousButton = document.createElement('button')
            previousButton.setAttribute('id', 'previous')
            previousButton.setAttribute('value', previousPage)
            previousButton.innerText = "Previous"

            main.appendChild(previousButton)

            // Creating a button for next
            const nextButton = document.createElement('button')
            nextButton.setAttribute('id', 'next')
            nextButton.setAttribute('value', nextPage)
            nextButton.innerText = "Next"

            main.appendChild(nextButton)

            // If the previousPage is null it will not show the button
            // Else it will show it. This is for the zero state when
            // the first data will be shown.
            if (previousPage === null) {
                document.getElementById('previous').style.display = 'none';
            } else {
                document.getElementById('previous').style.display = 'inline-block';
            }

            // Adds a event listener to the button with a new fetch inside of it
            // So everytime a new fetch will be called with the new page URL inside
            // of this fetch. It also cleans the data and saves the new next, previous
            // URL.

            previousButton.addEventListener('click', () => {
                Fetcher.get(previousPage)
                    .then((data) => cleanTagsData(data))
                    .then((data) => {
                        console.log(data)
                        nextPage = data.next
                        previousPage = data.previous
                        if (previousPage === null) {
                            document.getElementById('previous').style.display = 'none';
                        } else {
                            document.getElementById('previous').style.display = 'inline-block';
                        }
                        renderGames(data)
                    })

            })

            nextButton.addEventListener('click', () => {
                Fetcher.get(nextPage)
                    .then((data) => cleanTagsData(data))
                    .then((data) => {
                        nextPage = data.next
                        previousPage = data.previous
                        console.log(data)
                        if (previousPage === null) {
                            document.getElementById('previous').style.display = 'none';
                        } else {
                            document.getElementById('previous').style.display = 'inline-block';
                        }
                        renderGames(data)
                    })
            })

            // }
            return data;
        })

}


// Fetch call to get the details of the game
// Also a paramater 'name' this will get send through
// when you click on a game.
export function getGameDetails(name) {
    return Fetcher.get(`https://api.rawg.io/api/games/${name}`)
}