/****************************************************************************************
 * OBJECTS at a glance
 * Objects have: a) Properties and b) Methods.
 * JavaScript has built-in objects (day, math) but it also allows us to create our own...
 * ... objects (with object literal notation).
*****************************************************************************************/
// Creating a new object using object literal notation:
// Just like when we used square brackets to make an array, now we use CURLY BRACES to ...
// ... make an object literal;
// Inside this object we are going to have several different PROPERTIES; and each property...
// ... is going to be a KEY-VALUE pair.
// Each PROPERTY is separated by a coma;

let user = {
    name: 'crystal',    // This is a PROPERTY
    age: 30,            // property
    email: 'crystal@thenetninja.co.uk',     // property
    location: 'berlin', // property
    blogs: ['why mac & cheese rules', '10 things to make with marmite']     // property
};

console.log(user); // this displays the object
                    // the last property __proto__ : Object at the bottom will be explain when...
                    // ... talking about Object Oriented Programming.

// If we want to access one of the properties of this object, we can use dotnotation:
console.log(user.name); // Prints: crystal

// If we want to overwrite the value of a property of the object:
user.age = 35; 
console.log("We have just overwritten the age with dotNotation to", user.age);

// Another way to access or update the properties of an object is ...
// ... using square brackets [ ] to reference the NAME OF THE KEY ['btw simple quotes'], instead of
// ... of using dot notation 


// to access one of the properties of this object:
console.log(user['name']);

// to overwrite the value of a property of the object:
user['name'] = 'chun-li';
console.log('I have just changed the name with square brackets to:', user['name']);

// most of the times, we use dot notation but when we need to reassign a new value to a property by...
// ... passing such new value THROUGH A VARIABLE, then the square bracket approach is ...
// ... the only way to do so (?):

const myVar = 'Edward';

user['name'] = myVar;
console.log(user.name);

// typeof(): to find out the type of an object.
console.log(typeof user); // Output = object


// Adding METHODS to an OBJECT
// It is ALSO done by adding a KEY-VALUE pair, where the value is going to be a FUNCTION;
// The name of the method is the KEY and the FUNCTION is the code it will execute.

let user2 = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){      // this is a METHOD OF THE OBJECT
        console.log('the user is logged in!');
    },
    logout: function(){      // this is a METHOD OF THE OBJECT
        console.log('the user is logged out!');
    }
};

// to invoke this METHOD:
user2.login();
user2.logout();

// On the above case, the object is user2.
// You can also have a METHOD on an object provided OOB by the JavaScript language:
const name = 'mario';
console.log('This method is invoked on the object String:', name.toUpperCase());

/****************************************************************************************
 * The THIS keyword:
 * 
 * THIS is a context object.
 * It represents the context OBJECT for which the code is CURRENTLY executing.
 * Depending on where "THIS" is located in you code during execution, it may have a different value.
 * If "THIS" is used at the ROOT level of the document, then it is going to refer to the global...
 * ... context object, which is called the WINDOW OBJECT.
 * If "THIS" is used in a method of an object, then it is going to refer to the local context, i.e. ...
 * ... that particular object (the object on which the method is being executed).
 * If the keyword "THIS" is used in a method written with the ARROW function syntaxt, then...
 * ... it's context is the context where the method was invoked from, i.e. if the method was ...
 * ... invoked from the ROOT of the document, then "THIS" will refer to WINDOW.
 * Only if "THIS" is written in a method written with the REGULAR Function syntax ...
 * ... will it refer to the local context of that method.
 ***************************************************************************************/

 // Imagine you want to add a method "logBlogs" to the object "user3" which will print the property...
// ... "blogs" of the object.

let user3 = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    logBlogs: function(){  // adding a method on the custom object.
        console.log("The context object here is user3: ", this); 
        console.log("The property's key 'blogs' has the following value: ", this.blogs);
        console.log("--> Iterating the blogs' array and desplaying its items below:");
        this.blogs.forEach(
            blogArrayItem =>{
                console.log(blogArrayItem);
            }
        )
    }
};

// Within the block-code of the "logBlogs" method, if you write any of properties defined...
// ... outside this code block, JS will through an error "Uncaught ReferenceError: blogs is not defined."

// The above keyword THIS refers to the OBJECT "user3" on which the code is currently running.
// So, in that context, "THIS" means "user3", so now, you can invoke the method "logBlogs()":

user3.logBlogs();

// Let's see the WINDOW OBJECT in JavaScript:
console.log("Here, the context object is WINDOW: ", this);

// A SHORTER way to write REGULAR functions to create METHODS on an OBJECT:
// Remove the "function" keyword, remove the colon (:) and keep the parentheses after the method name.

let user4 = {
    name:'crystal',
    login(){
        console.log('A shorter way to write REGULAR functions to create METHODS');
    }
}
user4.login();
// So, login(){...block-code...} is still a REGULAR function and JavaScript interprets it as such.


/****************************************************************************************
 * Objects in ARRAYs (storing OBJECTS as array's items)
 ***************************************************************************************/

 // High level idea:

const myArray = [
    {/*object 1 here*/},
    {/*object 2 here*/},
    {/*object 3 here*/}
];

console.log('****** Objects in Arrays**********');
const blogs = [
    { title: 'why mac & cheese rules',
     likes: 30 }, // This is an object {key-pair} stored as an item in an Array called "blogs"
    { title: '10 things to make with marmite',
     likes: 50 }  // This is another object {key-pair} stored as another item in the Array.
];
console.log(blogs);

// when we will retrieve data from a data base, we will leverage this format: arrays of objects.
// here is the above user3 object with the above array now containing objects:

console.log("****** An object containing properties, 1 of them is an Array with objects!**********");
let user5 = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30 }, // OBJECT in the property / Array "blobs";
        { title: '10 things to make with marmite', likes: 50 } // OBJECT object in the Array;
    ],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs(){
        console.log('** This user has written the following blogs:');
        this.blogs.forEach(
            blogArrayItem => {
                console.log(blogArrayItem.title, "Likes =", blogArrayItem.likes);
            }
        );

    }
};
user5.logBlogs();

/****************************************************************************************
 * MATH Object
 ***************************************************************************************/
// JavaScript has a bunch of already made Objects that can be used out-of-the-box:
// The Math OBJECT has pre-made properties and methods.
// Use Capital M to indicate the Math object:

console.log("----- The Math object ----");
console.log(Math); // this display all the different PROPERTIES and METHODS of the OOB Math object;
console.log(Math.PI); // Output = 3.141592653589793
console.log(Math.E); // Output = 2.718281828459045

const area01 = 7.7;
console.log("round of 7.7 =",Math.round(area01)); // Output = 8 (it rounds the number to its nearest integer)
const area02 = 7.2;
console.log("round of 7.2 =",Math.round(area02)); // Output = 7

console.log("floor of 7.2 =", Math.floor(area02)); // Output = 7
console.log("ceil of 7.2 =", Math.ceil(area02)); // Output =  8

console.log("trunc of 7.2 =", Math.trunc(area02)); // Output = 7 --> chops off the decimals and leave the integer only.

// generate ramdom numbers
const randomNumber1 = Math.random(); // random decimal number between 0 and 1
console.log(randomNumber1);
const randomNumber2 = Math.round(randomNumber1 * 100); // random integer between 1 and 100
console.log(randomNumber2);

