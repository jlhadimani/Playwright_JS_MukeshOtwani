// Store function in a variable // function expression

// IMPORTANT: This line tries to call fun1 BEFORE it is defined below
// Function expressions are NOT hoisted — hoisting means JavaScript moves declarations to the top
// Since function expressions are not hoisted, JavaScript does not know what fun1 is yet
// This line will throw a ReferenceError: Cannot access 'fun1' before initialization
fun1()

// fun1 is defined here as a function expression
// But because it was called before this line, the program crashes before ever reaching here
let fun1=function()
{
    console.log("Hello From PW");

}

// This line also tries to call fun2 before it is defined further below
// This will also throw a ReferenceError — same problem as calling fun1 early
let result=fun2(15,5)

// We try to print the result, but the program crashes before reaching this line
console.log(result);


// fun2 is defined here, but it is too late — it was already called above
// This file is an example showing what NOT to do with function expressions
let fun2=function(num1,num2)
{
    return num1-num2
}
