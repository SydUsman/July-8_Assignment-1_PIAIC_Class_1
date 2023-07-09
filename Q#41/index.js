/**
 * Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
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
show_magicians(magicians);
