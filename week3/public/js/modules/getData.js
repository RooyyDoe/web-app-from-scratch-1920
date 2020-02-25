import {
    Fetcher
} from './fetcher.js'
import {
    cleanTagsData
} from './utils.js'
import {
    renderGames
} from './render.js'

// const url = 'https://api.rawg.io/api/games?genres='
// const pageSize = '& _size=40'

// Function to show the results
export function getGenres() {
    return Fetcher.get(`https://api.rawg.io/api/genres`)
}


export function getGames(genre) {
    return Fetcher.get(`https://api.rawg.io/api/games?genres=${genre}&page_size=40`)
        .then((data) => cleanTagsData(data))
        .then((data) => {
            console.log(data)
            let nextPage = data.next;
            let previousPage = data.previous;

            const previousButton = document.createElement('button')
            previousButton.setAttribute('id', 'previous')
            previousButton.setAttribute('value', previousPage)
            previousButton.innerText = "Previous"

            main.appendChild(previousButton)

            const nextButton = document.createElement('button')
            nextButton.setAttribute('id', 'next')
            nextButton.setAttribute('value', nextPage)
            nextButton.innerText = "Next"

            main.appendChild(nextButton)


            if (previousPage === null) {
                document.getElementById('previous').style.display = 'none';
            } else {
                document.getElementById('previous').style.display = 'inline-block';
            }



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


// Function to show the results
export function getGameDetails(name) {
    return Fetcher.get(`https://api.rawg.io/api/games/${name}`)
}