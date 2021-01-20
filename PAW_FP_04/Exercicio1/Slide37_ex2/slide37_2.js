/**
 * Ficha prática 4 - Ex1 > Slide 37 (ex2)
 * @author Pedro Machado "pedroma2000"
 */
var fs = require("fs");

fs.readFile('input.txt', function(err, data) {
    if (err) {
        return console.error(err);
    }

    console.log(data.toString());
});

console.log("Program Ended");