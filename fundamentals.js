/*--------------JS Fundamentals-------------*/
// JS Script tags
// IN NORMAL CIRCUMSTANCES JS IS PARSER BLOCKING I.E. BROWSER STOPS PARSING DOM FURTHER UNTIL IT EXECUTES THE JS ON THE MAIN THREAD
// This parser blocking happens because the browser has to avoid race conditions i.e. Js can also access and change dom/cssom along with DOMparser at same time
// There can be following scenarios:
// Embedded/Inline Js: The js written inside the html file in script tags when encountered BLOCKS further parsing of DOM 
// When including inline JS, if there is src in script tag and there is JS inside the tag as well the JS inside the tag will be ignored
// External Js:
// Script tags can be added to both the head or the body with src attribute
// If async or defer attributes are not present the DOM Parsing is BLOCKED and script is downloaded from src and executed immidiately
// If async is present: The script is fetched asynchronously(the script will be fetched 
// while the PARSER continues the parsing)and EXECUTED IMMIDIATELY UPON DOWNLOAD(not good for scripts dependant on each other)
// If async is not present and defer is present: The script is fetched asynchronously BUT executed when the page has finished parsing (still load in sequence)
// Async and Defer DOESN'T EFFECT INLINE JS/JS in Script tags

// You can write any javaScript code in console
// If the code does not return anything it will
// output undefined. We can access any code/variables/functions from
// the files as well.

console.log('Hello World');
console.log(123); //This will show up blue
console.log(false); //This will show up light blue
var greeting = 'Hola Amigo!'
console.log(greeting);
console.log([1,2,3,4,5]);
console.log({a:1, b:3, c:5});
// ^If a key is repeated only the val of last
// pair will be considered e.g e:10 , e:12 => 12
console.table({a:1, b:3, c:5, c:8});

console.error('This is some error');
console.warn('This is a warning');
console.time('1');
  console.log(1);
  console.log(1);
  console.log(1);
  console.log(1);
  console.log(1);
console.timeEnd('1');
console.clear();

/*--------Variables and Keyword--------*/

//------Naming conventions-----
// Variable names can only have: letters, _, $ and numbers
// A variable cannot start with a number
// A variable starting with $ is usually for jQuery
// A variable starting with _ is usually for private variables
// Recommended to use camelCase for naming
// PascalCase recommended for class names and constructors
// We can declare multiple variables on a single line as let var1,var2,var3; or let var1=5, var2=10, var3=15;


// Three type of variables are there: var, let, const
// var------> ES5 and before
// let and const-----> Introduced in ES6 or ES2015
// Preferable to use let instead of var coz of scope

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// Declaration of var
var variable; 
console.log(variable); //undefined

// var has a function scope and let has a block scope
// var can be redeclared with same identifier and won't throw an error while let cannot be redeclared with same name
// var gets hoisted and let doesn't get hoisted i.e. var declaration occurs before any code is executed
// var when declared in global scope gets attached to the window object and can be accessed using window, this, globalThis
// The var attached to window is not configurable i.e. we cannot use delete varName, it fails silently in loose mode
// ASSIGNING to a completely undeclared identifier isn't an error IN NON STRICT MODE ONLY; instead, even when declared inside a function, 
// it creates a property on the global object, and properties on the global object are global variables. 
// Both var and let can be reassigned but const can't
// A const's value cannot be reassigned but mutated
// const cannot just declared it has to be initialized as well at the same time
// const person; // CANNOT leave it like that!
// What we CAN DO with const:
const person = {
    name: 'John',
    age: 30
}

console.log(person);

person.name = 'sara'; // Changing the val of a property
person.email = 'example@email.com' // Adding a new property

console.log(person);

// What we CANNOT do with const:
// The below will cause an error due to reassignment
/*
person = {
    name: 'Henry',
    age: 40
}
*/

// Better to use const when not planning to reassign the val
// CAPITAL CASE CONSTANTS CAN BE USED AS KIND OF STATIC VARS AT TOP OF CODES such as const COLOR_WHITE='#FFFFFF';
// ^ As a rule of thumb this should be done only when the value of a const it hardcoded/predecided e.g. a birthday

/*--------Data Types---------*/

// Two types of data types in JavaScript: Primitive, Reference Type
// Primitive type is also called value type as they are copied by value
// This means let x =5; let y=x; x++; y is still 5 bcz the values of x was copied to y beforehand
// All the primitive types are literal values string literal, boolean literal etc
// They can aslo be declared using their constrctors as objects eg new String('value')
// If we use String() without new it will be type casting the value passed to a string
// Reference type is also called object type and these are copied by address not value
// For example let x={a:1, b:2}; let y = x; Now both x and y point to the same object in memroy
// Primitive Type: String, Number, Boolean, Null, Undefined, Symbol(ES6), BigInt
// Primitive types stored on stack memory
// Reference Type: Arrays, Object literals, Functions
// Reference types stored on heap as pointers to memory
// JS is a dynamically typed language. Typescript is superset of JS
// TypeScript is statically typed

// PRIMITIVE TYPE
const firstName = 'John';
console.log(typeof firstName); // Returns string
const hasKids = true;
console.log(typeof hasKids); // Returns boolean

//-------Numbers:
const number = 123; 
// Number type can have integers and floating point number 
// It can also have -Infinity, Infinity, NAN values, type of these values is Number
// NAN is a computational error that occurs when an invalid math operation is done, also all operations on NAN return NaN
// Only exception NaN**0=1 and MAX NUMBER VALUE THAT CAN BE STORED AS A TYPE NUM = (2^53-1) OR -(2^53-1)
// A Billion can be declared and defined in all of the following ways:
// let billion = 1000000000; OR
// let billion = 1_000_000_000; ---> This is also a valid format, underscores improve readability and are ignored by JS
// let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes e just counts the zeros to be added after 1
// On the other hand fractional numbers can be written as:
// let num = 1e-6; Here the e means that the number before e i.e. 1 should be divided by 1000000(6 zeros) to get the actual number
// Hex can be defined as num=0xff, octal can be defined as 0o236, binary can be defined as 0b110101
// 0.1+0.2==0.3 is FALSE, bcz numbers are stored as binary and just like 1/3 is an endless result as 0.333..., in binary anything
// divided by 10 e.g. 1/10 is an endless number. This is called precision loss and to fix we can use .toFixed()
// isNaN IS THE ONE FUNCTION WHICH CAN BE USED TO CHECK IF THE VALUE IS NaN
// THE OTHER FUNCTION IS isFinite(), its used to check if a number is a valid number except NaN, Infinity or -Infinity
// Third method to check if the value is exactly NaN is Object.is(NaN,NaN)--> true, 
// ^ its equivalent to NaN === NaN --> this returns false in normal circumstances as NaN is not equal to NaN normally
// Number.isNaN and Number.isFinite are special version of regular functions, these DO NOT AUTOCONVERT their arguments to numbers


//----toString(base)----
// For numbers toString(base) can be used to convert a number into a string with the given argument from 2 to 36 base
// For example for base=16 the resultant string will have digits 0to9 and also have alphabets as AtoF
// For binary the resultant string can only have 0s and 1s
// WHEN CALLING A toString DIRECTLY ON A NUMBER e.g. 255..toString(16) we use two dots to tell JS that the first dot is not for decimal

console.log(typeof number); // Returns number

const notanum = NaN;
console.log(typeof notanum); //Returns number

const car = null;        // Though it is primitive still
console.log(typeof car); // it returns object type which is a bug

// The following cannot happen:
// const test; undefined It will throw an error

const test = undefined;
console.log(typeof test); // Returns undefined

const sym = Symbol();
console.log(typeof sym);

// REFERENCE TYPE - All return object except functions
// The difference here is that all callable objects will not return object like functions
const arr = [2,3,4];
console.log(typeof arr); // Returns object

const address = {
    city: 'Toronto',
    Province: 'Ontario'
};
console.log(typeof address);

const fn1 = function(){}
console.log(typeof fn1) // Returns "function"


/*--------------Type Conversion--------------*/

// As Js is dynamically typed, still the values are treated
// as different data types e.g. numbers or strings or Arrays
// The .lenght in Js is built in property not a function
let val;

// TO STRING----1st Method
val = (String)(5); // String of length 1
console.log(typeof val + ' ' + val.length + ' ' + val);

val = (String)(true) // String of length 4
console.log(typeof val + ' ' + val.length + ' ' + val);

val = (String)([1,2,3,4]) // String of length 7, Commas Included Brackets excluded
console.log(typeof val + ' ' + val.length + ' ' + val);

val = (String)({
    name: 'John',
    age: 40
}); // Not converts to String as it is
console.log(typeof val + ' ' + val.length + ' ' + val);

val = JSON.stringify({
    name: 'John',
    age: 40
}); // Correct way to convert & display object as a string
console.log(typeof val + ' ' + val.length + ' ' + val);

// TO STRING----2nd Method
// The second method is to use .toString() function with values:
val = (5).toString();
val = (true).toString();

// TO NUMBER----1st Method
// JUST FYI: A method named number.toFixed(arg) can be used to 
// get decimal places e.g. (5).toFixed(2) => 5.00
// CATCH: toFixed automatically converts a number to string as well so be carefull
val = (Number)('5'); // Returns 5 as a number
console.log(typeof val + ' ' + val);

val = (Number)(true); // Returns 1 as a number
console.log(typeof val + ' ' + val);

val = (Number)(null); // Returns 0 as null is falsy
console.log(typeof val + ' ' + val);

val = (Number)(undefined); // Returns NaN // typeof NaN is also number// THE ONLY EXCEPTION IN FALSY VALUES
console.log(typeof val + ' ' + val);

val = (Number)([1,2,3,4]); // Returns NOT A NUMBER as NaN
console.log(typeof val + ' ' + val);


val = (Number)([]); // Returns 0
val = (Number)(''); // Returns 0

// Whitespaces, tabspaces, newlines are auto removed from the start and end before Number executes the conversion
// Another way to convert a value to number is use the + unary operator e.g. +true -> 1
// a=b=c=2+2 => Assignment is also an operator evaluates from right to left here a=4 and b=4 and c=4 as well
// Postfix increment: let counter=0; let a=counter++; ===> value of counter assigned to a first and then incremented after so a=0 still
// Prefix increment: let counter=0; let a=++counter; ====> value of counter incremented first and then returned so a=1
// Comma is also an operator with a very very low precedence even lower than assignment operator

// TO NUMBER----2nd Method
// The method parseInt()/parseFloat() can be used as a 2nd option
// THE PARSE INT METHOD TAKES IN A SECOND ARGUMENT AS THE BASE E.G. 2, 10, 16
// IF BASE IS 2 THE STRING '11' WILL BE CONVERTED TO 2 RATHER THAN 11
// THESE TWO METHODS TRY TO PARSE INT OR FLOAT UNTILL THEY ENCOUNTER AN ERROR/NON-NUMERIC VALUE
// For example, parseInt(12px) --> 12 AND parseInt(a123) --> NaN since error occured on very first character
// But only returns the part before decimal
val = parseInt('500.50'); // Returns 500 as a number 
console.log(typeof val + ' ' + val);

val = parseFloat('500.50'); // Returns 500.5 as a number 
console.log(typeof val + ' ' + val);

val = parseInt([4,2,2,4]); // Returns 4:the first element of an array
console.log(typeof val + ' ' + val);

val = parseInt(true); // Returns NaN => NOTICE the difference with 1st Method
console.log(typeof val + ' ' + val);

val = parseInt({1:'hello', b:3}); // Returns NaN
console.log(typeof val + ' ' + val);

// To Boolean
// !! can be used to convert a value to boolean in addition to Boolean()

/*--------------Type Coersion--------------*/

// When two different types of data is added
// the engine converts it automatically to one of them.
// NaN is actually treated as a number but with no value.
val = 5 + '4';
console.log(val); // Returns 54

// Note that two numbers in string forms can still be subtracted
// The addition operator is overloaded for strings but the substraction operator is not overloaded
// So for "2" + "2" -  3 => 19 // Means string concatenation happened first => "22" - 3
// then bcz of - operator both of them got conveted to numbers and 22 - 3 => 19
// FOR ALL OTHER OPERATORS OTHER THAN BINARY + WHEN WORKING WITH STR. JS CONVERTS THE OPERANDS TO NUMBERS AUTOMATICALLY FIRST
// FOR ALL OTHER TYPES ARITHMETIC OPERATORS CONVERT OPERANDS TO NUMBERS AUTOMATICALLY FIRST E.G. null + 1 = 1

// ALSO / , * ARE NOT OVERLOADED
//"2" + "2" / 3 => 20.66666 
 
/*--------------Math Object--------------*/

// In JS let x = 2**4; means x is equal to 2^4;

val = Math.PI;
console.log(val);

val = Math.E;
console.log(val);

val = Math.round(2.5); // Returns 3
val = Math.ceil(2.5); // Returns 3
val = Math.floor(2.5); // Returns 2
val = Math.sqrt(25); // Returns 5
val = Math.abs(-5); // Returns 5
val = Math.pow(2,5); // Returns 32
val = Math.min(2,5,5,6,8,-1,-6); // Returns -6
val = Math.max(2,5,5,6,8,-1,-6); // Returns 8
val = Math.random(); // Returns random b/w 0-1
val = Math.floor((Math.random())*5 + 1); //Returns a random number b/w 1 and multiplier
console.log(val);

/*--------------String Methods & Concatenation--------------*/

// All of these methods does not alter the original string
const fName = 'John';
const lName = 'Hopkins';

// When a dot notation is used after a string it is automatically wrapped by an Object by the engine
// In strict mode, we will get an error doing this:  let str='user'; str.loggedIn=true; --> cannot write to primitive type
// In lax mode it will give us undefined
// Concatenation
// 1st Method
val = fName + ' ' + lName; // Returns John Hopkins
console.log(val);
// 2nd Method- In built string method string.concat()
val = fName.concat(' ', lName); // Returns John Hopkins
console.log(val);

val = fName - lName; // Returns NaN
console.log(val);

// "1" - - "1" => 2
// "12"-"3" => 9

// str.repeat(n) --> Repeats the given string n number of times

// .length property
// The length property can be used to restrict user to enter certain number of chars
// CATCH: length of NaN is undefined
console.log(val.length);

// Case Sensitivity - 2 methods
val = fName + ' ' + lName;
console.log(val.toUpperCase());
console.log(val.toLowerCase());

// Read-Only Operations like an Array
// Accessing a Character
console.log(val[1]); // Returns o
val[0] = 'd'; // Won't effect anything!!!
console.log(val);

// --------STRING AND CHARACTER COMPARISON------
// String.CodePointAt(index) --> This gives us the UTF-16 CODE of the character at the given index
// String.fromCodePoint(hexCode 0x61/decimal CODE 97) --> Gives the character based on the given decimal or hex code

/* The str.localeCompare(str2) returns an integer indicating whether str is less, equal or greater than str2 according to the 
   language rules:

    - Returns a negative number if str is less than str2.
    - Returns a positive number if str is greater than str2.
    - Returns 0 if they are equivalent.
*/

// Finding the first indexOf and lastIndexOf() a char/expression
// If not found returns -1 and for empty string returns 0 index
console.log(val.indexOf('o')); // 1 first o in the string
console.log(val.lastIndexOf('o')); // 6 last index of o
// ALSO TAKES IN A SECOND PARAMETER FOR POSITION
// let str = "hollo moto";
//str.indexOf("o", 5) => Returns 7 i.e. will only look in second part 5 - str.length-1 and return index of first "o"
//str.lastIndexOf("o", 5) => Returns 4 i.e. will only look in first part 0-5 and return last index of "o"
// THESE INDEX FUNCTIONS SHOULD BE USED REALLY CAREFULLY WHEN USED IN AN IF STRUCTURE SINCE THEY CAN RETURN 0 IF STR IS FOUND AT O
// THAT WILL BE TREATED AS A FALSY VALUE IF THE REQUIRED SUBSTRING IS FOUND AT INDEX 0

// Check if includes. Returns true or false
console.log(val.includes('John')); // Returns true

// Getting the character at a specific position just like
// val[index] using the charAt() method
console.log(val.charAt(2)); // Returns h from John Hopkins
console.log(val.charAt(12)); // Returns an empty string
// We can also use str.at()

// Getting a substring using substring(start, end) or substr(start, length)
// Consider string as '0123456789'
console.log(val.substring(2,7)); // Returns '23456' a substing from index 2(inc.) to 7(exc.) based on 0 indexing
// substring allows to have first parameter GREATER THAN THE SECOND PARAMETER WHEN EXECUTING IT WILL AUTO SWAP BOTH
// NEGATIVE ARGUMENTS ARE NOT SUPPORTED UNLIKE SLICE BY SUBSTRING AND IT AUTO TREATS THOSE AS 0 INSTEAD
console.log(val.substr(2,7)); // Returns '2345678' i.e. 7 chars  starting at 2, 0 based indexing

// Slicing a String using slice()
// Mostly used with arrays but can be used with strings as well
console.log(val.slice(2,7)) // Returns similar to substring() as '23456'
console.log(val.slice(-4)); // Return last 4 chars '6789'

// Splitting a string by given delimiter using split(delimiter)
console.log(val.split(' ')); // Returns an array with 'john' and 'hopkins'
// CAN OPTIONALLY HAVE A SECOND NUMERIC ARGUMENT WHICH CAN LIMIT THE NUMBER OF ELEMENTS IN THE RETURNED ARRAY
// FOR EXAMPLE, If 't,e,s,t'.split(',',2) ==> ['t','e']

// Replacing the part of a string
// Notice using replace the original string is still there and unaltered
console.log(val.replace('John', 'Hello')); // Returns Hello Hopkins // ONLY REPLACES AT FIRST FOUND LOCATION
// IF val = ',,,hi'
console.log(val.replaceAll(',', '')); // Returns Hello Hopkins // REPLACES ALL ',' with '' in the entire string



// Spread a string to an array using spread Operator
let splitToArr = [...val]; // One char as one element
console.log(splitToArr);

// Spread a string to an object using spread Operator
let splitToObj = {...val}; // Number based indexing for each char
console.log(splitToObj);


// Some Other methods
// string.startsWith(string) // true or fasle
// string.endsWith(string) // true or fasle
// string.trim() // Gets rid of white spaces to the right and left
// string.trimLeft()  // trim white spaces on left
// string.trimRight() // trims white spaces to the right of the passed string
// WE CAN USE for of loop to iterate over the characters of a string e.g. for(char of 'Hello'){char here will be H , e, l, l, o}

/*--------------Template Literals or Template String--------------*/

// Introduced in ES6 and are supported by most of the modern browsers
// This is actually a better way of concatenating strings
// Obviously this will make injecting html easy using JS
// Also we can use this to write some formatted text like the body of an email etc.

//BEFORE TEMPLATE STRINGS

let html;
html = '<ul> <li>First Name: ' + fName + '</li> <li>Last Name: ' + lName +'</li></ul>';
document.body.innerHTML = html; // Injects to html to the body before the existing html

//USING TEMPLATE STRINGS

html+= `<ul>
        <li>${fName}</li> 
        <li>${lName}</li>
        <li>${2+2}</li>
        <li>${Math.E}</li>
        <li>${fName === 'Joh' ? 'John' : 'Hello'}</li>
        </ul>`;
// An expression can be written
// A function can be called
// A conditional can be checked
document.body.innerHTML = html;

/*--------------Arrays and Array Methods--------------*/

// ALWAYS THINK OF ARRAYS AS REGULAR OBJECT IN JS, THE ONLY DIFFERENCE IS THAT THEY ARE BUILT TO MAINTAIN AN ORDERED COLLECTION
// AS COMPARED TO REGULAR OBJECTS WHICH ARE STILL INDEX BUT THERE IS NO MAINTAINED ORDER OF THE KEYS
// THE FACT THAT ARRAYS ARE REGULAR OBJECTS IS OBVIOUS WHEN WE CAN ADD NON-NUMERIC INDEXED VALUES TO IT (NOT EFFICIENT TO DO SO)
// Two methods to initialize and declare
const numbers = [14,22,1,56,44,100];
const fruits = new Array('Orange', 'Apple', 'Mango', 'Banana');
const emptyArray = new Array(100) // Creates a FULLY EMPTY ARRAY WITH A .length of 100
const mixed = [2, 'Apple', true, undefined, null, [1,2,3,4], function hi(){}]; // CAN STORE FUNCTIONS AS WELL
mixed.nonNumericProp = 'A non numeric index value'
console.log(mixed[5][1]); // Array inside array
// NEW METHOD TO ACCESS AN ELEMENT AT A CERTAIN INDEX IS arr.at(index) --> THE PLUS POINT IS THAT WE CAN EASILY ACCESS LAST ELEMENT
// NORMALLY WE HAD TO ACCESS THE LAST ELEMENT AS arr[arr.length-1] NOW CAN BE DONE AS arr.at(-1)
// To check if it is an array use Array wrapper class
console.log(Array.isArray(numbers));

// Arrays are also OBJECT IN JS
// THEY JUST USUALLY STORE DATA WITH NUMERIC KEYS RATHER THAN STRING KEYS
// We can do arr['hi'] = 'there' and it will store at the end of array as 'hi':'there'
// We can also access it as arr['hi'] and it will return there

// To get the length use the .length property
// THIS LENGTH PROPERTY IS NOT ACTUALLY THE TOTAL NUMBER OF ELEMENTS INSTEAD ITS THE (GREATEST INDEX VALUE+1)
// FOR EXAMPLE, let arr=[]; arr[100]='the only element' ===> arr.length -> 101
// Also arr.length is writable, i.e. an array with 100 element if we set its arr.length=2 98 elements will be TRUNCATED FROM THE END

// SEARCHING/FINDING METHODS - CHECKING METHODS

// Primitive type search
// Find an indexOf() Returns index or -1, CANNOT HANDLE NaN even if its an element won't return true
console.log(fruits.indexOf('Mango')) 
// Find the lastIndexOf() Returns index or -1
console.log(fruits.lastIndexOf('Mango')) 
// IndexOf after a certain index
console.log(fruits.indexOf(2,'Mango')) // Find the index oF Mango start seach after index 2
// Check if an array includes an element, CAN HANDLE NaN as well and returns true/false it found/notfound
console.log(fruits.includes('guava')); // Simply returns true or false

// SEARCH METHODS - REFERENCE TYPE
// Finding Numbers in an array using find() and callback function

console.log(numbers.find(underFifty)); // Returns the first num under 50 or returns undefined
// underFifty will be called for each element of array
function underFifty (num) { // This type of function is called predicate function
    return num < 50; 
}

// The above method can be used to search reference types as well
let courseArray = [ 
    {id:1, name: 'a'},
    {id:2, name: 'b'}
];

console.log(courseArray.find(function(course) {
    return course.name === 'a';
})); // Returns the first object having course name a and stops further search, Also return undefined if not found

// findIndex the call back can have these arguments (element, index, array) just like forEach
console.log(courseArray.findIndex(function(course) {
    return course.name === 'a';
})); // Returns the index of the object with name a or else returns undefined

// The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf.
console.log(courseArray.findLastIndex(function(course) {
    return course.name === 'a';
}));


// ARROW FUNCTION - ES6
// Arrow functions simplify the call back or predicate methods being passed
// The above methods will be simplified as
let objFound=courseArray.find(course => course.name === 'a');

// Every
let allPositive=numbers.every(function(value){ // Checks if all the elements of an array are positive
    return value >=0;
})

// Some
let somePositive=numbers.some(function(value){ // Checks if at-least one of the elements of an array is positive
    return value >=0;
})

// Filter array.filter(function(value){return value >= 0;}); returns an array containing all the values meeting 
// the given criteria i.e. +ve elements only 
let positivesArr = numbers.filter(function(value){ // Returns the array with all positive elements in it otherwise returns []
    return value >=0;
})




// MUTATING METHODS
console.log(numbers.push(2)); // Adds 2 to end and returns total number of elements
console.log(numbers); // Can push multiple numbers as well separated by comma

// We can also add to an array having index 0 and 1 like array[2] = 5;
// This will add an element at the third index means that arrays in JS are dynamic

numbers.unshift(50); // Adds 50 to the start of the array THIS METHOD IS COSTLY PERFORMANCE WISE SINCE HAVE TO RE-INDEX THE WHOLE ARRAY
console.log(numbers);  // Can unshift multiple numbers as well separated by comma

numbers.splice(2,0, 'a', 'b'); // Add elements starting at any random index in the ORIGINAL ARRAY and Returns an array with deleted elements
console.log(numbers); // 2 is starting index, 0 is the number of elements we want to cut
// The next arguments are the elements we want to add starting index 2 ==> will place 'a' at 2
// SPLICE ALSO ALLOWS NEGATIVE INDEXES AND -1 IS THE LAST ELEMENT

numbers.pop() // Removes last element
console.log(numbers);

numbers.shift(); // Removes first element THIS METHOD IS COSTLY PERFORMANCE WISE SINCE HAVE TO RE-INDEX THE WHOLE ARRAY
console.log(numbers);

numbers.splice(3,2); // Removes 2 elements starting at index 3 FROM THE ORIGINAL ARRAY AND RETURNS THE REMOVED ARRAY
console.log(numbers);

numbers.slice(1,3); // Slices array from index 2 to 3 AND DOESNOT CHANGE THE ORIGINAL ARRAY, RETURN THE NEW RESULTED ARRAY
console.log(numbers);

// PITFALL
// delete numbers[1] will still work since arrays are basically object BUT THIS WONT UPDATE THE LENGTH PROPERTY OF ARRAY
// AND THIS WONT RENUMBER THE INDEXES AS WELL THAT MEANS THAT INDEX WILL STILL EXIST WITH UNDEFINED VALUE

let copyArr = numbers.slice(); // Slice without arguments copies the array to copyArr
// In case of object types usually only references are copied but in this case its the opposite.
// ALL the primitive memebers are copied by value in the new array but all the object members reference is copied
// In other words its a shallow copy of objects inside the array
// This stands for all methods


// EMPTYING AN ARRAY
// 0TH Method
// Set the pointer to an empty array like arr = [];
// 1st - Method
// Set the length property of an array to 0
// 2nd Method
// use splice from 0 to array.length

// ALGORITHMS - COMBINING/SORTING METHODS

console.log(numbers.concat(fruits)); // This RETURN a NEW concatenated array, The original stays UNCHANGED
console.log(numbers); // The existing numbers array stays un altered
// concat can take arrays and literal values/objects as arguments, if array all elements copied and added to new array otherwise
// the literal value is just added as an array item
// GOTCHA: IF WE HAVE AN OBJECT WHICH EXACTLY MIMICS AN ARRAY LIKE {0:'ZERO',1:'ONE',length:2} AND WE USE IT AS AN ARGUMENT IN CONCAT
// THIS OBJECT WILL BE ADDED AS IS UNTIL WE ADD A SPECIFIC KEY TO IT [Symbol.isConcatSpreadable]: true EXAMPLE BELOW:
// let arr=[1,2,3]; --> arr.concat({0:'ZERO',1:'ONE',length:2}) --> arr = [1,2,3,{0:'ZERO',1:'ONE',length:2}]
// let arr=[1,2,3]; --> arr.concat({0:'ZERO',1:'ONE',length:2, [Symbol.isConcatSpreadable]: true}) -->
// arr = [1,2,3,'ZERO','ONE']


// Spread method 
// Combining two Arrays
let combined = [...numbers, '10', 'a',...mixed] // Combine two arrays and values and makes one array

// Join Method
// Joining the array values with a given delimiter
console.log(numbers.join('-')); // Returns a string of joined array  values

// Reverse Method => REVERSES AND RETURNS THE ORIGINAL ARRAY NOT A COPY
numbers.reverse() // Reverses the ORIGINAL ARRAY
console.log(numbers);

// SORT Method
// The items are sorted ASCENDING as STRINGS IN LEXICOGRAPHIC ORDER by default.
numbers.sort(); // Sorts ascending bases on the first number of an element
console.log(numbers);

// TO COMPARE ELEMENTS AS NUMBERS INSTEAD OF STRINGS OUR CALLBACK SHOULD RETURN THE FOLLOWING FOR ASCENDING ORDER
function compare(a, b) {
    if (a > b) return 1; // if the first value is greater than the second (ANY +VE NUMBER)
    if (a == b) return 0; // if values are equal
    if (a < b) return -1; // if the first value is less than the second (ANY -VE NUMBER)
  }

  // A shorter way to return the above for ascending
numbers.sort(function(x,y) { return x-y;}); // Pass in the compare function to sort completely
console.log(numbers); // The resultant is sorted ascending 

// TO COMPARE ELEMENTS AS NUMBERS INSTEAD OF STRINGS OUR CALLBACK SHOULD RETURN THE FOLLOWING FOR ASCENDING ORDER
function compare(a, b) {
    if (a > b) return -1; // if the first value is greater than the second
    if (a == b) return 0; // if values are equal
    if (a < b) return 1; // if the first value is less than the second
  }

  // A shorter way to return the above for DESCENDING
numbers.sort(function(x,y) { return y-x;}); // Pass in the compare function to sort completely
console.log(numbers); // The resultant is sorted descending

// TO PROPERLY SORT ARRAYS WITH STRING VALUES E.G. COUNTRY NAMES, WE CAN USE a.localeCompare(b) as a return value

// REDUCE Method
// Performs the mentioned operation on array elements reducing and in turn returning a single value
let sum = numbers.reduce(function(x,y){return x+y;},0); // [100, 44, 56, 14, "a", "b"]
console.log(sum); // 214ab
// Reduce callback can take in 4 parameters reduce(fn(accumulator, next, index, array) => {},[initialval])
// IF WE DONT RETURN ANYTHING FROM THE PASSED CALLBACK THE REDUCE RETURNS undefined
// In normal circumstances when no initial value is passed as argument, the first iteration: 
// accumulator = first element of array, next = second element of the array, index = starts from 1 not 0 
// In every next iteration accumulator is the result calculated until the previous iteration 
// So this means in normal circumstances the REDUCE RUNS 1 LESS THAN TOTAL NUMBER OF ELEMENTS IN ARR
// We can also pass a second parameter of initial value to reduce and in that case first iteration is:
// arr.reduce(fn(accumulator, next, index, arr) => {}, 0) Here 0 is the initial value:
// accumulator =  initial value, next: first element of arr, index = starts from 0
// SO in this Case REDUCE RUNS EXACT NUMBER OF TIMES AS THE ELEMENTS OF AN ARRAY

// REDUCERIGHT METHOD
// There is another method called reduceRight() WHICH REDUCES AN ARRAY STARTING FROM THE LAST ELEMENT TOWARDS THE FIRST ONE


 arr.fill(value, start, end) // – fills the array with repeating value from index start to end.
 arr.copyWithin(target, start, end) // – copies its elements from position start till position end into itself, 
// at position target (overwrites existing).
 arr.flat(depth)/arr.flatMap(fn) // create a new flat array from a multidimensional array.

// PURE METHODS - THOSE WHICH DONT ALTERNATE THE ORIGINAL ARRAY RATHER MAKE AND RETURN A COPY
// map, filter, reduce, slice, join, find, findIndex, includes, every, some, concat

// IMPURE METHODS - THOSE WHICH ALTERNATE THE ORIGINAL ARRAY RATHER THAN MAKING AND RETURNING A COPY
// reverse, splice, sort, forEach, shift, unshift, pop, push

// ARRAY COMPARISON
// AS ARRAYS ARE OBJECTS SO THE == COMPARISON WILL ONLY RETURN TRUE WHEN THEY REFERENCE TO THE SAME OBJECT
// IF ARRAYS ARE COMPARED TO A PRIMITIVE VALUE E.G. A STRING THEN THEY WILL BE CONVERTED TO A STRING FIRST
// [] == 0 --> GIVES US TRUE AS ITS EVALUATED INTERNALLY AS '' == 0 WHICH INTURN BECOMES 0 == 0 THAT IS TRUTHY
// [] == '0' --> GIVES US FALSE AS ITS EVALUATED AS '' == '0' AND NO FURTHER CONVERSION NEEDED AS NOW BOTH ARE STRINGS AND ARENT EQUAL

/*--------------Object Literals--------------*/

// person = { name: 'sara', age: 30, email: 'example@email.com'}
console.log(person);
console.log(person.name); // Accessing using dot
console.log(person['age']); // Accessing using key

const personOne = {
    name: 'Umer',
    age: 28,
    email: 'umer@email.com',
    hobbies: ['sports' , 'web development', 'racing'],
    address: {
        city: 'toronto',
        province: 'ontario'
    },
    getBirthYear: function() {
        return 2020-this.age;
    }
}

console.log(personOne.name);
console.log(personOne.age);
console.log(personOne['email']);
// The bracket method to access object value is used when the key is not known beforehand e.g. looping through OR
// when the key has some dash - or , or anything like that in it.
console.log(personOne.hobbies[1]);
console.log(personOne.address.city);
console.log(personOne.getBirthYear());


/*--------------Date Object--------------*/

let today = new Date();
console.log(today);
console.log(typeof today);

// A total of 6 type of constructors
new Date(year, month, date, hours, minutes, seconds, ms)

// Get current time
Date.now() // Gives the current timestamp without actually creating a new date object and is better in performance 

today = new Date('05-18-2020'); // 18 May 2020  MM DD YYYY NO TIME IS SET AND ITS AUTO SET TO MIDNIGTH 00 GMT AS PER THE TIMEZONE OF PC
console.log(today);

today = new Date(2020, 10, 12, 3, 0, 0); // November 12 2020 3:00am YYYY, MM, DD Year starts at 0 
console.log(today);

today = new Date('May 18 2020'); // 18 May 2020 MM DD YYYY
console.log(today);

today = new Date('5/18/2020 5:10:40'); // MM/DD/YYYY
console.log(today);

// GETTERS

console.log(today.getHours()); // Gives the hours
console.log(today.getMinutes()) // Gives the minutes
console.log(today.getSeconds()); // Gives the seconds
console.log(today.getMilliseconds()) // Gives the milliseconds
console.log(today.getDay()); // Starts from SUNDAY AS 0 AND SAT AS 6
console.log(today.getDate()); // Gives the Date 
console.log(today.getMonth()); // Starts from January as 0
console.log(today.getFullYear()); // Gives the year
console.log(today.getTime()); // Gives the timestamp since 1970 the time passed

// SETTERS
today.setDate('19')
console.log(today);

today.setFullYear('2021');
console.log(today);

// Infact we can set every time aspect using setters

// Some other methods to extract or use the date
// date.toDateString() // Returns 'Thu May 11 2020'
// date.toTimeString() // Retruns '11:44:-1 GMT-0700 (EST)'
// date.toISOString() // It is the method used to utilize date and time on front and back end
// date.toLocaleString('en-US', {month: 'long'}) // Returns the name of the month e.g. June, July etc
// date.toLocaleString('en-US', {day: '2-digit'}) // OR { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }


/*--------------MAPS AND SETS--------------*/
// Maps are another data structure which can store key value pairs. Here's the difference from other objects;
// Arrays store ordered indexed collection of data where the indexes are NUMERIC IN NATURE
// Objects store key value pairs where there is no guaranteed order of the keys and also the keys are STRINGS IN NATURE
// Maps also allow us to store and indexed/keyed collection of data where the KEYS CAN BE OF ANY TYPE e.g. NUMERIC, STRING, BOOLEAN...
// Maps also preserve the ORDER OF ELEMENTS AS PER THEIR INSERTION UNLIKE OBJECTS 
let map = new Map() // Creates a new map

map.set(key, value) // – stores the value by the key. Also returns the map itself so we can chain map.set(1,'one').set(2,'two').set()...
map.get(key) // – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) // – returns true if the key exists, false otherwise.
map.delete(key) // – removes the element (the key/value pair) by the key.
map.clear() // – removes everything from the map.
map.size // – returns the current element count.

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// Maps can also use OBJECTS AS KEYS

// For looping over a map, there are 3 methods:

map.keys() // – returns an ITERABLE for keys, NOTE: FOR ALL THESE METHODS DOES NOT RETURN AN ARRAY LIKE Object.keys(obj) does
map.values() // – returns an ITERABLE for values,
map.entries() // – returns an ITERABLE for entries [key, value], it’s used by default in for..of

// MAPS ALSO HAVE A BUILT-IN forEach
// runs the function for each (key, value) pair
map.forEach( (value, key, map) => {
    alert(`${key}: ${value}`); // cucumber: 500 etc
  });

/*----------SETS----------*/
// A Set is a special type collection – “set of values” (without keys), where EACH VALUE MAY OCCUR ONLY ONCE.
new Set([iterable]) // – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) // – adds a value, returns the set itself.
set.delete(value) // – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) // – returns true if the value exists in the set, otherwise false.
set.clear() // – removes everything from the set.
set.size // – is the elements count.

// We can loop over a set either with for..of or using forEach:
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) {
    //...
};

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});

set.keys() // – returns an iterable object for values, can be used in for of
set.values() // – same as set.keys(), for compatibility with Map, can be used in for of
set.entries() // – returns an iterable object for entries [value, samevalue], exists for compatibility with Map.

//------------------WeakMap and WeakSet----------------
// WeakMap CAN ONLY STORE OBJECTS AS KEYS
// THE MAIN PURPOSE OF WEAKMAP IS TO STORE DATA ASSOCIATED TO SOME EXTERNAL OBJECT WE USE IN OUR CODE
// THE BENEFIT IS THAT AS SOON AS THAT EXTERNAL OBJECT(WE USED AS KEY TO STORE ITS RELEVANT DATA) GOES UNREACHABLE/null
// THE WEAK MAP REMOVES OR GETS THAT DATA GARBAGE COLLECTED
// WeakMap is not iterable and only has set, get, delete and has methods
// WeakSet is also similar to WeakMap in all aspects AND ONLY STORES OBJECTS IN IT
// THE MAIN BENEFIT OF WeakMap AND WeakSet is: Their main advantages are that they have WEAK reference to objects, 
// so they can easily be removed by garbage collector.




/*--------------IF ELSE and CONDITIONALS--------------*/

// Use === and !== rather than == and != for strict comparison

// FALSY VALUES in JS are [], '', null, undefined, 0, NaN
// undefined and null are two data types which represent that there is NO VALUE at all 
// null/undefined == false => false, null === null => true, null == undefined => true, undefined === undefined => true
// When comparing undefined with null undefined == null gives us true but undefined/null == false gives us false
// Because false still holds a value that is false
// Comparing NaN with anything gives us false Always even NAN == NAN gives us false
// null==0 false, null>0 false, null>=0 true: reason equality is executed differently than comparison. Comparison converts null to num
// All other values are truthy values 

// String comparison can also be done and is evaluated alphbetically i.e. JS compare character by character e.g. 'Egg' > 'Eg' -> true 
// Beware that "2" > "12" -> true because string 2 comes before string 1
// Also lowercase 'a' is greater than 'A' because of the unicode value of 'a' from unicode table
// WHEN DIFFERENT TYPES ARE COMPARED JS CONVERTS THEM TO NUMBERS AUTOMATICALLY FIRST BEFORE COMPARING
// "0" == 0 is true because "0" when converted to number is 0 == 0. But when Boolean("0")=true and Boolean(0)=false

// TERNARY OPERATOR
console.log('5' === 5 ? 'True' : 'False');

// SWITCH STATEMENT

let color = {a: 1, b:3}; // Not Equal to any case below
color = '1'; // It is not equal to the case 1 below => Switch has strict type check
switch(color) {
    case 'red': 
        console.log('It is red!');
        break;
    case 'blue':
        console.log('it it blue');
        break;
    case 1:
        console.log('It is 1');
        break;
    case {a: 1, b:3}:
        console.log('It is an object');
        break;
    default:
        console.log('Nothing appeared!');
}

// Once a match, runs till the nearest break statment, if no break upcoming all cases execute until next break of end without any check
// ^ this absence of break can be useful when grouping cases e.g.
// case 3: 
// case 5:  // Both 3 and 5 grouped so if the switch var value is 3 since case 3 has no break it directly enter 5 and excutes till break
// console.log('code for both case 3 and 5');
// break;

// LOGICAL OR OPERATOR
// We can use || operator as a ternary operator as well
// If the value/expression on the left of OR operator is true the whole expression evaluate to that left side value/expression
// If the value/expression on left side of the || is falsy then it evaluates to the right side value/expression
// Logical OR assignmet ||= can be used to conditionally assign a value to a var if the var's current val is falsy
// IF [] OCCURS IN ALL OTHER FALSY VALUES THE EXPRESSION WILL GIVE IT THE PRECEDENCE AND WILL EVALUATE TI=O []

// NULLISH COALESCING OPERATOR
// This operator ?? is used to check if the value on the left hand side is either null or undefined
// If the value or expression on the left evaluates to null or undefined the overall expression evaluates to the value in RHS
// THIS IS AN EXTENTION OF LOGICAL OR OPERATOR AS THAT ONE CHECKS FOR ANY FALSY VALUE THIS ONE ONLY CHECKS FOR null or undefined

// LOGICAL AND OPERATOR
// &&= as opposed to ||= only evaluated to right side when the left side is TRUTHY
// IF THE LEFT SIDE IS FALSY IT WILL NOT EVALUATE THE RIGHT SIDE AND WILL RESULT TO THE LEFT SIDE VALUE/EXPRESSION
// IF LEFT SIDE IS TRUTHY THEN IT CHECKS THE RIGHT SIDE AND EVALUATES TO THE RIGHT SIDE

/*
The optional chaining ?. syntax has three forms:

obj?.prop – returns obj.prop if obj exists, otherwise undefined.
obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
*/

/*--------------FUNCTIONS and FUNCTION EXPRESSIONS--------------*/
// As we know JS is a non-blocking event driven language which has an event loop
// This event loop keeps monitoring the events which are occuring in the run time
// The key things in JS are the callstack, the heap, the event loop and the event queue 
// Functions get hoisted whereas function expression do not get hoisted ONLY TO THE TOP OF THE CODE BLOCK THEY ARE BEING DECLARED IN

// Functions with declarations
function greet() {
    console.log('Hello');
}

// Calling the function
greet();

// We can set default values using ES6
// Make sure either you give default values for ALL parameters after the one or place the one
// with the default defined value as the LAST PARAMETER


function aboutMe (name = 'Umer' , city = 'Toronto') { // Setting the default arg values
    console.log(`My name is ${name} and I live in ${city}`);
}

aboutMe(); // Havent passed any arguments => The function takes default values
aboutMe('Sara'); // Passing one argument

// THE PARAMETERS CAN ALSO BE EXPRESSIONS AND ALSO THE LATER PARAMETERS CAN ACCESS THE FORMER PARAMERTERS
// i.e. function aFunction(para1 = 10 + 10, para2 = para1){} 

// EXTRA PARAMETERS ARE IGNORED AND STORED IN AN ARGUMENTS ARRAY CAN ACCESS INSIDE FN LIKE FN.ARGUMENTS
// MISSING PARAMETERS ARE SET TO UNDEFINED UNTIL AND UNLESS THERE IS A DEFAULT VALUE DEFINED FOR THEM
// Extra or less parameters wont affect the length property of function
// Length property of function is non-writable


// THE REST OPERATOR
// Using the rest operator we can pass unknown(0 to unlimited) number of parameters to a function
// The rest operator is a function parameter with '...' before it 
// The rest parameter MUST BE THE LAST  paramerter being passed into a function
// The arguments sent in the place of the rest parameter are available in the form of an ARRAY INSIDE THE FUNCTION
// The ...rest parameter does not add to the length of a function i.e. the function.length
function withRest(arg1 , ...rest){
    console.log(arg1); // 2
    console.log(rest); // [5,67,34,3]
} 


withRest(2, 5,67,34,3);

// FUNCTION EXPRESSIONS;?
// These are actually functions assigned to variables

const square = function(num = 1) { // We can define function without a name
    return num * num;
};
console.log(square(4)); // Calling the function

const cube = function cubic(num = 1) { // We can define function with any name
    return num * num * num;
};
console.log(cube(4)); // Calling the function by variable name
// console.log(cubic(4)); // Calling the function by function name => Error
// BUT console.log(cube.name) => will output cubic rather than cube

// IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS - IFFEs
// These are the function expressions which define as well as call themselves

(function (num = 1) { // Can have a name as well but useless
    console.log(num + num);
})(4); // Notice the brackets at the end

// METHODS
// A function defined inside an object is a method

let math = {
    square: function(num = 0) {
        return num * num;
    },
    cube: function(num = 0) {
        return num * num * num;
    }
}

console.log(math.square()); // Default is zero
console.log(math.cube(4)); // Passing 4 and getting cube using math object

// We can add a new or delete an exsiting method to an object from outside an object

math.double = function(num = 0) {
    return num + num;
};

console.log(math); // The method with key double is added in the math object


function aFunction(b,c){
    console.log(this, this.a);
    console.log(b,c);
}

// Functions in JS are objects themselves and hence have inbuilt properties and methods
// Call method is used to call a function on a specific object
// We can also use this inside an object and pass the 'this' of that object
aFunction.call({a:'Will be called using call method on this object'}, 1, 2);

// Apply method is used to call a function on a specific object
// The only difference is the arguments are passed in the form of an array
aFunction.apply({a:'Will be called using apply method on this object'}, [1,2]);

// apply and call both result in immediate function calls

// Bind method is used to bind a function to a specific object
// Bind doesn't result in an immediate function call rather we save the result in a variable
// and then can call that variable later at any time. It will automatically be called on the 
// bound object
let bound = aFunction.bind({a:'Will be called using apply method on this object'}, [1,2]);
bound();

/*--------------General Loops--------------*/

// Cant use const as a loop variable as it keeps reassigning i = i+1
// break statement breaks out of the loop
// labelName: for(...){...for(...){... break labelName;}} CAN BE USED TO BREAK FROM NESTED INNER LOOP TO DIRECTLY OUT OF BOTH LOOPS
// ^ Same can be done with continue
// continue statement skips a specific iteration
// for loop for(begin; condition; step){} => begin executes first and only once, then condition check, then body, then step
// while loop while(condition){} => condition is checked first and then body is executed
// do{} while() => body is executed first(at least once) and then condition is checked


// FOREACH LOOP-- It can be a pure function or an impure function => It CAN alters the original array
// For each is different from other for loops because it RUNS A GIVEN FUNCTION FOR EACH NON-EMPTY ELEMENT OF AN ARRAY RATHER
// THAN RUNNING THE WHOLE CODE BLOCK LIKE IN FOR LOOPS
// IT CAN BE THOUGHT OF A METHOD TO RUN CUSTOM METHOD FOR EACH ELEMENT OF THE ARRAY RATHER THAN A LOOP
let cities = ['Lahore', 'Toronto', 'Milan', 'Washington'];
// ARRAYS HAVE INBUILT FUNCTION OF FOREACH LOOP!!!!
cities.forEach(function(city) { // forEach takes a function as an argument
    console.log(city);  // This function can have upto three arguments
});

cities.forEach(function(city, indx, arr) { // Passing and using all three arguments
    console.log(city + ' ' + indx + ' ' + arr);  
},this);

// ^ For each can have a second argument of this to refer to the object from which it is being called
// Returning anything from forEach won't effect the original array
// ANYTHING RETURNED FROM FOR EACH IS IGNORED AND TRHOWN AWAY

// MAP
// It’s CREATES A NEW COPY OF an array and change it a little bit in the process.
// IF THE PASSED ANONYMOUS FUNCTION RETURNS NOTHING IT WILL RETURN A SIMILAR LENGTH ARRAY OF undefineds
// Array.map is meant to transform one array into 
// another by performing some operation on each of its values.
// The original array is left untouched and the function returns a reference to a new array.
// The anonymous callback can have a second and third argument similar to forEach index, array

// FILTER
// The idea here is similar to Array.map, except instead of transforming individual values, 
// we want to filter existing values. THIS WILL ALSO RETURN A NEWLY CREATED(COPIED) ARRAY AND THE ORIGINAL REMAINS UNCHANGED
// IF NOTHING IS RETURNED FROM THE CALLBACK THEN THE RESULT IS AN EMPTY ARRAY ASSIGNED TO THE LHS VARIABLE 


// MAP AND FILTER ARE PURE FUNCTIONS, MEANS THEY DONOT ALTER THE ORIGINAL ARRAY
// REDUCE IS SOMEWHAT PURE AND FOR EACH IS NOT PURE AT ALL

// MAP
// The basic use of a map is to extract or update values in an array
// Extracting values from an array having multiple objects with the same key 
// An array having objects with id property
const users = [{id:1}, {id:4 , name: 'sara'},{id:3, name: 'N/A'},{id:5}];
// Using map will extract all the id values of users using call back function
// This will return an array of ids
let ids = users.map(function(user) {
    return user.id; // Access id of a user object and return it
});

console.log(ids); // An array of id values

// FORIN LOOP
// For in is used to traverse an object
let obj = {
    name: 'Umer',
    city: 'toronto',
    age: 40
};

for (let i in obj) { // This will grab all the keys
    console.log(i);
}


for (let i in obj) {
    console.log(i + ' : ' + obj[i]); // This will grab the respective value of the key as well
} // Dont know why it is not working with a dot operator

// THE FOR-IN LOOP CAN ALSO BE USED WITH ARRAYS BUT NOT RECOMMENDED SINCE ITS 10-100 TIMES SLOWER THAN FOR OF
// IT ALSO ISN'T DESIGNED TO ITERATE JUST OVER NUMERIC KEYS AS IN ARRAYS INSTEAD IT WILL ITERATE OVER ALL TYPES OF KEYS
// SO IF AN OBJECT IS NOT EXACTLY AN ARRAY ITS A LIST OR SIMILAR DS THEN FOR IN WILL ITERATE AND GO OVER NON NUMERIC KEYS AS WELL

// FOR OF LOOP
// For of is generally used with arrays just like for each
// The benefit of using for of rather than forEach is that we can use break, continue, yield keywords in it
// The variable actually holds the array element rather than the key like in the for in
// To use it on the objects we can use Object.key(object) => returns an array of object's keys
// Object.values(object) => returns an array having the values of an object as array's elements
// Object.entries(object) => returns an array having the key value pairs of an object as element arrays

// ITERATORS
// Strings, Arrays, Maps, NodeLists have built-in iterators in them i.e. they can be iterated over using a for of loop
// Iterators are a concept that make an object USABLE IN A FOR OF LOOP
// IN DEPTH ITERATORS ARE OBJECT THAT IMPLEMENT Symbol.iterator() method in them
/*
 - To make the an object iterable (and thus let for..of work) we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).
 - When for..of starts, it calls that method once (or errors if not found). 
 - The method must return an iterator – an object with the method next. THE RETURNED OBJECT MUST HAVE A METHOD NAMED next IN IT
 - Onward, for..of works only with that returned object.
 - When for..of wants the next value, it calls next() on that object.
 - The result of next() must have the form {done: Boolean, value: any}, where done=true means that the loop is finished, otherwise value is the next value.

*/

//-----------CREATING AN ASYNC LOOP------------
// LETS think for a second that we have a very very big array and we want to do perform some expensive operation on each
// element of that array. This will obviously BLOCK THE CALLSTACK which we dont want at any cost.
// For this what we can do is we can use setTimeout((ele) => {//perform whatever},0) INSIDE THE LOOPS
// This will make the operation asynchronous meaning that the operation will only be performed when the callstack is empty 
 

/*--------------Array and Object Destructuring--------------*/
// ARRAY/ITERABLE DESTRUCTURING
// We can assign all the elements in an array OR ANY OTHER ITERABLE OBJECT to various variables at once
// let [ele1, ele2, ele3] = [3,4,5]; means like let ele1 = 3, ele2 = 4, ele3 = 5.
// We can also skip certain elements such as let [ele1, , ele2] = [1,2,3] --> ele1=1 and ele2=3
// Array destructuring happens based on sequence of elements unlike object destructuring which
// occurs based on keys 

// OBJECT DESTRUCTURING
// Object destructuring is a bit different. Unlike array destructuring the names of the variables
// should be the same as the name of the key whose value we want to assing to the variable e.g.
// const {key1, key2} = {key1:"hello", key2:"there"}; => key1 = 'hello' , key2 = 'there'
// To assign the key values to any other variable name than the key itself we have to do as follows:
// const {key1: changedName1, key2:changedName2} = {key1:"hello", key2:"there"};
// Now changedName1 holds 'hello' and changedName2 holds 'there'

// DESTRUCTURING WITH DEFAULT VALUES
// We can use default values when destructuring:
// let [ele1 = 'default1', ele2 = 'default2', ele3 = 'default3'] = [3,4,5];
// const {key1 = 'default1', key2 = 'default2'} = {key1:"hello", key2:"there"};

// DESTRUCTURING WITH FUNCTIONS
// When there are a lot of parameters to be passed to a function
// We can place the arguments in an object and pass it to the function line 768

function fn({ firstName, lastName, age, occupation }) {
    console.log(firstName, lastName, age, occupation);
}

const firstNam = 'Sophia';
const lastName = 'Lundgren';
const age = 25;
const occupation = 'Software Engineer';

fn({ firstName, lastName, age, occupation });


/*-----------------JSON---------------------*/
// JSON is a built in object in JS that provides the functionality to convert an object/primitive to or from a string
// Supported types: ARRAYS, OBJECTS, NUMBER, BOOLEAN, STRINGS, NULL
// JSON.stringify -> Converts the argument to stringified object with the following exceptions:
// - If the object had a method, that wont be included in the stringified version of the object
// - If the object had a key which has the value undefined that would also be dropped from the converted object
// - If the key was a Symbol that would also not be included in the conversion
// - Objects with circular references would also throw an error when we try to convert them
// - Date objects are converted to string format automatically when strigified
let json = JSON.stringify(value, [replacer], space)
// Heres how we can use replacer to OMIT certain keys from being included in the stringify process:
JSON.stringify(obj, function replacer(key, value) {
    return (key == 'someKey') ? undefined : value;
  })
// replacer can be an array with the ONLY KEYS WE WANT TO STRINGIFY FROM THE OBJECT Or a function as well
// Space is the indentation provided when converted to string i.e. more relevant to the beauty of the converted object
//---------toJSON() Customized converion on stringify call----------
// An object can implement a toJSON() method in itself which will be automatically called when the object is passed to JSON.stringify
// THE REASON WHY DATE AUTOCONVERTS TO A STRING WHEN EVEN PART OF ANOTHER OBJECT IS THAT IT IMPLEMENTS ITS OWN toJSON() in it
// WE can return whatever we want the result of the stringify call to be from the method toJSON()
let value = JSON.parse(str, reviver);
// Here is how we can use reviver to cutomize some of the parsing (each key and value pair in the JSON will be passed to reviver):
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
  });


/*-------------Variable Scope and Closure------------------*/
// JS is a very function oriented language, functions can be passed as arguments to other functions and so on
// 


/*--------------General Look at Window Object--------------*/

/*------Window Object------*/


// Window is a global object in client side JS
// Node also uses V8 wrapped in C++
// Contains all the important Objects, APIs, Events and Methods the developers need
// Document object, Navigator Object, Fetch API, Local storage API, Events
console.log(window); // Window is a var(object)

// METHODS
// window.alert(123);
// window.prompt(); // Takes an input
// console.log(window.confirm('Do you want this to happen?'));
// ^ Return true if user presses Ok false other wise

// PROPERTIES
console.log(window.outerHeight); // We can use it with eventlisteners to style
console.log(window.outerWidth); // Gives the overall width of a browser window

console.log(window.innerHeight); // We can use it with eventlisteners to style
console.log(window.innerWidth); // Gives the inner width of a browser window => body

console.log(window.scrollY); // Gives the vertical scrolling position
console.log(window.scrollX); // Gives the horizontal scrolling position

console.log(window.pageYOffset); // Gives the vertical scrolling position with better browser support
console.log(window.pageXOffset); // Gives the horizontal scrolling position with better browser support


// OBJECTS
/*------Location Object------*/

// Location object is all about the current page
// Think of the browser as a navigator navigating through the web and current page is current location
// Contains the properties of current location(page) namely: hostname, port, protocol, path etc
// We can get query strings with search property
// Contains methods reload(), replace(), redirect()

// PROPERTIES

let loc = window.location;
console.log(loc); // Displays the location object
console.log(loc.hostname); // Display the hostname/domain only EXCLUDING any search params or other query params and https
console.log(loc.href); // Displays the complete link to the page
console.log(loc.port); // Displays the current port
console.log(loc.search) // Gives the query string => starts after ? in the navigation bar
// Redirect
//loc.href = 'http://google.com'; // Redirects to google.com => No www

// METHODS
// Reload
//loc.reload(); // Page keeps reloading

/*------History Object------*/

const his = window.history;

// METHODS
// The go() method is used to navigate to history pages
// The current page is at without any argument
// Use negative values to go back to previous pages
// his.go(); 

// PROPERTIES
// Checking the length of the history object(visited pages)
console.log(his.length);

/*------Navigator Object------*/
// Navigator object is all about the browser not the window
// Named on the basis of Netscape navigator
// Can get the browser description, user's OS, appname etc

/*------------JS BEHIND THE SCENES-----------*/
/* Javascript inside the browser is run by an engine which in case of chrome is V8 engine
 * We say JS is a SINGLE THREADED, NON-BLOCKING, ASYNCHRONOUS, CONCURRENT programming language
 * But only V8 cannot run JS in this non-blocking, concurrent, async fashion BECAUSE V8 IS SINGLE THREADED
 * AND HENCE IT HAS A SINGLE CALL STACK(call stack is stack which keeps track of the called functions)
 * So the V8 has a single call stack onto which the current function is pushed and if that function calls another
 * function, before popping it from the stack we then push that called funtion on to the stack
 * But Imagine if there was a function which made an http request is waiting for the response sitting on top of the call
 * stack BLOCKING IT! That will be awful because the callstack(execution context) is block and the engine will keep waiting
 * Hence our webpage will be kind of freeze cuz it cannot interact or listen to user events
 * SO TO AVOID IT THE BROWSER COMES TO THE RESCUE OF THE ENGINE AND PROVIDES A BUNCH OF WEB APIS WHICH CAN BE USED TO 
 * DO ALL THE STUFF WHICH IS GOING TO TAKE SOME TIME OR IN OTHER WORDS IS CAPABLE OF BLOCKING THE CALLSTACK
 * These APIs include the DOM, AJAX, FETCH, TIMEOUT etc. Whenever the engine comes across a function or code related to 
 * these APIs it pushes it onto the callstack and the CALLSTACK POPS IT IMMIDIATELY AND HANDS IT OVER TO THE RESPECTIVE API
 * Now the respective API will take care of executing/waiting for that time taking function or task to complete and as soon as it is
 * completed e.g. a response is fetched using a fetch API this fetch API will pass on the callback to the CALLBACK QUEUE
 * THE CALLBACK QUEUE IS A QUEUE STRUCTURE WHICH KEEPS TRACK OF THE CALLBACK WHICH ARE NOW READY TO BE PUSHED ONTO THE 
 * CALLSTACK(execution context) FOR EXECUTION 
 * BUT
 * IT DOES NOT HAPPEN IMMIDIATELY, RATHER THERE IS A THING CALLED EVENT LOOP, WHICH IS KIND OF A WATCHER REPEATEDLY MONITORING
 * THE CALLSTACK AND THE CALLBACK QUEUE
 * The event loop has the duty to keep a check on the callback queue and if a callback appears on the queue it need to push
 * it onto the callstack WHEN IT IS SAFE TO DO SO, which means when the callstack is not busy doing any other stuff, or any
 * other function is not blocking the callstack.
 * The browser re-renders the view of the page every 16MILLISECONDS
 * HERE ANOTHER PIECE OF THE PUZZLE COMES INTO THE PICTURE AND THAT IS RENDER QUEUE. THE EVENT LOOP NOW GOT ANOTHER CHILD TO
 * LOOK AFTER. THIS CHILD NEEDS ITS CALLBACK TO BE PUSHED ONTO THE CALLSTACK EVERY 16MS hence on the callstack we should not
 * perform anything that might take longer than 16ms AND ALSO we should not trigger too many Re-renders or too many callbacks
 * at once so that the event loop SHOULD NOT GET VERY BUSY WITH THE CALLBACK QUEUE RESULTING IN THE DELAYED RENDER CYCLES
 * 
*/