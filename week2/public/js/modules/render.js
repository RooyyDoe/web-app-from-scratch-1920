export function renderGenre(data) {
    
    let rawTemplate = document.getElementById("genreTemplate").textContent;
    let compiledTemplate = Handlebars.compile(rawTemplate, data);
    let ourGeneratedHTML = compiledTemplate(data);

    let genreContainer = document.getElementById('gameGenres__container');
    genreContainer.insertAdjacentHTML("afterbegin", ourGeneratedHTML);

}