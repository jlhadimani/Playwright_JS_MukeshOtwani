/*
  This file introduces three built-in JavaScript constructors: Set, Map, and Error.

  In JavaScript, "new" is not only used with classes you define yourself. Many
  built-in objects are also created using "new". This file shows three of them.

  What is a Set?
    A Set is a collection of unique values. Unlike an array, it does not allow
    duplicates. If you try to add the same value twice, it is only stored once.

    Common methods:
        s.add(value)       — adds a value
        s.has(value)       — checks if a value exists (returns true/false)
        s.delete(value)    — removes a value
        s.size             — gives the count of items

    Example use case: storing a list of visited pages where you never want
    the same page appearing twice.

  What is a Map?
    A Map stores data as key-value pairs — similar to a plain object {}. The
    difference is that a Map allows ANY type of value as a key (not just strings),
    and it maintains the insertion order of entries.

    Common methods:
        m.set(key, value)  — adds or updates an entry
        m.get(key)         — retrieves the value for a key
        m.has(key)         — checks if a key exists
        m.delete(key)      — removes an entry
        m.size             — gives the count of entries

    Example use case: storing configuration settings where keys might not be
    plain strings.

  What is an Error?
    Error is a built-in constructor for creating error objects. When something
    goes wrong in your program, JavaScript creates an Error internally. You can
    also create one manually using new Error("message") and throw it yourself.

    In this file, "new Error()" is created but not stored or thrown — it just
    shows that Error follows the same "new ConstructorName()" pattern as classes.
*/

// Creating an empty Set — no duplicate values allowed
const s=new Set()

console.log(s);

// Creating an empty Map — stores key-value pairs
const m=new Map()

console.log(m);

// Creating an Error object — shows Error also uses the "new" keyword
new Error()
