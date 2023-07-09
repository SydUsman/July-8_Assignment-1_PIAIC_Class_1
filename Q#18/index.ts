/**
 * Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
 */

let placeList: string[] = [
  "Lahore",
  "Sahiwal",
  "Islamabad",
  "Murree",
  "Quetta",
];
console.log("Orignal List: " + placeList);

let temp: string[] = placeList;

//Alphabetical Order
console.log("Alphabetical order List " + temp.sort());
console.log("Orignal List: " + placeList);

//Reverse Alphabetical Order
console.log("Reverse Alphabetical Order: " + temp.sort().reverse());
console.log("Orignal List: " + placeList);

console.log("Reversing " + placeList.reverse());

//orignal List
console.log("Reversing a reverse List" + placeList.reverse());

//Sorting the List
console.log("Sorted List: " + placeList.sort());

//Sorting and Reversing
console.log("Sorted-Reverse List: " + placeList.sort().reverse());
