/*
  This file is a minimal module that exports a single variable.

  It was created during a doubt session to demonstrate how a variable from
  one folder can be imported by a file in a completely different folder.

  In day6/sample.js, this file is imported like this:
      import { name } from "../day7/doubtsession/playwright.js"

  The "../" means "go one folder up", and then navigate into day7/doubtsession/.
  This shows that ES module imports can work across different folders — not just
  files in the same directory.

  The variable "name" holds the string "Microsoft", which represents the company
  behind the Playwright testing tool.
*/

// Exporting a variable so other files can import and use it
export let name="Microsoft"
