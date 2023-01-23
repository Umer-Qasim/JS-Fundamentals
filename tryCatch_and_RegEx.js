// /*------------------Error Handling in JS-----------------*/
// // Error handling is all about handling errors without 
// // getting the JS execution stuck.
// // For this purpose we have the try catch blocks


// /*------------------Try catch blocks-----------------*/

// // The try block lets us run some code to check for errors
// // We can also throw our own errors
// // The catch block is used for catching those errors

// try {
//     // Some code which can produce error
//     // myFunction() // This will produce a reference Error as myFucntion() isn't defined
//     // null.myFunction() // This will produce a type Error as null dont have any property
//     // eval('Hello World') // eval evaluates the JS inside the string parameter passed // Throws syntax error

//     //THROWING OUR OWN ERRORS
//     // throw 'user has no name' // Can be caught using err obj
//     // OR
//     // throw new SyntaxError('user has no name') // the passed message can be caught using err.message in catch

// } catch(err) {
//     // The error can be caught here in err argument
//     // console.log(err) // Outputs the name and message in the error
//     // console.log(err.name) // Outputs just the name of the error e.g. TypeError
//     // console.log(err.message) // Outputs just the message of the error e.g. Can't read property myFunction on null
//     // console.log(err instanceof TypeError) // Returns True
// } finally {
//     // This code will run no matter what happens in the above two blocks
// }

// // PROGRAM CONTINUES TO EXECUTE THE CODE AFTER TRY CATCH


// /*------------------REGULAR EXPRESSIONS-----------------*/
// // Regular expressions are used in word processors, validation, pattern matching, lexical analysis
// // There are certain inbuilt methods in regular expressions and strings to perform pattern matching
// // There are meta characters and flags as well which can specify certains pattern matching constraints on reg expressions

// const re = /hello/; // A regular expression wrapped in //
// const re1 = /hello/i // A regular expression with case insensitive flag

// console.log(re); // Outputs /hello/
// console.log(re.source) // Outputs hello as a string

// //BUILT-IN METHODS IN REGULAR EXPRESSIONS FOR PATTERN MATCHING

// // EXEC METHOD - RETURNS NULL(NO MATCH) OR AN ARRAY(MATCH)
// console.log(re.exec('helloThere')); // Retruns ["hello", index: 0, input: "helloThere", groups: undefined]
// // Here 'hello' is the expression matched, index is from the string where the match occured, input is the string passed
// // groups??

// // TEST METHOD - RETURNS TRUE OR FALSE
// console.log(re.test('hell')) // Returns false
// console.log(re.test('Hello')) // Returns true


// //BUILT-IN METHODS IN STRINGS FOR PATTERN MATCHING
// const str = "Hey There";
// const str1 = "Hello There";

// // MATCH METHOD - RETURN RESULT ARRAY OR NULL
// // Exactly works like exec except it is called on the string
// console.log(str.match(re)) // Returns null
// console.log(str1.match(re1)) // Returns ["Hello", index: 0, input: "Hello There", groups: undefined]

// // SEARCH METHOD - RETURNS INDEX IF MATCHED OR -1 IF NO MATCH
// console.log(str.search(re)) // returns -1
// console.log(str1.search(re1)) // Returns 0 

// // REPLACE METHOD - REPLACE THE MATCH IN THE STRING WITH GIVEN INPUT
// console.log(str1.replace(re1, 'What')) // Returns 'What There'



//========================================================================================================/

// Try and Catch blocks are used to handle the errors appearing in the script
// try/catch are used to detect execution errors only, not compilation ones i.e. syntax errors.
// Try and catch come in handy because we can catch errors without stopping the script
try {
    // REFERENCE ERROR
    heyasd// will throw an error bcz its not defined

    // CHECKING FOR SYNTAX ERRORS
    // To check the   syntax errors pass The CODE AS A string to the eval()
    eval('const a;'); // Comment the first line to catch this syntax error of non-initialized const
    
    // CHECKING FOR URI ERRORS
    //decodeURIComponent('%);
} catch(error) {
    console.log(error); // 'ReferenceError: myFunctionsadasdadf is not defined'
    console.log(error.message); // 'myFunctionsadasdadf is not defined'
    console.log(error.name); // 'ReferenceError'
    // We can check if an error is of a specific type
    console.log(error instanceof ReferenceError); // Returns true
} finally {
    console.log('Finally runs regardless of results'); 
} 

console.log('This will still executeeeee!');

/*-------------------Throwing Userdefined Errors----------------------*/

const user = {
    email: 'umer@email.com'
};

try{
    if(!user.name){
        throw new ReferenceError('User has no name');
    }
} catch(error) {
    console.log(`User Error: ${error.message}`);
}


/*-------------------Regular Expressions----------------------*/
// A regular expression is used to match a cetain pattern in text
// DEFINING A REGULAR EXPRESSION
let re = /hello/; // Notice no quotes are used
let nameRe = /umer qasim/i; // The 'i' flag makes this regex matching case insensitive
// There is a /g flag which makes the seach global i.e. if there is a paragraph the whole para
// will be searched for all matching instances

// METHODS TO USE WITH REGULAR EXPRESSION
// A value in a string will macth a regex either if the input has atleast all letters
// that are there in the regex or some extra letters as well e.g. 'hello' will match
// /hellohafhkf/ bcz it contains atleast hello but 'hello' will not match /helloo/.


// .exec()
// Returns null or an array with the matched value, index and the input used to match with expression
const result = re.exec('hello There WhatsUp') // Notice that regexs are case sensitive
console.log(result); // Retruns ["hello", index: 0, input: "hello There WhatsUp", groups: undefined]

// .test()
// Returns true or false after matching
console.log(re.test('hell')); // Won't match

// .match()
// This is opposite to .exec() method
// exec() method is called on a regex but .match() is called on the string to be matched
const str = 'Umer Qasim';
const res = str.match(nameRe); // Even though 'U' is uppercase it matched due to i flag
console.log(res);

// .search()
// Returns the index of first match or -1
// This method is also called on string to be matched
const wife = 'sana Umer Qasim';
const reslt = wife.search(nameRe); // Returns 5
console.log(reslt);


// .replace()
// This method is also called on a string
let father = str.replace(nameRe, 'Muhammad');
console.log(father);

/*-------------------Meta Characters----------------------*/

let regExp = /Umer Qasim/i;
regExp = /^U/i; // Must start with u/U
console.log(regExp.test('mUer Qasim')); // Returns False
console.log(regExp.test('Uer Qasim')); // Returns True

console.log('\n');

regExp = /m$/i; // Must end with m/M
console.log(regExp.test('mUer Qasi')); // Returns False
console.log(regExp.test('Uer Qasim')); // Returns True

console.log('\n');

regExp = /^sim$/i; // Must start with s/S and end with m/M (should match exactly)
console.log(regExp.test('sUer Qasim')); // Returns False
console.log(regExp.test('sim')); // Returns True

console.log('\n');

regExp = /Um.r Qasim/i; // . can be replaced by any SINGLE character
console.log(regExp.test('Umoor Qasim')); // Returns False
console.log(regExp.test('Um6r Qasim')); // Returns True

console.log('\n');

regExp = /Um*r Qasim/i; // * can be replaced by none or any number of 'm'(the letter after which * is used)
console.log(regExp.test('Umer Qasim')); // Returns True
console.log(regExp.test('Umr Qasim')); // Returns True
console.log(regExp.test('Ummmer Qasim')); // Returns False

console.log('\n');

regExp = /Uma?e?r Qasim/i; // a and e are Optional characters either ONE, NONE or BOTH
console.log(regExp.test('Umar Qasim')); // Returns True
console.log(regExp.test('Umr Qasim')); // Returns True
console.log(regExp.test('Umer Qasim')); // Returns True
console.log(regExp.test('Umaer Qasim')); // Returns True

// Escape characters
// \? \* \.

/*-------------------Brackets and Regex----------------------*/

// Square Brackets - Used to specify CHARACTER SETS
// rather than gra?e?y we can do gr[ae]y
console.log('\n');

regExp = /[OU]mer Qasim/i; // Must match with EITHER o/O OR u/U OR BOTH Not None
console.log(regExp.test('Umer Qasim')); // Returns True 
console.log(regExp.test('Omer Qasim')); // Returns True
console.log(regExp.test('UOmer Qasim')); // Returns True => it returns true bcz the 
// matched part is from Omer Qasim ==> // If the character set is like gr[ea]y then it can't be both like greay

console.log('\n');

regExp = /^[OU]mer Qasim/i; // Must match with EITHER o/O OR u/U NOT WITH NONE NOR BOTH
console.log(regExp.test('Umer Qasim')); // Returns True
console.log(regExp.test('UOmer Qasim')); // Returns False

console.log('\n');

regExp = /[^OU]mer Qasim/i; // Must NOT match with EITHER o/O OR u/U OR NONE NOR BOTH
console.log(regExp.test('mer Qasim')); // Returns False
console.log(regExp.test('UOmer Qasim')); // Returns False
console.log(regExp.test('Amer Qasim')); // Returns True

console.log('\n');

regExp = /Umer Q[A-Z]sim/; // Can have any SINGLE upper case letter from A-Z at brackets place 
console.log(regExp.test('Umer QAsim')); // Returns True
console.log(regExp.test('Umer Qasim')); // Returns False
console.log(regExp.test('Amer Qsim')); // Returns False

console.log('\n');

regExp = /Umer Qas[a-z]m/; // Can have any SINGLE lower case letter from a-z at brackets place 
console.log(regExp.test('Umer QasIm')); // Returns false
console.log(regExp.test('Umer Qasim')); // Returns True
console.log(regExp.test('Umer Qasm')); // Returns false

console.log('\n');

regExp = /Umer Qas[A-Za-z]m/; // Can have any SINGLE LOWERCASE OR UPPERCASE letter from a-z at brackets place 
console.log(regExp.test('Umer QasIm')); // Returns True
console.log(regExp.test('Umer Qasim')); // Returns True
console.log(regExp.test('Umer QasIim')); // Returns false

console.log('\n');

regExp = /Umer Qas[0-9]m/; // Can have any SINGLE number between 0-9
console.log(regExp.test('Umer Qas5m')); // Returns True
console.log(regExp.test('Umer Qas55m')); // Returns False
console.log(regExp.test('Umer Qasim')); // Returns false

console.log('\n');

regExp = /Umer Qas[0-4][0-9]m/; // Can have any Two number between 0-4 and 0-9
console.log(regExp.test('Umer Qas65m')); // Returns False
console.log(regExp.test('Umer Qas35m')); // Returns True
console.log(regExp.test('Umer Qas5m')); // Returns false

// Curly Brackets - Used as QUANTIFIERS


console.log('\n');

regExp = /He{4}llo/i; // Must have 4 e after H
console.log(regExp.test('Heeeello')); // Returns True
console.log(regExp.test('Hello')); // Returns False

console.log('\n');

regExp = /He{2,5}llo/i; // Must have 2 to 5 e after H
console.log(regExp.test('Heeeello')); // Returns True
console.log(regExp.test('Heeeeello')); // Returns False

console.log('\n');

regExp = /He{2,}llo/i; // Must have atleast 2 e no upper limit
console.log(regExp.test('Heeeeeeeeeeeeeeeeeello')); // Returns True
console.log(regExp.test('Hello')); // Returns False

console.log('\n');

// Parantheses - Used for Grouping 
regExp = /^([0-9]x){3}$/ // This has to be numx numx numx e.g. 5x5x5x
// If we need a specific part to be repeated in a regex
regExp = /([1-9] \* [1-9] = [1-9]?[1-9], ){3}/i; // A table format 3 times
console.log(regExp.test('3 * 2 = 6, 3 * 3 = 9, 3 * 4 = 12, ')); // Returns True

/*-------------------Shorthand Character Classes----------------------*/

// ALL OF THESE HAVE TO BE MATCHED WITH AT LEAST ONE ELEMENT 
console.log('\n');
// \w matches any word character(Alpha numeric means a-z and numbers as well) or underscore _
regExp = /Um\wr/; // This will match any ONE alphanumeric CHARACTER
console.log(regExp.test('Um4r')); //Returns True
console.log(regExp.test('Um_r')); //Returns True
console.log(regExp.test('Umr')); //Returns False
console.log(regExp.test('Um!r')); //Returns False

console.log('\n');

regExp = /\w+/; // This will return true if matched with atleast one or UNLIMITED number of alphanumeric characters
console.log(regExp.test('Um4r')); //Returns True
console.log(regExp.test('Um_rdddasd')); //Returns True
console.log(regExp.exec('!!! !')); //Returns Null

console.log('\n');

regExp = /\W/; //  This will match any NON alphanumeric character means shouldn't be a number, alphabet or _
console.log(regExp.test('!*.')); //Returns True
console.log(regExp.test(' ')); //Returns True

console.log('\n');

regExp = /\d/; // Matches with a digit character
regExp = /\d+/; // Matches with any number of digits
regExp = /\D/; // Matches with non digit entries
regExp = /\s/; // Matches with any space characters
regExp = /\S/; // Matches with any non space entries
regExp = /Hell\b/i; // Word bounry means that this will skip the hell match from 'hello' but will look for hell as a word
console.log(regExp.exec('Hello there in the hell')); // Matches hell and skips hello
console.log(regExp.exec('Hello there in the hel')); // Return False

// Assertion
regExp = /x(=?y)/; // Match x only if follwed by y

regExp = /x(!y)/; // Match x only if NOT follwed by y