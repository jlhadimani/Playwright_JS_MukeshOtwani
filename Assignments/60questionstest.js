async function test ()
{
    return 1;
}

console.log(test());
 

//question 9
console.log([]==[]);

//question 10
//console.log(a);
//let a = 5; // referenced error

//question 11
console.log(a);
var a = 5; // undefined

//question 12
let fname ='Playwright';
console.log(fname.toLowerCase());
console.log(fname);

//question 14   Which will throw a syntax error
//let 1name = "Jagadish"; // syntax error
//console.log(1name);
let name1 = "Jagadish1"; // syntax error
console.log(name1);

let_name = "Jagadish_"; // syntax error
console.log(let_name);

let $name = "Jagadish$"; // syntax error
console.log($name); 

//question 16
//Which will throw console.error?;
//const z; //SyntaxError: Missing initializer in const declaration
//let z;
var z;
z = 5;
console.log('z=' + z); 

//instead we need to declare and initialize the const variable in the same line
const z1 = 55;
console.log('z1=' + z1);
// below code will also not work.
// z2=555;
// const z2; //SyntaxError: Missing initializer in const declaration
// console.log(z2);

//question 17
//What will be the output of [...'abc']?
console.log([...'abc']); // ['a', 'b', 'c']
/*
... is the spread operator.
A string is iterable in JavaScript.
The spread operator spreads each character individually into the array.
*/

//question 20
//which loop is best for iterating array elements
//The most commonly recommended loop for iterating array elements in modern JavaScript is for .. of
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

//question 21
//which loop is best for iterating object properties
//The best loop for iterating over object properties in JavaScript is: for .. in
const user = {
    name: "Jagadish",
    role: "QA Engineer",
    experience: 12
};

for (let key in user) {
    console.log(key, user[key]);
}

//Question 22
//In JavaScript, the keyword used to remove a property from an object is: delete
delete user.experience;
console.log(user); // { name: "Jagadish", role: "QA Engineer" }

//Question 23-how to check if an  object has a specific property in JavaScript?
//You can check if an object has a specific property in JavaScript using the hasOwnProperty() method or the in operator.    
console.log(user.hasOwnProperty('name')); // true
console.log('name' in user); // true

//question 24 - which will stop execution when condition is met in a loop
//The break statement is used to stop the execution of a loop when a specific condition is met.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}       

//question 25 -which array method creates a new array with results of a function?
//The map() method creates a new array with the results of calling a provided function on every element in the calling array.
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16]   

//question 26 - output of console.log('5' == 5, '5' === 5);
console.log('5' == 5, '5' === 5); // true false
// '5' == 5 is true because it performs type coercion and converts the string '5' to the number 5 before comparing.
// '5' === 5 is false because it checks for both value and type, and here the types are different (string vs number).

//question 27 - which keyword is used to import modules in ES6?
//The keyword used to import modules in ES6 is: import
// Example:
// import { myFunction } from './myModule.js';  

//Question 28 - which function syntex is ES6 arrow function?
// The ES6 arrow function syntax is: 
// const functionName = (parameters) => {

//Question 29 which of these is not 
//const numbers2 = [1, 2, 3, 4];
//numbers2.   //loop() is not a valid array method, 

//question 30 which method adds element at the  start of the array?
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
const arr = [2, 3, 4];
arr.unshift(1);
console.log(arr); // [1, 2, 3, 4]

//question 31 which method removes last element of the array?
//The pop() method removes the last element from an array and returns that element.
const arr2 = [1, 2, 3, 4];
const lastElement = arr2.pop();
console.log(lastElement); // 4
console.log(arr2); // [1, 2, 3]

//Question 32 - what will console.log(typeof []]) output?
console.log(typeof []); // "object"

//question 33 - which of these is not a valid variable name in JavaScript?
//var 123arr = [1, 2, 3]; // SyntaxError: Invalid or unexpected token
var arr_123 = [1, 2, 3]; // valid variable name
console.log(arr_123); // [1, 2, 3]
//var @arr = [1, 2, 3]; // SyntaxError: Unexpected token '@'  
//var arr-23 = [1, 2, 3]; // SyntaxError: Unexpected token '-'
var arr$ = [1, 2, 3];

//question 34 - which is not a premitive type in JavaScript?
//The primitive types in JavaScript are: string, number, boolean, null, undefined, symbol, and bigint. 
// Therefore, "object" is not a primitive type in JavaScript.

//question 35 - output of [1, 2, 3].length
console.log([1, 2, 3].length); // 3

//question 37 - output of console.log(1 + true);
console.log(1 + true); // 2 

// question 38 - which operator is used to assign a value to a variable?
// The assignment operator (=) is used to assign a value to a variable.
let xx;;
console.log(xx); // undefined

//question40
console.log('5' -2); // 3
// The - operator performs type coercion and converts the string '5' to the number 5 before performing the subtraction, resulting in 3.

//const y =5; y=10; // TypeError: Assignment to constant variable.
let yy= 5; yy=10; // valid reassignment
console.log(yy); // 10
//var yyy = 5; const yyy = 10; // SyntaxError: Identifier 'yyy' has already been declared

//question 45 which is falsy

//question46
console.log(2 + '2'); // '22'
// The + operator performs type coercion and converts the number 2 to the string '2' before concatenating it with the string '2', resulting in '22  '.

//Question 47 which is not a Javascript data type

//what will typeof null output?
console.log(typeof null); // "object"
// This is a well-known quirk in JavaScript. The typeof operator returns "object" for null, even though null is not actually an object.
//  This behavior is due to legacy reasons and is considered a bug in the language, but it has been retained for backward compatibility. 

//question 49 
let emp = {
    id:101,
    skills: ['JS', 'Plawright', 'Selenium']
};
console.log(emp.skills.length); // 3
// The length property of the skills array returns the number of elements in the array, which is 3 in this case.

//question 50
let emp1 = {
    id:101,
    name: 'Jagadish',
    skills: ['JS', 'Plawright', 'Selenium']
};
console.log(emp1.skills[1]); // 'Plawright'

//Question 51 - which symbol is used to object destructuring in JavaScript?
// The symbol used for object destructuring in JavaScript is the curly braces {}. 
// Example:
const { name, skills } = emp;
console.log(name); // 'Jagadish'
console.log(skills); // ['JS', 'Plawright', 'Selenium'] 

//question 52
let obj = {
    name : 'QA',
    show:function (){
        console.log(this.name);
        
    }
}
obj.show(); // 'QA'
// In this code, the show method is defined as a regular function, 
// and when it is called using obj.show(), the this keyword refers to the obj object, allowing it to access the name property and print 'QA' to the console.

//question 53 
let obj1 = {a: 1, b: 2, c: 3};
delete obj1.a;
console.log(obj1); // { b: 2, c: 3 }
// The delete operator removes the property a from the obj object, resulting in an object that only contains properties b and c.

//question 54 - which of these is not a valid way to create an object in JavaScript?
let obj2 = {name: 'Jagadish'}; // valid object literal
console.log(obj2.age); // undefined  

//question 57
let aa = [1,2,3];
let bb = aa;
bb.push(4);
console.log(aa); // [1, 2, 3, 4]
// In JavaScript, arrays are reference types. When you assign an array to a variable (let bb = aa;), you are assigning a reference to the same array in memory. 
// Therefore, when you modify the array through variable b (b.push(4);), it also modifies the array that variable a references, resulting in both a and b reflecting the change.  

//question 58
let greet= () => "Hello";
console.log(greet()); // "Hello"
// The arrow function greet is defined to return the string "Hello". When we call greet(), it executes the function and returns "Hello", which is then printed to the console.  


//question 60
//which method is automatically called when an obect is created from a class in JavaScript?
// The constructor method is automatically called when an object of a class is created in JavaScript.