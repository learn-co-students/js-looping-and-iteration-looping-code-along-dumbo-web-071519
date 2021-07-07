// Code your solutions in this file
function writeCards(namesArray, event){

const thankYouCards = [];


  for (let i = 0; i < namesArray.length; i++) {
  thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  
  
return thankYouCards;
}



writeCards(["Lisa", "Kaitlin", "Jan"], thankYouCards);


function countdown(countdown) {
  while (countdown > 0) {
    console.log(countdown);
    countdown -= 1 
  }
  console.log (countdown);
  
  
  
  
}















