/* --------------  Arrays -------------*/
/*=====================================*/

/* Write a function that will take an array of numbers and return a new array that only contains unique numbers. */

/* function unique(array) {
    let arr = [];
    arr.push(array[0]);

    for(let i=0; i < array.length; i++){
        if(arr.indexOf(array[i]) >= 0){
            continue;
        }else{
            arr.push(array[i]);
        }
    }
    return arr;
} */

/* Given an array of integers and a number, num, find all the occurrences of the number and remove it from the array. */

/* function removeOccurrences(array, num) {
    for(let i= array.length - 1; i>=0; i--){
        if(array[i] == num){
            array.splice(i, 1);
        }
    }
} */

/* Given an array of pizza orders, return the total number of pizzas ordered.
The orders are an array of objects, each with pizzas key inside: */

/* -------------  Objects -------------*/
/*=====================================*/

/* const orders = [
    { pizzas: 3 },
    { pizzas: 5 },
    { pizzas: 10 }
]; */

/* function numberOfPizzas(orders) {
    let total = 0;
    for(let i = 0; i < orders.length; i++) {
        total += orders[i].pizzas;
    }
    return total;
} */

/* ------------  Exercise -------------*/
/*=====================================*/

/* The function halfValue takes an array of numbers. It should return a new array with all the original values halved.

Odd numbers should be rounded up to the nearest whole number. */
/* 
function halfValue(numbers) {
    let num = [];
    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 == 0) {
            num[i] = numbers[i] / 2;
        } else {
            num[i] = Math.round(numbers[i] / 2);
        }
    }
    return num;
} */

/* Write a function countVowels that takes in a string and counts how many vowels there are in the word. Vowels include: "a", "e", "i", "o", and "u".

Handle lowercase and uppercase vowels. */

/* function countVowels(str) {
    let count = 0;
    for(let i =0; i< str.length; i++){
        if(str[i].toLowerCase() == "a" || str[i].toLowerCase() == "e" ||str[i].toLowerCase() == "i" ||str[i].toLowerCase() == "o" ||str[i].toLowerCase() == "u"){
            count++;
        }
    }
    return count;
} */

/* Write a function isPalindrome that takes a word string and returns true if the word is a palindrome or false if it is not. */

/* function isPalindrome(string) {
    let rev = "";
    for(let i = string.length - 1; i >= 0; i--){
        rev += string[i];
    }
    return (string == rev)? true:false;
} */

/* Write a function sumTogether that takes two arrays of numbers and returns a single array with the sum of each corresponding index value.

Assume both arrays are the same length. */

/* function sumTogether(arr1, arr2) {
    let arr3 = [];
    for(let i = 0; i < arr1.length; i++){
        arr3[i] = arr1[i] + arr2[i];
    }
    return arr3;
} */

/* Write a function countElements that takes in an array and returns an object a count of each element in the array. */

/* let elements = ["e", "k", "e", "z", "i", "z"];

function countElements(elements) {
    let obj = {};
    for(let i=0; i< elements.length; i++){
        if(obj[elements[i]]){
            obj[elements[i]]++;
        }else{
            obj[elements[i]] = 1;
        }
    }
    return obj;
}
console.log(countElements(elements)); */

/* The function playerHandScore that takes in a string of face cards (Jack, Queen, and King only) and returns the total score of the players hand.

The cards are represented by the first letter in the name of the card:

A "K" is 4 points
A "Q" is 3 points
A "J" is 2 points */

/* function playerHandScore(hand) {
    let score = 0;
    for(let i = 0; i < hand.length; i++){
        if(hand[i] == "K"){
            score += 4;
        }else if(hand[i] == "Q"){
            score += 3;
        }else if(hand[i] == "J"){
            score += 2;
        }
    }
    return score;
} */

/* --------  Logical Operators --------*/
/*=====================================*/

/* The function friendName currently retrieves the name property from the friend.
The problem is, sometimes friend is undefined. When this is the case, let's return undefined without throwing an exception. */

/* function friendName(friend) {
    if(friend && friend.name){
        return friend.name;
    }else{
        return undefined;
    }
} */

/* There's a river that runs right between two towns. In order for cars to cross the river, we built a bridge!

Trouble is, there's only room for 1 car to cross the bridge at a time. This means that if both cars were to be crossing at the same time, neither would be able to cross.

Complete the carCrossing function to return true if and only if one car is crossing. */

/* function carCrossing(aCrossing, bCrossing) {
    if ((aCrossing && !bCrossing) || (bCrossing && !aCrossing)){
        return true;
    }else{
        return false;
    }
} */

/* ------------  Exception ------------*/
/*=====================================*/

/*  An exception that cannot be recovered from is often referred to as a fatal exception. */

/* The argument fn is a function that will throw an error when invoked. Catch the error that is thrown when invoking fn.

The tests will pass as long as the function is called and the exception is caught. */

/* function catchError(fn) {
    try{
        fn();
    }
    catch(ex){
        return ex;
    }
    return false;
} */

/* --------- TYPE CONVERSION ----------*/
/*=====================================*/

/* Given a string, convert it to a number.

If the string is not a number, return 0. */

/* function convertToNumber(str) {
    let num = Number(str);
    if(isNaN(num)){ 
        return 0;
    }else{
        return num;
    }
} */

/* Given two values a and b, combine them together as strings and return the result. The values may be a number, a boolean or a string. */

/* function combineToString(a, b) {
    let c = `${a}` + `${b}`;
    return c;
} */

// Or

/* function combineToString(a, b) {
    let c = a.toString() + b.toString();
    return c;
} */

/* Given some value a return whether or not the value is truthy */

/*  Remember that truthy values are any value excluding falsey values: false, 0, "", null, undefined, and NaN. */

/* function isTruthy(a) {
    if(a){
        return true;
    }else{
        return false;
    }
} */