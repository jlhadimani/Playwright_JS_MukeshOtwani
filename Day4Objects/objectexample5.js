/*
  Accessing Object Properties — Dot Notation

  Once you have an object, you can read individual values using dot notation:
    objectName.propertyName

  This is the most common and readable way to access object properties.

  Examples from this file:
    user.age            → 30
    user.paid           → true
    user.phonenumber[1] → 789451   (index 1 from the array inside the object)

  The square brackets [1] at the end are used to access a specific element
  from the phonenumber array. Arrays inside objects work exactly the same
  as regular arrays — index starts at 0.

  Dot notation works perfectly when you already know the exact property name
  you want to access. When the property name is dynamic (stored in a variable),
  use bracket notation instead — shown in the next file.
*/

// Key-value pair

let user=
        {
                "name":"Gagan",
                "age":30,
                "paid":true,
                "phonenumber":[1245145,789451,7894511]
        };


console.log(user.age); // dot notation
console.log(user.paid);
console.log(user.phonenumber[1]);
