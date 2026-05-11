let trainers= ["Mukesh","Mahesh", "Sanjay"];

trainers.slice()

let result= trainers.slice(0,2) //0,1
console.log(result);


/*(method) Array<string>.slice(start?: number | undefined, end?: number | undefined): string[]
Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

@param start
The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

@param end
The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array
it will not modify the original array

*/