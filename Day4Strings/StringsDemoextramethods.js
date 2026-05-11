let str = "  JavaScript is awesome and JavaScript is powerful  ";

console.log(str.length);// trimms the space

let trimmedstr = str.trim();

console.log(trimmedstr.length);

console.log(trimmedstr.startsWith("JavaScript"));

console.log(trimmedstr.endsWith("JavaScript"));

console.log(trimmedstr.includes("JavaScript"));

let newstr = trimmedstr.replace("JavaScript","TypeScript")

consolelog(newstr);
