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
     }
 };

 function addToBoard() {
     makeDeck()
     const board = $('#board')
     for (let i = 0; i < cards.length; i++) {
         const cardDiv = $(`
            <div id="card">
                <div class='front'>
                    <div class="card back-blue"></div>   
                </div>
                <div class='back'>
                    <div class="card ${cards[i].class}"></div>
                </div>
            </div>
        `)

        cardDiv.flip()
        board.append(cardDiv)
     }
 };

 addToBoard();


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

// const game = () => {
// function deck(){
//     const tr = $('#rowOne');
//     const tr2 = $('#secondRow')
//     for (let i = 0; i < 13; i++) {
//         const randomCards = Math.floor(Math.random() * cards.length); 
//         tr.append(cards[i])
//     }
//     for (let i = 13; i < 26; i++) {
//         const randomCards = Math.floor(Math.random() * cards.length); 
//         tr2.append(cards[i])
//     }
// };
//     deck();
// }
// game();

// const values = {
//     10: '10',
//     11: 'J',
//     12: 'Q',
//     13: 'K',
//     14: 'A'
// }
