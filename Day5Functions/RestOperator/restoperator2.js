// num1 and num2 are regular parameters — they receive the FIRST and SECOND arguments
// '...num' is the REST operator — it collects ALL REMAINING arguments (from the third onwards) into an array
// This shows that the rest operator can be used alongside regular parameters
// Important rule: the rest operator must always be the LAST parameter in the function
function add(num1,num2,... num) // rest operator //spread operator
{
     // We first add the two regular parameters num1 and num2 together to start the total
     let total=num1+num2;

    // 'for...of' loop goes through the remaining arguments stored in the 'num' array
    // In each round, the current element is stored in 'ele'
    for (let ele of num)
    {
        // We add each remaining number to the running total
        total=total+ele
    }

    // After all elements are added, we return the final total
    return total;
}

// We call add() with 7 arguments
// num1 = 12  (first argument — goes to num1)
// num2 = 25  (second argument — goes to num2)
// ...num = [78, 89, 89, 55, 787]  (remaining arguments — collected by rest operator)
// Total = 12 + 25 + 78 + 89 + 89 + 55 + 787 = 1135
let result=add(12,25,78,89,89,55,787)

// We print the result to the console
// Output will be: 1135
console.log(result);
