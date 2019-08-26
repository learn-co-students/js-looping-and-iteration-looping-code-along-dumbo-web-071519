// Code your solutions in this file

const names = ["Ada", "Brendan", "Ali"];
const event = "birthday";
let result = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        result[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }

    return result;
}

let num = 10

function countdown(num) {
    while (num >= 0) {
        console.log(num--)
    }
}