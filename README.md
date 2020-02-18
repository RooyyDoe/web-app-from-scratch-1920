# Web App From Scratch @cmda-minor-web 1819

The whole process of Web App From Scratch will be documented here!

![image](feest)

## Table of contents
* [To Do](#to-do-)
* [Description](#description-)
* [Usage](#usage)
  * [Packages and Technologies](#packages-and-technologies)
* [API](#api-)
* [How It Works](#how-it-works)
  * [Actor Diagram](#actor-diagram)
  * [Interaction Diagram](#interaction-diagram)
* [Sources](#sources)
* [Credits](#credits)
* [Licence](#licence)

## To Do

This is a list of things I want to do in this course:

### Week One

Live link: [Demo](https://rooyydoe.github.io/web-app-from-scratch-1920/week1/)

- [X] Brainstorm session to figure out my concept.
- [X] Deciding what API I am going to use.
- [X] Request data from the API with an asynchronous call.
- [X] Parse the data to JSON and save it in a temporary object.
- [X] Render data from the API on the overview page.
- [X] Use `fetch()` to request data from the API.
- [X] Write down code comments for better understanding.
- [X] Using ES6 modules to structure the code.
- [X] Made a `loadMore` function for loading in the next API call

### Week Two

- [X] Expanding my `README.md` with extra information
- [X] Make an Actor diagram.
- [X] Make an interaction diagram.
- [ ] Use routing for the detail pages.
- [X] Use a templating engine.
- [ ] Remake Actor/Interaction diagram.
- [ ] Deciding what module structure I am going to use 

### Week Three

- [X] **Loading..**

## Description

In the start screen of my product users are presented with a list of all gaming genres. The user can select a genre out of this list that the user wants to know more about by clicking on it. The user is then directed to a new page where all the games within the selected genre are presented in a list in the same way as the genres were previously. The games within the selected genre are obtained using an RAWG API. The user is now able to select one of these games in the list to obtain more detailed information about it. When a certain game is selected, the user will be navigated to a new page with all sorts of details about the game.

## Usage

**Clone the repository of the project**
```
git clone https://github.com/RooyyDoe/web-app-from-scratch-1920.git
```

**Run code**
```
Run the index.html into your browser
```

(Live demo if needed)

**Demo** is also live at: **Still Loading**

## How It Works

### Actor diagram

<details>
 <summary>First version</summary>
 <img width="934" alt="Schermafdruk 2020-02-10 17 37 53" src="https://user-images.githubusercontent.com/40355914/74169770-28807280-4c2c-11ea-8795-d72f0aa6b447.png">
</details>

<details> 
 <summary>Second version</summary>
 
 
 **Explained**
 
 It starts with opening the application, after this the user is going to route to one of the routing options. At first this will probably be the *Genre Overview Page*. When the user routes to `genre()` it runs the function `getGenres()` and it will look into the local storage if there is any available data that can be re-used. If not there will be a API request to the *RAWG API Database* and get the data asked for in return. This will also be saved in the `localStorage`. When this process is done it will send it back to the router that renders in the genre page.
 
**getGames Utils**

When the users are located on the *games page* they are able to filter and sort the games on how they like. When this happens the data will be manipulated with (Map, Filter or Reduce) and will return to the routes that renders in the new results to the *games page*. 

**Utils**

There are also standard Utils in the application that will be available on every page. this will be a `loadingState` and `Error Handling`. LoadingState will be used when the user is requesting a lot of data. The Error handling will be used when the user routes to a wrong `href` or the data is not available.
 

![7785f46af6744ec592ac6083a958f5f0](https://user-images.githubusercontent.com/40355914/74734687-5890cc80-524f-11ea-8b0a-aee6fa59e54f.png)

</details>



### Interaction diagram

<details>
 <summary>First version</summary>
 
 ![InteractionDiagram](https://user-images.githubusercontent.com/40355914/74184653-70f95980-4c47-11ea-8b5c-30951f68fae1.png)
 
</details>

<details>
 <summary>Second version</summary>
 
 ### **`Router.genres()`**
 
 
 ![011a26c5f1de65a07369a66c78e19683](https://user-images.githubusercontent.com/40355914/74739396-081e6c80-5259-11ea-9ce7-f85a8ae99f6c.png)
 
 ### **`Router.gameDetails()`**
 
 
 ![2810bb3c610093f7cd637c9278e9ac6f](https://user-images.githubusercontent.com/40355914/74739502-3ef48280-5259-11ea-877e-ef2738747582.png)
 
 ### **`Router.games()`**
 
  
  ![d53e82cf77e33e6d1d34783e4f6a8f87](https://user-images.githubusercontent.com/40355914/74739534-50d62580-5259-11ea-8d85-1a2b33e2042e.png)
 
</details>


## API

The data that I will be using for my applicatipon is comming directly come out of the [RAWG API](https://rawg.io/). This is the largest open video games database that there is. **RAWG** is sharing around 350,000+ games, search, and machine learning recommendations with the world.

This API is working with pagination, this will mean that I will get only 20 results when I make a call. This also can be extended by `page_size`. This call will be to heavy to render and will slow down the productivity of the application by big numbers. That's why I am going to use a `loadMore` function.

***

In the **Genre page** I am using this API endpoint: 

> https://api.rawg.io/api/genres

This will be returning the following data:

<details>
 <summary>Genre page</summary>
 
 ```javascript
 
 {
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
    "id": 0,
    "name": "string",
    "slug": "string",
    "games_count": 0,
    "image_background": "http://example.com"
    }
  ]
}
 
 ```
 
</details>

***

In the **Game overview page** I am using this API endpoint: 

> https://api.rawg.io/api//games?genres=<string>

This will be returning the following data:

<details>
 <summary>Game overview page</summary>
 
 ```javascript
 
 {
"count": 0,
"next": "http://example.com",
"previous": "http://example.com",
"results": [
    {
    "id": 0,
    "slug": "string",
    "name": "string",
    "released": "2020-02-10",
    "tba": true,
    "background_image": "http://example.com",
    "rating": 0,
    "rating_top": 0,
    "ratings": { },
    "ratings_count": 0,
    "reviews_text_count": "string",
    "added": 0,
    "added_by_status": { },
    "metacritic": 0,
    "playtime": 0,
    "suggestions_count": 0
    }
  ]
}
 
 ```
 
</details> 

***

In the **Detail page** I am using this API endpoint: 

> https://api.rawg.io/api/games/{id} 

This will be returning the following data of the game:

<details>
 <summary>Detail page</summary>
 
 ```javascript
 
 {
  "id": 0,
  "slug": "string",
  "name": "string",
  "name_original": "string",
  "description": "string",
  "metacritic": 0,
  "released": "2020-02-10",
  "tba": true,
  "updated": "2020-02-10T11:09:20Z",
  "background_image": "http://example.com",
  "background_image_additional": "string",
  "website": "http://example.com",
  "rating": 0,
  "rating_top": 0,
  "ratings": { },
  "reactions": { },
  "added": 0,
  "added_by_status": { },
  "playtime": 0,
  "screenshots_count": 0,
  "movies_count": 0,
  "creators_count": 0,
  "achievements_count": 0,
  "parent_achievements_count": "string",
  "reddit_url": "string",
  "reddit_name": "string",
  "reddit_description": "string",
  "reddit_logo": "http://example.com",
  "reddit_count": 0,
  "twitch_count": "string",
  "youtube_count": "string",
  "reviews_text_count": "string",
  "ratings_count": 0,
  "suggestions_count": 0,
  "alternative_names": [
  "string"
  ],
  "metacritic_url": "string",
  "parents_count": 0,
  "additions_count": 0,
  "game_series_count": 0
}
 
 ```
 
</details>

***



## Sources

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/) - I mostly used this site to obtain my sources
* [API Docs](https://api.rawg.io/docs/) - Instructions on how to use this API.

## Credits

* [Help from Thijs Spijker](https://github.com/iSirThijs)

# License

More information over [License](https://help.github.com/en/articles/licensing-a-repository)

[MIT](https://github.com/RooyyDoe/web-app-from-scratch-1920/blob/master/LICENSE.txt) © [Roy Kuijper](https://github.com/RooyyDoe)



<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
