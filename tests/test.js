/*jslint
    node
*/
const assert = require("assert").strictEqual;
const makeGreeting = require("../index");

assert(makeGreeting(), "Hello world!");
assert(makeGreeting("Zach"), "Hello Zach!");
assert(makeGreeting("", "Spanish"), "¡Holla mundo!");
console.log("Success");
