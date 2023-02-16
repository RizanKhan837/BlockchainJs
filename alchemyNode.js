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