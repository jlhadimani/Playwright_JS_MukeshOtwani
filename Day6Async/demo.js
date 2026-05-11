/*
  This file demonstrates how to use ES Module Exports in JavaScript.

  In modern JavaScript (ES Modules), you can split your code across multiple
  files. One file can "export" values — and another file can "import" them.
  This helps keep code organized and reusable.

  There are two kinds of exports:
    - Named exports: You export multiple things by name (using curly braces
      when importing). That is what this file uses.
    - Default export: You export a single main thing (no curly braces needed).

  What is being exported here:
    - tool   : a string variable holding text about Playwright
    - arr    : an array of numbers
    - add    : a function that takes two numbers and returns their sum

  Any other file can import these using:
      import { tool, arr, add } from "./demo.js"
*/

// A simple string variable describing a tool
let tool="Playwright is by microsoft";

// An array of numbers — each element is a multiple of 12
let arr=[12,24,36,48]

// A function that adds two numbers and returns the result
function add(num1,num2)
{
    return num1+num2
}

// Exporting all three so other files can use them
export {tool,arr,add}
