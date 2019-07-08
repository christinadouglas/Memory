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

const qS = $("#cardUno").flip();
const qH = $("#cardTwo").flip();
const qD = $("#cardThree").flip();
const qC = $("#cardFour").flip();
const kS = $("#cardFive").flip();
const kH = $("#cardSix").flip();
const kD = $("#cardSeven").flip();
const kC = $("#cardEight").flip();
const jS = $("#cardNine").flip();
const jH = $("#cardTen").flip();
const jD = $("#cardEleven").flip();
const jC = $("#cardTwelve").flip();
const aS = $("#cardThirteen").flip();
const aH = $("#cardFourteen").flip();
const aD = $("#cardFifteen").flip();
const aC = $("#cardSixteen").flip();
const tenH = $("#cardSeventeen").flip();
const tenS = $("#cardEighteen").flip();
const tenC = $("#cardNineteen").flip();
const tenD = $("#cardTwenty").flip();
const nineS = $("#cardTwentyOne").flip();
const nineH = $("#cardTwentyTwo").flip();
const nineD = $("#cardTwentyThree").flip();
const nineC = $("#cardTwentyFour").flip();
const eightS = $("#cardTwentyFive").flip();
const eightH = $("#cardTwentySix").flip();
const eightC = $("#cardTwentySeven").flip();
const eightD = $("#cardTwentyEight").flip();
const sevenH = $("#cardTwentyNine").flip();
const sevenS = $("#cardThirty").flip();
const sevenC = $("#cardThirtyOne").flip();
const sevenD = $("#cardThirtyTwo").flip();
const sixH = $("#cardThirtyThree").flip();
const sixS = $("#cardThirtyFour").flip();
const sixD = $("#cardThirtyFive").flip();
const sixC = $("#cardThirtySix").flip();
const fiveS = $("#cardThirtySeven").flip();
const fiveH = $("#cardThirtyEight").flip();
const fiveD = $("#cardThirtyNine").flip();
const fiveC = $("#cardFourty").flip();
const fourS = $("#cardFourtyOne").flip();
const fourH = $("#cardFourtyTwo").flip();
const fourD = $("#cardFourtyThree").flip();
const fourC = $("#cardFourtyFour").flip();
const threeH = $("#cardFourtyFive").flip();
const threeS = $("#cardFourtySix").flip();
const threeC = $("#cardFourtySeven").flip();
const threeD = $("#cardFourtyEight").flip();
const twoS = $("#cardFourtyNine").flip();
const twoH = $("#cardFifty").flip();
const twoC = $("#cardFiftyOne").flip();
const twoD = $("#cardFiftyTwo").flip();

// const game = () => {

// function deck(){
//     let num = Math.floor(Math.random() * cardImages.length); 
//     cardOne = cardImages[num];
//     };
// deck();

// game.deck();

// const twoUpper = document.querySelector("#twoUpper");

// twoUpper.appendChild(cardOne);
