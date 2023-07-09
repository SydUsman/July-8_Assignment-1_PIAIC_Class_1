/**
 * More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
 */

let car: string = "subaru";

if(car == "subaru"){
    console.log(true);
}
if(car !== "subaru"){
    console.log(false);
}
if(car.toLowerCase() == "subaru"){
    console.log(true);
}
if(car.toUpperCase() == "SUBARU"){
    console.log(true);
}
if(car.length == 6){
    console.log(true);
}
if(car.length !== 6){
    console.log(false);
}