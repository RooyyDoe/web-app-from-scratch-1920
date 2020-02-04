import { Fetcher } from './fetcher.js';
import createCard from '../modules/createCard.js';

const url = "https://api.rawg.io/api/games?page=2";
const button = document.getElementById('loadMore');
const container = document.getElementsByClassName('container');

loadMore()

function loadMore() {
    
    Fetcher.get(url)
        .then((response) => {
            // console.log(response);
            return response.results;
        })
        .then((nextGameResults) => { 
            console.log(nextGameResults);
            button.addEventListener('click', () => {
                test(nextGameResults);
            });
        })
    
}

function test(nextPage){
    nextPage.forEach(data => {
        container.appendChild(createCard(data, container))
    })
}

