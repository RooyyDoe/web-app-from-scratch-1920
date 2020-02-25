import { Fetcher } from './fetcher.js';


const url = 'https://api.rawg.io/api/games?genres='
const pageSize = '&page_size=40'

// Function to show the results
export function getGenres(){
    return Fetcher.get(`https://api.rawg.io/api/genres`)
}
export function getGames(genre) {
    return Fetcher.get(url + genre + pageSize)
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



    // console.log()

    // Object.keys(item).map(prop => {
    //     if (!necessaryProperties.includes(prop)) {
    //         delete item[prop]
    //     }
    // })

    // data.map(item => { //Loop through the data array
    //     Object.keys(item).map(prop => { //Loop through the individual data objects in the array
    //         if (!properties.includes(prop)) { //If prop isn't one of the necessary properties delete it
    //             delete item[prop]
    //         }
    //     })
    // })
    // })
    // console.log(dataObj)
    // })
    //     .then((gameData) => {
    //         return gameData.results.map(object => {
    //             object.tags.map(e => {
    //                 return e.name, e.language;
    //             })
    //             return object
    //         })

    // })
    // .then((data) => {
    //     const nextPage = data.next;

    //     const button = document.getElementById("loadMore")
    //     if(button && nextPage) {
    //         // button exists
    //         // button needs to be updated

    //         button.setAttribute('value', nextPage)
    //         console.log(nextPage)
    //     } else if (nextPage){
    //         // button does not exists
    //         // button needs to be made

    //         const button = document.createElement('button')
    //         button.setAttribute('id', 'loadMore')
    //         button.setAttribute('value', nextPage)
    //         button.innerText = "loadMore"

    //         button.addEventListener('click', () => {
    //             // Moet iets komen??
    //         })

    //         main.appendChild(button)
    //     } else {
    //         document.getElementById("loadMore").remove();
    //     }
    //     return data;
    // })

}   
// Function to show the results
export function getGameDetails(name){
    return Fetcher.get(`https://api.rawg.io/api/games/${name}`)
}
