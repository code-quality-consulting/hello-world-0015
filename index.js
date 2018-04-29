/*jslint
    node
*/

function makeGreeting(name = "world") {
    return "Hello" + " " + name + "!";
}

module.exports = makeGreeting;
