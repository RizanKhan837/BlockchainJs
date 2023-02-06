/* ----------- Sorting  -----------*/
/*==================================*/

/* -------- Ascending---------- */

/*  Array Sort
    Every array created in JavaScript has access to the sort method. This method takes an optional comparison function that will determine the resulting sort order of the elements.  
*/

/* [3,2,4,1].sort(function comparison(a,b) {
    if(a < b) {
        // take a first
        return -1;
    }
    if(b < a) {
        // take b first
        return 1;
    }
    // no change is needed
    return 0;
}); */

/* -1 indicates a should be placed in-front of b.
    1 indicates b should be placed in-front of a.
    0 indicates no change in order is needed. 
*/

/* -------- Practice Questions-------- */

/* Given an array of numbers, sort the numbers ascending (1,2,3...) and return the sorted array. */

/* function sortNumsAscending(arr) {
    return arr.sort(function(a,b) {
        return a - b;
       });
}
*/

// Or 

/* function sortUp(array) {
    array.sort(function comparison(a, b) {
        return a - b;
    });
} */

/* Given an array of numbers sort them in descending order and return the array. */

/* function sortNumsDescending(arr) {
    return arr.sort(function(a,b) {
        return b - a;
    });
} */


/* Given an array of strings, sort them in ascending order ('a','b','c'...) and return the sorted array. */

/* function sortStringsAscending(arr) {
    return arr.sort(function(a,b) {
        return a.localeCompare(b);
    });
} */

// Or

/* function sortStringsUp(array) {
    array.sort(function(a,b){
        return a.localeCompare(b);
    });
} */

/* Given an array of strings, sort them in descending order ('z','y','x'...) and return the sorted array. */

/* function sortStringsDescending(arr) {
    return arr.sort(function(a,b) {
        return b.localeCompare(a);
    });
} */

// Or

/* function sortStringsDown(array) {
    array.sort(function(a,b){
        return b.localeCompare(a);
    });
} */

/* Given an array of students, sort first by graduated then by grade like in the example above.

Each object in the students array will have properties id, graduated and grade just like in the example shown above. */

/* function sortStudents(students) {
    students.sort(function(a,b){
        if(a.graduated && !b.graduated){
            return -1;
        }
        else if(b.graduated && !a.graduated){
            return 1;
        }
        return (b.grade - a.grade);
    });
} */


/* -------- Practice Questions-------- */


/* Given the array of events, sort them by the month that they occur in and return the sorted array.

Each object in the events array will have properties event and month just like in the example shown above. */

/* -------- Key To Note-------- */

/* To find which events comes first, you'll need to see where it belongs in the MONTHS array. You can use the array indexOf method to find where it belongs. */

/* const MONTHS = ['JAN', 'FEB', 'MAR'];

console.log( MONTHS.indexOf('JAN') ); // 0
console.log( MONTHS.indexOf('MAR') ); // 2

console.log(MONTHS.indexOf('go fish')); // -1 */

/* -------- Solution-------- */

/* const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

events = [{ event: 'parade', month: 'JAN' },
{ event: 'dance', month: 'MAR' },
{ event: 'farmers market', month: 'JUN' }]

function sortByMonth(events) {
    return events.sort(function(a,b){
        return (MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month));
    });
}
console.log(sortByMonth(events)); */



/* ----------- Array MAP  -----------*/
/*==================================*/

/*  Array Map
    One of the important methods on the Array prototype is map. Map allows you take each element of an array and apply a function to it, returning the result after the function. 
*/

/* const arr = [3,4,5];

const newArr = arr.map(function(x) {
    return x + 1;
});

console.log( newArr ); // [4,5,6] */

/* -------- Practice Questions-------- */

/* Take the array arr and add one to every element, return the resulting array. */

/* function plusOne(arr) {
    return arr.map((x)=>{
        return x+1;
    });
} */

/* Using the squareRoot function, map each element in the array arr to its square root. Return the new array. */

/* function squareRoot(arr) {
    return arr.map((x)=>{
        return Math.sqrt(x);
    });
} */

/* Given an array of elements in squaredMap, return an array with each element squared: */

/* 
function squaredMap(arr) {
    return arr.map((x)=>{
        return x*x;
    });
} */

// Or

/* const squared = require('./squared');

function squaredMap(arr) {
    return arr.map((x)=>{
        return squared(x);
    });
} */


/* Given an array of players, add 10 to their score. Return a new array with these additional points.

Each player will be an object with the following two properties:

id - a number uniquely identifying the player
score - a number representing the player's points */

/* function addScore(players) {
    return players.map((x)=>{
        return {
            id: x.id,
            score: x.score+10
        }
    });
} */

/* const a = addScore([
    { id: 0, score: 5 },
    { id: 1, score: 20 }
]); 

console.log(a); // [{id: 0, score: 15},{id: 0, score: 30}] */

/* Let's modify our addScore function to only add 10 points to the first 3 players. */

/* function addScore(players) {
        return players.map((x,i)=>{
            if(i<3){
                return {
                    id: x.id,
                    score: x.score+10
                }
            }
            else{
                return x;
            }
        });
} */



/* -------- Array Filters  --------*/
/*==================================*/

/*  Array Filter
    If we want to take an array of elements and choose certain ones based on a condition, we can use Array.prototype.filter. 
*/

/* const ones = [1,2,3,1,1].filter((function(el) {
    return (el === 1);
})); */

/* ----- Practice Questions ----- */

/* Given an array of elements, find the elements whose value is less than 5. Return the resulting array. */

/* function lessThanFive(array) {
    return array.filter((x)=>{
        return (x < 5);
    });
    
} */

/* We can apply the same filtering logic to booleans.

Given an array of booleans, keep only the true values: */

/* function onlyTrue(array) {
    return array.filter((x)=>{
        return (x===true);
    });
} */

/* Given an array of strings, keep only the strings whose length is at most 3. */

/* function shortStrings(array) {
    return array.filter((x)=>{
        return (x.length <= 3);
    });
}
 */

/* Find students whose score is at least 90. */

/* function topStudents(array) {
    return array.filter((x)=>{
        return (x.grade >= 90);
    });
} */

/* Given an array of elements, keep only the first 3 elements.

Return an array with only these three elements included. */

/* function firstThree(array) {
    return array.filter((x, i)=>{
        if(i<3){
            return (x);
        }
    });
} */

/* Given an array of values, return an array of unique values. */

/* Keep in mind what you learned in the previous stage about the index passed to the filter function. It will continue to increase, while indexOf will always return the first index of the value. */

/* function unique(array) {
    return array.filter((x,i)=>{
        return (array.indexOf(x) === i);
    });
} */


/* --------- Array Reduce  ---------*/
/*==================================*/

/*  Array Reduce
    This function is primarily meant to take an array and reduce it down to a single value
*/

/*  When should you use reduce? 

    Use reduce when you have an array of elements you'd like to combine into a single value or object. 
*/

/*  How It Works? 

    In the reduce function, two arguments are provided, an accumulator and the current value. In the case of summing numbers, the accumulator is the sum after each iteration. The current value will be each element in turn.
*/

/* ----- Practice Questions ----- */

/* Applying what you've learned, complete the function sum by adding together the accumulator and the currentValue. */

/*
function sum(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return (accumulator + currentValue);
    });
}
*/

/* It's time to complete the largest value function! Determine which is larger, the accumulator or the currentValue. Whichever is larger, return it! Then it will become the accumulator for the next iteration. */


/* // numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return (accumulator >= currentValue) ? accumulator : currentValue;
    });
} */

/* Just like the illustration above, we want our initial value to be 1. This way, if there are no positive values we will just return 1. */

/* // numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return (accumulator >= currentValue) ? accumulator : currentValue;
    }, 1);
} */

/* Use the example provided in the details tab to guide you. You'll want to provide an initial value here that will eventually lead you towards your goal. Then you'll continue to accumulate non-duplicate numbers until you have an array that is full of only unique numbers. */

/* function removeDuplicates(array) {
    return array.reduce((accumulator, currentValue) => {
        if(accumulator.indexOf(currentValue) === -1){
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
}

console.log(removeDuplicates([1,2,3,4,5,1,2,3,4,5])); */

// food is an array full of food objects
// let's group them by "type" and return them

/* Finish the function group. Sort each food by it's type and return an object in the format shown above.

Don't depend on the types to only be "fruit" and "vegetable". We will be testing for additional food types in the test cases, so no hardcoding string values! */

/* function group(food) {
    return food.reduce((accumulator, currentValue) => {
        if(accumulator[currentValue.type] === undefined){
            accumulator[currentValue.type] = [];
        }
        accumulator[currentValue.type].push(currentValue);
        return accumulator;
    }, {});
} */



/* ---------- Recursion  -----------*/
/*==================================*/


/* 
  Definition: 
  Recursion is a technique in computer programming where a function calls itself.
*/

/* 
   How it works:
   A function will continue to call itself until a base case is reached, at which point the recursion stops. The base case is determined by the changing arguments of the function over time, similar to the conditions in loops. 
*/

/* 
  Iteration vs. Recursion: 
  Anything that can be solved iteratively (with a loop) can be solved with recursion and vice-versa. However, iteration is more performant and clearer for simple problems. Recursion is best used in cases where a problem can be divided into smaller problems, such as working with tree-like data structures. 
*/

/* 
  Tips for learning recursion: 
  Start practicing on simple problems and build up your skills, as working with tree-like data structures can be challenging.  
*/

/* ----- Practice Questions ----- */