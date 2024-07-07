//* ============================
//* Data Types Section
//* ============================

//* Data types define the type of values that a variable can hold.

//? Types of Primitive Data types

//? Number: Represents numeric values, including integers and floating-point numbers.
// Example:
// var myFavNum = -5;
// console.log(myFavNum);

//? String: Represents a sequence of characters enclosed in single or double quotes.
// Example:
// var myName = Aman; # reffrence error
// var myName = "Aman"; 
// console.log(myFavNum);
//? Boolean: Represents a logical entity with two values: true or false.
// Example:
// var isRaining = True;
// console.log(isRaining);

//? undefined: Represents the absence of a value or an uninitialized variable.
// Example:
// var aman;
// console.log(aman);

//? Null: Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
// Example:
// var data = null;
// console.log(data);

//? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).
// Example:
// const bigNumber = 1234567890123456789012345678901234567890n;

//? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:
// const mySymbol = Symbol("description");

//! ============================
//! Data Types Interview Questions
//! ============================

//? 1: What is the difference between null and undefined in JavaScript❓
// var aman;
// console.log(typeof aman);

//? 2: What is the purpose of typeof operator in JavaScript❓
// var aaloo = "vegies"
// console.log(typeof(aaloo));

//? 3: What is the result of `typeof null` in JavaScript❓
// var a = null;
// console.log(typeof a); ===> object

//? 4: What are primitive data types in JavaScript❓

//? 5: Convert a string to a number?
// We just need to add the '+' sign before the string
// Example:
// var st="10q"
// console.log(typeof +st,Number(st));

//? 6: Convert a number to a string?
// We just need to add an empty string after the number
// Example:
// var q=5
// console.log(typeof (q+""));

//? 7: Explain the concept of truthy and falsy values in JavaScript. Provide examples.❓

//? 8: To check if a non-empty string is truthy or falsy in JavaScript, we can directly use if statement.

//* ==========  Data Types End Section ==========

//todo ---------------- todo Bonus ----------------------

//* ========== parseInt & parseFloat Section ==========
//? parseInt and parseFloat are both functions in JavaScript used for converting strings to numbers, but they have different use cases.

//* parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).
// const myString = "42";
// const myNumber = parseInt(myString, 10);
// console.log(myNumber); // Output: 42

// const myString = "42.5";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

//* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).
// const myString = "42.5";
// const myNumber = parseFloat(myString);
// console.log(myNumber); // Output: 42.5

//TODO  Key Differences:
//? parseInt is used for converting to integers and ignores anything after the decimal point.
//? parseFloat is used for converting to floating-point numbers, preserving the decimal part.
//? Both functions will attempt to convert as much of the string as possible until an invalid character is encountered.

//! Here are more examples
// console.log(parseInt("123"));
// 123 (default base-10)
// console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
// console.log(parseInt("   123 "));
// 123 (whitespace is ignored)
// console.log(parseInt("077"));
// 77 (leading zeros are ignored)
// console.log(parseInt("001.9"));
// console.log(parseFloat("001.9"))
// 1 (decimal part is truncated)

//! When we will not get an Output
// console.log(parseInt("&123"));
// console.log(parseInt("-123"));
// console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)

//? What is the purpose of the NaN value in JavaScript❓
// console.log(isNaN("qwerty"));
// console.log(isNaN("5"));

//* ========== parseInt & parseFloat End Section ==========
// console.log(10+"20");
// console.log(10+"20"+10);
// console.log(10+"20"+10+10);
// console.log(10+10+"20"+10+10);
// console.log(10-"20");
// console.log("50"-10);
// console.log("   "+"   a");
// console.log(""+"    0");
// console.log("aman"+"n");
// console.log("aman"-"n");
// console.log(10-20+"aman");
// console.log(true-true+true);
// console.log(false-false);