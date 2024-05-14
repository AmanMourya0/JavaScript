let score="33";
// console.log(typeof score);
// console.log(typeof(score));
let valueStringToInt=Number(score)
// console.log(typeof(valueStringToInt),valueStringToInt);

//"33" => 33
// "33ab" => NaN
// "qwerty" => NaN

let isLoggin=1
let valueToBoolean =Boolean(isLoggin)
// console.log(valueToBoolean);

// "" ,NaN,null,0,undefined
let stringNum=99
let valueToString=String(stringNum)
// console.log(typeof(valueToString));

// console.log(+"34"); // + operator converts string to number data types
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"