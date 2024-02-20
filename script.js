const btnPick = document.querySelector('#btn-pick');
// const pickedCardsShow = document.querySelector('#player-cards');
const currentCard = document.querySelector('#current-card');
const scoreShow = document.querySelector('#player-score');
const pickedCardsList = document.querySelector('#picked-cards-list');
const resultHolder = document.querySelector('#result-holder');
const gameResult = document.querySelector('#game-result');
const btnReset = document.querySelector('#btn-reset');

let score = 0;

const allCards = [
  {id: '2H', value: 2},
  {id: '3H', value: 3},
  {id: '4H', value: 4},
  {id: '5H', value: 5},
  {id: '6H', value: 6},
  {id: '7H', value: 7},
  {id: '8H', value: 8},
  {id: '9H', value: 9},
  {id: '10H', value: 10},
  {id: 'JH', value: 10},
  {id: 'QH', value: 10},
  {id: 'KH', value: 10},
  {id: 'AH', value: 11},
  {id: '2S', value: 2},
  {id: '3S', value: 3},
  {id: '4S', value: 4},
  {id: '5S', value: 5},
  {id: '6S', value: 6},
  {id: '7S', value: 7},
  {id: '8S', value: 8},
  {id: '9S', value: 9},
  {id: '10S', value: 10},
  {id: 'JS', value: 10},
  {id: 'QS', value: 10},
  {id: 'KS', value: 10},
  {id: 'AS', value: 11},
  {id: '2C', value: 2},
  {id: '3C', value: 3},
  {id: '4C', value: 4},
  {id: '5C', value: 5},
  {id: '6C', value: 6},
  {id: '7C', value: 7},
  {id: '8C', value: 8},
  {id: '9C', value: 9},
  {id: '10C', value: 10},
  {id: 'JC', value: 10},
  {id: 'QC', value: 10},
  {id: 'KC', value: 10},
  {id: 'AC', value: 11},
  {id: '2D', value: 2},
  {id: '3D', value: 3},
  {id: '4D', value: 4},
  {id: '5D', value: 5},
  {id: '6D', value: 6},
  {id: '7D', value: 7},
  {id: '8D', value: 8},
  {id: '9D', value: 9},
  {id: '10D', value: 10},
  {id: 'JD', value: 10},
  {id: 'QD', value: 10},
  {id: 'KD', value: 10},
  {id: 'AD', value: 11},
]; 
const userData = {
  userCards: [...allCards]
} 


btnPick.addEventListener('click', pickCard);
function pickCard(){
  //let randomCard = Math.floor(Math.random() * 10) + 2;

  // Pick random card from the stock
  let randomCard = userData?.userCards[Math.floor(Math.random()*userData?.userCards.length)];
  // remove picked card from user card stock
  const index = userData?.userCards.indexOf(randomCard);
  const x = userData?.userCards.splice(index, 1); // x is the removed card

  score += randomCard.value;
  //currentCard.innerText = `${randomCard.id}`;
  scoreShow.innerText = `${score}`;
  pickedCardsList.innerHTML += `<li><img src="cards/${randomCard.id}.svg" /></li>`;
  
  if(score === 21){
    resultHolder.classList.remove('hide');
    btnPick.classList.add('hide');
    gameResult.innerText = 'You win!'
  } else if (score > 21){
    resultHolder.classList.remove('hide');
    btnPick.classList.add('hide');
    gameResult.innerText = 'You loose :('
  }
}

btnReset.addEventListener('click', () =>{
  score = 0;
  //currentCard.innerText = `-`;
  scoreShow.innerText = `-`;
  pickedCardsList.innerHTML = ``;
  resultHolder.classList.add('hide');
  btnPick.classList.remove('hide');

  userData.userCards = [...allCards];
});

