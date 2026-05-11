// We create an array called 'arr' with six numbers
let arr=[12,15,18,89,78,25]

// forEach() is a method that loops through every item in the array one by one
// We pass a regular function as an argument — this is called a callback function
// A callback function is a function passed inside another function
// The callback function receives each array item as 'num1', one at a time
arr.forEach(function(num1)
{
    // For each item in the array, this line prints it to the console
    // It will print: 12, then 15, then 18, then 89, then 78, then 25
    console.log(num1);

})

// This does the exact same thing as the forEach above
// But here we use an ARROW FUNCTION instead of a regular function
// Arrow functions are a shorter, modern way to write functions in JavaScript
// The behavior is identical — each item is printed one by one
arr.forEach((num1)=>
{
    // For each item in the array, this line prints it to the console
    console.log(num1);

})
