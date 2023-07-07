// for(let i = 1; i <= 100; i++) {
//     console.log('Prodacts sold' + i + 'times');
// }

// let salary = 100
// let i = 0

// while(salary >= 2000) {
//     i++
//     console.log('I work');

//     if(i === 50) {
//         salary = 1500
//     }
// }

// do {
//     i++
//     console.log('I work');

//     if(i === 50) {
//         salary = 1500
//     }
// } while(salary >= 2000)

// let x 

// do {
//     x = +prompt()
// } while(x !== 7777)\
// let x

// do {
//     for(let i = 1; i <= 5; i++) {
//         x = +prompt()
//     }
// } while (x !== 555)

let pin = "5555"
let tries = 5
let i = 1
let x
do {
    x = prompt("Pin?")
    if(x === null) {
        break;
    }
    if(x === pin) {
        i++
        alert("Successfrl")
        break;
    } else (alert("Blocked")) 
} while (tries >= i) 
