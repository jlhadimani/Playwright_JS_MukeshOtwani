/*
  This file builds on oopexample.js by adding a setter method (setAge) to the
  Employee class. It also intentionally leaves out the buggy emp5 call from
  oopexample.js, making this a corrected and more complete example.

  What is a Setter Method?
    A setter method is a regular method whose purpose is to update a property
    on an object. Here, setAge(age) allows you to change an employee's age
    after the object has already been created.

    Example:
        emp1.age = 31          // Direct update — works but uncontrolled
        emp1.setAge(31)        // Through a setter — you can add validation here

    Using a setter gives you the chance to add checks (like ensuring age is
    not negative or not over 100) before the value is stored.

  What this file demonstrates:
    1. A class with a constructor that sets name, age, and salary.
    2. A getEmpDetails() method that prints all three values.
    3. A setAge() method that updates the age property.
    4. Four objects created from the same class — each with different data.
    5. Direct property access using dot notation (emp1.age).

  Template Literals:
    The backtick string in getEmpDetails() uses ${} placeholders. These are
    called template literals and let you embed variable values directly inside
    a string without using string concatenation (+).
*/

class Employee
{

    // "this" refers to the current object; "super" refers to a parent class
    constructor(name,age,salary)
    {
        this.name=name
        this.age=age
        this.salary=salary
    }

    // Method to print all employee details using a template literal
    getEmpDetails()
    {
        console.log(`Emp details will be printed Name : ${this.name} Age: ${this.age} Salary ${this.salary} `);
        // The line below is commented out — name/age/salary without "this" would be undefined
        //console.log(`Emp details will be printed Name : ${name} Age: ${age} Salary ${salary} `);
    }

    // Setter method to update the age of an existing employee object
    setAge(age)
    {
        this.age=age
    }

}

// Creating four different Employee objects using the same class blueprint
let emp1=new Employee("Girish",30,50000)

let emp2=new Employee("Devraj",32,60000)

let emp3=new Employee("Swarup",35,80000)

let emp4=new Employee("Afjal",28,70000)

// Accessing emp1's age directly using dot notation
console.log(emp1.age);

// emp5.getEmpDetails() is commented out — it was a ReferenceError in the previous file
//emp5.getEmpDetails()
