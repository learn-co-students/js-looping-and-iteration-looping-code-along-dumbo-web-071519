// Code your solutions in this file
let messages = []

function writeCards(names, event) {
  for (let i=0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return messages;
}

function countdown(integer) {
  while (integer >= 0) {
    console.log(integer);
    integer--;
  }
}
