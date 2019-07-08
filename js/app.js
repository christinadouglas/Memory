class Cards {
    constructor(number, suit) {
        this.number = number;
        this.suit = suit;
    }
}

class Hearts extends Cards {
    constructor(number, suit) {
        super(number, suit);
        this.suit = 'hearts';
    }
} 

const twoOfHearts = new Hearts(2);
const threeOfHearts = new Hearts(3); 
const fourOfHearts = new Hearts(4);
const fiveOfHearts = new Hearts(5);
const sixOfHearts = new Hearts(6);
const sevenOfHearts = new Hearts(7);
const eightOfHearts = new Hearts(8);
const nineOfHearts = new Hearts(9);
const tenOfHearts = new Hearts(10);
const jackOfHearts = new Hearts(10);
const queenOfHearts = new Hearts(10);
const kingOfHearts = new Hearts(10);
const aceOfHearts = new Hearts(1 && 11);

const hearts = [twoOfHearts, threeOfHearts, fourOfHearts, 
fiveOfHearts, sixOfHearts, sevenOfHearts, eightOfHearts, nineOfHearts, 
tenOfHearts, jackOfHearts, queenOfHearts, kingOfHearts, aceOfHearts];

class Diamonds extends Cards {
    constructor(number, suit) {
        super(number, suit);
        this.suit = 'diamonds';
    }
}

const twoOfDiamonds = new Diamonds(2);
const threeOfDiamonds = new Diamonds(3);
const fourOfDiamonds = new Diamonds(4);
const fiveOfDiamonds = new Diamonds(5);
const sixOfDiamonds = new Diamonds(6);
const sevenOfDiamonds = new Diamonds(7);
const eightOfDiamonds = new Diamonds(8);
const nineOfDiamonds = new Diamonds(9);
const tenOfDiamonds = new Diamonds(10);
const jackOfDiamonds = new Diamonds(10);
const queenOfDiamonds = new Diamonds(10);
const kingOfDiamonds = new Diamonds(10, 'king');
const aceOfDiamonds = new Diamonds(1 && 11);

const diamonds = [twoOfDiamonds, threeOfDiamonds, fourOfDiamonds,
fiveOfDiamonds, sixOfDiamonds, sevenOfDiamonds, eightOfDiamonds, 
nineOfDiamonds, tenOfDiamonds, jackOfDiamonds, queenOfDiamonds,
kingOfDiamonds, aceOfDiamonds];

class Clubs extends Cards {
    constructor(number, suit) {
        super(number, suit);
        this.suit = 'clubs';
    }
}

const twoOfClubs = new Clubs(2);
const threeOfClubs = new Clubs(3);
const fourOfClubs = new Clubs(4);
const fiveOfClubs = new Clubs(5);
const sixOfClubs = new Clubs(6);
const sevenOfClubs = new Clubs(7);
const eigthOfClubs = new Clubs(8);
const nineOfClubs = new Clubs(9);
const tenOfClubs = new Clubs(10);
const jackOfClubs = new Clubs(10);
const queenOfClubs = new Clubs(10);
const kingOfClubs = new Clubs(10, 'king');
const aceOfClubs = new Clubs(1  && 11);

const clubs = [twoOfClubs, threeOfClubs, fourOfClubs, fiveOfClubs, 
sixOfClubs, sevenOfClubs, eigthOfClubs, nineOfClubs, tenOfClubs, 
jackOfClubs, queenOfClubs, kingOfClubs, aceOfClubs];

class Spades extends Cards {
    constructor(number, suit) {
        super(number, suit);
        this.suit = 'spades';
    }
}

const twoOfSpades = new Spades(2);
const threeOfSpades = new Spades(3);
const fourOfSpades = new Spades(4);
const fiveOfSpades = new Spades(5);
const sixOfSpades = new Spades(6);
const sevenOfSpades = new Spades(7);
const eightOfSpades = new Spades(8);
const nineOfSpades = new Spades(9);
const tenOfSpades = new Spades(10);
const jackOfSpades = new Spades(10);
const queenOfSpades = new Spades(10);
const kingOfSpades = new Spades(10);
const aceOfSpades = new Spades(1 && 11);

const spades = [twoOfSpades, threeOfSpades, fourOfSpades, fiveOfSpades,
sixOfSpades, sevenOfSpades, eightOfSpades, nineOfSpades, tenOfSpades,
jackOfSpades, queenOfSpades, kingOfSpades, aceOfSpades];

const oneUpper = document.querySelector("#oneUpper");
const backPile = document.querySelector("#back");

oneUpper.appendChild(backPile);

const thOne = document.querySelector("#one");

const backTwo = document.querySelector("#backTwo");
const thTwo = document.querySelector("#two");
thTwo.appendChild(backTwo);
$(backTwo).draggable();

const backThree = document.querySelector("#backThree");
const thThree = document.querySelector("#three");
thThree.appendChild(backThree);
$(backThree).draggable();

const backFour = document.querySelector("#backFour");
const thFour = document.querySelector("#four");
thFour.appendChild(backFour);
$(backFour).draggable();

const backFive = document.querySelector("#backFive");
const thFive = document.querySelector("#five");
thFive.appendChild(backFive);
$(backFive).draggable();

const backSix = document.querySelector("#backSix");
const thSix = document.querySelector("#six");
thSix.appendChild(backSix);
$(backSix).draggable();

const backSeven = document.querySelector("#backSeven");
const thSeven = document.querySelector("#seven");
thSeven.appendChild(backSeven);
$(backSeven).draggable();

const qS = document.querySelector("#QS");
$(qS).draggable();

const qH = document.querySelector("#QH");
$(qH).draggable();

const qD = document.querySelector("#QD");
$(qD).draggable();

const qC = document.querySelector("#QC");
$(qC).draggable();

const kS = document.querySelector("#KS");
$(kS).draggable();

const kH = document.querySelector("#KH");
$(kH).draggable();

const kD = document.querySelector("#KD");
$(kD).draggable();

const kC = document.querySelector("#KC");
$(kC).draggable();

const jS = document.querySelector("#JS");
$(jS).draggable();

const jH = document.querySelector("#JH");
$(jH).draggable();

const jD = document.querySelector("#JD");
$(jD).draggable();

const jC = document.querySelector("#JC");
$(jC).draggable();

const aS = document.querySelector("#AS");
$(aS).draggable();

const aH = document.querySelector("#AH");
$(aH).draggable();

const aD = document.querySelector("#AD");
$(aD).draggable();

const aC = document.querySelector("#AC");
$(aC).draggable();

const tenS = document.querySelector("#tenS");
$(tenS).draggable();

const tenH = document.querySelector("#tenH");
$(tenH).draggable();

const tenD = document.querySelector("#tenD");
$(tenD).draggable();

const tenC = document.querySelector("#tenC");
$(tenC).draggable();

const nineS = document.querySelector("#nineS");
$(nineS).draggable();

const nineH = document.querySelector("#nineH");
$(nineH).draggable();

const nineD = document.querySelector("#nineD");
$(nineD).draggable();

const nineC = document.querySelector("#nineC");
$(nineC).draggable();

const eightS = document.querySelector("#eightS");
$(eightS).draggable();

const eightH = document.querySelector("#eightH");
$(eightH).draggable();

const eightD = document.querySelector("#eightD");
$(eightD).draggable();

const eightC = document.querySelector("#eightC");
$(eightC).draggable();

const sevenS = document.querySelector("#sevenS");
$(sevenS).draggable();

const sevenH = document.querySelector("#sevenH");
$(sevenH).draggable();

const sevenD = document.querySelector("#sevenD");
$(sevenD).draggable();

const sevenC = document.querySelector("#sevenC");
$(sevenC).draggable();

const sixS = document.querySelector("#sixS");
$(sixS).draggable();

const sixH = document.querySelector("#sixH");
$(sixH).draggable();

const sixD = document.querySelector("#sixD");
$(sixD).draggable();

const sixC = document.querySelector("#sixC");
$(sixC).draggable();

const fiveS = document.querySelector("#fiveS");
$(fiveS).draggable();

const fiveH = document.querySelector("#fiveH");
$(fiveH).draggable();

const fiveD = document.querySelector("#fiveD");
$(fiveD).draggable();

const fiveC = document.querySelector("#fiveC");
$(fiveC).draggable();

const fourS = document.querySelector("#fourS");
$(fourS).draggable();

const fourH = document.querySelector("#fourH");
$(fourH).draggable();

const fourD = document.querySelector("#fourD");
$(fourD).draggable();

const fourC = document.querySelector("#fourC");
$(fourC).draggable();

const threeS = document.querySelector("#threeS");
$(threeS).draggable();

const threeH = document.querySelector("#threeH");
$(threeH).draggable();

const threeD = document.querySelector("#threeD");
$(threeD).draggable();

const threeC = document.querySelector("#threeC");
$(threeC).draggable();

const twoS = document.querySelector("#twoS");
$(twoS).draggable();

const twoH = document.querySelector("#twoH");
$(twoH).draggable();

const twoD = document.querySelector("#twoD");
$(twoD).draggable();

const twoC = document.querySelector("#twoC");
$(twoC).draggable();

const cornerCard = document.querySelector("#cornerCard");
const upperSeven = document.querySelector("#sevenUpper")
upperSeven.appendChild(cornerCard);

const cornerCardTwo = document.querySelector("#cornerCardTwo");
const upperSix = document.querySelector("#sixUpper")
upperSix.appendChild(cornerCardTwo);


const cornerCardThree = document.querySelector("#cornerCardThree");
const upperFive = document.querySelector("#fiveUpper")
upperFive.appendChild(cornerCardThree);


const cornerCardFour = document.querySelector("#cornerCardFour");
const upperFour = document.querySelector("#fourUpper")
upperFour.appendChild(cornerCardFour);

cardImages = [twoC, twoD, twoC, twoH, threeC, threeD, threeH,
fourC, fourD, fourH, fourS, fiveS, fiveC, fiveD, fiveH, sixC,
sixD, sixH, sixS, sevenC, sevenD, sevenH, sevenS, eightC, 
eightD, eightH, eightS, nineC, nineD, nineH, nineS, tenC,
tenD, tenH, tenS, jS, jC, jD, jH, qC,qD, qH, qS, kS, kD, kC,
kH]

const reshufflePile = [];

let cardOne = document.images;
let cardTwo = document.images;
let cardThree = document.images;
let cardFour = document.images;
let cardFive = document.images;
let cardSix = document.images;
let cardSeven = document.images
let cardEight = document.images;
let cardEightN = document.images;
let cardEightNN = document.images;
let cardNine = document.images;
let cardTen = document.images;
let cardEleven = document.images;
let cardTwelve = document.images;
let cardThirteen = document.images;
let cardFourteen = document.images;
let cardFifteen = document.images;
let cardSixteen = document.images;
let cardSeventeen = document.images;
let cardEighteen = document.images;
let cardNineteen = document.images;
let cardTwenty = document.images;
let cardTwentyOne = document.images;
let cardTwentyTwo = document.images;
let cardTwentyThree = document.images;

const game = () => {

function deckOne(){
    let num = Math.floor(Math.random() * cardImages.length); 
    cardOne = cardImages[num];
    };
deckOne();

function deckTwo(){
    let num = Math.floor(Math.random() * cardImages.length); 
    cardTwo = cardImages[num];
    };
deckTwo();

function deckThree(){
    let num = Math.floor(Math.random() * cardImages.length); 
    cardThree = cardImages[num];
    };
deckThree();

function deckFour(){
    let num = Math.floor(Math.random() * cardImages.length); 
    cardFour = cardImages[num];
    };
deckFour();

function deckFive() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardFive = cardImages[num];
    }
deckFive();

function deckSix() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardSix = cardImages[num];
    }
deckSix();

function deckSeven() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardSeven = cardImages[num];
    }
deckSeven();

function deckEight() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardEight = cardImages[num];
    }
deckEight();

function deckEightN() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardEightN = cardImages[num];
    }
deckEightN();

function deckEightNN() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardEightNN = cardImages[num];
    }
deckEightNN();

function deckNine() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardNine = cardImages[num];
    }
deckNine();

function deckTen() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardTen = cardImages[num];
    }
deckTen();

function deckEleven() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardEleven = cardImages[num];
    }
deckEleven();

function deckTwelve() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardTwelve = cardImages[num];
    }
deckTwelve();

function deckThirteen() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardThirteen = cardImages[num];
    }
deckThirteen();

function deckFourteen() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardFourteen = cardImages[num];
    }
deckFourteen();

function deckFifteen() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardFifteen = cardImages[num];
    }
deckFifteen();

function deckSixteen() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardSixteen = cardImages[num];
    }
deckSixteen();

function deckSeventeen() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardSeventeen = cardImages[num];
    }
deckSeventeen();

function deckEighteen() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardEighteen = cardImages[num];
    }
deckEighteen();

function deckNineteen() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardNineteen = cardImages[num];
    }
deckNineteen();

function deckTwenty() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardTwenty = cardImages[num];
    }
deckTwenty();

function deckTwentyOne() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardTwentyOne = cardImages[num];
    }
deckTwentyOne();

function deckTwentyTwo() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardTwentyTwo = cardImages[num];
    }
deckTwentyTwo();

function deckTwentyThree() {
    let num = Math.floor(Math.random() * cardImages.length); 
    cardTwentyThree = cardImages[num];
    }
deckTwentyThree();
};

game();

const twoUpper = document.querySelector("#twoUpper");

twoUpper.appendChild(cardOne);

const divOne = document.createElement("div");
divOne.id = "divOne"

twoUpper.appendChild(divOne);

const divTwo = document.createElement("div");
divTwo.id = "divTwo"
twoUpper.appendChild(divTwo);

const divThree = document.createElement("div");
divThree.id = "divThree"
twoUpper.appendChild(divThree);

divOne.appendChild(cardOne);
divTwo.appendChild(cardTwo);
divThree.appendChild(cardThree);

thOne.appendChild(cardFour)

// const divRowTwo = document.createElement("div");
// divRowTwo.id = "divRowTwo";
// thTwo.appendChild(divRowTwo);

// divRowTwo.appendChild(cardFive);

// const divRowThree = document.createElement("div");
// divRowThree.id = "divRowThree";
// thThree.appendChild(divRowThree);

// divRowThree.appendChild(cardSix);

// const divRowThreeN = document.createElement("div");
// divRowThreeN.id = "divRowThreeN";
// thThree.appendChild(divRowThreeN)

// divRowThreeN.appendChild(cardSeven);

// const divRowFour = document.createElement("div");
// divRowFour.id = "divRowFour";
// thFour.appendChild(divRowFour);

// divRowFour.appendChild(cardEight);

// const divRowFourN = document.createElement("div");
// divRowFourN.id = "divRowFourN";
// thFour.appendChild(divRowFourN);

// divRowFourN.appendChild(cardEightN);

// const divRowFourNN = document.createElement("div");
// divRowFourNN.id = "divRowFourNN";
// thFour.appendChild(divRowFourNN);

// divRowFourNN.appendChild(cardEightNN);

// const divRowFive = document.createElement("div");
// divRowFive.id = "divRowFive";
// thFive.appendChild(divRowFive);

// divRowFive.appendChild(cardNine);

// const divRowFiveN = document.createElement("div");
// divRowFiveN.id = "divRowFiveN";
// thFive.appendChild(divRowFiveN)

// divRowFiveN.appendChild(cardTen);

// const divRowFiveNN = document.createElement("div");
// divRowFiveNN.id = "divRowFiveNN";
// thFive.appendChild(divRowFiveNN)

// divRowFiveNN.appendChild(cardEleven);

// const divRowFiveNNN = document.createElement("div");
// divRowFiveNNN.id = "divRowFiveNNN";
// thFive.appendChild(divRowFiveNNN)

// divRowFiveNNN.appendChild(cardTwelve);

// const divRowSix = document.createElement("div");
// divRowSix.id = "divRowSix";
// thSix.appendChild(divRowSix);

// divRowSix.appendChild(cardThirteen);

// const divRowSixN = document.createElement("div");
// divRowSixN.id = "divRowSixN";
// thSix.appendChild(divRowSixN);

// // divRowSixN.appendChild(cardFourteen);

// const divRowSixNN = document.createElement("div");
// divRowSixNN.id = "divRowSixNN";
// thSix.appendChild(divRowSixNN);

// divRowSixNN.appendChild(cardFifteen);

// const divRowSixNNN = document.createElement("div");
// divRowSixNNN.id = "divRowSixNNN";
// thSix.appendChild(divRowSixNNN);

// divRowSixNNN.appendChild(cardSixteen);

// const divRowSixNNNN = document.createElement("div");
// divRowSixNNNN.id = "divRowSixNNNN";
// thSix.appendChild(divRowSixNNNN);

// divRowSixNNNN.appendChild(cardSeventeen);

// const divRowSeven = document.createElement("div");
// divRowSeven.id = "divRowSeven";
// thSeven.appendChild(divRowSeven);

// divRowSeven.appendChild(cardEighteen);

// const divRowSevenN = document.createElement("div");
// divRowSevenN.id = "divRowSevenN";
// thSeven.appendChild(divRowSevenN);

// divRowSevenN.appendChild(cardNineteen);

// const divRowSevenNN = document.createElement("div");
// divRowSevenNN.id = "divRowSevenNN";
// thSeven.appendChild(divRowSevenNN);

// divRowSevenNN.appendChild(cardTwenty);

// const divRowSevenNNN = document.createElement("div");
// divRowSevenNNN.id = "divRowSevenNNN";
// thSeven.appendChild(divRowSevenNNN);

// divRowSevenNNN.appendChild(cardTwentyOne);

// const divRowSevenNNNN = document.createElement("div");
// divRowSevenNNNN.id = "divRowSevenNNNN";
// thSeven.appendChild(divRowSevenNNNN);

// // divRowSevenNNNN.appendChild(cardTwentyTwo);

// const divRowSevenNNNNN = document.createElement("div");
// divRowSevenNNNNN.id = "divRowSevenNNNNN";
// thSeven.appendChild(divRowSevenNNNNN);

// divRowSevenNNNNN.appendChild(cardTwentyThree);

const timerSpan = document.querySelector("#timer");

let msec = 00
let sec = 00;
let min = 00;
function countdown() {
    msec += 1;
    if (msec == 60) {
        sec += 1;
        msec = 00;
    if (sec == 60) {
        sec = 00;
        min += 1;
        }
    }
        timerSpan.innerHTML = (`${min}:${sec}:${msec}`)
}
const timer = setInterval(countdown, 1000);

function clear() {
    clearInterval(timer);
}


// reshuffle button
// const reshuffleButton = document.querySelector("#reshuffle")
// reshuffleButton.addEventListener("click", game.deckOne)

$("#card").flip();
$("#cardTwo").flip();
$("#cardThree").flip();
$("#cardFour").flip();
$("#cardFive").flip();
$("#cardSix").flip();
$("#cardSeven").flip();
$("#cardEight").flip();
$("#cardNine").flip();
$("#cardTen").flip();
$("#cardEleven").flip();
$("#cardTwelve").flip();
$("#cardThirteen").flip();
$("#cardFourteen").flip();
$("#cardFifteen").flip();
$("#cardSixteen").flip();
$("#cardSeventeen").flip();
$("#cardEighteen").flip();
$("#cardNineteen").flip();
$("#cardTwenty").flip();
$("#cardTwentyOne").flip();
$("#cardTwentyTwo").flip();
$("#cardTwentyThree").flip();
$("#cardTwentyFour").flip();