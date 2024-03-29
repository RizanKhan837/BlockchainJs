
/* -------  let, var, const -----------*/
/*=====================================*/

/* var == is not a blockscope , reinitializable hota hai , re-assigning(yes),  hoisting(yes)

   let == is a block scope, reinitializeable nahi hai is mn , re-assigning(yes)

   const's == value doesn't change, also a blockscope , No reinitializaable, re-assigning(No),  hoisting(No) */


// hoisting : apna scope chor kr document k top pr chala jata hai or global bann jata hai(accessable from everywhere)


// var
// block scope (n)

/* if (true) {
    var a = "abc"
}
console.log(a) */

// reinitializable (y)

/* var a = "abc"
var a = "xyz"
console.log(a) */

// hoisting  (y)

/* console.log(a)
var a = "abc" */


// let
// block scope (y)

/* if (true) {
    let b = "abc"
}
console.log(b) */  //error


// reassigning (n)

/* let b = "abc"
let b = "xyz"  //error
console.log(a) */

// reinitializable (y)

/* let b = "abc"
b = 123 */

/* -------  String Manipulation -------*/
/*=====================================*/

/*----- Slicing ------*/

/* "An apple".slice(0,2); // An
"The 40 Thieves".slice(4,8); // 40 T

//If the last index is not provided, slice will continue until the end of the string:

"Please Slice Me".slice(7); // Slice Me */

/*----- IndexOf ------*/

/* "Hello".indexOf("e"); // 1
"abca".indexOf("a"); // 0 
"abc".indexOf("q"); // -1 
"happy dog bark".indexOf("dog"); // 6 */



/* ----------  Hoisting --------------*/
/*=====================================*/

/* abc()
function abc() {
    console.log("abc")
} */


/* if (true) {
    var a = "abc"
}
console.log(a)*/


/* function abc() {
    var a = "abc"
}
console.log(a) */

/* let std = {
    name : "Ali",
    age: 16,
    contact:"123141"
}
std.inst = "SAIMS"
delete std.age
console.log(std) */


/* ----------  Template Literal --------*/
/*=====================================*/

/* let a = 2;
//console.log("My age is " + a)
console.log(`The Sqaure Of ${a} is ${a*a}`); */


/* ----------  Ternary Operator --------*/
/*=====================================*/

// ternary = ? true : false
// if else

/* true ? console.log("True Condition"): console.log("False Condition")
10 != 10 ? console.log("True Condition"): console.log("False Condition") */

// else if

/* let age = 19
let studentCard = false;
age == 18 ? console.log("allow") : studentCard == true ? console.log("allowed") : console.log("not allowed") */


/* ----------  Spread Operators --------*/
/*=====================================*/

/* let obj = {
    name: "rizan",
    age: 18
}

let obj2 = {
    inst: "SAIMS",
    marks: 80,
    ...obj // objects ki properties inherit krny ky liye
}

let obj3 = {
    ...obj2,
    categories: "A"
} */

//console.log(obj3)
 
/* let a = [1, 2, 3]
let b = ['a', 'b', 'c', ...a]

console.log(b) */

/* ----------  Destructuring ---------*/
/*=====================================*/

// only works in objects and arrays bcz both are object type

/*-------- Destructuring In Arrays --------*/
/* let a = ['a', 'b', 'c', 'd']

function abc(a){
    return [a]; // returns array
}

let [var1, var2, var3] = a; // save first 3 index
//let [,,, var3] = a; // returns 'd'
let [var4] = abc("abc");

console.log(var1);
console.log(var4); */

/*-------- Destructuring In Objects --------*/

/* let obj = {
    name: "abc",
    age: 18,
    contact: "123123"
}
let {name, age, contact} = obj;

console.log(name, age, contact) */



/* ----------  Functions -------------*/
/*====================================*/

/*-------- Arrow Function ------------*/
// save space , fast, consize , readable

/* let a = (a) => {  //we also can remove paranthesis if its only one argument
    console.log(a)
}
a("abc"); */


/* let b = () => {
    return "abc";
} 
// Or
let c = (a) => a;  // If We Want To Return Single Value We Can Also Reduce It
let d = () => "abc";
let res = c(); */

/*-------- Callback Function ------------*/

 // here we are setting a function in a variable and passing it as an argument
//let a = (a) =>{ return a; } //or let a = a => a;

/* let b = (e) => { // here we are setting a function in a variable and passing it as an argument
    console.log(e)
}
a(b("abcs")); */  // here we are calling a function and passing another function as an argument

/*-------- Higher Order Function ------------*/

/* Agr Koi Func Apny Param Main 2sra Function Call Krrha Hai Tou Woh Higher Order Func Hai
   Ya Phir Return Main Ek Or Func Return Kry */

// a(b("abcs"));  

/* let func = ()=> {
    console.log("main")
    return ()=> {
        console.log("nested")
    }
} 

let b = func()
b();
// Or
func()();  */

/*-------- Array Function ------------*/

// Map
// Filter
// Find
// Some
// Foreach
// FindIndex

/* let a = [
    {
        name:"Rizwan Akram",
        age:18,
        id:1,
        category:"A",
        isChecked: true
    },
    {
        name:"Usman Rahim",
        age:16,
        id:2,
        category:"A",
        isChecked: false
    },
    {
        name:"Haseeb Alam",
        age:18,
        id:3,
        category:"C",
        isChecked: true
    },
    {
        name:"Aamir Sayab",
        age:20,
        id:4,
        category:"B",
        isChecked: false
    }
]  */

/*-------- 1. Map ------------*/
// used for iteration in arrays

/* a.map((e) => { // e= indexes
    console.log(e);
})
 // Or
let b = a.map((e) => {
    return e;
})
console.log(b)    */

/*-------- 2. Filter ------------*/

/* let b = a.filter(x => {
    if (x.category == "A") {
        return x;
    }
})

// Or

let b = a.filter(x => x.category == "A") // Shortest Way
console.log(b);  */

/*-------- 3. Find ------------*/

/* let obj = a.find(x => x.name == "Rizwan Akram"); // Return Only One Index
console.log(obj)  */


/*-------- 4. Some ------------*/

/* let status = a.some(x => x.isChecked) //If Condition True In ANy Object Then It Return True
console.log(status) */

/*-------- 5. Foreach ------------*/

/* a.forEach(x=> {
    x.inst = "SAIMS" //Adding  inst property
    delete x.category
})
console.log(a) */

/*-------- 6. FindIndex ------------*/

/* let ind = a.findIndex(x => x.id == 3) // If True Then Return Index Else Return -1
console.log(ind) */

