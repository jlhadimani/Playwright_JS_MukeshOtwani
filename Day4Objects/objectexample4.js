/*
  Functions Inside Objects (Methods)

  In JavaScript, a function can also be a value inside an object.
  When a function lives inside an object, it is called a "method".

  Syntax:
    let obj = {
        "key": function() {
            // code
        }
    };

  To call the method:
    obj.key();

  In this example, the object has a property "f1" whose value is a function.
  Calling user.f1() will print "Hello World".

  Methods allow objects to carry both DATA (name, age, paid...)
  and BEHAVIOR (what actions the object can perform) together.
  This is a core idea behind Object-Oriented Programming (OOP).
*/

// Key-value pair

let user=
        {
                "name":"Gagan",
                "age":30,
                "paid":true,
                "phonenumber":[1245145,789451,7894511],
                "f1": function ()
                {
                        console.log("Hello World");

                }
        };
