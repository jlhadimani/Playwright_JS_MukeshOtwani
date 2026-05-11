/*
  Array of Objects as a Property Value

  A property value can also be an array of objects.
  This is useful when one field can have multiple structured entries.

  In this example, each user has an "address" property that holds
  an array of objects — meaning a user can have more than one address,
  and each address is itself an object with an "area" key.

  Structure for user1:
    address: [
      { area: "whitefield" },
      { area: "HSR" },
      { area: "Sarjapur" }
    ]

  This file also shows TWO separate user objects (user1 and user2) defined
  independently. They are not connected — they are just two different
  variables each holding their own object.

  Later examples will show how to group multiple objects into a single array.
*/

// Key-value pair

let user1=
        {
                "name":"Gagan",
                "age":30,
                "paid":true,
                "phonenumber":[1245145,789451,7894511],
                "address":[
                                {"area":"whitefield"},
                                {"area":"HSR"},
                                {"area":"Sarjapur"}
                          ]
        };


let user2=
        {
                "name":"Vikas",
                "age":35,
                "paid":true,
                "phonenumber":[7845,989465,1542],
                "address":[
                                {"area":"KRPuram"},
                                {"area":"Airport Rode"}
                          ]
        };


