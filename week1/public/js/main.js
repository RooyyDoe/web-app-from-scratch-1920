fetch('https://api.rawg.io/api/games')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });