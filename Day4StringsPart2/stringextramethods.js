/*
  Useful String Methods — Part 1

  JavaScript provides many built-in methods to work with strings.
  Here are the ones demonstrated in this file:

  trim()
    Removes whitespace (spaces, tabs) from the start and end of a string.
    The original string " JavaScript is awesome... " has spaces at both ends.
    After trim(), those spaces are gone — that is why trimmedstr.length is smaller.

  startsWith("text")
    Returns true if the string begins with the given text, false otherwise.

  endsWith("text")
    Returns true if the string ends with the given text, false otherwise.

  includes("text")
    Returns true if the given text appears anywhere inside the string.

  replaceAll("oldText", "newText")
    Replaces every occurrence of "oldText" with "newText" and returns a new string.
    The original string is not changed — the result is stored in a new variable.

  None of these methods modify the original string. Strings in JavaScript
  are immutable — every method gives back a new string.
*/

let str=" JavaScript is awesome and JavaScript is powerful ";

console.log(str.length);

let trimmedstr=str.trim();

console.log(trimmedstr.length);

console.log(trimmedstr.startsWith("JavaScript"));

console.log(trimmedstr.endsWith("powerful"));

console.log(trimmedstr.includes("awesome"));

let newstr=trimmedstr.replaceAll("JavaScript","TypeScript")

console.log(newstr);
