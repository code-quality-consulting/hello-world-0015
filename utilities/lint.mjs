/*jslint
    node
*/
import jslint from "../dependencies/jslint";
import fs from "fs";
const fileNames = process.argv.slice(2);

fileNames.forEach(function (fileName) {
    fs.readFile(fileName, "utf-8", function (error, file) {
        if (error) {
            throw error;
        }
        const lint = jslint(file);
        if (lint.ok) {
            console.log(fileName + " is ok.");
        }
        if (!lint.ok) {
            console.log(jslint(file).warnings);
        }
    });
});
