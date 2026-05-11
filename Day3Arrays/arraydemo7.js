let names= ["Mini","Ramya", "Manasa","Pallavi"];

for (let x of names)
{
    console.log(x)
}

//cannot use this when we need to print a subset, meaning a random order of array elemsnts, or reverse order or alternative elements.
//Thsi can be used only when we have to print all the elements of the array. as the name says "for each loop"

console.log("Second loop operation - ")


for (let values of names)
{
    if(values==="Manasa")
    {
        console.log("Record found");
    }
    else
      console.log("Record not found");
}