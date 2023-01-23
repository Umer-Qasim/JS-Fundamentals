/*Asynchronous Javascript is used for performing tasks in parallel*/

/*-------------------AJAX AND XHR------------------*/
// AJAX stands for asynchronous javascript and XML
// AJAX is not a language or a framework rather it is a set of web technologies
// to send and receive data between client and server and all of it is done asynchronously
// XML is outdated now and JSON is used instead

// WHY ASYNCHRONOUS COMMUNICATION IS REQUIRED?
// Normally The client(browser) sends common Http requests to the server to fetch pages whenever
// we type some web address in the browser. But the downside is that the user has to wait until
// that webpage is fetched and displayed so for each small request we should not reload the whole page
// instead we should fetch the required response ASYNCHROUNOUSLY.
// That is when AJAX comes into action, i.e. it fetches data asynchrounously and the main thread is not blocked so meanwhile
// the user can continue using our webpage/app
// The flow is as follows:
// CLIENT ====> JS CALL ======> THE AJAX ENGINE ====> XmlHttp REQUEST ====> SERVER
// SERVER ======> XML/JSON/Text ==== THE AJAX ENGINE ==== HTML RESPONSE ====> CLIENT

// WHAT IS XHR
// XHR stand for XmlHttp Request 
// It is an API in the form of an object
// It has methods which are used for communication between client and server
// Can work with JSON/text/XML responses
// Can work with other protocols than HTTP
// LEARN MORE ABOUT HTTP HERE: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

// OTHER METHODS TO SEND ASYNCHRONOUS HTTP REQUESTS
// FETCH API, AXIOS, JQUERY, NODE HTTP, SUPERAGENT
// Most preferable is to use fetch API


/*-------------------XHR METHODS------------------*/
// Create an XHR Object
const xhr = new XMLHttpRequest();

// OPEN method is used to open a request. It takes three parameters
// Type of request, URL/FILENAME, ASYNCHRONOUS: TRUE/FALSE
// OPEN a request GET/POST/PUT/DELETE
xhr.open('GET', 'data.txt', true);

// Ready state gives you the state of communication at which the object is
// console.log('READYSTATE', xhr.readyState);

  // readyState Values
  // 0: request not initialized 
  // 1: server connection established
  // 2: request received 
  // 3: processing request 
  // 4: request finished and response is ready

// ONPROGRESS METHOD, This method executes automatically when ready state is 3 i.e., processing
// We can add any stuff we want to show the user when the request is being processed
// Optional - Used for spinners/loaders
xhr.onprogress = function(){
  console.log('READYSTATE', xhr.readyState);
}


// ONLOAD METHOD, This method executes finally when the response is ready and the readystate is 4 i.e. request finished
// The response might be a success or a failure e.g. 'not found' or anything like that
// That's why we always check the HTTP status
// HTTP Statuses
// 200: "OK"
// 201: Resource created
// 403: "Forbidden"
// 404: "Not Found"

xhr.onload = function(){
  console.log('READYSTATE', xhr.readyState);
  if(this.status === 200) {
    // console.log(this.responseText); // Response text is the response we get from the server
    document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
  }
}

// xhr.setRequestHeader('Content-type', 'application/json') In the case of PUT/POST

// ONREADYSTATECHANGE METHOD, This was an older way to perform the communication.
// This method executes on every state change from 0 to 4 hence we check when our desired state is 4
// at 4 we utilize the response which is ready
// xhr.onreadystatechange = function() {
//   console.log('READYSTATE', xhr.readyState);
//   if(this.status === 200 && this.readyState === 4){
//     console.log(this.responseText);
//   }
// }

// If something goes wrong during the communication
xhr.onerror = function() {
  console.log('Request error...');
}

xhr.send();

/*-------------------REST APIs and TYPES OF HTTP REQUESTS------------------*/

// REST APIS

// An API is contract between pieces of softwares
// Takes structured requests and returns structured responses
// We are dealing with one type of APIs called web APIs
// Rest stands for representational state transfer
// REST is a software Architecture for designing networked applications and the backend is normally designed using this architecture
// Relies on a STATELESS client-server protocol
// Treats server objects as resources that can be created, updated, read and deleted e.g. a blog post object
// Can be used virtually used with any language


// TYPES OF HTTP REQUESTS

// GET: Retrieve data from a specified resource
// POST: Submit data to be processed to a specified resource ==> Needs Data to be sent
// PUT: Update a specified resource ==> Needs data to be sent
// DELETE: Delete a specified resource

// HEAD: Same as get but does not return a body
// OPTIONS: Returns the supported Http methods
// PATCH: Update partial resources

// API ENDPOINTS
// Endpoints are the URLs we access to do certain things


/*-------------------Call Back Functions------------------*/

// REMEMBER====> Everything actually executes inside the library i.e. we pass in the callback methods
// or 

// There are asynchronous and synchronous both types of call backs
// For example for each takes in a call back which is synchronous
// setTimeout takes in a call back which is asynchronous

// WHY USE CALL BACK FUNCTIONS???
// Call back functions are actually used to solve a problem with asynchronous communication
// As in synchronous communication, things happsn in a sequence and hence we are sure when 
// will a certain task be performed. BUT this is not the case with asynchronous communication
// In asynchronous communication we can happen to get a response back from a server even before
// updating a certain resource e.g. if we comment on fb post 2 things happen i) The comment is POSTed
// to the DB ii) We the GET the comment from the DB and show it in the section. So as there is no sequence
// in asynchronous communication, the ii can occur before i. To avoid this we use callback functions.
// We send the getComment method as a call back to PostComment so that it is only called when the
// postComment is done with its business

// HOW TO USE CALL BACK FUNCTIONS???

// The call back functions are defined in the main JS file and are passed as arguments
// to the get/post or other methods of the library when called. In the library these methods are called
// when get or post are done with their business by passing in the response text or error message

/*-------------------AJAX LIBRARY------------------*/

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}


// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}


/*-------------------USING THE LIBRARY------------------*/

const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});


/*-------------------ES6 Promises------------------*/

// Promises are actually a sophisticated method of communication as compared to callbacks
// When using with functions, the function normally returns a new promise
// Promises are similar to call backs, we can say they have predefined callbacks in the form
// of resolve and reject. The resolve(call back) is called from inside the promise by passing 
// in the response we get from the source/API as an argument.
// The reject(call back) is called from inside the promise when there is an error condition

class Ajax{

  constructor(){
      this.http = new XMLHttpRequest()
  }

  get(url) {
      return new Promise((resolve, reject) => {
          this.http.open('GET', url, true);

          this.http.onload = () => {
              if(this.http.status === 200){
                  resolve(this.http.responseText);
              }
              else{
                  reject(`Failed : ${this.http.status}`);
              }
          }

          this.http.send();
      })

  }
}

// In the main file the method returning a promise is called and we use .then to catch the success response
// we use .catch to catch the error response

const http = new Ajax();
http.get('https://jsonplaceholder.typicode.com/post/2')
.then(text => console.log(text))
.catch((message) => {console.log(message)});

// For handling multiple promises at once
// const promise1 = new Promise((resolve, reject) => {})
// const promise2 = new Promise((resolve, reject) => {})
// const promise3 = new Promise((resolve, reject) => {})

/* 
Promise.all([ // Runs all the given promises and waits for all of them to resolve/reject
  promise1,
  promise2,
  promise3
]).then((messages) =>{array with the messages from all promises}) 
 .then will wait for all of the above promises to resolve/reject
*/

/* 
Promise.race([ // Waits for the first of the following promises to resolve/reject
  promise1,
  promise2,
  promise3
]).then((message) =>{message from the promise resolved first}) 
*/

/*-------------------The Fetch API------------------*/
// We can use fetch API just by calling a function fetch()
// We pass in the url/path of the source we want to communicate with like fetch('text.js')
// Fetch returns promises so we have to use .then with the function fetch()
// The first .then() will get a response Object which further will have the json/text/xml functions
// The methods e.g. json() from the first ,then will return a promise as well so we have to do another .then
// to get the response. And finally we can do a .catch

// THE PROBLEMATIC CODE
// CONSIDER THE BELOW AS A LIBRARY
class Fetch{


  get(url) {
      fetch(url)
          .then(resp => resp.json())
            .then(resp => {console.log(resp) // OUTPUTS THE RESPONSE
                            return resp;}) // 
              .catch(err => err);
  }
}


const http = new Fetch();
// WITHOUT A PROMISE RETURNING FROM THE get THIS LET EXECUTES BEFORE THE RESPONSE
// IS FETCHED AND IS UNDEFINED
let resp = http.get('https://jsonplaceholder.typicode.com/posts/2');
console.log(resp); // UNDEFINED

// THE SOLUTION IS TO RETURN A PROMISE FROM THE get
// SO THAT WHENEVER THE RESPONSE IS FETECHED THE .then WILL EXECUTE

// THE RIGHT FORMAT CODE

class Fetch{


  get(url) {
      return new Promise((resolve, reject) => { // Return a Promise so that when it resolves the action is performed
      //---------------------------------------------------//
          fetch(url) // A promise inside a promise
          .then(resp => resp.json())
      //---------------------Equialent to xhr stuff----------------------//
            .then(resp => resolve(resp)) // resolve when response is catched
              .catch(err => reject(err));
      })

  }
}


const http = new Fetch();

http.get('https://jsonplaceholder.typicode.com/posts/2').then(resp => console.log(resp));
