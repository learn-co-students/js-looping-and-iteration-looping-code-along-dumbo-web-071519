// sisters = ['Joann', 'Gina', 'Deanna']
// function writeCards((sisters, 'birthday'))
//     for (let i = 0, i < sister.length, i++)
function writeCards(namesArray, event) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
  }
  
 function countdown(countdown) {
  while (countdown > 0) {
      console.log(countdown--);
    }
    console.log(countdown)
}