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

let deck = document.images;
function displayCard(){
    let num = Math.floor(Math.random() * cardImages.length); 
    deck = cardImages[num];
};

displayCard();

twoUpper = document.querySelector("#twoUpper");

twoUpper.appendChild(deck);

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



// deal new button

//restart button

// pause button

//replace pause with resume

// make screen turn to paused



//undo move button

// contained in nav bar?





