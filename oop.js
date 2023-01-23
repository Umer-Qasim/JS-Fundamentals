/*--------------OOP in JavaScript-------------*/
// Four pillars
// Encapsulation
// Abstraction
// Inheritance
// Polymorphism


// Creating Objects
// Method - I - Using object literals
// Object literal syntax
// Objects basically contain key value pairs 
const circle = {
    // PROPERTIES
    radius: 1,  
    location: {
        x: 1,
        y: 1
    },
    // METHODS
    draw: function(){ // Method you can also write draw(){...}
        console.log('draw');
    }
};

// Method - II - Using factory functions
// Factory Functions
// Just like factories create products these methods create objects
// Simply set arguments as key value pairs and return the object
function createCircle(radius, location) {
    return {     
        // PROPERTIES
        radius,  // os equavilent to radius: radius,
        location,

        // METHODS                // Equivalent to:
        draw() {                  // draw: function(){
            console.log('draw');  // console.log('draw');
        }                         // }
    };
}

// Method - III - Using constructor functions
// Constructor Function
// Naming convention is different. Use PascalCase
function Circle(radius, location) {
    // Properties
    // the 'this' reference variable is a pointer to the object executing the code
    // In global context using this refers to window object
    // i.e. this points to the current object
    // In javascript objects are dynamic, means that we can add properties to them after they are initialized
    // so the this variable does the same after the new keyword initializes an empty object 
    // this then adds the properties to that empty object
    this.radius = radius;
    this.location = location;
    
    // Methods
    this.draw =  function() { 
        console.log('draw');
    }   

}

// THE new KEYWORD
// Three things happen when the new keyword is executed
// 1- An empty new object is created
// 2- The this reference variable is set to that object
// 3- The 'this' is returned so that the address of the current object is assigned to the LHS variable

/*--------------Dynamic Behavior of Objects------------*/
// We can add or remove from an object once it is created
// Created a new circle object
const circle1 = new Circle(1, {x:1, y:2}); 
console.log(circle1);

// Added to a the circle object
circle1.border = 5;
console.log(circle1);

// Remove from the circle object
delete circle1.location;
console.log(circle1);


/*--------------Constructor Property------------*/
// In JS EVERY DATA TYPE has a pre-defined property called constructor
// This property refers to the method which was used to create that object/value
// This only returns the method/method name which created the object not the actual object blueprint
// The object blue print from which the object is created can be accessed using .getPrototypeOf() OR object.constructor.prototype
// Lets create two objects using different methods

// Create object using factory
const factoryCircle = createCircle(1, {x:1}); 

// Create object using constructor
const constructorCircle = new Circle(2, {y:3}); 

// Returns Object() constructor which is a pre-defined constructor function 
// Internally JS has an Object() constructor => let obj = new Object() is called
console.log( 'This is from factory method  \n' + factoryCircle.constructor); 
console.log(factoryCircle.__proto__);
// Returns the constructor function we defined - this has overridden the default Object constructor
console.log('This is from constructor method \n' + constructorCircle.constructor); 
console.log(constructorCircle.__proto__);

// Some other built-in constructors
// But normally we use the literal values for all the below i.e. string literal, boolean literal
// new String();  // creates a string object
// new Boolean(); // creates a boolean object
// new Number();  // creates a number object
// new Object(); =>  new Object(0) => automatically infers the type of passed argument and creates a Number object

/*--------------Functions are Objects------------*/
// Functions in JS are actually created using the Function() consturctor and are objects
// Lets check the Circle constructor bcz it is itself an object => An object used to create an other object
console.log(Circle.name); // Returns the name
console.log(Circle.length); // Returns the number of arguments and is non writable i.e. doesn't change
console.log(Circle.constructor); // Returns the Function() constructor

// EXPLICITLY USING THE FUNCTION CONSTRUCTOR
//                                 Arg              Body
let displaySquare = new Function('number', `console.log(number*number);`);

displaySquare(2); // Displays 4 on the console

// Built-in methods in functions
// CALL Method
// call() method => calls the method of an object, substituting another object for the current object
displaySquare.call(window, 12) // can also add multiple arguments after this
// OR
displaySquare.call({},13); 

// Lets analyze this in the case of a constructor function object
console.log(Circle.call({}, 2, {x:1, y:2})); // Exactly equal to let circle3 = new Circle(1, {x:1, y:2}); 
// Only if we add return this; to the Circle constructor function

// APPLY Method
// This is usefull when we have an array having the args we want to pass to a function
// displayName.apply({}, [firstName, LastName])

// Circular Reference
// Function is a Function that constructs Functions sooo
// Function.constructor  == Function // True
// Function.constructor.constructor.constructor.constructor == Function => True
// This is a built-in circular reference in JavaScript i.e. a property of an object pointing to itself

/*--------------Value types vs Reference types------------*/
// VALUE TYPES
let x =10;
let y = x;
x = 20;

console.log(x); // shows 20
console.log(y); // shows 10

// x was copied by value to y not by address so both are independant

// REFERENCE TYPES
// Reference types have addresses stored in them and they are copied by address
let obj1 = [1,2,3,4];
let obj2 = obj1;

obj1.push(3);
console.log(obj1);
console.log(obj2); // Both are same as obj1's address was copied to obj2 not the value


// PASSING TO FUNCTIONS
let number = 10;
function increase(numb) {
    numb++;
}
increase(number);
console.log(number); // Still 10 it was passed as value

let objec = {value: 10};
function increment(object) {
    object.value++;
}
increment(objec);
console.log(objec); //  The original object changed, the value is 11 it was passed as reference

/*--------------Enumerating an Object------------*/
// An object is not iterable means we cannot use for of or for loop directly on them

let coordinates = {
    x : 1,
    y : 20,
    z : 100
}

// Using the for in loop
for (let key in coordinates) {
    console.log(key, coordinates[key]);
}
// The drawback is that for in will read all other enumerable properties as well defined in the parents(prototype)
// To avoid those we can check obj.hasOwnProperty(key) using if else and can hence avoid the ones coming from parents
// Also for in loop will only access those properties having strings as keys but wont access those having symbols as keys

// Using the for of loop

// Method-1
// We can use for of only on arrays so for that we need to do some conversions
// The Object constructor function has a built-in method Object.keys(obj)
// Another method Object.getOwnPropertyNames(obj) can also be used and this will also retrun an array with keys
// The difference is that getOwnPropertyNames will not care about the property descriptor enumerable false and still return that prop to result
// This method will retrun an array containing all the string keys of the passed object
// This will also only return properties with strings as keys rather than properties with symbols as keys
// The returned array ONLY CONTAINS OBJECTS OWN PROPERTIES and no properties from the proptypical chain
for(let key of Object.keys(coordinates)) {
    console.log(key, coordinates[key]);
}

// Method-2
// Object.entries(obj) will retrun an array containing sub arrays with object's OWN keys and values. each subarray with one key value pairs of the passed object
// as array elements
for(let [key, value] of Object.entries(coordinates)) {
    console.log(key, value);
}

// Method-3
// Object.values(obj) will retrun an array containing all the OWN values of the passed object

// Method-4
// Reflect.ownKeys(obj) will return an array of KEYS from objects own keys
// ALSO IT WILL NOT ONLY RETURN STRING KEYS AS WELL AS THE SYMBOL KEYS



// CHECKING IF THERE IS A PROPERTY DEFINED IN AN OBJECT
// If we simply access any property on an object even the one which is not even defined on the object we get undefined
// HOW WOULD WE KNOW IF THAT UNDEFINED IS COMING FROM A INTENTIONALLY SET UNDEFINED OR THE KEY EVEN DOES NOT EXIST?
// For this purpose we can use 'in' keyword. 
// The in keyword will check not only check the object but also its prototypes for the said value

if('x' in coordinates) {
    console.log('Yes! x is a property of coordinates');
}


/*--------------Cloning or Concatenating Objects------------*/
// Method 1
// Use of for in loop
// Creates a deep copy of value types and a shallow copy of values types
// Will not be able to copy values with symbols as keys
let cloned = {};
for(key in coordinates) {
    cloned[key] = coordinates[key];
}
console.log(coordinates, cloned);

// Method - 2
// Use Object.assign() method
// WILL COPY BOTH TYPE OF KEY VALUE PAIRS I.E. THE ONES HAVING SYMBOL AS KEY AND THE ONES HAVING STRINGS AS KEYS
let cloned1 = Object.assign({},coordinates);
console.log(cloned1);

// This method can also concat to a pre existing object if we pass that object as an argument
let circlePara = {
    radius: 3
}

let cloned2 = Object.assign(cloned1, circlePara);
console.log(cloned2); // radius is concatenated to the existing object


// Method - 3
// Use of spread operator

let cloned3 = {...coordinates};
// This creates a deep copy of the value types but a shallow copy of the nested types
// That's it
console.log(cloned3);

// Method - 4
// For a DEEP COPY OF A NON CIRCULAR OBJECT use JSON.parse(JSON.strigify(obj));
// THE EXCEPTION BEING ANY KEY WITH VALUE "undefined" will be lost in the cloned object
// THE VALUES HAVING SYMBOLS AS KEYS INSTEAD OF STRINGS WILL ALSO BE LOST
// Any DATE object will no longer be an object rather it will be stringified
// Any infinity value will be forced to null
// Any keys with FUNCTIONS as values will also be lost


/*--------------Abstraction------------*/
// Hide the details and only show the essentials
// For example we should make all the methods and properties private which 
// are being used in internal computations of the object only


/*--------------Private Properties and Methods------------*/
// To make a method or property private, we dont set it using this keyword
// We define it using let, var or const
// That property or method is accessible to other methods or properties because of closure
// The closure is opposite to scope, a function can access all the prop or vars declared in its parent function
// Hence scope is temporary i.e. scope of a local variable vanishes when the function execution ends
// but the closure i.e. the variables in the parent function are not out of scope yet and still in the memory


/*--------------Getters and Setters------------*/

function Coordinates(x1, y1, z1) {
    let x = x1;
    let y = y1;
    let z = z1;

    // Setting up Getters and Setters
    // To achieve this we use Object.defineProperty() 
    Object.defineProperty(this, 'x', {
        get: function() {
            return x;
        },
        set: function(val) {
            x = val;
        }
    });

    Object.defineProperty(this, 'y', {
        get: function() {
            return y;
        },
        set: function(val) {
            y = val;
        }
    });

    
    Object.defineProperty(this, 'z', {
        get: function() {
            return z;
        },
        set: function(val) {
            z = val;
        }
    });
}

let coord = new Coordinates(1,2,3);
console.log(coord.x, coord.y, coord.z);

coord.x = 3;
coord.y = 2;
coord.z = 1;
console.log(coord.x, coord.y, coord.z);

// WHY NOT WE DIRECTLY DEFINE GETTERS AND SETTERS FOR X, Y AND Z?
// The answers is that if we directly define getters and setter for lets say x we have to use different method names
// we cannot then simply access these as obj.x obj.y insted we will have to access these as obj.getX obj.setY which is not
// the typical javascript method of accessing a property of an object that's why we use Object.defineProperty


/*--------------Inheritance------------*/
// Makes the code less redundant
// Makes the code maintainable
// There are two types of inheritance 
// Prototypical Inheritance and Classic Inheritance
// In JS we have prototypical inheritance as we dont have classes
// Object extends from another object
// Prototypical inheritance means the engine keeps finding for a said method/property until it reaches null end of prototype chain
// Object.prototype, that is the baseObject of all objects directly or indirectly has no futher __proto__
// Whenever we hear the word prototype it means the parent
// The default prototype of an object created without user defined constructor is Object.prototype 
// and every object in JS directly or indirectly inherits from this
// Object.getPrototypeOf(obj) gives the prototype object i.e. Object.prototype
// obj.__proto__ is depricated way to access prototype object

// MULTI-LEVEL INHERITANCE
// Parents of Objects created by us
// Objects created by a given constructor will have the same prototype
// E.g. the circle object will have a prototype Circle and that Circle object will have a prototype Object
// An array will have a prototype Array and that Array will have the prototype Object()

/*--------------Property Descriptors------------*/
// The property descriptors are something that can enable or disable certain behaviours of a property
// E.G When we ennumerate over the properties of an object we can't access some of the properties defined in the 
// parent Object even though we know that for in loop iterates over prototype properties as well
// Lets have a look
let person = {name: 'Umer', city:'Toronto'};

for(key in person) {
    console.log(key); // We only get name key but no toString(), constructor or any other properties
}

// IN JS EVERY PROPERTY HAVE ATTRIBUTES ATTACHED TO IT
// These attributes can also be called property descriptors. For example enumerable, writable, configurable
// To access these propety descriptors we use Object.getOwnPropertyDescriptor(obj, 'propertyname')
// Getting the property descriptor of the properties

let descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor); // {value: 'Umer', writable: true, enumerable: true, configurable: true}

let descriptor2 = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(person), 'toString');
console.log(descriptor2); //{writable: true, enumerable: false, configurable: true, value: ƒ}

// Here's what these mean
// ------------Common descriptors------------------
// configurable => can be deleted or cannot be deleted
// enumerable => if false cannot be accessed in the for in loop
// Once we define a property and set configurable to false, We can still change writable if true from true to false.
// Once both configurable and writable are set to false, all attemps to change configuration will result in an error.
//---------------Data Descriptors----------------
// writable => Can change the implementation or not
// value => Value to the passed property
//-----------Accessor Descriptors----------------
// set => To define a setter method for a property
// get => To define a getter method for a property

// BOTH DATA AND ACCESSOR DESCRIPTORS CANNOT BE CHANGED/DEFINED AT ONCE in one defineProperty method

// SETTING THE PROPERTY DESCRIPTORS OF PROPERTIES IN THE USER DEFINDED OBJECTS
// For this purpose we use Object.defineProperty(object, 'propertyName', {descriptor setting})

Object.defineProperty(person, 'name', {
    enumerable: false
});

for(let key in person) {
    console.log(key + ' Nothing found'); // We only get the city key
}
// OR
console.log(person[name]); // Undefined

// BUT
console.log(person.name); // Still works

// METHODS FOR CHANGING DESCRIPTORS OF ALL PROPERTIES OF AN OBJECT OR AN OBJECT AS A WHOLE

// Object.preventExtensions(obj)
// This is a function that helps us approach immutability. Once it’s called on an object,array, function we can’t add anything/property to it.
// Deletions and changes are still allowed. Only property/element(Array) addition is forbidden.
// Object.preventExtensions permanently locks an object’s prototype.
// Attempts to use Object.setPrototypeOf or to change the __proto__ property directly result in an error.
// We can still delete,iterate over and change the value of existing properties/elements

// Object.isExtensible(obj) checks if the object is extensible

// Object.seal(obj) goes a step further having all the same characteristics as the Object.preventExtensions()
// We cannot add or delete anything from a sealed object as configurable for each prop is set to false
// We can still iterate over and change the values of existing properties/elements
// writable: true, enumerable: true, configurable: false
// Object.isSealed() can be used to check if an object is sealed


// Object.freeze freezes the object in actual means we cannot
// Use Object.defineProperty() on the object
// Configurable and writable descriptors of ALL properties are set to false
// writable: false, enumerable: true, configurable: false
// Also the prototype is locked
// It is a SHALLOW FREEZE 

// A utility method to check whether an object is frozen is Object.isFrozen. 
// Object.isFrozen and Object.isSealed will return true for a frozen object, and Object.isExtensible will return false.

// ALL THE ABOVE METHODS ARE SHALLOW ACTIONS MEANS ANY OBJECTS INSIDE THE OBJ REMAIN UNAFFECTED
// THESE FUNCTIONS COME IN HANDY FOR FUNCTIONAL PROGRAMMING

/*--------------Prototype property of Constructor------------*/
// Every object in JS have a prototype
// The constructor which created the object holds the prototype of that object which was the blueprint used to create that object
// Accessing the prototype of an object using Object.getPrototypeOf(obj), obj.__proto__ or accessing the prototype of an Object's constructor 
// using Constructor.prototype return the same result I.e. the parent object the constructor uses to create the child
// We can also access the prototype as obj.constructor.prototype
// In our case 
console.log(Circle.prototype === Object.getPrototypeOf(constructorCircle)); // OR constructorCircle.__proto__ OR constructorCircle.constructor.prototype
// MORE EXPLANATION NEEDED

/*--------------constructor property of Constructor.prototype------------*/
// The Constructor.prototype.constructor holds the self address of a constructor
// The Constructor.constructor holds the F(){} function constructor bcz constructor func is itself a function object

/*--------------Prototype Members vs Instance Members------------*/
// So the instance methods are those which are present in every instance of an object being created
// i.e. they are defined inside the constructor
// So rather than having the copy of common methods in each object/instance we can move them to their parent
// We can access the parent/prototype of the objects by Using Constrcutor.prototype and add the methods to it
// OR we can access it through a specific object by using Object.getPrototypeOf(constructorCircle).addHere = value.

Object.getPrototypeOf(constructorCircle).color = 'Yellow';
// OR
Circle.prototype.anotherColor = 'Blue';

// SO AS WE KNOW THE JS ENGINE GOES FROM CHLID TOWARDS CHILD'S PROTOTYPES UNTIL THE ROOT
// WHEREEVER IT FINDS THE DESIRED METHOD OR PROPERTY, IT EXECUTES IT.
// so to override a property or a method defined in the ROOT/OBJECT we can redefine it in the object's prototype
// For example we can override the toString() in the Circle.prototype and the engine will not go all the way to Object
// to find its definition
// The child's instance methods/properties can be referenced in the prototype methods using this keyword and vice versa
// ONLY THE MEMBERS DECLARED USING this CAN BE ACCESSED BOTH WAYS OR We need getters for accessing the local variables


/*--------------Iterating Instance and Prototype Members------------*/
// If we just use Object.keys(obj), in the returned array we will not get the prototype methods/properties
// Also we will not get properties/methods with symbol keys
// To ennumerate/iterate over the Prototype as well as instance methods we need to use 'for in' loop
// OWN PROPERTY
// In JS instance property or method are also called Own property or method
// we can check if an object has a specific own method using the method obj.hasOwnProperty

/*--------------AVOID EXTENDING BUILT IN OBJECTS------------*/
// Can create conflict when using a library, that library can also contain the method you added to the object base


/*--------------Creating Our own Prototypical Inheritance------------*/
// Till now we know that any object we create using a custom constructor has the following chain
// Object.getPrototypeOf(circle) ===gives us===> Circle.prototype OR circleBase
// Object.getPrototypeOf(circleBase) ===gives Us===> Object.prototype
// the only true difference between .prototype and .__proto__ is that the former is a property of a constructor function,
// while the latter is a property of an instance.

// Now lets create the inheritance relationship between square and a shape object


function Shape() {
    this.type = 20; // We will see how to set this up
}

Shape.prototype.duplicate = function() {
    console.log('Dupicated');
} 


function Square(side) {
    this.side = side;
}

// Now that we have got two Constructors we need to set the prototype of square object that is Square.prototype
// to the prototype Shape.prototype
// We have to use a method Object.create() to create an object with a specified PROTOTYPE
// The create method is used because if we directly do square.proto = shape.proto , now they are
// essentialy the same objects and anything added to the child's proto will also show up in parents proto
// https://stackoverflow.com/a/17393153
Square.prototype = Object.create(Shape.prototype);

// Remember to add methods to the prototype of the subclass AFTER 
// setting it up equal to newly created object
Square.prototype.draw = function() {
    console.log('Drawn!' );
};



let square = new Square(1);
square.duplicate(); // This is a method in Shape.prototype inherited to square object via Square constructor
console.log(square.type); // Undefined
// square.draw();
square.draw(); // This is a method was added to Square.prototype as prototype member

/*--------------Resetting the Constructor after Inheritance------------*/

// When we changed the prototype of the child object and set it to the newly created
// object using parent's prototype, we lost the constructor we had by default in the
// child's prototype and it is set to Parent's constructor now.
// Bcz of this we can no longer do new Child.prototype.constructor
// So we need to add the constructor to child object's prototype again
console.log(square.constructor); // Returns Shape's constructor rather than Square's

// ADDING THE CHILD CONSTRUCTOR TO CHILD'S PROTOTYPE AGAIN
Square.prototype.constructor = Square;
console.log(square.constructor); // Square constructor is back Now
// WHENEVER YOU RESET THE PROTOTYPE TO ACHIEVE INHERITANCE RESET THE CONSTRUCTOR OF CHILD AS WELL

/*--------------Calling the super constructor------------*/
// Lets create a person object as a parent and then a child object canadian
function Person(name) {
    this.name = name;
}

Person.prototype.displayName = function() {
    console.log('The name is ' + this.name);
}

function Citizen(nationality, name) {
// Now lets setup the super constructor so that we can pass the arguments
// to the parent when creating the child
// Call the parent constructor using the context of this object rather than window context
// If we just do Person(name) that will call person in window context and nothing happens
Person.call(this, name);
this.nationality = nationality;
}

// Now creating the inheritance relation
Citizen.prototype = Object.create(Person.prototype);
// Resetting the constructor
Citizen.prototype.constructor = Citizen;

// Let's create an instance
let canadian = new Citizen('Canadian', 'Sana');
console.log(canadian.name);
console.log(canadian.nationality);


/*--------------Intermediate Function Inheritance------------*/
// Whenever we have to set an inheritance relation b/w two objects
// we have to do two steps everytime which are:
// 1. Create and assign an object based on parent's prototype as child's prototype
// 2. Set the child's constructor back to the itself rather than the parent
// So to avoid repetition of statements and error, when extending multiple childs from a
// a parent we can define a function and pass the reference of child and parent and parameters
/*-------------------------------------------------------------

 function inherit(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
 }

 ------------------------------------------------------------*/

// The type of function is called intermediate function inheritance


/*--------------Method Overriding------------*/
// We can override a method defined in a parent object
// We have to keep in mind to do it only after we have set/assigned the new created proto to child

// Lets override the displayName method defined in the Person object
Citizen.prototype.displayName = function() {
    // To call the parent method from child overridden method we can do:
    Person.prototype.displayName.call(this);
    console.log('The name of the person is: ' + this.name);
};

canadian.displayName();

/*--------------Polymorphism------------*/
// You already know If there is an array of child objects of various types and having 
// overridden methods, we can call their respective overridden methods by simply doing array
// element.methodName();

/*--------------ES6 Classes------------*/
// Classes in ES6 are actually a syntactic sugar over ES5
// Classes in actual are just constructor/special functions
// There can be class declarations as well as class expressions
// Lets define a Car Class
let Car = class {
    constructor(name, model){
        // All of this is equivalent to instance space just like ES5 constructor 
        this.name = name;
        this.model = model;
        // This method will also be an instance method
    }

    // ----------------------XXXXXXXX NOT TRUE -------------------------
    // The below space is protype space => XXXXXXX
    // Mehtods defined here will show up in prototype Car.prototype => XXXXX
    // -----------------------------------------------------------------


    startEngine() { // No function keyword needed and ONLY THIS METHOD WILL SHOW UP IN PROTOTYPE
        console.log('Engine Started!');
    }

    // ALL METHODS DEFINED AS startEngine = function(){...}
    // OR startEngine = () => {...} WILL NOT GO TO PROTOTYPE RATHER THEY WILL BE CONSIDERED CLASS FIELDS
    // THEY WILL BE REPLICATED ACROSS INSTANCES
}

/*--------------Public and Private Fields------------*/
/* In new versions of JS a class can have public and private fields declared/initialized outside of a constructor
 * For example: */
class AClass{
    // A random public field which will replicate across all instances
    avar = 5;
    // A static pubic field which will not replicate across all instances but is set like AClass.anVar = 6;
    static anVar = 6;
    // Public fields declaration or default value initialization
    first;
    second = 0;
    // Private fields declaration or default value initialization
    // Private fields MUST be declared before the constructor
    #aPrivate = 'Private Field';
    #another;
    constructor(first, second, another){
        this.first = first;
        this.second = second;
        this.#another = another;
    }  
    // Only this method will be in prototype
    fn(){
    console.log('fn');
    }
    // These methods will be replicated as public instance methods
    anFn = () => {
    console.log('anFn');
    }
    anNewFn = function() {
    console.log('anNewFn');
    }

    static aStaticFn(){
        console.log('this is a static fn')
    }

}
/*
 * The fields are experimental feature yet but will be available soon across all browsers


*/


// PROTOTYPE AND STATIC PROPERTIES
// Static (class-side) data properties CAN and prototype data properties MUST be defined outside of 
// the ClassBody declaration:
// Animal.staticProperty = 'Property Value'; // This is considered a static property
// Animal.prototype.prototypeProperty = 'Proptype property Value'; // This is a prototype property
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields

const suzuki = new Car('Mehran', '2017');
console.log(suzuki);


/*--------------Hoisting------------*/
// Hoisting means raising a piece of code to the top of code when executing
// For example if we declare a function later in the code and call it before declaring it
// It will be hoisted and the code will run totally fine bcz the literal function DECLARTION
// just like function functionName(){} will be considered on the top of the all the code.
// Hoisting only works for literal function declarations. Even function expressions are not hoisted
// Neither class literal declaration nor class expression declaration are hoisted
// This means a class can only used in the code AFTER it is declared
// UNLIKE FUNCTION DECLARATIONS CLASS DECLARATIONS ARE NOT HOISTED

/*--------------Static Methods and Properties------------*/
// One thing to note is that the prototypical methods and properties are instance specific i.e. they are
// called on the instances of objects but there is another way to create methods and properties
// that are independant of the objects i.e. Stactic methods and propertied, which can be called using class name
// THEY CANNOT BE CALLED USING THE INSTANCE
// The static methods are actually under the hood DEFINED AS THE CONSTRUCTOR FUNCTION'S PROPERTY

class Animal{

    constructor(name){
        this.name = name;
    }

    // Instance method
    displayName() {
        console.log(this.name);
    }

    // Static Method
    static createObject() { // Equavilent to function Animal(name){} => Animal.createObject = function(){...}
        return Animal.name;
    }

    static brain = true;

}

console.log(Animal.name);
// Static methods are used to create utilies which we want to use without any object creation

/*--------------The this Keyword------------*/

// In JavaScript, this inside a function/method is meant to reference the object that the 
// function is a property of.

// RULES FOR DETERMINING THE VALUE OF THIS KEYWORD
// 1 - If the 'new' keyword is used when calling the function, this inside the function is a 
// brand new object created by the JavaScript engine.

// 2 - If apply, call, or bind are used to call a function, this inside the function is
// the object that is passed in as the argument.

// 3 - If a function is called as a method — that is, if dot notation is used to invoke the function — 
// this is the object that the function is a property of.

// 4 - If a function is invoked as a free function invocation, meaning it was invoked without any of the
// conditions present above, this is the global object. In a browser, it’s window.

// 5 - If multiple of the above rules apply, the rule that is higher wins and will set the this value.

const CircleNew = function() {
    this.draw = function() {
        console.log(this);
    };
};

const c = new CircleNew();
// Method Call
c.draw(); // Refers to object

// Accessing and storing the draw property of the CircleNew() object
const draw = c.draw;

// Function call
draw(); // Refers to window object as it is in the window context by default
// When we call a standalone Function it by default it points to the window object
//---- The Strict Mode------//

// The strict mode is used to get things strictly monitored by the JS engine
// Using the strict mode any ignored errors get converted into exceptions
// Add 'use strict' string at the top, to enable strict mode
// In strict mode the this reference variable defined in the constructor/ methods returns undefined rather
// than pointing to the window object. In this way we cannot accidently modify the window object
// JS Classes are by default in strict mode i.e. if we try to call a method as a function the this keyword will
// still be undefined and not reffering to window object

/*--------------Private Members with symbols------------*/
// There are three approaches to declare private properties
// MEHTHOD-1 THE DUMBEST METHOD
// In this method the developers just add an underscore before defining a property and
// then they assume that this is private, which practically is not restricting anyone to change the code

// METHOD - II USING SYMBOLS - SEMI PRIVATE PROPERTIES
// Symbol() whenever called generates a unique identifier
// This is not a constructor so note that we do not use new keyword with it
// So Symbol() != Symbol()
// In ES6 we have a feature called computed property name which means we can use an expression instead of
// using a name and the result of the expression will be considered as the property name
const _firstName = Symbol();
const _lastName = Symbol();
const _displayName = Symbol(); // All of these are unique identifiers

class Human { // Defining a new class
    constructor(firstName, lastName) { 
        this[_firstName] = firstName;
        this[_lastName] = lastName;
    }
    // Using symbols to define Methods
    [_displayName]() { // _displayName will be computed and assigned as a method name
        console.log(' Private Method Called');
    }

    publicMehtod() {
        this[_displayName]();
        console.log(this[_firstName]);
    }
}

const umer = new Human('Umer', 'Qasim');
console.log(umer);
console.log(umer._firstName); // Undefined
console.log(umer._lastName); // Undefined
umer.publicMehtod();

// Using symbols to define private properties is not a fully recommended way
// as we can still access these properties in the window
const arr = Reflect.ownKeys(umer);
const arr1 = Reflect.ownKeys(umer.__proto__);
console.log(umer[arr[0]]); // property is accessible
console.log(umer[arr[1]]); // property is accessible
umer[arr1[2]](); // Accessed private method

// We can also achieve the above using
console.log(Object.getOwnPropertySymbols(umer));


// METHOD - III USING WEAKMAP - PRIVATE PROPERTIES
// A weakmap is a dictionary where the keys are objects and values can be anything
// It is called a weak map bcz the keys are weak which means if there is no reference available
// to the keys the keys are garbage collected

const _property = new WeakMap();
const _method = new WeakMap();
class Demo {
    constructor(property) {
        _property.set(this, property); // assigning the value to weak map
        // Defining a method

        _method.set(this, () => {
            console.log('This is a private Method')
            console.log('Bcz of arrow function, the context of this is the current obj here:', this);
        });
    }

    display() {
        console.log(_property.get(this));
        _method.get(this)();
    }

    // Getter and Setter in ES6
    get property() {
        return _property.get(this);
    }
    set property(value) {
        _property.set(this, value);
    }
}

const newObj = new Demo('50');
newObj.display();
// Using setter
newObj.property = 10;
// Using Getter
console.log(newObj.property);




/*--------------Inheritance ------------*/
const _type = new WeakMap();
const _model = new WeakMap();
class Computer {
    constructor(type) {
        _type.set(this, type);
    }
    get type() {
        return _type.get(this);
    }

    set type(val) {
        _type.set(this, val);
    }

}

class Laptop extends Computer {
    constructor(model) {
        super('Laptop');
        _model.set(this, model);
    }
}

const hpEnvy = new Laptop('HP-ENVY');
console.log(hpEnvy);

// Also we can use super to acess the parent method
