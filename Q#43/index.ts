/**
 * Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
 */

let magicians: string[] = [
    "Harry Potter",
    "Albus Dumbledore",
    "Severus Snape",
    "Professor Umbridge",
    "Serious Black",
  ];
  
  
  function show_magicians(magicians: string[]) {
    for (let element in magicians) {
      console.log(magicians[element]);
    }
  }
  
  function great_magician(magicians:string[]){
      for (let element in magicians) {
          temp[element] = `Great ${temp[element]}`
        }
  }
  
  let temp: string[] = magicians

  show_magicians(magicians);
  great_magician(temp)
  show_magicians(temp);
  