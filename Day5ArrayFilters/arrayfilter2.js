// We create an array called 'arr' with four numbers inside it
let arr=[15,25,89,78]

// filter() goes through every item in the array one by one
// For each item, the arrow function checks if the condition is true
// Here the condition is: num1 < 50 (is the number less than 50?)
// If the condition is true  → the item is KEPT in the new array
// If the condition is false → the item is REMOVED from the new array
// The result is stored in a brand new array called 'arr1'
let arr1=arr.filter((num1)=>num1<50)

// We print the new filtered array to the console
// Output will be: [ 15, 25 ]  — only the numbers less than 50 are kept
console.log(arr1);
