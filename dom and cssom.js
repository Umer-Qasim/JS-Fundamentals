/*---------------DOM----------------*/

// DOM is actually an equavilent tree of nodes in similarity to the html elements in the html doc
// created by the browser
// JS can manipulate/read/write to DOM
// Now Vanilla JS is equally good as jQuery to maniplate DOM
// DOM is Object Oriented means each node has its own set of properties and methods

/*---------------The Document Object----------------*/
// The document object is a property of the Window object

// PROPERTIES OF DOCUMENT OBJECT
let dom;
dom = window.document; // Gives us a reference to the document object
console.log(dom);
//SHOULD ALWAYS INCLUDE SCRIPT TAG AT THE END OF HTML FILE TO GET ALL ELEMENTS
// Ways to access elements in DOM tree using document object
// 1st Method
dom = window.document.all; // Gives us an indexed html collection of document object
console.log(dom); // This contains index: element pairs of all elements just like an object
// 2nd Method
dom = window.document.all[2]; // Gives us the 1st element of html collection of document object
console.log(dom); // At 0 key we have html element
// 3rd Method
dom = window.document.head; // Gives us the head element and everything inside
console.log(dom); // It will output head element

// Length of DOM(Total number of elements) => Depends on where JS is included
dom = document.all.length;
console.log(dom);

dom = document.doctype;
console.log(dom);

dom = document.domain;
console.log(dom);

dom = document.URL;
console.log(dom);

dom = document.characterSet;
console.log(dom);

dom = document.contentType;
console.log(dom);

// ACESSING ELEMENTS WITH GENERIC TAGS NAMES LIKE LINKS, IMAGES, FORMS ETC
// IT IS NOT THE RECOMMENDED WAY
// These will also return html collections
let forms;
forms = document.forms; // Gives html collection of form elements/nodes
console.log(forms);

let links = document.links; // Gives html collection of link elements
console.log(links); // To access a specific links just use index
console.log(links[0]); // Gives first link
console.log(links[0].className); // We can get ther className and id as well
console.log(links[0].classList) // We can get a collection of classes

let images = document.images; // Gives html collection of image elements
console.log(images);  // Collection of all images
console.log(images[0]); // Selects the first image
console.log(images[0].attributes); // Gets the Map of all attributes of 1st image
console.log(images[0].attributes[0]); // Gets the the first attribute out of the map

let scripts = document.scripts;
console.log(scripts[0].attributes[0].value)

// We cannot directly apply forEach to the html collection
let linksArray = Array.from(links);

linksArray.forEach(function(link) {
    console.log(link);
});

/*---------------The Document Object Methods----------------*/

// SINGLE ELEMENT SELECTOR METHODS
// Single element selectors just select one element even if there are multiple of
// the same type

// 1st single element selector
// getElementById()
// Only selects elements by their id
// In the last lecture there was nothing to select divs
// This selector can be easily used to get a div by its id

let imageContainer;
imageContainer = document.getElementById('img-container');
console.log(imageContainer);
console.log(imageContainer.id);
console.log(imageContainer.className); // Has no class we'll get empty string
console.log(imageContainer.classList); // Has no class we'll get empty list

// Styling the selected element
document.getElementById('img-container').style.border = 'black 1px solid';
// We can change anything we can change in css
// THERE IS A NEWER AND MORE EFFICIENT WAY OF STYLING ELEMENTS IN CHROME NOW
// Using the element.attributeStyleMap.set('font-size', CSS.px(12))
// element.attributeStyleMap.set/get/values/entries/has/delete all are methods

// We can also change the markup text of the element

// 1st Method
// The textContent property sets or returns the text content 
// of the specified node, and all its descendants. 
// textContent returns the text content of an element, including the text of its descendants, as it is in the DOM, without styles applied. 
// It returns the text content of all elements, including hidden ones.
document.getElementById('name').textContent = `Umer the Gr${2*4}`;
// Let's try this on a parent element
// document.getElementById('grid-container').textContent = "Hello"
// ^ The above line will change the whole grid-container to just "Hello"
// Not better to use in my opinion

// 2nd Method
// innerText returns or sets the text content of an element, 
// including the text of its descendants, as it appears on the screen(with line breaks \n), with CSS styles applied. It does not return hidden elements.
document.getElementById('name').innerText = `Umer The Developer`;

// 3rd Method
// This method is about injecting html in the element
// This will put <small class="btn">Umer</small> inside the existing h2 name tag 
document.getElementById('name').innerHTML = '<a href="#" class="btn">Umer</a>'
// Better to get an element and store it in a variable then perform the operations

// 2nd Single Element Selector
// This method is newer and more powerfull
// We can select any element by any method we do it in css
// document.querySelector()

// Getting an element by class name => Only selects the first in file with that className
let sel = document.querySelector('.btn'); // Gets the first element with .btn class
sel.style.fontSize = '80px';
// THE CSS STYLES WITH DASHES HAVE TO BE CONVERTED TO CAMEL CASE IN JS
sel.style.backgroundColor = 'yellow';

// Getting an element by id
sel = document.querySelector('#grid-container');

// Getting an element by tag itself
sel = document.querySelector('h2');

// Targetting a specific element => Just use the selectors like css

document.querySelector('.grid-item > p ~ a:nth-of-type(2)').style.backgroundColor = 'green'; 
console.log(document.body); 

/*---------------Multiple Element Selectors----------------*/

// They select multiple elements and return either an html collection or Nodelist
// An HTML Collection updates dynamically whereas a Nodelist won't update dynamically when the document changes
// Consider it as if the function returning an HTML Collection will give us a reference to actual DOM Node Snapshot Object
// WHEREAS the function returning the NodeList will return us a deeply copied over list which wont change if the original doc changes
// Both are similar to array and can be converted to arrays easily

// 1st Mehtod
// document.getElementsByClassName();

let multipleSel = document.getElementsByClassName('btn');
console.log(multipleSel); // Gives an HTML collection of selected elements

Array.from(multipleSel).forEach(function(ele){
    ele.style.boxShadow = 'black 1px 1px 20px';
});

// We can also first use simgle element selector and then get all child elements with
// that class name This will narrow down the scope

// 2nd Method
//getElementsByTagName

let byName = document.getElementsByTagName('p');
console.log(byName); // Gives html collection of all paragrah elements 
console.log(byName[2].innerText = 'My Likes'); // Accessing and changing third p Element

// 3rd Method
// querySelectorAll();
// The main difference is that it returns a nodelist
// It also allows to use some array methods like forEach without conversion

let querySel = document.querySelectorAll('.btn');


/*---------------Traversing the DOM----------------*/

// Working with parent and child elements
// Looking at the properties of the elements select by moving up and down the DOM

let parent = document.querySelector('#grid-container'); // Selecting the parent
let child = document.querySelector('.grid-item'); // Selecting the child

console.log(parent); 
console.log(child); 

// Let's have a look at the properties
//------METHODS TO GET CHILD NODES AND ELEMENTS------//

// ONE THING TO NOTE HERE IS THAT PROPERTIES WITH NODE WORD
// RETURN US A NODELIST NOT AN HTML COLLECTION
console.log(parent.childNodes); // Returns a nodelist of all child elements having text as well
// The nodelist contains the linebreaks(text),comments,etc. between elements as well
// These line breaks are treated as separate nodes called text nodes
// There are other "types" of nodes as well. we will look at them shortly
console.log(parent.childNodes[0]); // Will return #text as a reference
// 2nd Method to get child elements
// NOTICE THIS WILL RETURN CHILD ELEMENTS NOT NODES
console.log(parent.children); // Gives HTML collection of children elements only

// Checking the node name and type
console.log(parent.childNodes[0].nodeType) // checking type in the node list
console.log(parent.childNodes[0].nodeName) // checking name in the node list e.g. SCRIPT, DIV, 

console.log(parent.children[0].nodeType) // checking type in the node list
console.log(parent.children[0].nodeName) // checking name in the node list

// The organogram
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document Itself
// 10 - Doctype

// Getting Children of Children
console.log(parent.children[0].children) // Gives us the children of first child
console.log(parent.children[0].children[1].className='hello') // Added the class name hello to the element

// SELECTING SINGLE CHILD ELEMENTS

// Getting the FIRST CHILD => Similar to childNode gives first element either text or whatever
console.log(parent.firstChild); // Gives us the first child node i.e. #text

// Getting the first children element => Only gives first element
console.log(parent.firstElementChild); // Gives us the first children element div

// Getting the LAST CHILD => Similar to childNode gives last element either text or whatever
console.log(parent.lastChild); // Gives us the first child node i.e. #text

// Getting the last children element => Only gives first element
console.log(parent.lastElementChild); // Gives us the last children element div

// Getting the count of child elements
console.log(parent.childElementCount);

//------METHODS TO GET PARENT NODES AND ELEMENTS------//

console.log(child.parentNode); // Notice this is singular 'parentNode' not 'parentNodes'
console.log(child.parentElement); // Similar to parent.children

// Getting parent of parent
console.log(child.parentElement.parentElement); // Gives body element parent of parent

//------METHODS TO GET SIBLING NODES AND ELEMENTS------//

// NEXT
console.log(child.nextSibling); // Gives #text
console.log(child.nextElementSibling) // Gives next element div

// PREVIOUS
console.log(child.previousSibling); // Gives #text
console.log(child.previousElementSibling) // Gives null as there is no previous sibling

/*---------------Creating and Manipulating Elements----------------*/

// Lets Add a div to the smaller divs
// Create a variable and store the created element into it

const newDiv = document.createElement('div'); // Empty div created
console.log(newDiv); 

// Now add a class name and id to the div for styling
newDiv.id = 'test-id'; // Add id
newDiv.className = 'small-card grid-item'; // Add className
newDiv.setAttribute('title', 'New Div'); // Add Attribute

// Now lets add the child elements to the div
const newH3 = document.createElement('h3');
console.log(newH3);
newH3.textContent = '143';

// Let's append this heading to the div
newDiv.appendChild(newH3);
console.log(newDiv);

// Now let's create and append the inner p tag

const newP = document.createElement('p');
newP.innerText = 'Newly Added';
newDiv.appendChild(newP);

console.log(newDiv);

// Now Let's append this to the existing parent as a child
document.querySelector('#grid-container').appendChild(newDiv);

// We also have other methods to add elements to dom
// document.querySelector('#grid-container').insertAdjacentElement('position', element)
// document.querySelector('#grid-container').insertAdjacentHTML('position', HTML)
// document.querySelector('#grid-container').insertAdjacentText('position', text)

// Position can have the following values
// 'beforebegin': Before the targetElement itself.
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the targetElement, after its last child.
// 'afterend': After the targetElement itself.



//------Replace, Remove and Manipulate Elements------//

// REPLACE ELEMENT

// Lets Replace My Name with Sana's
// Lets select the existing element
const existingHead = document.getElementsByTagName('h2');
console.log(existingHead[0]);
// Let's create the replacement element
const newHead = document.createElement('h2');
newHead.id = 'name';
newHead.className = 'hello';
newHead.appendChild(document.createTextNode('Sana'));
console.log(newHead); // The newly created element

// Now let's replace the elements by using replaceChild

parent = document.querySelector('#grid-container > .grid-item');
console.log(parent.children);
console.log(existingHead[0]);
// NEW NODE IS THE FIRST ARGUMENT WHILE REPLACING
parent.replaceChild(newHead, existingHead[0]);

// REMOVE ELEMENT

// Remove by the element itself
// We use element.remove()
parent.children[2].remove(); // Removes "Visual Artist"

// Remove by the parent
parent = document.querySelector('.small-card');
parent.removeChild(parent.children[1]); // Removes Posts

// MANIPULATING CLASSES AND ATTRIBUTES
// CLASSES
// Adding a class to the existing class(es) of an element
// This can be done by adding to the class list of an element
parent.classList.add('btn'); // This makes the first item a btn

// Removing a class from the existing class(es) of an element
// This can be done by removing from the class list of an element
parent.classList.remove('btn'); // This removes the .btn class from grid item

//Replacing a class from ClassList
parent.classList.replace('btn', 'btn-secondry');

//Check if a class is there in ClassList
parent.classList.contains('btn');

// ATTRIBUTES
// GETTING THE VALUE OF AN ATTRIBUTE
// We can get the value of an attribute by using getAttribute('attribute')
console.log(document.querySelector('#grid-container img').getAttribute('alt'));
// We can add a new attribute or set the existing attribute by using setAttribute()
parent.setAttribute('title', 'parent');
console.log(parent); // Addes the title parent
// We can check if an element have got a certain attribute
// Use hasAttribute() to check this
console.log(parent.hasAttribute('title')); // Returns true
// We can remove a certain attribute
parent.removeAttribute('title');

//---------------Manipulating the CSS-------------//
/* The CSSOM is the parallel of DOM and is a similar tree with styles for the webpage
 * The CSSOM is a set of APIs just like dom provided by the browser to manipulate the css of the webpage

 * //--------------The inline CSS-----------------//
 * The inline CSS can be manipulated or read by the conventional method:
 * document.querySelector('body').style.color = 'green'; OR element.attributeStylemap.set('property',CSS.px(value))
 * console.log(document.querySelector('body').style) // OUTPUTS THE INLINE STYLES ONLY OF THE SELECTED NODE
 * THIS WILL ONLY ADD OR READ FROM THE INLINE STYLES OF AN HTML ELEMENT i.e. the styles of that element in the external
 * or embedded sheet are NOT read
 * It contains further methods to set or get specific properties as:
 * document.querySelector('body').style.setProperty('font-size', '12px') // Sets an inline style for font-size
 * document.querySelector('body').style.setProperty('font-size', '12px', 'important') // Sets priority
 * document.querySelector('body').style.getPropertyPriority('font-size') // Gives 'important' priority
 * document.querySelector('.container').style.getPropertyValue('color') // Reads from the INLINE style only
 * document.querySelector('body').style.removeProperty('font-size') // Removes font-size from the inline styles
 * 
 * 
 * //--------------The External/Embedded CSS-----------------//
 * To get all the computed values applied to an HTML element that are not present in inline css but
 * either are getting applied from an external stylesheet or are applied by browser by default as user-agent
 * styles we can use a method called getComputedStyle()
 * THIS METHOD IS NOT A PART OF THE DOM API RATHER IT IS DEFINED ON THE WINDOW OBJECT SO
 * window.getComputedStyle(document.querySelector('element')).fontSize 
 * The above will give us all the FINAL FONT SIZE COMPUTED VALUE applied to the element no matter where it
 * was defined or was by default applied
 * THIS METHOD GIVES US READONLY RESULTS meaning that these results cannot be manipulated and are read only
 * This is same as above window.getComputedStyle(document.querySelector('element')).getPropertyValue('font-size')
 * 
 * //--------------Manipulating the External/Embedded CSS-----------------//
 * This is the most useful part of CSSOM where we can change the values of css in the external or embedded style sheets
 * This can be done by accessing the style sheet using the DOM API as:
 * document.styleSheets // Gives us a StyleSheetList with all the styleSheets indexed starting from 0
 * document.styleSheet[0] // Gives us the first linked stylesheet
 * document.styleSheet[0].cssRules // Gives us a CSSRuleList with all the CSSRules in the first stylesheet
 * document.styleSheet[0].cssRules[0].type // Gives us the type of the first Css rule in first style sheet
 * document.styleSheet[0].cssRules[0].style // Gives us the styles of the first Css rule in first style sheet
 * document.styleSheet[0].cssRules[0].style.fontColor // Changes/Adds the color to the first Css rule in first style sheet
 * HERE WE CAN AGAIN USE ALL THE METHODS USED FOR INLINE STYLES AS ...style.setProperty(), removeProperty etc
 * There are several types of rules: 1 for Styles rules 4 for media query rules 7 for keyframe rules etc
 * document.styleSheet[0].cssRules[0].selectorText // Gives us the selector in string so we can compare OR change selector
 * FOR MEDIA RULES FIRST WE CHECK IF TYPE IS 4 THEN WE CAN FURTHER ACCESS cssRules for that particular media block
 * 
 * //------------Adding or Removing CSS Rules from a stylesheet--------//
 * There are two methods which can be used to add or remove an entire css rule from a stylesheet
 * The first method is to insert a css rule and takes in two parameters i) the rule in to be inserted ii) position to insert
 * document.styleSheets[0].cssRules.length // Gives the already present number of rules
 * document.styleSheets[0].insertRule('.ele{color: blue;}' , document.styleSheets[0].cssRules.length) // Inserts rule at last
 * 
 * The second method is used to delete rules:
 * document.styleSheets[0].deleteRule(2) deletes the rule at the 3rd number as it is zero based indexing

*/

//--------------Event Listeners-------------//

// We can use event listeners on almost any of the elements in DOM

// Lets add an event listener to the Follow button
// we use element.addEventListener('event', function )
// THERE CAN BE A THIRD PARAMETER WHICH CAN BE AN OBJECT AND CAN HAVE FOLLOWING TYPES:
// element.addEventListener('event', function(), {capture:true}) => This will execute the event before bubbling up i.e.
// in the capture phase when going from parent(window) to all the way to child(e.target)

// Each handler can access event object properties:
// event.target – the deepest element that originated the event.
// event.currentTarget (=this) – the current element that handles the event (the one that has the handler on it)
// event.eventPhase – the current phase (capturing=1, target=2, bubbling=3).

// Any event handler can stop the event by calling event.stopPropagation(), but that’s not recommended, 
// because we can’t really be sure we won’t need it above, maybe for completely different things.


// element.addEventListener('event', function(), {once:true}) => This will make sure that the eventlistener only runs once
// and then is removed from the flow
// There is another method which is element.removeEventListener('event', referenceToCallback) it removes the passed callback
// event on the said element

document.querySelector('.btn').addEventListener('click' , function() {
    console.log('hello world!');
}); // This should show hello world in case of a click event on the element



// Every element have a default behaviour in our case the element is link
// The link has a default behaviour of redirecting to another page/section
// If we do not add a # to href of the link the 'hello world' will immidiately disappear
// The second way to prevent this default redirect behaviour is to use the EVENT OBJECT E
// The event object has got many methods and properties
// One of these methods is e.preventDefault()
// Lets pass in the event object

document.querySelector('.btn').addEventListener('click' , function(eventObj) {
    console.log('hello world!');
    eventObj.preventDefault();
});

// The second method to use a function with event listener is to declare
// a function and then call it inside the event Listener
// This is the more recommended way
// Lets do this with the message button

document.getElementsByClassName('btn')[1].addEventListener('click', onMouseOver);
// IF WE ADD BRACKET AT THE END OF FUNCTION AS A PARAMETER IT WILL BECOME A FUNCTION CALL
// The function call will happen immediately without listening to the event. So be aware
// Defining the function
function onMouseOver(eventObj) {
    eventObj.target.style.borderRadius = '0px'; // Selects the target element

    // THE EVENT OBJECT
    console.log(eventObj); // Outputs MouseEvent object
    console.log(eventObj.target); // Outputs Event target element <a> in our case
    console.log(eventObj.target.id); // Outputs target elements id
    console.log(eventObj.target.class); // Outputs target elements classes
    console.log(eventObj.target.classList); // Outputs target elements classList
    // We can perform any operation we have learned so far
    // Change Html style or anything
    console.log(eventObj.type); // Outputs Event type i.e. mouseover
    console.log(eventObj.timeStamp); // Outputs the timestamp of event
    
    // Coordinates of event's occurence wrt to window
    console.log(eventObj.clientY); // Outputs Event occurence coords from top
    console.log(eventObj.clientX); // Outputs Event occurence coords from left

    // Coordinates of event's occurence wrt to the element itself
    console.log(eventObj.offsetY); // Outputs Event occurence coords from top
    console.log(eventObj.offsetX); // Outputs Event occurence coords from left

    // MouseOver event outputs values only once
}


//--------------Mouse Events-------------//

// There are many type of mouse events we can listen to
// 'click', 'dblclick', 'mouseover'(triggers when mouse hovers the element or any children both),
// 'mouseout (triggers when mouse outs the element or any children both)', 'mouseenter', 'mouseleave'
// 'mousedown', 'mouseup' click and hold and leave the hold respectively
// mousemove gives the coordinates through the event object whenever mouse moves
// contextmenu for the right click of mouse


//--------------Input and Form Events-------------//
// The default behaviour of a form when submitted, is to redirect to same page
// just like the link
let form = document.querySelector('form');
let input = document.querySelector('input');

// FORM EVENTS
// When working with a form we can listen for a submit event
// Let's add an event listner to the form

form.addEventListener('submit', function(e) {
    console.log('form submitted');

    // We can get the values of the input field when the form is submitted
    // For that we will use the selected inputs
    console.log(input.value);
    // We can also clear the input feild after form submission
    input.value = ''; // This will clear the field
    e.preventDefault(); // This will prevent form from reloading
});

//// Just adding a p element to experiment with the input event listners
let paraDiv = document.createElement('div');
console.log(paraDiv);
paraDiv.classList.add('grid-item');
paraDiv.classList.add('small-card');
paraDiv.appendChild(document.createElement('p'));
document.querySelector('#grid-container').appendChild(paraDiv);

// Now lets select the inner para to write to it
let para = paraDiv.firstElementChild;

// INPUT EVENTS
// Event Listner for the Input
// KEYDOWN
// input.addEventListener('keydown', inpEveHan); // Fires first when a key is pressed before browser processes it
// But if we press a key and dont release it it will keep firing the event
// For catching live keyinputs we can access input.value
function inpEveHan (e) {
    // using keydown to get live value is not the correct way. Use input event instead
    console.log(`Event Type: ${e.type}, `);
    // We can write it live to some place else like lets inject the value at live time to DOM
    para.innerText = (e.target.value);
}

// KEYUP
// input.addEventListener('keyup', inpEveHan); //Fires when key is released hence browser processes the key
// Key up will not fire until you release a key e.g. kkkkkkkkkk is one key press

// KEYPRESS
// input.addEventListener('keypress', inpEveHan); // Generalized keypress event
// Lags behid like keydown one character
// Only fires for characters not for enter key or backspace

// FOCUS
// Fires when you click inside the input space
// input.addEventListener('focus', inpEveHan);

// BLUR
// Fires when you click somewhere outside the input space after focusing in
// input.addEventListener('blur', inpEveHan);

// CUT
// Fires when you cut something from input by mouse or by keyboard ctrl x
// input.addEventListener('cut', inpEveHan);

// PASTE
// Fires when you paste something to input by mouse or by keyboard ctrl v
// input.addEventListener('paste', inpEveHan);

// INPUT
// Fires when you DO ANYTHING with input
// input.addEventListener('input', inpEveHan);

// CHANGE
// Fires when you change the selected option from select input type
// input.addEventListener('change', inpEveHan);

//--------------Event Bubbling and Event Delegation-------------//

// EVENT BUBBLING
// Event bubbling is the bubbling up of the event through the DOM
// An event happening on a child fires the same event linked to the parent as well
// Let's check this example by clicking over the profile picture
// It will fire the same type of events linked to its parent div as well as the parent container

let gridItem = document.querySelector('.grid-item');
console.log(gridItem);

let imgDiv = document.querySelector('.grid-item > div');
console.log(imgDiv);

let img = document.querySelector('.grid-item > div > img');
console.log(img);

imgDiv.addEventListener('click', function(e) {

    console.log('imgDiv');

}); 

gridItem.addEventListener('click', function(e) {

    console.log('grid-item');

});


img.addEventListener('click', function(e) {

    console.log('img');

});

// Notice the bubbling sequence
// Inner most occurs first then the outer and then the outermost
// From child to parent

// BEFORE BUBBLING THE CAPTURE PHASE HAPPENS I.E. THE ENGINE STARTS FROM THE PARENT(window)
// AND KEEPS GOING DOWN TILL THE CHILD(E.TARGET) ON WHICH THE EVENT OCCURS AND THEN BUBBLES UP 
// FROM THERE WE CAN NOTICE THIS BY PASSING A THIRD PARAM TO A PARENT ELEMENTS EVENT LISTENER
// THAT PARAM WILL BE {capture:true}
// SO Event handling is a 3 phase occurence 1.Capture 2.Target 3.Bubbling   


// EVENT DELEGATION
// In event delegation we perform an action on the child element
// by adding an event listener to the parent
// For example if we want to delete something when x is clicked on
// We can just add event listner to the body and remove the target if the 
// target being clicked is x
// Also when something is added dynamically to the DOM we will use delegation
// To match the element based on a class name is to use classList
// Check if classList.contains('classname')


//--------------Local and Session Storage-------------//
// Local Storage persists even after we close the window and we 
// have to clear by ourselves
// Session storage goes away once we close the tab
// Local storage API is the part of the window object
// You can only store strings in the local storage
// Can store arrays and objects but have to convert these into JSON
// For this purpose use JSON.stringify to convert to string
// Use JSON.parse to convert the string back to object
// Can check these in Dev Tools > Application > Local Storage
localStorage.clear(); // Clears everything from before

// Can only store in key value pairs
localStorage.setItem('key one','value'); // Simple storage
let arrayOne = [1,2,3,4];
localStorage.setItem('key two', JSON.stringify(arrayOne));
localStorage.setItem('key three', arrayOne); // Will save 1,2,3,4 as a string
// So we will not be able to use JSON.parse then

// Retrieval
let retItem = localStorage.getItem('key two');
console.log(retItem); // Outputs stirng as we haven't parsed the array yet
console.log(JSON.parse(retItem)); // Now outputs Array as we have parsed it

// Everything is almost same for the session storage 