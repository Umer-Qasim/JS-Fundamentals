/*--------------JS Fundamentals-------------*/
// JS Script tags
// IN NORMAL CIRCUMSTANCES JS IS PARSER BLOCKING I.E. BROWSER STOPS PARSING DOM FURTHER UNTIL IT EXECUTES THE JS
// This parser blocking happens because the browser has to avoid race conditions i.e. Js can also access and change dom along with DOMparser at same time
// There can be following scenarios:
// Embedded Js: The js written inside the html file in script tags when encountered BLOCKS further parsing of DOM 
// External Js:
// Script tag can be added to both the head or the body with src attribute
// If async or defer attributes are not present the DOM Parsing is BLOCKED and script is downloaded from src and executed immidiately
// If async is present: The script is fetched asynchronously(the script will be fetched 
// while the PARSER continues the parsing)and EXECUTED IMMIDIATELY UPON DOWNLOAD(not good for scripts dependant on each other)
// If async is not present and defer is present: The script is fetched asynchronously BUT executed when the page has finished parsing(still load in sequence)


// You can write any javaScript code in console
// If the code does not return anything it will
// output undefined. We can access any code from
// these files as well.

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

//------Naming conventions-----
// Variable names can only have: letters, _, $ and numbers
// A variable cannot start with a number
// A variable starting with $ is usually for jQuery
// A variable starting with _ is usually for private variables
// Recommended to use camelCase for naming
// PascalCase recommended for class names and constructors

// var has a function scope and let has a block scope
// var can be redeclared with same identifier and won't throw an error while let cannot be redeclared with same name
// var gets hoisted and let doesn't get hoisted i.e. var declaration occurs before any code is executed
// var when declared in global scope gets attached to the window object and can be accessed using window, this, globalThis
// The var attached to window is not configurable i.e. we cannot use delete varName, it fails silently in loose mode
// ASSIGNING to a completely undeclared identifier isn't an error; instead, even when declared inside a function, 
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

/*--------Data Types---------*/

// Two types of data types in JavaScript: Primitive, Reference Type
// Primitive type is also called value type as they are copied by value
// This means let x =5; let y=x; x++; y is still 5 bcz the values of x was copied to y beforehand
// All the primitive types are literal values string literal, boolean literal etc
// They can aslo be declared using their constrctors as objects eg new String('value')
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

const number = 123;
console.log(typeof number); // Returns number

const car = null;        // Though it is primitive still
console.log(typeof car); // it returns object type which is a bug

// The following cannot happen:
// const test; undefined It will throw an error

const test = undefined;
console.log(typeof test);

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

// TO NUMBER----2nd Method
// The method parseInt()/parseFloat() can be used as a 2nd option
// THE PARSE INT METHOD TAKES IN A SECOND ARGUMENT AS THE BASE E.G. 2, 10, 16
// IF BASE IS 2 THE STRING '11' WILL BE CONVERTED TO 2 RATHER THAN 11
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

// Finding the first indexOf and lastIndexOf() a char/expression
// If not found returns -1 and for empty string return last index
console.log(val.indexOf('o')); // 1 first o in the string
console.log(val.lastIndexOf('o')); // 6 last index of o
// ALSO TAKES IN A SECOND PARAMETER FOR POSITION
// let str = "hollo moto";
//str.indexOf("o", 5) => Returns 7 i.e. will only look in second part 5 - str.length-1 and return index of first "o"
//str.lastIndexOf("o", 5) => Returns 4 i.e. will only look in first part 0-5 and return last index of "o"


// Getting the character at a specific position just like
// val[index] using the charAt() method
console.log(val.charAt(2)); // Returns h from John Hopkins
console.log(val.charAt(12)); // Returns an empty string

// Getting a substring using substring(start, end) or substr(start, length)
// Consider string as '0123456789'
console.log(val.substring(2,7)); // Returns '23456' a substing from index 2(inc.) to 7(exc.) based on 0 indexing
console.log(val.substr(2,7)); // Returns '2345678' i.e. 7 chars  starting at 2, 0 based indexing

// Slicing a String using slice()
// Mostly used with arrays but can be used with strings as well
console.log(val.slice(2,7)) // Returns similar to substring() as '23456'
console.log(val.slice(-4)); // Return last 4 chars '6789'

// Splitting a string by given delimiter using split(delimiter)
console.log(val.split(' ')); // Returns an array with 'john' and 'hopkins'

// Replacing the part of a string
// Notice using replace the original string is still there and unaltered
console.log(val.replace('John', 'Hello')); // Returns Hello Hopkins // ONLY REPLACES AT FIRST FOUND LOCATION
// IF val = ',,,hi'
console.log(val.replaceAll(',', '')); // Returns Hello Hopkins // REPLACES ALL ',' with '' in the entire string

// Check if includes. Returns true or false
console.log(val.includes('John')); // Returns true

// Spread a string to an array using spread Operator
let splitToArr = [...val]; // One char as one element
console.log(splitToArr);

// Spread a string to an object using spread Operator
let splitToObj = {...val};
console.log(splitToObj);


// Some Other methods
// string.startsWith(string) // true or fasle
// string.endsWith(string) // true or fasle
// string.trim() // Gets rid of white spaces to the right and left
// string.trimLeft()  // trim white spaces on left
// string.trimRight() // trims white spaces to the right of the passed string

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

// Two methods to initialize and declare
const numbers = [14,22,1,56,44,100];
const fruits = new Array('Orange', 'Apple', 'Mango', 'Banana');
const mixed = [2, 'Apple', true, undefined, null, [1,2,3,4]];
mixed.nonNumericProp = 'A non numeric index value'
console.log(mixed[5][1]); // Array inside array
// To check if it is an array use Array wrapper class
console.log(Array.isArray(numbers));
// Arrays are also OBJECT IN JS
// THEY JUST STORE DATA WITH NUMERIC KEYS RATHER THAN STRING KEYS
// We can do arr['hi'] = 'there' and it will store at the end of array as 'hi':'there'
// We can also access it as arr['hi'] and it will return there

// SEARCHING/FINDING METHODS - CHECKING METHODS

// Primitive type search
// Find an indexOf() Returns index or -1
console.log(fruits.indexOf('Mango')) 
// Find the lastIndexOf() Returns index or -1
console.log(fruits.lastIndexOf('Mango')) 
// IndexOf after a certain index
console.log(fruits.indexOf(2,'Mango')) // Find the index oF Mango start seach after index 2
// Check if an array includes and element
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
})); // Returns the first object having course name a

// findIndex
console.log(courseArray.findIndex(function(course) {
    return course.name === 'a';
})); // Returns the index of the object with name a or else returns undefined


// ARROW FUNCTION - ES6
// Arrow functions simplify the call back or predicate methods being passed
// The above methods will be simplified as
courseArray.find(course => course.name === 'a');

// Every
numbers.every(function(value){ // Checks if all the elements of an array are positive
    return value >=0;
})

// Some
numbers.some(function(value){ // Checks if at-least one of the elements of an array is positive
    return value >=0;
})

// Filter array.filter(function(value){return value >= 0;}); returns an array containing all the values meeting 
// the given criteria i.e. +ve elements only 

// To get the length use the .length property


// MUTATING METHODS
console.log(numbers.push(2)); // Adds 2 to end and returns total number of elements
console.log(numbers); // Can push multiple numbers as well separated by comma

// We can also add to an array having index 0 and 1 like array[2] = 5;
// This will add an element at the third index means that arrays in JS are dynamic

numbers.unshift(50); // Adds 50 to the start of the array
console.log(numbers);  // Can unshift multiple numbers as well separated by comma

numbers.splice(2,0, 'a', 'b'); // Add elements starting at any random index in the ORIGINAL ARRAY and Returns an Empty array
console.log(numbers); // 2 is starting index, 0 is the number of elements we want to cut
// The next arguments are the elements we want to add starting index 2 ==> will place 'a' at 2

numbers.pop() // Removes last element
console.log(numbers);

numbers.shift(); // Removes first element
console.log(numbers);

numbers.splice(3,2); // Removes 2 elements starting at index 3 FROM THE ORIGINAL ARRAY AND RETURNS THE REMOVED ARRAY
console.log(numbers);

numbers.slice(1,3); // Slices array from index 2 to 3 AND DOESNOT CHANGE THE ORIGINAL ARRAY, RETURN THE NEW RESULTED ARRAY
console.log(numbers);

let copyArr = numbers.slice(); // Slice without arguments copies the array to copyArr
// In case of object types only references are copied but in this case its the opposite.
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
numbers.sort(); // Sorts bases on the fist number of an element
console.log(numbers);

numbers.sort(function(x,y) { return x-y;}); // Pass in the compare function to sort completely
console.log(numbers); // The resultant is sorted ascending 

numbers.sort(function(x,y) { return y-x;}); // Pass in the compare function to sort completely
console.log(numbers); // The resultant is sorted descending

// REDUCE Method
// Performs the mentioned operation on array elements reducing and in turn returning a single value
let sum = numbers.reduce(function(x,y){return x+y;}); // [100, 44, 56, 14, "a", "b"]
console.log(sum); // 214ab
// Reduce can take in 4 parameters reduce(fn(accumulator, next, index, array) => {})
// IF WE DONT RETURN ANYTHING FROM THE PASSED CALLBACK THE REDUCE RETURNS undefined
// In normal circumstances at the first iteration: 
// accumulator = first element of array, next = second element of the array, index = starts from 1 not 0
// So this means in normal circumstances the REDUCE RUNS 1 LESS THAN TOTAL NUMBER OF ELEMENTS IN ARR
// We can also pass a second parameter of initial value to reduce and in that case first iteration is:
// arr.reduce(fn(accumulator, next, index, arr) => {}, 0) Here 0 is the initial value:
// accumulator =  initial value, next: first element of arr, index = starts from 0
// SO in this Case REDUCE RUNS EXACT NUMBER OF TIMES AS THE ELEMENTS OF AN ARRAY

// REDUCERIGHT METHOD
// There is another method called reduceRight() WHICH REDUCES AN ARRAY STARTING FROM THE LAST ELEMENT TOWARDS THE FIRST ONE

// PURE METHODS - THOSE WHICH DONT ALTERNATE THE ORIGINAL ARRAY RATHER MAKE AND RETURN A COPY
// map, filter, slice, join, find, findIndex, includes, every, some, concat

// IMPURE METHODS - THOSE WHICH ALTERNATE THE ORIGINAL ARRAY RATHER THAN MAKING AND RETURNING A COPY
// reverse, splice, sort, forEach, reduce, shift, unshift, pop, push

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
// The bracket method to access object value is used when the key is not known beforehand OR
// when the key has some dash - or , or anything like that in it.
console.log(personOne.hobbies[1]);
console.log(personOne.address.city);
console.log(personOne.getBirthYear());


/*--------------Date Object--------------*/

let today = new Date();
console.log(today);
console.log(typeof today);

// A total of 6 type of constructors

today = new Date('05-18-2020'); // 18 May 2020  MM DD YYYY 
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


/*--------------IF ELSE and CONDITIONALS--------------*/

// Use === and !== rather than == and != for strict comparison

// FALSY VALUES in JS are [], '', null, undefined, 0, NaN
// undefined and null are two data types which represent that there is NO VALUE at all 
// null/undefined == false => false, null === null => true, null == undefined => true, undefined === undefined => true
// When comparing undefined with null undefined == null gives us true but undefined/null == false gives us false
// Because false still holds a value that is false
// Comparing NaN with anything gives us false Always even NAN == NAN gives us false
// All other values are truthy values 

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


/*--------------FUNCTIONS and FUNCTION EXPRESSIONS--------------*/
// As we know JS is a non-blocking event driven language which has an event loop
// This event loop keeps monitoring the events which are occuring in the run time
// The key things in JS are the callstack, the heap, the event loop and the event queue 

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

// FUNCTION EXPRESSIONS
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
// continue statement skips a specific iteration


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
});

// For each can have a second argument of this to refer to the object from which it is being called
// Returning anything from forEach won't effect the original array

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

// FOR OF LOOP
// For of is generally used with arrays just like for each
// The benefit of using for of rather than forEach is that we can use break, continue, yield keywords in it
// The variable actually holds the array element rather than the key like in the for in
// To use it on the objects we can use Object.key(object) => returns an array of object's keys
// Object.values(object) => returns an array having the values of an object as array's elements
// Object.entries(object) => returns an array having the key value pairs of an object as element arrays

// ITERATORS AND GENERATORS
// Strings, Arrays, Maps, NodeLists have built-in iterators in them 

//-----------CREATING AN ASYNC LOOP------------
// LETS think for a second that we have a very very big array and we want to do perform some expensive operation on each
// element of that array. This will obviously BLOCK THE CALLSTACK which we dont want at any cost.
// For this what we can do is we can use setTimeout((ele) => {//perform whatever},0) INSIDE THE LOOPS
// This will make the operation asynchronous meaning that the operation will only be performed when the callstack is empty 
 

/*--------------Array and Object Destructuring--------------*/
// ARRAY DESTRUCTURING
// We can assign all the elements in an array to various variables at once
// let [ele1, ele2, ele3] = [3,4,5]; means like let ele1 = 3, ele2 = 4, ele3 = 5.
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

const firstName = 'Sophia';
const lastName = 'Lundgren';
const age = 25;
const occupation = 'Software Engineer';

fn({ firstName, lastName, age, occupation });

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