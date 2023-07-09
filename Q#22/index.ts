/**
 * Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
 */
let index = 10
let arr: number[] = [1, 2, 3, 4, 5];

console.log(arr[index]); // my intenional error
//Result will be undefined

// corrected index
index = 2
console.log(arr[index]); 
