// Store function in a variable // function expression

// A function expression means we store a function inside a variable
// 'fun1' is a variable that holds a function with no parameters
// This type of function does NOT have a name — it is called an anonymous function
let fun1=function()
{
    // When fun1 is called, it prints "Hello From PW" to the console
    console.log("Hello From PW");

}

// We call the function stored in 'fun1' by writing fun1()
// The () at the end means "execute this function"
// Output will be: Hello From PW
fun1()

// Here 'fun2' holds a function that accepts two input values: num1 and num2
// These inputs are called parameters
// The function subtracts num2 from num1 and sends back the result using 'return'
let fun2=function(num1,num2)
{
    return num1-num2
}

// We call fun2 and pass the values 15 and 5 as arguments
// Inside the function: num1 = 15, num2 = 5
// The function returns 15 - 5 = 10, and we store that value in 'result'
let result=fun2(15,5)

// We print the value stored in 'result' to the console
// Output will be: 10
console.log(result);
