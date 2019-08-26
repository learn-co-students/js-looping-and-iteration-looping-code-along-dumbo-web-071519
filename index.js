// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);

function countdown(num){
    for (let countdown = num; countdown >= 0; countdown--) {
        console.log(countdown);
    }
}



function writeCards(names, topic) {
    cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${topic} gift!`);
    }

    return cards;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");