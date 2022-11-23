const beerCards = document.getElementById("beer-cards");

function createCard(imageSrc, title, description) {
  const cardUnit = document.createElement("div");
  cardUnit.setAttribute("class", "card-unit");

  const cardImage = document.createElement("img");
  cardImage.setAttribute("src", imageSrc);
  cardImage.setAttribute("class", "card-image");
  cardImage.setAttribute("alt", "imagen a cambiar");

  const cardH3 = document.createElement("h3");
  const textH3 = document.createTextNode(title)
  cardH3.appendChild(textH3);

  const cardP = document.createElement("p");
  const textP = document.createTextNode(description);
  cardP.appendChild(textP);

  const cardA = document.createElement("a");
  const textA = document.createTextNode("Learn more");
  cardA.setAttribute("href","#");
  cardA.setAttribute("class", "cards-links");
  cardA.appendChild(textA);

  cardUnit.appendChild(cardImage);
  cardUnit.appendChild(cardH3);
  cardUnit.appendChild(cardA);
  cardUnit.appendChild(cardP);

  return cardUnit;
}

ADIOSITO :kiss:

fetch("https://api.punkapi.com/v2/beers")
  .then(response => {
    return response.json()
  })
  .then(beers => {
    beers.slice(0, 3).forEach(beer => {
      const beerCard = createCard(beer.image_url, beer.name, beer.description);
      beerCards.appendChild(beerCard);
    });
  });

// beers = [
//   {
//     name: "Simplify",
//     image_url: "./projects-section/1.jpg",
//     description: "UI Design & App Development",
//   },
//   {
//     name: "Dashcoin",
//     image_url: "./projects-section/3.jpg",
//     description: "Web Development",
//   },
//   {
//     name: "Vectorify",
//     image_url: "./projects-section/6.jpg",
//     description: "User Experience Design",
//   },
// ]

