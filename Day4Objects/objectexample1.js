/*
  Nested Objects

  An object's value can itself be another object. This is called a nested object.
  It is useful when one piece of data naturally belongs inside another.

  In this example, the "address" property is not a simple string — it is
  an entire object with its own keys: "area", "city", and "pincode".

  Structure:
    user
    ├── name       → "Gagan"
    ├── age        → 30
    ├── paid       → true
    ├── phonenumber → [1245145, 789451, 7894511]
    └── address    → { area: "Whitefield", city: "BLR", pincode: 566675 }

  To access a nested value you chain dot notation:
    user.address.city  → "BLR"

  This is how real-world data (like API responses or user profiles)
  is typically structured.
*/

// Key-value pair

let user=
        {
                "name":"Gagan",
                "age":30,
                "paid":true,
                "phonenumber":[1245145,789451,7894511],
                "address":{
                                "area":"Whitefield",
                                "city":"BLR",
                                "pincode":566675
                          }
        };

console.log(user);


