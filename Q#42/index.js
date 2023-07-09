/**
 * Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
 */
var magicians = [
    "Harry Potter",
    "Albus Dumbledore",
    "Severus Snape",
    "Professor Umbridge",
    "Serious Black",
];
function show_magicians(magicians) {
    for (var element in magicians) {
        console.log(magicians[element]);
    }
}
function great_magician(magicians) {
    for (var element in magicians) {
        magicians[element] = "Great ".concat(magicians[element]);
    }
}
great_magician(magicians);
show_magicians(magicians);
