/*
  Bracket Notation, Updating, Adding, and Deleting Properties

  Bracket Notation — another way to access properties:
    objectName["propertyName"]

  Use bracket notation when the property name is stored in a variable
  (dynamic access), because dot notation doesn't work in that case.

  Updating a property:
    user.age = 32      → changes age from 30 to 32

  Adding a new property:
    user.courses = ["JS","PW","AI"]
    If the key does not exist, JavaScript simply creates it.

  Deleting a property:
    delete user.paid   → removes just the "paid" key from the object
    delete user        → this does NOT delete the object. JavaScript ignores
                         this silently because "user" is a variable declared
                         with "let". The "delete" operator only works on
                         object properties, not variable declarations.

  This file shows the full lifecycle of working with an object:
  read → update → add → delete.
*/

// Key-value pair

let user=
        {
                "name":"Gagan",
                "age":30,
                "paid":true,
                "phonenumber":[1245145,789451,7894511]
        };

// read values from objects
console.log(user["age"]); // bracket notation
console.log(user["paid"]);
console.log(user["phonenumber"][1]);

// whenever you have dynamic key values pair or properties we will go with bracket

user.age=32 // update

user.courses=["JS","PW","AI"] // add if entry not found

console.log(user);

delete user.paid

console.log(user);

delete user

console.log(user);
