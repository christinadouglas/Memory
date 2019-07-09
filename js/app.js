const suits = ['h', 's', 'c', 'd']
const numbers = ['A', 'J', 'Q', 'K', '02', '03', '04', '05', '06', '07',
 '08', '09', '10']
 const cards = []
 function makeDeck() {
     for (let i = 0; i < suits.length; i++) {
        for (let j =0; j < numbers.length; j++) {
            card = {
                suit: suits[i], 
                number: numbers[j],
                class: `${suits[i]}${numbers[j]}` 
            }
            cards.push(card)
        }
     };
 };
 function addToBoard() {
     makeDeck()
     const board = $('#board')
     for (let i = 0; i < cards.length; i++) {
         const cardDiv = $(`
            <div id="card" class=${cards[i].number}>
                <div class='front'>
                    <div class="card back-blue"></div>   
                </div>
                <div class='back'>
                    <div class="card ${cards[i].class}"></div>
                </div>
            </div>
        `)
        cardDiv.flip()
        board.append(cardDiv);
     }
 };
 addToBoard();
 
let usersCard = null
 function getMatch() {
 $('#board').on('click', (e) => {
    const card = e.target.parentNode.parentNode.className;
    console.log(card);
    if (card === usersCard) {
        console.log('match!')
        usersCard = null
    }
    usersCard = card
    })
 };
 getMatch();

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
