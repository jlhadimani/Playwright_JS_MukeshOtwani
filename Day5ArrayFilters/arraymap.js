// We create an array called 'arr' with four numbers
let arr=[1,2,3,4]


// map is higher order function/method which means it will receive callback function or function as argument

// callback function which will be passed as an argument

// map() creates a brand new array by transforming every item in the original array
// It does NOT change the original array — it always returns a new one
// Here we pass a regular function as the callback
// The function receives each item from 'arr' as the parameter 'abc'
// It multiplies each item by 3 and returns the result
// map() collects all the returned values and builds a new array stored in 'arr1'
let arr1=arr.map(function(abc)
{
        return abc*3
})

// We print the new array to the console
// Output will be: [ 3, 6, 9, 12 ]  — each item from arr is multiplied by 3
console.log(arr1);

// This does the same thing as above but uses an ARROW FUNCTION
// Each item from 'arr' is received as 'xyz' and multiplied by 5
// The results are collected into a new array called 'arr2'
let arr2=arr.map((xyz)=>
{
        return xyz*5
})

// We print the new array to the console
// Output will be: [ 5, 10, 15, 20 ]  — each item from arr is multiplied by 5
console.log(arr2);
