/*jslint
    node
*/
const assert = require("assert").strictEqual;
const makeGreeting = require("./index");

assert(makeGreeting(), "Hello world!");
console.log("Success");
