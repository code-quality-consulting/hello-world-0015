/*jslint
    node
*/

function makeGreeting(name) {
    "use strict";
    if (name) {
        return "Hello" + " " + name + "!";
    }
    return "Hello world!";
}

module.exports = makeGreeting;
