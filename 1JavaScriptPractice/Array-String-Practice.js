//Test tool validation

let arr = ["Selenium","Playwright","cypress","WebDriverIO"];
//write a script to verify if Playwright is avilable in the array.

//console.log(arr);
for (let x of arr)
{
    //console.log(x);
    if(x==='Playwright') 
    {
        console.log("Playwright is present in the array arr")
    }
    else{
        console.log("Playwright is not present in the array arr")
    }
}