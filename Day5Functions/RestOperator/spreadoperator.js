// We create an object called 'user' with one property: name
let user=
    {
        "name":"Mukesh Otwani"
    }

// We create another object called 'user1' with its own name property
let user1=
    {
        "name":"Sushil Kumar"
    }

// We create a third object called 'user2' with its own name property
let user2=
    {
        "name":"Viraj Shahd"
    }

// The SPREAD operator '...' expands an object's properties into another object
// '...user'  copies all properties from 'user'  into the new object  → name: "Mukesh Otwani"
// '...user1' copies all properties from 'user1' into the new object  → name: "Sushil Kumar" (overwrites Mukesh)
// '...user2' copies all properties from 'user2' into the new object  → name: "Viraj Shahd" (overwrites Sushil)
// When two objects have the same key, the LAST one wins and overwrites the earlier value
// "role":"Trainer" adds a completely new property that was not in any of the original objects
// The final merged object is stored in 'newUser'
let newUser={...user,...user1,...user2, "role":"Trainer"}

// We print the final merged object to the console
// Output will be: { name: 'Viraj Shahd', role: 'Trainer' }
console.log(newUser);
