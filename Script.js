// JavaScript String Length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);
console.log(text);
/* Extracting String Characters
There are 4 methods for extracting string characters:

The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays
*/
let char = text.charAt(0);
console.log(char);
const name = "Glady's";
let letter = name.at(2);
console.log(letter);
let chari = text[0];
console.log(chari);
text[0] = "A";
console.log(text[0]);
/*Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
*/
text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);
//(,) is a symbol not a text
let part1 = text.slice(-12);
console.log(part1);
let str = "Apple, Banana, Kiwi";
let part2 = str.substring(7, 6);
console.log(part2);
let part3 = str.substring(7, 6);
console.log(part3);
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);
let text3 = text1.toLowerCase();
console.log(text3);
let text4 = "Hello";
let text5 = "World";
let text6 = text4.concat(" ", text5);
console.log(text6);
text7 = "Hello" + " " + "World!";
text8 = "Hello".concat(" ", "World!");
console.log(text8);
//JavaScript String trim()
//The trim() method removes whitespace from both sides of a string:
let text9 = "      Hello World!      ";
let text10 = text9.trim();
console.log(text10);
//The trimStart() method works like trim(), but removes whitespace only from the start of a string.
let text11 = text9.trimStart();
console.log(text11);
//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
//The padStart() method pads a string from the start.
//It pads a string with another string (multiple times) until it reaches a given length.
let text12 = "5";
let padded = text12.padStart(4,"0");
console.log(padded);
let padded1 = text12.padStart(6,"x");
console.log(padded1);
//The padStart() method is a string method.
//To pad a number, convert the number to a string first.
const numb = 5;
let txt = numb.toString();
let padded2 = txt.padStart(4,"0");
console.log(padded2);
console.log(txt);
//The padEnd() method pads a string from the end.
let padded3 = txt.padEnd(4,"v");
console.log(padded3);
//The repeat() method returns a string with a number of copies of a string.
//The repeat() method returns a new string.
//The repeat() method does not change the original string.
let text13 = "Hello world!";
let result = text13.repeat(2);
console.log(result);
//The replace() method replaces a specified value with another value in a string:
let text14 = "I Love Gladys!";
let newText = text14.replace("Gladys", "Verah");
console.log(newText);
//The replace() method does not change the string it is called on.
let text15 = "Please visit Microsoft and Microsoft!";
let newText1 = text15.replace("Microsoft", "W3Schools");
console.log(newText1);
//To replace case insensitive, use a regular expression with an /i flag (insensitive):
let text16 = "Please visit Microsoft!";
let newText2 = text16.replace(/MICROSOFT/i, "W3Schools");
console.log(newText2);
//To replace all matches, use a regular expression with a /g flag (global match):
let text17 = "Please visit Microsoft and Microsoft!";
let newText3 = text17.replace(/Microsoft/g, "W3Schools");
console.log(newText3);
//JavaScript String ReplaceAll()
text18='Pigs, Cats, Dogs, Cats, Goats'
text19 = text18.replaceAll("Cats","Dogs");
console.log(text19)
text20 = text18.replaceAll(/Cats/g,"Dogs");
console.log(text20)
//string can be converted to an array with the split() method:
//text.split(",")    // Split on commas
//text.split(" ")    // Split on spaces
//text.split("|")    // Split on pipe
let text21 = "Hello";
const myArr = text21.split("");
console.log(myArr);
text22 = "";
for (let i = 0; i < myArr.length; i++) {
  text22 += myArr[i]
}
console.log(text22);
//The code splits the string "Hello" into an array of its individual characters.
//It then uses a loop to reconstruct the string by appending each character back together.
//Finally, it logs both the array of characters and the reconstructed string.
let text23 = "a,b,c,d,e,f";
const myArray = text23.split(",");
console.log(myArray[0]);
//The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
let text24 = "Please locate where 'locate' occurs!";
let index = text24.indexOf("locate");
console.log(index);
//0 is the first position in a string, 1 is the second, 2 is the third, ...
//Both indexOf(), and lastIndexOf() return -1 if the text is not found:
let index1 = text24.lastIndexOf("John");
console.log(index1);
let index2 = text24.indexOf("locate", 15);
console.log(index2);
//The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
index3 =text24.lastIndexOf("locate", 15);
console.log(index3);
//The search() method searches a string for a string (or a regular expression) and returns the position of the match:
t = text24.search("locate");
console.log(t);
e = text24.search(/locate/);
console.log(e);
//The search() method cannot take a second start position argument.
//The indexOf() method cannot take powerful search values (regular expressions).
//match() method returns an array containing the results of matching a string against a string (or a regular expression).
let text25 = "The rain in SPAIN stays mainly in the plain";
a = text25.match("ain");
console.log(a);
b= text25.match(/ain/g);
c = b.length + " " + b
console.log(c);
//Perform a global, case-insensitive search for "ain"
e = text25.match(/ain/gi);
console.log(e);
let text26 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text26.matchAll("Cats");
d = Array.from(iterator);
console.log(d);
const iterator1 = text26.matchAll(/Cats/g);
f = Array.from(iterator1);
console.log(f);
const iterator2 = text26.matchAll(/Cats/gi)
g = Array.from(iterator2);
console.log(g);
//includes() method returns true if a string contains a specified value.
let text27 = "Hello world, welcome to the universe.";
h = text27.includes("world");
console.log(h)
//Check if a string includes "world". Start at position 12:
j = text27.includes("world", 12);
console.log(j);
//startsWith() method returns true if a string begins with a specified value.
//Otherwise it returns false:
k = text27.startsWith("Hello");
console.log(k);
l = text27.startsWith("world")
console.log(l);
s = text27.startsWith("world", 5)
q = text27.startsWith("world", 6)
console.log(s, q);
let text28 = "John Doe";
z = text28.endsWith("Doe");
y = text27.endsWith("world", 11);
console.log(z,y);
let firstName = "John";
let lastName = "Doe";
let text29 = `Welcome ${firstName}, ${lastName}!`;
console.log(text29);
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `${header}`;
for (const x of tags) {
  html += `${x}`;
}
console.log(html);
let x1 = 123e5;    // 12300000
let y1 = 123e-5;   // 0.00123
let x2 = 999999999999999;  
let y2 = 9999999999999999;
console.log(x1, y1, x2, y2);
let x3 = 10;
let y3 = 20;
let z1 = x3 + y3;
console.log(z1);
let x4 = "10";
let y4 = "20";
let z2 = x4 + y4;
console.log(z2);
let x5 = 10;
let y5 = "20";
let z3 = x5 + y5;
console.log(z3);
let x6 = 10;
let y6 = 20;
let z4 = "30";
let result1 = x6 + y6 + z4;
console.log(result1);
let x7 = 100 / "Apple";
console.log(x7);
let x8 = 100 / "10";
console.log(x8);
q1 = isNaN(x7);
console.log(q1);
let x9 = NaN;
let y7 = 5;
let z5 = x9 + y7;
console.log(z5,typeof z5);
let y8 = "5";
let z6 = x9+ y8;
console.log(z6, typeof z6);
let myNumber1 = 2; 
let txt1 = "";
while (myNumber1 != Infinity) {
   myNumber1 = myNumber1 * myNumber1;
   txt1 = txt1 + myNumber1 + "  ";
}
console.log(txt1);
let x10 =  2 / 0;
let y9 = -2 / 0;
console.log(x10,y9);
console.log(typeof Infinity);
//Never write a number with a leading zero (like 07).
//By default, JavaScript displays numbers as base 10 decimals.
//But you can use the toString() method to output numbers from base 2 to base 36.
//Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
let x11 = 0xFF;
console.log(x11);
//By default, JavaScript displays numbers as base 10 decimals.
//But you can use the toString() method to output numbers from base 2 to base 36.
//Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
let myNumber2 = 32;
V=("Decimal 32 = " + "     " + 
"Hexatrigesimal (base 36): " + myNumber2.toString(36) + "   " +
"Duotrigesimal (base 32): " + myNumber2.toString(32) + "   " +
"Hexadecimal (base 16): " + myNumber2.toString(16) + "   " +
"Duodecimal (base 12): " + myNumber2.toString(12) + "   " +
"Decimal (base 10): " + myNumber2.toString(10) + "  " +
"Octal (base 8): " + myNumber2.toString(8) + "  " +
"Binary (base 2): " + myNumber2.toString(2));
console.log(V);
// p is a number
let p = 123;
// q2 is a Number object
let q2 = new Number(123);
console.log(typeof p + "   " + typeof q2);
console.log((p==q2));
console.log((p===q2));
//strict equality operator (===)
//strict inequality operator (!==)
//loose equality operator (==)
//loose inequality operator (!=)
//Given that x = 5, the table below explains the comparison operators:

//Operator	Description	Comparing	Returns	Try it
//==	equal to	x == 8	false	
//x == 5	true	
//x == "5"	true	
//===	equal value and equal type	x === 5	true	
//x === "5"	false	
//!=	not equal	x != 8	true	
//!==	not equal value or not equal type	x !== 5	false	
//x !== "5"	true	
//x !== 8	true	
//>	greater than	x > 8	false	
//<	less than	x < 8	true	
//>=	greater than or equal to	x >= 8	false	
//<=	less than or equal to	x <= 8	true
/*Given that x = 6 and y = 3, the table below explains the logical operators:

Operator	Description	Example	Try it
&&	and	(x < 10 && y > 1) is true	
||	or	(x == 5 || y == 5) is false	
!	not	!(x == y) is true
*/
let name1 = null;
let text30 = "missing";
let result12 = name1 ?? text30;
console.log(result12);
//?? operator returns the first argument if it is not nullish (null or undefined). Otherwise it returns the second argument.
/*
Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed
*/
let hour = 20;
let greeting;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);
let text31;
if (Math.random() < 0.5) {
    text31 = "<a href='https://w3schools.com'>Visit W3Schools</a>";
} else {
    text31 = "<a href='https://wwf.org'>Visit WWF</a>";
}
console.log(text31);
let text111;
switch (new Date().getDay()) {
  case 6:
    text111 = "Today is Saturday";
    break;
  case 0:
    text111 = "Today is Sunday";
    break;
  default:
    text111 = "Looking forward to the Weekend";
}
console.log(text111);

let text112;
switch (new Date().getDay()) {
  case 4:
  case 5:
    text112 = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text112 = "It is Weekend";
    break;
  default:
    text112 = "Looking forward to the Weekend";
}
console.log(text112);
let day;
switch (new Date().getDay()) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 0:
    day = "Sunday";
    break;
  default:
    day = "Unknown";
}
console.log(day);
/*let x12 = 0;
while (x12 < 10) {
  console.log(x12);
  x12++;
}

let x13 = 0;
do {
  console.log(x13);
  x13++;
} while (x13 < 10);
for (let i = 0; i < 10; i++) {
  console.log(i);
} 

////LOOKING INTO IT LATER

*/
let cars = ["BMW", "Mercedees", "Mazda Axela Hatch back", "Ford"];
let i = 1;
text32 = "";
for (;cars[i];) {
  text32 += cars[i=1] + " ";
  i++;
}
console.log(text32);
let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
};
console.log(text);