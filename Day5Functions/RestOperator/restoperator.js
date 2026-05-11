// The '...num' inside the function parameters is the REST operator
// The rest operator collects ALL the arguments passed to the function into a single array called 'num'
// This is useful when you do not know in advance how many arguments the caller will pass
// You can now pass 2 values, or 5 values, or 100 values — the rest operator handles all of them
function add(... num) // rest operator //spread operator
{
    // We start with a total of 0 before adding anything
    let total=0;

    // 'for...of' loop goes through the 'num' array element by element
    // In each round of the loop, the current element is stored in 'ele'
    for (let ele of num)
    {
        // We add the current element to the running total
        total=total+ele
    }

    // After the loop finishes, we return the final total back to the caller
    return total;

}

// We call add() and pass four numbers as arguments: 12, 25, 78, 89
// The rest operator collects them into an array: [12, 25, 78, 89]
// The function adds them all: 12 + 25 + 78 + 89 = 204
// The returned value 204 is stored in 'result'
let result=add(12,25,78,89)

// We print the result to the console
// Output will be: 204
console.log(result);
