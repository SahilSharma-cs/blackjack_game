let cards = []
let sum = 0
let hasblackJack= false
let isAlive= false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber===1){
        return 11
    } else if(randomNumber>10){
        return 10
    }
    else{
        return randomNumber
    }
}

function startGame(){
    isAlive= true
    hasblackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards= [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardEl.textContent= "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent+=cards[i] + " "
    }
        sumEl.textContent="Sum:  "+ sum
        if (sum<21){
            message= "Do you want to draw new card"
        } else if ( sum===21){
            message = "Congratulations ! Wohoo you got blackjack!"
            hasblackJack = true
        } else{
            message = "You're out of game- Start new game"
            isAlive= false
        }
        messageEl.textContent= message
}

function newCard(){
    if (isAlive===true && hasblackJack===false){
        let card= getRandomCard()
        sum += card
        cards.push(card) 
        renderGame()
    }
}



