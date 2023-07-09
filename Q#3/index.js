/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
var myName = "SyEd UsmAn";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
var titleCaseName = show().join(" ");
console.log(titleCaseName);
// Converting into Title Case
function show() {
    var temp = myName.toLowerCase();
    var arr = temp.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].slice(1);
    }
    return arr;
}
