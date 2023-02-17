const { faker } = require('@faker-js/faker');


/* Semantic Versioning */

/* A version number is composed of three parts separated by dots: major version, minor version, and patch version.

    1. Major version upgrades can include breaking changes and are not backwards compatible.
    2. Minor version upgrades are generally backwards compatible and may include new features.
    3. Patch version upgrades are generally reserved for bug fixes and should not break any existing functionality.

    => Using * or x in the version section of package.json allows any major version, but is not recommended for production-grade applications.
    => Using 1.x or ^1.0.0 in package.json allows minor version upgrades.
    => Using 1.0.x or ~1.0.0 in package.json allows patch version upgrades. */


/* Callback Functions */

/* A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. */


/* const myName = "Rizwan";

const message = `Hello, ${process.argv[2]}!`;

console.log(message); */


/* const name = faker.name.fullName();
const message = `Hello, ${name}!`;
console.log(message); */

/* Asynchronous Callback */

/* setTimeout(function callback() {
    // the code to run after 1000 milliseconds
}, 1000);

// code down here runs synchronously (before the callback) */

/* function runCallback(callbackFunction) {
    setTimeout(() => {
        callbackFunction();
    }, 1000);
}
module.exports = runCallback; */

/* Let's add the ability to wire up multiple callback functions.

Each time onClose is called, we'll need to store an additional callback function on our dialog class. Once close is called, we'll invoke all of those callback functions.

 This may require you to initialize an array on the Dialog class. If you need some place for initialization code, the constructor is a great place! Remember the constructor is called once, when a new instance is created. */

/* ---------Multiple Callbacks---------- */

 /* class Dialog {
    constructor(){
        this.call = [];
    }

    onClose(callbackFunction) {
        this.call.push(callbackFunction());
    }

    close() {
        // invoke the callback
        return this.call;
    }
}
 */

/* Map each element in the array to its new value returned by the callback function.

Just like the previous stage, you'll want to run a function on each element in the array. Only this time you'll need to create a new array which you'll return at the end of the map iteration. */

/* function map(arr, callback) {
    const array = arr.map((x,i)=>{
        return callback(x, i);
    });
    return array;
} */


/* ----- Asynchronous Function  -----*/
/*====================================*/

/* Asynchronous code is used in JavaScript when we need to wait for something to happen before continuing. Some common examples include waiting for user input or server response. There are two ways to write asynchronous code:

Using a callback function passed as an argument to a function. */


/* runAnimation(function() { 
    // do something after the animation is complete 
}); */

/* Using promises, which give us an alternate way to configure our callback functions. */


/* const animationPromise = runAnimation();
animationPromise.then(() => { 
    // do something after the animation is complete 
}); */

/*Promises allow us to return promises from functions, and wire up callbacks in a different way. 

 Overall, using promises can make our asynchronous code more readable and maintainable. */

 
/* -------- Practice Questions-------- */

/* We need to make some food! 

When the customer asks for food, the request function will be invoked. This function should call the function makeFood which takes food as its only argument. The function makeFood will return a promise.

The makeFood function is imported at the top of the file from Kitchen.

Add a callback function to the .then of the makeFood promise. Once it is called the food is ready! At that point set the order isReady is true.*/

/* const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
    }
    request(food) {
        const promise = makeFood(food);

        promise.then(()=>{
            this.isReady = true;
        });
    }
} */

/* What if the kitchen was all out of a particular ingredient? Let's be sure to catch an error from the makeFood promise.

When we need to create a new order, we'll request the food: */

/* const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
        this.error = "No Burgers Left"
    }
    request(food) {
        const promise = makeFood(food);

        promise.then(()=>{
            this.isReady = true;
        });

        promise.catch((err)=>{
            return this.error;
        });
    }
} */



/* ------------ Async Await  ---------*/
/*====================================*/

/* Another useful tool in the asynchronous JavaScript toolbelt is async/await.

With these two keywords we can handle promises line-by-line like synchronous code: */

/* async function getData() {
    const result = await serverCall();
 
    return result; // this will not run until serverCall resolves/rejects
}  */

// Or

/* function getData() {
    return serverCall().then((result) => {
        return result;
    });
} */


/* -------- Practice Questions-------- */

/* We have a function handleResults which should retrieve a patient's results from a lab, send them to the patient, and record the response in logs.


The three functions have been imported for you. Each function returns a promise, so it can be used with async/await. You'll need to call these in order:

1. Pass the patientId to getResults. This will resolve with results.

2. Pass the patientId and results (in that order) to sendResults. This will resolve with response.

3. Pass the response to logResponse. There is no return value here. You can choose to either return the promise from logResponse or use await so the function will not resolve until after logResponse is complete. */

/* const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    const results = await getResults(patientId);

    const response = await sendResults(patientId, results);

    const logs = await logResponse(response);
    
    return logs;

} */

/* In the last stage, we only handled the resolve.

How do we handle the case where the promise rejects? 

We can use try/catch! */

/* const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    try{
        const results = await getResults(patientId);

        const response = await sendResults(patientId, results);

        const logs = await logResponse(response);
    
        return logs;
    }
    catch(ex){
        return logError(ex);
    }
} */



/*  */