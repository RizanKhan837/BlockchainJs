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

/* ----------- Keys To Note -----------*/
/*=====================================*/

/* Web browsers quickly adopt these features and add them to new versions. However, these means older versions of the browser do not support these features. For this reason, transpilers such as babeljs exist. These transpilers will convert new language features into code that older browsers support. You can configure transpilers for specific browser support and features you'd like to use. */

/* ---------- Rest Parameter ----------*/
/*=====================================*/

// The rest parameters syntax can assign function arguments as an array. For example: 

/* function log(...args) {
    console.log(args);
}

log(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5] */

/* Here we are passing five individual arguments to the log function, the rest syntax is ...args, which is assigning an array with all of the arguments to args.

You can also grab the rest of the parameters: */

/* function log(a, b, ...args) {
    console.log(args);
}

log(1, 2, 3, 4, 5); // [3, 4, 5] */

/*  Here a and b will be assigned the first two arguments while ...args will be assigned the remaining three arguments in an array.

This syntax can also be used in destructuring: */

/* const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(others); // [3, 4, 5] */


/* -------- Spread Arguments  --------*/
/*====================================*/

/* The spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments are expected. */

/* const numbers = [1, 2, 3];

function add(a, b, c) {
  return a + b + c;
}

const sum = add(...numbers); // Here the numbers are being spread out to the variables a, b and c.

console.log(sum); // 6 */


/* ----------Practice Questions--------- */

/* Write a function eitherNotBoth that takes in a number and returns true if the the number is divisible by either 3 or 5, but not both. Return false otherwise. */

/* function eitherNotBoth(num) {
    if(num%3 == 0 || num%5 == 0){
        if (num % 3 == 0 && num % 5 == 0) {
            return false;
        }else{
            return true;
        }
        
    }else{
        return false;
    }
} */

/* Write a function fizzBuzz that takes an array of numbers and replaces any number divisible by three with the word "fizz" and any number divisible by five with the word "buzz". If a number is divisible by both three and five, replace it with "fizzbuzz"

Once the appropriate numbers are replaced, return a concatenated string with only the words "fizz" or "buzz" included. */

/* function fizzBuzz(numbers) {
    let str = '';
    for(let i=0; i < numbers.length; i++){
        if(numbers[i] % 3 == 0 || numbers[i] % 5 == 0){
            if(numbers[i] % 3 == 0 && numbers[i] % 5 == 0){
                //numbers[i] = "fizzbuzz";
                str += 'fizzbuzz';
            }else if(numbers[i] % 3 == 0 && numbers[i] % 5 != 0){
                str += 'fizz';
                //numbers[i] = "fizz";
            }else if(numbers[i] % 5 == 0 && numbers[i] % 3 != 0){
                str += 'buzz';
                //numbers[i] = "buzz";
            }
        }else{
            str += '';
        }
    }
    return str;
}
let num = [1,3,5,15];
let str = fizzBuzz(num);
console.log(str); */


/* -------- Call Versus Apply  -------*/
/*====================================*/

/* Call and Apply are very similar methods. They both exist on every JavaScript function and they both allow you to set the context this.

The difference comes when you want to pass arguments to the function: */

/* function totalThings(a, b, c) {
    return `There are ${a + b + c} ${this}`;
}

Let's say we wanted this string to be: "There are 15 Students". There are two ways we could go about it. We could use call:

totalThings.call("Students", 10, 3, 2);

Or we can use apply:

totalThings.apply("Students", [10, 3, 2]); */


/* In both cases, this is set to "Students" and the arguments a, b and c are the values 10, 3 and 2 respectively.

The difference is that call takes a list of arguments, while apply takes a single array of arguments. */

/* -------- Binding---------- */

/* Rather than relying on a function to be called with the correct this at the time of invocation, we can bind functions: */

/* function thisName() {
    return this.name;
}

const newFunction = thisName.bind({ name: 'Ted' }); 

console.log(newFunction()); // Ted
console.log(thisName()); // undefined */ 

/* Here we are binding the thisName function to a new object with the name property set to "Ted". This means that when we call newFunction, this will be bound to the new object. */


/* -------- Call Site---------- */

/* The call site is the location in code where a function is called. */

/* const obj = {
    value: 2,
    getValue: function() {
        return this.value;
    }
} */

/* console.log( obj.getValue() ); // 2 */


/* ------- Unbound Function-------- */

/* const YEAR = (1000 * 60 * 60 * 24 * 365);

function addYear() {
    setTimeout(function() {
        this.age++;
    }, YEAR);
}

const person = { name: 'Fred', age: 29 }

addYear.call(person); */

/* -------- Arrow Syntax---------- */

/* There is another way to define function expressions, referred to as "Arrow Syntax". The difference between the arrow syntax and the traditional function syntax is in behavior with this. The arrow syntax will actually capture the context of the surrounding function here: */

/* function addYear() {
    setTimeout(() => {
        this.age++;
    }, YEAR);
} */

/* -------- Practice Questions-------- */

/* Within the function Celebrity, a method is used to fetch the celebrity's age. The second argument to fetchAge is a callback function. The callback function will receive age as an argument.

 Unfortunately, due to the function call-site, this will be re-defined to not refer to the celebrity. Running the tests without modifying the code will result in a TypeError.

Fix this.age to refer to the same this as the function Celebrity. */


// Before

/* function Celebrity(name) {
    this.name = name;

    fetchAge(this.name, function (age) {
        this.age = age;
    });
} */

// After
/* function Celebrity(name) {
    this.name = name;

    fetchAge(this.name, (age) =>{
        this.age = age;
    });
} */



/* ----------- Prototype  ------------*/
/*====================================*/

/* Create a function move that will be added to the Shape.prototype. This function should take two arguments: x and y.

It should move the shape's position by adding the corresponding arguments value: */

/* const shape = new Shape(1, 1);

shape.move(1, 4);

console.log( shape.position.x ); // 2
console.log( shape.position.y ); // 5 */

/* // Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position = {x, y}
}

Shape.prototype.move = function(x,y) {
    this.position.x += x;
    this.position.y += y;
} */

/* -------- Linking Prototypes---------- */

/* Circle.prototype = Object.create(Shape.prototype); */

/* Now our Circle prototype inherits methods from the Shape Prototype! Any new circle will have a move method. */

/* -------- Practice Questions-------- */

/* Use Object.create to link Circle.prototype to Shape.prototype.

This will ensure that any methods on Shape.prototype will also become available on new Circle instances. For instance, we'll be able to use circle.move(1,1); just like we did on the shape instance! */

/* function Circle(x, y, radius) {
    Circle.prototype = Object.create(Shape.prototype);
    Shape.call(this, x, y);
    // store radius on this
    this.radius =  radius;
} */