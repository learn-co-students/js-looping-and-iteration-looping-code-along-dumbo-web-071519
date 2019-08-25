// Code your solutions in this file

function writeCards(array, event) {
let thankArray = []
    for (let i=0; i < array.length; i++){
        thankArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);

    }
return thankArray
}

function countdown(num){
    let i=num;
    while (0 <= i) {
        console.log(i);
        i--;
    }
}

