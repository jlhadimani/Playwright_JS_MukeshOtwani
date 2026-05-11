/*
  This file demonstrates how to make an API call using the fetch() function
  along with async/await in JavaScript.

  An API (Application Programming Interface) is a way for one program to talk
  to another program over the internet. When you call an API, you send a request
  and get back a response — just like ordering food at a restaurant.

  async/await makes asynchronous code (code that takes time to complete, like
  fetching data from the internet) easier to read and write. The "await" keyword
  pauses execution inside the function until the result is ready, then continues.

  Steps happening in this file:
    1. We define an async function called getAPIData.
    2. Inside it, we call fetch() with a URL pointing to a live API endpoint.
    3. We await the response — meaning JavaScript waits until the server replies.
    4. We then print the response status (like 200 for OK), statusText, and body.
    5. Outside the function, we call it with await so the program waits for it
       to complete before printing "2".

  Why does the order matter?
    - "1" is printed first because it runs before the async function is called.
    - "Starting API Calls" and "Ending API Calls" run inside the function.
    - "2" is printed last because we await the function to finish before moving on.
*/

async function getAPIData()
{
    console.log("Starting API Calls");

    // fetch() sends an HTTP GET request to the given URL and returns a Response object
    let response=await fetch("https://restful-booker.herokuapp.com/ping")

    // status is a number like 200 (success), 404 (not found), 500 (server error)
    console.log(response.status);

    // statusText is the human-readable version of the status, e.g. "OK"
    console.log(response.statusText);

    // body contains the actual data sent back by the server (in a stream format)
    console.log(response.body);

    console.log("Ending API Calls");

}

console.log("1");

// await here ensures getAPIData() fully completes before we print "2"
await getAPIData()

console.log("2");
