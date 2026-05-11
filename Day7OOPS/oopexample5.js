/*
  This file demonstrates that JavaScript does NOT support constructor overloading —
  and shows what happens when you try to define multiple constructors in one class.

  What is Constructor Overloading?
    In languages like Java or C#, you can define multiple constructors in the same
    class, each with a different number of parameters. The language picks the right
    one based on how many arguments you pass. This is called constructor overloading.

    Example in Java (does NOT apply to JavaScript):
        Employee(int age) { ... }
        Employee(int age, String name) { ... }
        Employee(int age, String name, double salary) { ... }

  What happens in JavaScript?
    JavaScript does not support constructor overloading. If you define more than
    one constructor in a class, only the LAST one is kept — the earlier ones are
    silently replaced.

    In this file, three constructors are defined. When you run the code, JavaScript
    only uses the third constructor (the one with age, name, and salary).
    So even when you call new Employee(26) with just one argument, the third
    constructor runs — and name and salary will be undefined because no values
    were passed for them.

  This is an important concept to understand:
    - In JavaScript, a class can only have ONE constructor.
    - To handle different numbers of arguments, use default parameter values
      or check inside a single constructor what was passed.

    Better approach using defaults:
        constructor(age, name = "Unknown", salary = 0) { ... }
*/

class Employee
{
    // This constructor is overwritten — JavaScript ignores it
    constructor(age)
    {
        this.age=age
    }

    // This constructor is also overwritten — JavaScript ignores it too
    constructor(age,name)
    {
        this.age=age
        this.name=name
    }

    // Only this constructor survives — the last one always wins in JavaScript
    constructor(age,name,salary)
    {
        this.age=age
        this.name=name
        this.salary=salary
    }

}

// Even though only one argument is passed, the third constructor runs
// So obj1.name and obj1.salary will be undefined
let obj1=new Employee(26)
console.log(obj1.age);   // 26
console.log(obj1.name);  // undefined — no second argument was passed
