/*
  Default Parameters in JavaScript Functions

  In the previous example, calling greetWithNames() without an argument
  printed "Hello undefined". To avoid this, JavaScript allows you to set
  a default value for a parameter.

  Syntax:
    function functionName(param = "defaultValue") { ... }

  If you call the function without passing a value for that parameter,
  JavaScript automatically uses the default value instead.

  In this example:
  - greetWithNames("Vidhysagar") → uses "Vidhysagar"  (argument provided)
  - greetWithNames()             → uses "Vikash"       (default kicks in)

  Default parameters make your functions more robust and prevent
  unexpected "undefined" outputs.
*/

function greetWithNames(firstname="Vikash") // default arguments in JS
{
    console.log("Hello "+firstname);

}

greetWithNames("Vidhysagar")
greetWithNames("Venkata")
greetWithNames("Ram")
greetWithNames()
