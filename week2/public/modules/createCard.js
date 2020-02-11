export default function insertGames(data) {
    
    var rawTemplate = document.getElementById("genreTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(data.name);

    var genreContainer = document.getElementById('gameGenres__container');
    genreContainer.innerHTML = ourGeneratedHTML;
    console.log("help", data.name)

}
