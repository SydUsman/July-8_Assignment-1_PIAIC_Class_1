/**
 * Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 */

function makeShirt(size:string = "Large", message:string="I Love TypeScript"){
    if(size == "Large" || size=="medium"){
        console.log(message);
    }else{
        console.log("I Love JavaScript and TypeScript");
    }    
}
makeShirt("small")