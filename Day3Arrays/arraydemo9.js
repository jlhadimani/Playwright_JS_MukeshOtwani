let trainers= ["Mukesh","Mahesh", "Sanjay"];

trainers.splice()

//let result= trainers.splice(1,1) //from index and the no of elements to be removed
//console.log(result);

trainers.splice(1,0, "Ravi shankar")
console.log(trainers);


trainers.splice(1,0, "Udit Narayan")
console.log(trainers);

/*
output
[Running] node "c:\Users\jagad\JavaSriptLearningMO\Day3Arrays\arraydemo9.js"
[ 'Mukesh', 'Ravi shankar', 'Mahesh', 'Sanjay' ]
[ 'Mukesh', 'Udit Narayan', 'Ravi shankar', 'Mahesh', 'Sanjay' ]

*/



/*(method) Array<string>.splice(start: number, deleteCount?: number | undefined): string[] (+1 overload)
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount
The number of elements to remove. Omitting this argument will remove all elements from the start paramater location to end of the array. If value of this argument is either a negative number, zero, undefined, or a type that cannot be converted to an integer, the function will evaluate the argument as zero and not remove any elements.

@returns — An array containing the elements that were deleted.

splice will modify the original array.
*/