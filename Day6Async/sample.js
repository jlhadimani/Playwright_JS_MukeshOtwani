/*
  This file demonstrates how to import from multiple modules and use their
  exported values together in one place.

  Think of imports like borrowing tools from different toolboxes:
    - From demo.js   : we borrow "tool" (a string) and "add" (a function)
    - From demo1.js  : we borrow "programming" (a string)
    - From a file in day7 : we borrow "name"

  Named imports use curly braces { } and the names must match exactly what
  the other file exported. If a name does not match, the import will fail.

  You can import from:
    - Files in the same folder     : "./demo.js"
    - Files in a parent folder     : "../day7/..."
    - Node.js built-in modules     : "fs/promises", "path", etc.
    - Installed packages           : "express", "axios", etc.

  What this file does:
    1. Imports "tool" and "add" from demo.js in the same folder.
    2. Imports "programming" from demo1.js in the same folder.
    3. Imports "name" from a file inside the day7 folder (one level up).
    4. Prints all three imported values.
    5. Calls the add() function with two numbers and prints the result.
    6. "arr" from demo.js is intentionally commented out — to show that you
       don't have to import everything a module exports.
*/

// Importing two named exports from demo.js
import {tool,add} from "./demo.js"

// Importing one named export from demo1.js
import {programming} from "./demo1.js"

// Importing from a different day's folder — shows cross-folder imports work too
import {name} from "../day7/doubtsession/playwright.js"

// Printing the imported string from demo.js
console.log(tool);

// Printing the imported string from demo1.js
console.log(programming);

// Printing the imported string from playwright.js in day7
console.log(name);

// arr is available in demo.js but we chose not to import it here
//console.log(arr);

// Calling the imported add() function with two numbers
let result=add(15,56)

// Displaying the result of the addition
console.log("Result is "+result);
