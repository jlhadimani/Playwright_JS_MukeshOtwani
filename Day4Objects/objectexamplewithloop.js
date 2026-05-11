/*
  Looping Through an Object — for...in Loop

  When you want to go through every property of an object one by one,
  use the for...in loop.

  Syntax:
    for (let key in objectName) {
        console.log(key);           // gives the property name (e.g. "name")
        console.log(objectName[key]); // gives the property value (e.g. "Gagan")
    }

  On each iteration, "key" holds the name of the current property as a string.
  To get the value of that property, you MUST use bracket notation: objectName[key].
  Dot notation (objectName.key) would NOT work here because "key" is a variable,
  not the literal property name.

  This loop is useful when you don't know all the property names in advance,
  or when you want to process every property dynamically.
*/

// Key-value pair

let user=
        {
                "name":"Gagan",
                "age":30,
                "paid":true,
                "phonenumber":[1245145,789451,7894511]
        };

for (let key in user)
{
      console.log(" Key is "+key + " Value is "+user[key]);

}
