const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
// console.log(cardArray);
let cardChosen = [];
let cardChosenIds = [];
const cardWon = [];
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");

    card.setAttribute("data-id", i);
    // console.log(card);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();
function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneID = cardChosenIds[0];
  const optionTwoId = cardChosenIds[1];
  console.log("Check for match");
  if (optionOneID == optionTwoId) {
    cards[optionOneID].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("You clicked the same card!");
  } else if (cardChosen[0] === cardChosen[1]) {
    alert("You found a match!");
    cards[optionOneID].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneID].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardWon.push(cardChosen);
  } else {
    cards[optionOneID].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Sorry,try again!");
  }
  resultDisplay.innerHTML = cardWon.length;
  cardChosen = [];
  cardChosenIds = [];

  if (cardWon.length === cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations You find all matches!";
  }
}
function flipCard() {
  let cardID = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardID].name);
  cardChosenIds.push(cardID);
  this.setAttribute("src", cardArray[cardID].img);

  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
