import { Fetcher } from '../modules/fetcher.js';
import createCard from '../modules/createCard.js';
import ejs from '../modules/lib/ejs.js'

// Set scope
{
    // Set variables
    const container = document.getElementById('gameGenres__container'),
            baseUrl = "https://api.rawg.io/api/",
            key = "genres",
            url = `${baseUrl}${key}`;

    // Loads in the first 20 results
    showResults(url)

    // Function to show the results
    function showResults(url){
        
        return Fetcher.get(url)
        .then(({results:genreResults, next} ) => {
            genreResults.forEach(data => {  
                container.appendChild(createCard(data))
            })
            return next;
        })
        .then((next) => {
            const button = document.getElementById("loadMore")
            if(button && next) {
                // button exists
                // button needs to be updated
                
                button.setAttribute('value', next)
                console.log(next)
            } else if (next){
                // button does not exists
                // button needs to be made

                const button = document.createElement('button')
                button.setAttribute('id', 'loadMore')
                button.setAttribute('value', next)
                button.innerText = "loadMore"

                button.addEventListener('click', (event) => {
                    showResults(event.target.value)
                })

                main__container.appendChild(button)
            } else {
                document.getElementById("loadMore").remove();
            }
        })
    }
            

}


