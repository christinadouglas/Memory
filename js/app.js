const difficultyButton = document.querySelector("#difficulty")
difficultyButton.addEventListener("click", addToBoard);

const reshuffleButton = document.querySelector("#reshuffle")
reshuffleButton.addEventListener("click", makeDeck);

const startButton = document.querySelector("#start")
startButton.addEventListener("click", startGame)

const timerSpan = document.querySelector("#timer");

const score = document.querySelector('#count');

const moves = document.querySelector('#moves');

const suits = ['h', 's', 'c', 'd']
const numbers = ['A', 'J', 'Q', 'K', '02', '03', '04', '05', '06', '07',
'08', '09', '10']
const cards = [];
let shuffledCards = [];

function makeDeck() {
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            card = {
                suit: suits[i], 
                number: numbers[j],
                class: `${suits[i]}${numbers[j]}` 
            }
            cards.push(card);
        }
     };
 };

 function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
 }
 
 function addToBoard() {
     makeDeck();
     timer();
     shuffledCards = shuffle(cards)
     const board = $('#board')
     for (let i = 0; i < shuffledCards.length; i++) {
        const cardDiv = $(`
            <div id="card" class=${shuffledCards[i].number}>
                <div class='front'>
                    <div class="card back-blue ${i}"></div>   
                </div>
                <div class='back'>
                    <div class="card ${shuffledCards[i].class}"></div>
                </div>
            </div>
        `)
        cardDiv.flip();
        board.append(cardDiv);
     }
 };

let newMove = 0;
let newScore = 0;
let usersCard = null;
let $previous = null;
let previousClass = null;
let clicks = 0;

function getMatch() {
$('#board').on('click', (e) => {
    clicks++
    const card = e.target.parentNode.parentNode.className;
    console.log($(e.target).parent().parent()[0].className)
    if ($(e.target).parent().parent()[0].className === "match"){
        clicks = 0
       return $(e.target).parent().parent().flip(true)
    }
    if (card === usersCard && clicks === 2) {
        console.log('match!')
        usersCard = null;
        $(e.target).parent().parent()[0].className = "match"
        $previous.parent().parent()[0].className = "match"
        clicks = 0
        $previous = null
        previousClass = null
        newScore++
        newMove++
        score.innerHTML = (`${newScore}`)
        moves.innerHTML = (`${newMove}`)
    } else if (card !== usersCard && clicks ===2){
        console.log('not a match')
        setTimeout(()=>{
            $previous.parent().parent().flip(false)
            $(e.target).parent().parent().flip(false)
            $previous = null
            previousClass = null
            newMove++
            moves.innerHTML = (`${newMove}`)
        },500)
        clicks = 0
    } else {
        usersCard = card;
        previousClass = $(e.target)[0].classList[2]
        $previous = $(`.${previousClass}`)   

    }
    })
};
getMatch();

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
        timerSpan.innerHTML = (`${min}:${sec}:${msec}`);
}

function timer() {
    const time = setInterval(countdown, 1000);
    return time;
}

function clear() {
    clearInterval(time);
}

function startGame() {
    addToBoard();
    addToBoard = undefined
}