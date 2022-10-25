let cards=[];
let sum=0;
let message;
let hasBlackJack=false;
let isAlive=false;
function getRandomcard(){
    let num=Math.floor(Math.random()*13)+1;
    if(num===1)
    return 11;
    else if(num>10)
    return 10;
    else
return num;
}
let player={
    name:'Gobinda',
    chips:500
}
let playerEl=document.getElementById('player-el');

let messageEl=document.getElementById("message-el"); 
let sumEl=document.querySelector("#sum-el");
let cardsEl=document.getElementById("cards-el");
function startGame(){
    isAlive=true;
    let firstCard=getRandomcard();
let secondCard=getRandomcard(); 
cards=[firstCard,secondCard];
 sum=firstCard+secondCard;
    renderGame();
}
function renderGame(){
    cardsEl.innerText="Cards: ";
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" ";
    }
    sumEl.textContent="Sum: "+sum;  
if(sum<=20){
    message="Do you want to draw a new card?";
}else
if(sum===21){
    message="Wohoo! You've got Blackjack! ";
    hasBlackJack=true;

}else {
    message="You're out of the game!";
    isAlive=false;
}
messageEl.textContent=message;
}
function newGame(){
    console.log("Drawing a new card from the deck! ");
    if(isAlive && !hasBlackJack){
    let newCard=getRandomcard();
    sum+=newCard;
    cards.push(newCard);
    console.log(cards);
    renderGame();
    playerEl.textContent=player.name+" : $"+player.chips;
}
}
