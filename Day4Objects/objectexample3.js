/*
  Array of Objects (Collection of Multiple Users)

  Instead of creating separate variables for each user, you can store
  all users inside a single array. Each element of the array is an object.

  This is the most common pattern in real applications — for example,
  a list of users returned from a database or an API will look exactly
  like this: an array where every item is an object.

  Structure:
    user1 = [
      { name: "Gagan",  ... },   ← index 0
      { name: "Vikas",  ... },   ← index 1
      { name: "Anoop",  ... }    ← index 2
    ]

  To access a specific user:   user1[0]         → Gagan's object
  To access a specific field:  user1[0].name    → "Gagan"
  To access a nested array:    user1[2].address[3].area4 → "Bansakari"

  Notice each user also has an "address" array with its own objects inside,
  making this a deeply nested data structure.
*/

// Key-value pair

let user1=[

        {
                "name":"Gagan",
                "age":30,
                "paid":true,
                "phonenumber":[1245145,789451,7894511],
                "address":[
                                {"area1":"whitefield"},
                                {"area2":"HSR"},
                                {"area3":"Sarjapur"}
                          ]
        },

        {
                "name":"Vikas",
                "age":35,
                "paid":true,
                "phonenumber":[1245145,789451,7894511],
                "address":[
                                {"area1":"whitefield"},
                                {"area2":"HSR"},
                                {"area3":"Sarjapur"}
                          ]
        },

        {
                "name":"Anoop",
                "age":32,
                "paid":true,
                "phonenumber":[1245145,789451,7894511],
                "address":[
                                {"area1":"whitefield"},
                                {"area2":"HSR"},
                                {"area3":"Sarjapur"},
                                {"area4":"Bansakari"},
                                {"area5":"Silboard"}
                          ]
        }


]


console.log(user1);
