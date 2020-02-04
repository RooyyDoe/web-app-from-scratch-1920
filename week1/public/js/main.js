import { Fetcher } from '../modules/fetcher.js';
import createCard from '../modules/createCard.js';

// Set scope
{
    // Set variables
    const container = document.createElement('div'),
            baseUrl = "https://api.rawg.io/api/",
            key = "games",
            url = `${baseUrl}${key}`;

    // Set Attributes
    container.setAttribute('class', 'container')

    // appendChild
    main.appendChild(container)

    showResults(url)

    function showResults(url){
        return Fetcher.get(url)
        .then(({results:gameResults, next} ) => {
            gameResults.forEach(data => {  
                container.appendChild(createCard(data, container))
            })
            return next;
        })
        .then((next) => {
            console.log(next)
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

                main.appendChild(button)
            } else {
                document.getElementById("button-2").remove();
            }
        })
    }
    // Fetching API call    
    // Fetcher.get(url)
    //     .then(({results:gameResults, next} ) => {
    //         gameResults.forEach(data => {  
    //             container.appendChild(createCard(data, container))
    //         })
    //         return next;
    //     })
    //     .then((data) => console.log(data))
            // const button = document.createElement('button')
            // button.setAttribute('id', 'loadMore')
            // button.innerText = "loadMore"
            // button.addEventListener('click', () => {
            //     Fetcher.get(next).then(({results:gameResults}) => {
            //         gameResults.forEach(data => {  
            //             container.appendChild(createCard(data, container))
            //         })
            //     })
            // });
            // main.appendChild(button)
            // console.log(button)
        // })
            

}


