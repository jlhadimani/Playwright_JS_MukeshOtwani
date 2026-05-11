/*
  Return Values from Functions

  So far our functions just printed something. But functions can also
  CALCULATE a value and send it back to the caller using the "return" keyword.

  Once a function returns a value, you can store that value in a variable
  and use it anywhere in your program.

  Syntax:
    function functionName(param1, param2) {
        let result = param1 + param2;
        return result;   // sends the value back
    }
    let answer = functionName(5, 10);  // answer is now 15

  Notice in this example:
  - add("1", 26) passes a string "1" and a number 26.
  - JavaScript treats "1" + 26 as string concatenation, so the result is "126"
    not 27. This is because the + operator with a string converts the number
    to a string as well.
  - Always make sure the data types you pass match what the function expects.

  Default parameters (num1=0, num2=0) ensure the function still works even
  if called without arguments — it would return 0 + 0 = 0 in that case.
*/

function add(num1=0,num2=0)
{
    let result=num1+num2;

    return result;

}

let value=add("1",26)

console.log("Addition is "+value);


