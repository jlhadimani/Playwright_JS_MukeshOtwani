/*
  This file shows how to export an entire class from a module so that other
  files can import it and create objects from it.

  In oopexample1.js, the Employee class was defined and used in the same file.
  Here, the class is exported — making it a reusable module that other files
  can import.

  How to import this class in another file:
      import { Employee } from "./oopexample2.js"
      let emp = new Employee("Riya", 25, 45000)
      console.log(emp.getSalary())

  This file also keeps the private field #salary and the getSalary() getter,
  reinforcing the concept that private fields protect sensitive data. The
  setSalary() method is intentionally left out here — this version only allows
  reading the salary, not changing it after the object is created.

  This pattern — keeping data private and exposing only what is necessary —
  is called Encapsulation, one of the core principles of Object-Oriented
  Programming.
*/

// "export" before "class" makes this class available to other files
export class Employee
{
    // #salary is a private field — only accessible inside this class
    #salary //_salary

    constructor(name,age,salary)
    {
        this.name=name
        this.age=age
        this.#salary=salary
    }

    // Getter method — the only way for outside code to read the salary
    getSalary()
    {
        return this.#salary
    }

}
