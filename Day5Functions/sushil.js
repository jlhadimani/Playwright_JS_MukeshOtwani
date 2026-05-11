// We create an object called 'sushil'
// An object is a collection of related data and actions stored together
// Everything inside the curly braces {} is part of this object
let sushil=
{
    // This is a property — it stores a piece of data
    // The key is "name" and the value is "JS"
    "name":"JS",

    // This is a method — a method is a function stored inside an object
    // The key is 'f1' and the value is a function
    f1:function()
    {
        // When f1 is called, this line prints "Hello JS" to the console
        console.log("Hello JS");

    }
}

// Here we call the method 'f1' from the 'sushil' object using dot notation
// sushil.f1() means: go into 'sushil', find 'f1', and run it
// Output will be: Hello JS
sushil.f1()
