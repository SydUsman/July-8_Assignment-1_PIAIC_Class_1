/**
 * Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 */

let magicians: string[] = [
  "Harry Potter",
  "Albus Dumbledore",
  "Severus Snape",
  "Professor Umbridge",
  "Serious Black",
];

function show_magicians(magicians:string[]){
    for (let element in magicians){
        console.log(magicians[element]);
    }
}
show_magicians(magicians)