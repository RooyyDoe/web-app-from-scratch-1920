export default function insertGames(data) {
    
    const card = document.createElement('div'),
            h1 = document.createElement('h1'),
            p = document.createElement('p');
                    
    card.setAttribute('class', 'card')

    h1.textContent = data.name;
    p.textContent = data.slug;

    card.appendChild(h1)
    card.appendChild(p)

    return card;

}
