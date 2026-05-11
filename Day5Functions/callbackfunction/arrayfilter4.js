// We create an array called 'arr' with four numbers
let arr=[15,25,89,78]

// filter() goes through every item in the array one by one
// Here the arrow function uses curly braces {} — this is called a block body
// When you use curly braces, you MUST write the 'return' keyword explicitly
// The 'return' keyword sends back true or false for each item
// If num1 < 50 is true  → the item is included in the new array
// If num1 < 50 is false → the item is excluded from the new array
// The result is stored in a new array called 'arr1'
let arr1=arr.filter((num1)=>
{
        return num1<50
})

// We print the filtered array to the console
// Output will be: [ 15, 25 ] — only numbers less than 50 are kept
console.log(arr1);
