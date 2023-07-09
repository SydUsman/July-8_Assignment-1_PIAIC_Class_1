/**
 * Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
 */

function mySandwitch(...items:string[]){
    console.log("My Order");
    for (let element in items){
        console.log("\t"+items[element]);
    }

}

mySandwitch("Cheese","Onion","Chicken","Tomato")
mySandwitch("Cheese","Onion")
mySandwitch("Onion","Chicken","Tomato")