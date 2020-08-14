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
// ... the only way to do so:

const myVar = 'Edward';

user['name'] = myVar;
console.log(user.name);

// typeof(): to find out the type of an object.
console.log(typeof user); // Output = object

// Adding METHODS to an OBJECT

// ----------- ITS WORTH REVIEWING PRIOR LESSON "CREATING OBJECT LITERAL"
