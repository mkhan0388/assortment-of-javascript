// console.log("HELLO WORLD!!!")
// console.log("I am the best")


// let random = Math.random();
// if (random <= 0.5) {
//     console.log("Below 0.5")
//     console.log(random)
// }
// else if  

// const dayOfWeek = "Friday";

// if (dayOfWeek === "Monday") {
//     console.log("Crap day")
// } else if (dayOfWeek === "Friday") {
//     console.log("The best day")
// }

// nested conditionals

// const password = prompt("Enter Password")

// if (password.length >= 6) {
//     console.log("Length correct")
//     if (password.indexOf(" ") === -1) {
//         console.log("No spaces")
//     } else {
//         console.log("Password cannot contain spaces")
//     }
// } else {
//     console.log("Passwrod too short")
// }

// logical operators
// const password = prompt("Enter Password")

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("Valid password")
// } else {
//     console.log("Invalid password")
// }

// function percentageCalculator(number, percentage) {
//     let percentageOf = (number * percentage) / 100;
//     return percentageOf;
// }
// console.log(percentageCalculator(50, 20));


// function drinkOrder(size, drink) {
//     switch (drink) {
//         case 'cola':
//             console.log('Thank you ,' + size +' ' + drink);
//             break;
//         case 'lemonade':
//             console.log('Thank you ,' + size +' ' + drink)
//             break;
//         case 'orangeade':
//             console.log('Thank you, ' + size+' ' + drink);
//             break;
    
//     }
// }
// drinkOrder('small',  'orangeade');


// My awesome calculator
// function calculator(number1, number2, operator) {
//     if (number1, number2 === NaN) {
//         console.log('Invalid entry')
//     } 
//     let message = ''
//     switch (operator) {
//         case 'addition':
//            message = number1 + number2;
//             break;
//         case '-':
//             message = number1 - number2;
//             break;
//         case '*':
//             message = number1 * number2;
//             break;
//         case '/':
//             if (number2 <= 0)
//                 console.log('Dont be daft')
//             message = number1 / number2;
//             break;
//         default:
//             message = 'mistake has been made'
//     }
//     console.log(message);
// }
// calculator(89, 50, 'addition')
// calculator(98, 33, '-')
// calculator(56, 65, '*')
// calculator(45, 0, '/')
// calculator(56, 56, '%')

// 7 times table

// for (let i = 1; 1 <= 7; i++){
//     let result = i * 7;
//     console.log(`${result} is 7 x ${i}`)
// }

let myFaveFoods = [
    'chocolate',
    'burgers',
    'chicken',
    'muffins',
    'more chocolate'
]

console.log(myFaveFoods[2]);
console.log(myFaveFoods[1])

for (i = 0; i < myFaveFoods.length; i++) {
    console.log(myFaveFoods[i]);
}