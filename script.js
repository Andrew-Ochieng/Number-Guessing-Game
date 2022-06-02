// var num = Math.floor(Math.random() * 10)

// console.log(num)

function guessNum(min, max) {
    var name = prompt('What is your name?')
    // return Math.floor(Math.random() * (max - min) + min);
    var guesser = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(guesser)

    var guess = prompt('Hey buddy! Whats the guess?')
    if(guess == guesser) {
        alert('Hey buddy, You got 100%')
    } else {
        alert('My bad bro! You gotta try some other time! You gat 50% tho.')
    }
}

guessNum(1, 2)
