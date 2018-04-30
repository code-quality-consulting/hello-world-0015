/*jslint
    node
*/
import assert from "assert";
import {makeGreeting} from "../index";

assert(makeGreeting(), "Hello world!");
assert(makeGreeting("Zach"), "Hello Zach!");
assert(makeGreeting("", "Spanish"), "¡Hola mundo!");
console.log("Success");
