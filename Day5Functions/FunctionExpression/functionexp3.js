// This is a regular FUNCTION DECLARATION
// Function declarations are hoisted — JavaScript automatically moves them to the top before running the code
// That means you can call a function declaration before or after it appears in the file
function greeting()
{
    // When greeting() is called, it prints "Hello JS" to the console
    console.log("Hello JS");
}

// We call the greeting function here
// Output will be: Hello JS
greeting()


// This is a FUNCTION EXPRESSION — the function is stored inside the variable 'fun1'
// Unlike function declarations, function expressions are NOT hoisted
// So you must always define them BEFORE calling them
let fun1=function ()
{
    // When fun1 is called, it prints "Hello From PW" to the console
    console.log("Hello From PW");

}

// We call fun1 after it has been defined — this works correctly
// Output will be: Hello From PW
fun1()

// This is an ARROW FUNCTION stored in the variable 'fun2'
// Arrow functions are a short and modern way to write function expressions
// This function takes two parameters: num1 and num2
let fun2=(num1,num2)=>
{
    // It subtracts num2 from num1 and returns the result to the caller
    return num1-num2
}

// We call fun2 with the values 15 and 5
// Inside the function: num1 = 15, num2 = 5
// The function returns 15 - 5 = 10, which is stored in 'result'
let result=fun2(15,5)

// We print the value of 'result' to the console
// Output will be: 10
console.log(result);
