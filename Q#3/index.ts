/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let myName = "SyEd UsmAn";
console.log(myName.toLowerCase()); 
console.log(myName.toUpperCase());

let titleCaseName = show().join(" ");
console.log(titleCaseName);

// Converting into Title Case
function show() {
  let temp = myName.toLowerCase();
  let arr = temp.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr;
}
