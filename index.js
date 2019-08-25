// Code your solutions in this file

let thanks = [];
let writeCards = (arr, event)=>{
    for (let i = 0; i < arr.length; i++) {
        thanks.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);

    }
    return thanks;
};

let countdown = (num) =>{
   
    
    while (0 <= num) {
        
        console.log(num);
        num -=1
    }


}