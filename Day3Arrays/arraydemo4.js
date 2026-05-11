let arr = ["Selenium", "PW", "Cypress", "WDIO"] //creating an array.

console.log(arr);

arr.unshift();
console.log(arr);
/*
(method) Array<string>.unshift(...items: string[]): number
Inserts new elements at the start of an array, and returns the new length of the array.

@param items — Elements to insert at the start of the array.
*/

arr.shift()
//(method) Array<string>.shift(): string | undefined
//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr);