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

twoOfHeartsDiv = document.querySelector("#twoH");
twoOfHeartsDiv = hearts[0];

threeOfHeartsDiv = document.querySelector("#threeH");
threeOfHeartsDiv = hearts[1];

fourOfHeartsDiv = document.querySelector("#fourH");
fourOfHeartsDiv = hearts[2];

fiveOfHeartsDiv = document.querySelector("#fiveH");
fiveOfHeartsDiv = hearts[3];

sixOfHeartsDiv = document.querySelector("#sixH");
sixOfHeartsDiv = hearts[4];

sevenOfHeartsDiv = document.querySelector("#sevenH");
sevenOfHeartsDiv = hearts[5];

eightOfHeartsDiv = document.querySelector("#eightH");
eightOfHeartsDiv = hearts[6];

nineOfHeartsDiv = document.querySelector("#nineH");
nineOfHeartsDiv = hearts[7];

tenOfHeartsDiv = document.querySelector("#tenH");
tenOfHeartsDiv = hearts[8];

jackOfHeartsDiv = document.querySelector("#jackH");
jackOfHeartsDiv = hearts[9];

queenOfHeartsDiv = document.querySelector("#queenH");
queenOfHeartsDiv = hearts[10];

kingOfHeartsDiv = document.querySelector("#kingH");
kingOfHeartsDiv = hearts[11];

aceOfHeartsDiv = document.querySelector("#aceH");
aceOfHeartsDiv = hearts[12];

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

twoOfDiamondsDiv = document.querySelector("#twoD");
twoOfDiamondsDiv = diamonds[0];

threeOfDiamondsDiv = document.querySelector("#threeD");
threeOfDiamondsDiv = diamonds[1];

fourOfDiamondsDiv = document.querySelector("#fourD");
fourOfDiamondsDiv = diamonds[2];

fiveOfDiamondsDiv = document.querySelector("#fiveD");
fiveOfDiamondsDiv = diamonds[3];

sixOfDiamondsDiv = document.querySelector("#sixD");
sixOfDiamondsDiv = diamonds[4];

sevenOfDiamondsDiv = document.querySelector("#sevenD");
sevenOfDiamondsDiv = diamonds[5];

eightOfDiamondsDiv = document.querySelector("#twoD");
eightOfDiamondsDiv = diamonds[6];

nineOfDiamondsDiv = document.querySelector("#nineD");
nineOfDiamondsDiv = diamonds[7];

tenOfDiamondsDiv = document.querySelector("#tenD");
tenOfDiamondsDiv = diamonds[8];

jackOfDiamondsDiv = document.querySelector("#jackD");
jackOfDiamondsDiv = diamonds[9];

queenOfDiamondsDiv = document.querySelector("#queenD");
queenOfDiamondsDiv = diamonds[10];

kingOfDiamondsDiv = document.querySelector("#kingD");
kingOfDiamondsDiv = diamonds[11];

aceOfDiamondsDiv = document.querySelector("#aceD");
aceOfDiamondsDiv = diamonds[12];

// const diamondsDiv = [twoOfDiamondsDiv, threeOfDiamondsDiv, fourOfDiamondsDiv,
//     fiveOfDiamondsDiv, sixOfDiamondsDiv, sevenOfDiamondsDiv, eightOfDiamondsDiv, 
//     nineOfDiamondsDiv, tenOfDiamondsDiv, jackOfDiamondsDiv, queenOfDiamondsDiv,
//     kingOfDiamondsDiv, aceOfDiamondsDiv];

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

twoOfClubsDiv = document.querySelector("#twoC");
twoOfClubsDiv = clubs[0];

threeOfClubsDiv = document.querySelector("#threeC");
threeOfClubsDiv = clubs[1];

fourOfClubsDiv = document.querySelector("#fourC");
fourOfClubsDiv = clubs[2];

fiveOfClubsDiv = document.querySelector("#fiveC");
fiveOfClubsDiv = clubs[3];

sixOfClubsDiv = document.querySelector("#sixC");
sixOfClubsDiv = clubs[4];

sevenOfClubsDiv = document.querySelector("#sevenC");
sevenOfClubsDiv = clubs[5];

eightOfClubsDiv = document.querySelector("#eightC");
eightOfClubsDiv = clubs[6];

nineOfClubsDiv = document.querySelector("#nineC");
nineOfClubsDiv = clubs[7];

tenOfClubsDiv = document.querySelector("#tenC");
tenOfClubsDiv = clubs[8];

jackOfClubsDiv = document.querySelector("#jackC");
jackOfClubsDiv = clubs[9];

queenOfClubsDiv = document.querySelector("#queenC");
queenOfClubsDiv = clubs[10];

kingOfClubsDiv = document.querySelector("#kingC");
kingOfClubsDiv = clubs[11];

aceOfClubsDiv = document.querySelector("#kingC");
aceOfClubsDiv = clubs[12];

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

twoOfSpadesDiv = document.querySelector("#twoS");
twoOfSpadesDiv = spades[0];

threeOfSpadesDiv = document.querySelector("#threeS");
threeOfSpadesDiv = spades[1];

fourOfSpadesDiv = document.querySelector("#fourS");
fourOfSpadesDiv = spades[2];

fiveOfSpadesDiv = document.querySelector("#fiveS");
fiveOfSpadesDiv = spades[3];

sixOfSpadesDiv = document.querySelector("#sixS");
sixOfSpadesDiv = spades[4];

sevenOfSpadesDiv = document.querySelector("#sevenS");
sevenOfSpadesDiv = spades[5];

eightOfSpadesDiv = document.querySelector("#eightS");
twoOfSpadesDiv = spades[6];

nineOfSpadesDiv = document.querySelector("#nineS");
nineOfSpadesDiv = spades[7];

tenOfSpadesDiv = document.querySelector("#tenS");
tenOfSpadesDiv = spades[8];

jackOfSpadesDiv = document.querySelector("#jackS");
jackOfSpadesDiv = spades[9];

queenOfSpadesDiv = document.querySelector("#queenS");
queenOfSpadesDiv = spades[10];

kingOfSpadesDiv = document.querySelector("#kingS");
kingOfSpadesDiv = spades[11];

aceOfSpadesDiv = document.querySelector("#aceS");
aceOfSpadesDiv = spades[12];

const reshufflePile = []

function shuffle() {
    const visibleCard = Math.floor(Math.random() * diamonds.length);
    reshufflePile.push(visibleCard);
    console.log(visibleCard);
    console.log(reshufflePile);
};
shuffle();

const oneUpper = document.querySelector("#oneUpper");
const backPile = document.querySelector("#back");

oneUpper.appendChild(backPile);
$(backPile).draggable();

const thOne = document.querySelector("#one");
const backOne = document.querySelector("#backOne");
thOne.appendChild(backOne);
$(backOne).draggable();

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

const backDiamonds = document.querySelector("#backDiamonds");
const upperSeven = document.querySelector("#sevenUpper")
upperSeven.appendChild(backDiamonds);

// const backHearts = document.querySelector("#backHearts");
// const upperSix = document.querySelector("sixUpper");
// upperSeven.appendChild(backHearts)


    
//     if (hearts && Cards.class ==='king') {

//     }
//     if (hearts && number ===3) {

//     }
//     if (hearts && number ===5) {
//     }
//     if (hearts && number ===5) {
//     }
// }

// }
// function pickCard() {
// }



