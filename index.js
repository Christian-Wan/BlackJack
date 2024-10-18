// Build a BlackJack Game

// variables representing two cards 
let firstCard = 0
let secondCard = 0
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageel = ""
let sumel = ""
let cardsel = ""
let randomNumber = 0




function renderGame() {
    for (let i = 0; i < cards.length; i++) {
        cardse1 += card[i]
        if (i != cards.length - 1) {
            cardsel += ", "
        }
    }
    
    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂"
    }
    else if (sum == 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
    }
    else {
        message = "You're out of the game! 😭"
    }
    console.log(message)
}

function startGame() {
    isAlive = true
    cards = []
    sum = 0
}

function getRandomCard() {
    randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber == 1) {
        randomNumber = 11
    }
    else if (randomNumber > 10) {
        randomNumber = 10
    }
}

function newCard() {
    cards.push(randomNumber)
    sum += randomNumber
    renderGame()
}