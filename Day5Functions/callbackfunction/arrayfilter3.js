// We create an array called 'arr' with five string values
let arr=["admin","user","teacher","sales","admin"]

// filter() checks each value in the array one by one
// The arrow function receives each value and checks if it is exactly equal to "admin"
// === means strict equality — both the value and type must match
// Only the items where the condition is true (value === "admin") are kept
// The filtered result is stored in a new array called 'arr1'
let arr1=arr.filter((value)=>value==="admin")

// We print the filtered array to the console
// Output will be: [ 'admin', 'admin' ] — only items matching "admin" are kept
console.log(arr1);
