import { Fetcher } from './fetcher.js';


// const url = 'https://api.rawg.io/api/games?genres='
// const pageSize = '& _size=40'

// Function to show the results
export function getGenres(){
    return Fetcher.get(`https://api.rawg.io/api/genres`)
}
export function getGames(genre) {
    return Fetcher.get(`https://api.rawg.io/api/games?genres=${genre}&page_size=40`)
        .then((data) => {
            let dataObj = data

            dataObj.results.map(item => {
                let newTagArray = item.tags.map(tag => {
                    return tag = {
                        name: tag.name,
                        language: tag.language
                    }
                })
                let filteredArray = newTagArray.filter(tag => tag.language === 'eng')
                item.tags = filteredArray;
                return item;
            })
            return dataObj
        })
    .then((data) => {
        const nextPage = data.next;

        console.log(nextPage)

        const button = document.getElementById("loadMore")
        if(button && nextPage) {
            // button exists
            // button needs to be updated

            button.setAttribute('value', nextPage)
            console.log(nextPage)
        } else if (nextPage){
            // button does not exists
            // button needs to be made

            const button = document.createElement('button')
            button.setAttribute('id', 'loadMore')
            button.setAttribute('value', nextPage)
            button.innerText = "loadMore"

            button.addEventListener('click', () => {
                getGames()
            })

            main.appendChild(button)
        } else {
            document.getElementById("loadMore").remove();
        }
        return data;
    })

}   
// Function to show the results
export function getGameDetails(name){
    return Fetcher.get(`https://api.rawg.io/api/games/${name}`)
}
