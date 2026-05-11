/*
  This file reads a file using the Promise .then()/.catch() style — an older
  but still common way of handling asynchronous operations in JavaScript.

  This is an alternative to the async/await syntax shown in filereading.js.
  Both approaches do the same thing underneath — the difference is just in
  how the code is written and how easy it is to read.

  How .then() and .catch() work:
    - readFile() returns a Promise.
    - .then(callback) runs the callback when the Promise succeeds (file is read).
      The file content is passed as the first argument to the callback.
    - .catch(callback) runs the callback when the Promise fails (e.g., file
      not found, no permission, etc.).

  Arrow functions (=>) are used here as the callbacks. An arrow function like:
      (data) => { console.log(data); }
  is a shorter way of writing:
      function(data) { console.log(data); }

  In this file:
    - We try to read "sample2.txt".
    - If it succeeds, we print the file content.
    - If it fails for any reason, we print "something goes wrong".
    - "Start" is printed immediately, before the file reading completes,
      because file reading is asynchronous — it does not block the next line.
*/

import {readFile} from "fs/promises"

// This prints right away — file reading happens in the background
console.log("Start");


// readFile returns a Promise; we chain .then() for success and .catch() for failure
readFile("./sample2.txt","utf-8").then((data)=>
    {
    // This runs only if the file was read successfully
    console.log(data);
    }).catch(()=>
        {
        // This runs if something went wrong (e.g., file not found)
        console.log("something goes wrong");
    })
