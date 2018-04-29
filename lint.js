/*jslint
    node
*/
const jslint = require("./jslint");
const fs = require("fs");
const fileName = process.argv[2];

fs.readFile(fileName, "utf-8", function (error, file) {
    "use strict";
    if (error) {
        throw error;
    }
    const lint = jslint(file).warnings;
    if (lint.length === 0) {
        console.log(fileName + " is ok.");
    }
    if (lint.length !== 0) {
        console.log(jslint(file).warnings);
    }
});
