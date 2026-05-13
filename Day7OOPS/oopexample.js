/*
  This file introduces Object-Oriented Programming (OOP) in JavaScript using
  a class called Employee.

  What is a Class?
    A class is a blueprint or template for creating objects. Just like a house
    blueprint describes what every house built from it will have (rooms, doors,
    windows), a class describes what every object created from it will have
    (properties and methods).

  What is an Object?
    An object is an actual instance created from a class. When you write:
        let emp1 = new Employee("Girish", 30, 50000)
    JavaScript uses the Employee blueprint to build a real object in memory
    with the values you provided.

  What is a constructor?
    The constructor() is a special method that runs automatically when a new
    object is created. It sets up the initial values (properties) for that object.
    Here, every Employee object gets a name, age, and salary.

  What is "this"?
    Inside a class, "this" refers to the specific object being created or used.
    So "this.name = name" means: store the value of the name argument inside
    the current object's name property.

  What is "super"?
    "super" is used in child classes to refer to the parent class. It is not
    used in this file but is mentioned in the comments as a reference for
    when inheritance is introduced later.

  What is a method?
    A method is a function defined inside a class. Here, getEmpDetails() prints
    the employee's information using template literals (backtick strings with ${}
    placeholders).

  Note — there is an intentional error in this file:
    emp5.getEmpDetails() is called, but emp5 was never created. JavaScript will
    throw a ReferenceError: emp5 is not defined. This is a common mistake —
    calling a method on an object that does not exist yet.
*/

class Employee
{

    // "this" refers to the current object being created
    // "super" refers to the parent class (used in inheritance)
    constructor(name,age,salary)
    {
        this.name=name
        this.age=age
        this.salary=salary
    }

    // Method to display employee details using a template literal
    getEmpDetails()
    {
        console.log(`Emp details will be printed Name : ${this.name} Age: ${this.age} Salary ${this.salary} `);
        // The commented line below would NOT work because name/age/salary are not
        // standalone variables — they only exist as properties of "this"
        //console.log(`Emp details will be printed Name : ${name} Age: ${age} Salary ${salary} `);
    }

}

// Creating four Employee objects using the class blueprint
let emp1=new Employee("Girish",30,50000)

let emp2=new Employee("Devraj",32,60000)

let emp3=new Employee("Swarup",35,80000)

let emp4=new Employee("Afjal",28,70000)

// Accessing the age property of emp1 directly
console.log(emp1.age);

// ERROR: emp5 was never created, so this line will throw a ReferenceError
//emp5.getEmpDetails()
