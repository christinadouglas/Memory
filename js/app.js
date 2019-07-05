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

console.log(hearts);

twoOfHeartsDiv = document.querySelector("#twoH");
twoOfHeartsDiv = twoOfHearts;

threeOfHeartsDiv = document.querySelector("#threeH");
threeOfHeartsDiv = threeOfHearts;

fourOfHeartsDiv = document.querySelector("#fourH");
fourOfHeartsDiv = fourOfHearts;

fiveOfHeartsDiv = document.querySelector("#fiveH");
fiveOfHeartsDiv = fiveOfHearts;

sixOfHeartsDiv = document.querySelector("#sixH");
sixOfHeartsDiv = sixOfHearts;

sevenOfHeartsDiv = document.querySelector("#sevenH");
sevenOfHeartsDiv = sevenOfHearts;

eightOfHeartsDiv = document.querySelector("#eightH");
eightOfHeartsDiv = eightOfHearts;

nineOfHeartsDiv = document.querySelector("#nineH");
nineOfHeartsDiv = nineOfHearts;

tenOfHeartsDiv = document.querySelector("#tenH");
tenOfHeartsDiv = tenOfHearts;

jackOfHeartsDiv = document.querySelector("#jackH");
jackOfHeartsDiv = jackOfHearts;

queenOfHeartsDiv = document.querySelector("#queenH");
queenOfHeartsDiv = queenOfHearts;

kingOfHeartsDiv = document.querySelector("#kingH");
kingOfHeartsDiv = kingOfHearts;

aceOfHeartsDiv = document.querySelector("#aceH");
aceOfHeartsDiv = aceOfHearts;

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
const kingOfDiamonds = new Diamonds(10);
const aceOfDiamonds = new Diamonds(1 && 11);

const diamonds = [twoOfDiamonds, threeOfDiamonds, fourOfDiamonds,
fiveOfDiamonds, sixOfDiamonds, sevenOfDiamonds, eightOfDiamonds, 
nineOfDiamonds, tenOfDiamonds, jackOfDiamonds, queenOfDiamonds,
kingOfDiamonds, aceOfDiamonds];
    
console.log(diamonds);

twoOfDiamondsDiv = document.querySelector("#twoS");
twoOfDiamondsDiv = twoOfDiamonds;

threeOfDiamondsDiv = document.querySelector("#threeS");
threeOfDiamondsDiv = threeOfDiamonds;

fourOfDiamondsDiv = document.querySelector("#fourS");
fourOfDiamondsDiv = fourOfDiamonds;

fiveOfDiamondsDiv = document.querySelector("#fiveS");
fiveOfDiamondsDiv = fiveOfDiamonds;

sixOfDiamondsDiv = document.querySelector("#sixS");
sixOfDiamondsDiv = sixOfDiamonds;

sevenOfDiamondsDiv = document.querySelector("#sevenS");
sevenOfDiamondsDiv = sevenOfDiamonds;

eightOfDiamondsDiv = document.querySelector("#twoS");
eightOfDiamondsDiv = eightOfDiamonds;

nineOfDiamondsDiv = document.querySelector("#nineS");
nineOfDiamondsDiv = nineOfDiamonds;

tenOfDiamondsDiv = document.querySelector("#tenS");
tenOfDiamondsDiv = tenOfDiamonds;

jackOfDiamondsDiv = document.querySelector("#jackS");
jackOfDiamondsDiv = jackOfDiamonds;

queenOfDiamondsDiv = document.querySelector("#queenS");
queenOfDiamondsDiv = queenOfDiamonds;

kingOfDiamondsDiv = document.querySelector("#kingS");
kingOfDiamondsDiv = kingOfDiamonds;

aceOfDiamondsDiv = document.querySelector("#aceS");
aceOfDiamondsDiv = aceOfDiamonds;


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
const kingOfClubs = new Clubs(10);
const aceOfClubs = new Clubs(1  && 11);

const clubs = [twoOfClubs, threeOfClubs, fourOfClubs, fiveOfClubs, 
sixOfClubs, sevenOfClubs, eigthOfClubs, nineOfDiamonds, tenOfClubs, 
jackOfClubs, queenOfClubs, kingOfClubs, aceOfClubs];

console.log(clubs);

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

const reshufflePile = []

const visibleCard = Math.floor(Math.random() * hearts.length);
reshufflePile.push(visibleCard);
console.log(visibleCard);
console.log(reshufflePile);

// function matchHearts() {
//     if (hearts && number ===2) {
//     }
//     if (hearts && number ===3) {

//     }
//     if (hearts && number ===5) {
//     }
//     if (hearts && number ===5) {
//     }
    

// }
// function pickCard() {
// }



