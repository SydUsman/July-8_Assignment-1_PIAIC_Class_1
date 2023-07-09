/**
 * Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 */

let favorite_fruits: string[] = ["Banana", "Apple", "Mango"];

if (favorite_fruits.indexOf("Banana") >= 0) {
  console.log("You really like bananas!");
}

if (favorite_fruits.indexOf("Apple") >= 0) {
  console.log("You really like apples!");
}

if (favorite_fruits.indexOf("Mango") >= 0) {
  console.log("You really like mangoes!");
}

if (favorite_fruits.indexOf("Strawberry") >= 0) {
  console.log("You really like strawberries!");
}

if (favorite_fruits.indexOf("Grapes") >= 0) {
  console.log("You really like grapes!");
}
