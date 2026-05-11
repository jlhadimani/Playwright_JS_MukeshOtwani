/*
  This file demonstrates how to read a file from your computer using Node.js,
  written with async/await syntax.

  Node.js provides a built-in module called "fs" (File System) that lets you
  work with files on your disk. We use the "fs/promises" version, which returns
  Promises — making it compatible with async/await.

  What is a Promise?
    A Promise represents a task that will complete in the future. Instead of
    blocking the entire program while waiting (like reading a large file),
    JavaScript can continue with other work and come back when it's done.

  What is async/await?
    - "async" before a function means it will return a Promise automatically.
    - "await" inside that function pauses only that function until the Promise
      resolves, without freezing the rest of the program.

  How this file works:
    1. We import readFile from "fs/promises".
    2. We define an async function getData().
    3. Inside it, we await readFile() — this reads "sample.txt" from the same
       folder and returns its content as a string (because we passed "utf-8").
    4. We print the content between "Start" and "End" to show the order clearly.
    5. We call getData() with await so the program waits for it to finish.
*/

import {readFile} from "fs/promises"

async function getData()
{

    console.log("Start");

    // readFile returns a Promise — await pauses here until the file is read
    // "utf-8" tells Node to decode the raw bytes into a readable string
    let data=await readFile("./sample.txt","utf-8")

    console.log(data);

    console.log("End");
}

// Calling the function at the top level using await (works in ES modules)
await getData()
