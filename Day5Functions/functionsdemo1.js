/*
  A function is a reusable block of code that performs a specific task.
  Instead of writing the same code again and again, you wrap it inside a function
  and call it whenever needed.

  Syntax:
    function functionName(parameter1, parameter2) {
        // code to run
    }

  - A function without parameters just runs the same code every time it is called.
  - A function with parameters accepts input values (called arguments) when called,
    so the output can change based on what you pass.

  When you call greetWithNames() without passing any value, the parameter
  "firstname" becomes undefined, so "Hello undefined" is printed.
  This is normal JavaScript behavior — the next file shows how to fix it
  using default parameter values.
*/

// function or method set of statement which will do a task and will return or might not return value
// reuse

function greeting()
{
    console.log("Hello JS");
}

greeting()

function greetWithNames(firstname)
{
    console.log("Hello "+firstname);

}

greetWithNames("Vidhysagar")
greetWithNames("Venkata")
greetWithNames("Ram")
greetWithNames()
