/*
  Hoisting in JavaScript

  JavaScript has a feature called "hoisting" where function declarations
  are moved to the top of the file before the code runs.

  This means you can CALL a function BEFORE it is defined in the file,
  and it will still work correctly.

  In this example, greeting() is called on line 4, but the function body
  is written after it. JavaScript hoists the function definition, so
  there is no error.

  Important: Hoisting works for "function declarations" (using the
  function keyword like below). It does NOT work the same way for
  arrow functions or functions stored in variables.
*/

// function or method set of statement which will do a task and will return or might not return value
// reuse

greeting()

function greeting()
{
    console.log("Hello JS");
}


