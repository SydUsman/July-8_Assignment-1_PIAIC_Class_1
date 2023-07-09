/**
 * More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
 */

let myGuest = ["Asim", "Talha", "Rizwan","Usman"]
console.log("Suppose Usman is not coming for the dinner");

let notComing = "Usman"

let myIndex = myGuest.indexOf(notComing)
if(myIndex > -1){
    myGuest.splice(myIndex,1)
}
console.log(myGuest);

console.log("Dinner table got bigger now we are invitin gmore Guests");

myGuest.unshift("Muhamad")
console.log(myGuest)

myGuest.splice(3,0,"Taha")
console.log(myGuest)