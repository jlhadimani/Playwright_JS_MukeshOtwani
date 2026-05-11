/*
  This file shows a simple named export of a single variable.

  Even a file with just one line can act as a module. By using the "export"
  keyword directly in front of the variable declaration, we make it available
  for other files to import.

  Another file can use this like:
      import { programming } from "./demo1.js"

  This is the inline export syntax — shorter than declaring the variable first
  and then writing a separate export statement.
*/

// Exporting the variable directly at the point of declaration
export let programming="JS"
