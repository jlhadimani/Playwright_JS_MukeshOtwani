/*
  Introduction to Objects in JavaScript

  An object is a collection of related data stored as key-value pairs.
  Think of it like a form filled out for a person — it holds multiple
  pieces of information about that one person together.

  Syntax:
    let objectName = {
        "key1": value1,
        "key2": value2
    };

  The value can be of any type:
  - string  → "Gagan"
  - number  → 30
  - boolean → true or false
  - array   → [1245145, 789451, 7894511]

  In this example, the "phonenumber" property holds an array of numbers,
  meaning one user can have multiple phone numbers stored inside
  the same object.

  console.log(user) prints the entire object with all its properties.
*/

// Key-value pair

let user=
        {
                "name":"Gagan",
                "age":30,
                "paid":true,
                "phonenumber":[1245145,789451,7894511]
        };

console.log(user);
//console.log(typeof user);
