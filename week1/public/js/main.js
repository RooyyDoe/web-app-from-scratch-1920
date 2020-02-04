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

    // Fetching API call    
    Fetcher.get(url)
        .then(({results:gameResults, next} ) => {
            gameResults.forEach(data => {  
                container.appendChild(createCard(data, container))
            })
            const button = document.createElement('button')
            button.setAttribute('id', 'loadMore')
            button.innerText = "loadMore"
            button.addEventListener('click', () => {
                Fetcher.get(next).then(({results:gameResults}) => {
                    gameResults.forEach(data => {  
                        container.appendChild(createCard(data, container))
                    })
                })
            });
            main.appendChild(button)
            console.log(button)
        })
            

}


