/*
  substring() Method

  substring(startIndex) extracts a portion of a string starting from
  the given index position and returns everything after it.

  String indexes start at 0:
    J  a  v  a  S  c  r  i  p  t  ...
    0  1  2  3  4  5  6  7  8  9  ...

  substring(2) starts from index 2, which is the letter "v".
  So "JavaScript With Playwright" becomes "vaScript With Playwright".

  You can also pass a second argument to set an end position:
    str.substring(2, 10) → extracts characters from index 2 up to (but not including) index 10

  Like all string methods, substring() does not change the original string.
  It returns a new string which you store in a variable.
*/

let str="JavaScript With Playwright";

let result=str.substring(2); // start from 0 , 1 , 2 ,3

console.log(result);
