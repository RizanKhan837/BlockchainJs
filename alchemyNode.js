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