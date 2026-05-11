/*
  This file demonstrates a class with field declarations but no constructor —
  and shows how to set property values directly on an object after it is created.

  What are Class Fields?
    You can declare the properties a class will have at the top of the class
    body without assigning values. This is called a field declaration.

        class Employee {
            name;
            age;
            salary;
        }

    This tells JavaScript: "Every Employee object will have these three fields."
    They start with the value undefined until you assign something.

  Why no constructor here?
    When you don't write a constructor, JavaScript uses a default empty one.
    The object is still created successfully — it just won't have any initial
    values set automatically.

  Setting values after creation:
    After creating the object with "new Employee()", you can assign values to
    its fields using dot notation:
        obj1.age = 15
        obj1.name = "Tejaswini"

    This is valid JavaScript. The difference from oopexample.js is that here
    the values are set manually one by one after creation, instead of being
    passed through a constructor all at once.

  When would you use this pattern?
    When you don't know all the values at the time of creation, or when you
    want to build up an object step by step before using it.
*/

class Employee
{
    // Declaring fields without initial values — they will be undefined until assigned
    name;
    age;
    salary;

}

// Creating an Employee object — no arguments needed since there is no constructor
let obj1=new Employee()

// Assigning values to the fields after the object is created
obj1.age=15
obj1.name="Tejaswini"
obj1.salary=15000

// Reading the values back using dot notation
console.log(obj1.age);
console.log(obj1.name);
console.log(obj1.salary);
