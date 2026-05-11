/*
  This file demonstrates private fields in JavaScript classes, along with
  getter and setter methods — and how to add new properties to an object
  dynamically at runtime.

  What are Private Fields?
    By default, all properties in a class are public — any code outside the
    class can read or change them freely. Sometimes you want to protect a
    property so only the class itself can access it. In JavaScript, you do
    this by prefixing the property name with a # symbol.

    Example:
        #salary   — this is a private field. Only methods inside the class
                    can read or change it. Code outside the class cannot.

    The older convention was to use _salary (with an underscore) as a hint to
    other developers, but that was just a naming convention — anyone could still
    access it. The # syntax enforces the restriction at the language level.

  What is a Getter?
    A getter method (getSalary here) is a regular method that returns a private
    or internal value. Since #salary is private, the only way for outside code
    to read the salary is by calling getSalary().

  What is a Setter?
    A setter method (setSalary here) allows outside code to update a private
    field in a controlled way. You can add validation inside a setter —
    for example, to prevent a negative salary from being set.

  Dynamic Property Addition:
    JavaScript allows you to add new properties to an existing object at any
    time, even if those properties were never defined in the class. Here,
    emp1.address = "Bangalore" creates a brand new "address" property on emp1.
    If the property already existed, it would be updated instead.
    This flexibility is unique to JavaScript — most other OOP languages do not
    allow this.
*/

class Employee
{
    // Declaring #salary as a private field — must be declared at the top of the class
    #salary //_salary

    constructor(name,age,salary)
    {
        this.name=name
        this.age=age
        this.#salary=salary  // storing salary in the private field
    }

    // Only methods inside this class can access #salary directly
    // getSalary() provides controlled read access from outside
    getSalary()
    {
        return this.#salary
    }

    // setSalary() provides controlled write access from outside
    setSalary(salary)
    {
        this.#salary=salary
    }


}

// Creating an Employee object
let emp1=new Employee("Avinash",28,"90000")

// Adding a new property "address" to this object — it did not exist in the class
// If it existed, this would update it; since it does not, it creates it
emp1.address="Bangalore"


console.log(emp1.name);
console.log(emp1.age);
console.log(emp1.address);

// Reading salary through the getter method (direct #salary access would fail)
let salary=emp1.getSalary()
console.log(salary);

// This line is commented out — it would throw a SyntaxError because #salary is private
//emp1.#salary=400

// Updating salary through the setter method — this is the correct way
emp1.setSalary(400)
