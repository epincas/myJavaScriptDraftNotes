//alert('Hello, world');

console.log(1);
console.log(2);

let age = 25;
let year = 2019;
console.log(age, year);

age = 30;
console.log(age);

/* const points = 100;
 points = 50;
console.log(points);
 */

var score = 75; // old way to declare a variable;
console.log(score);

let firstName = 'Brandon';
let lastName = 'Sanderson';

// String concatenation:
let fullName = firstName + ' ' + lastName;

// String: getting a character in a specific position:
console.log(fullName);
console.log(fullName[0]);

// String methods:
console.log('The first name length is: '+firstName.length);
console.log(fullName.toUpperCase());
console.log(fullName); // the original variable remains the same in spite of the prior methods on that variable.

let email = 'mario@thenetninja.co.uk';
console.log(email.indexOf('@')); // Prints 5 (that is the position of the '@')
console.log(email.lastIndexOf('n')); // Prints 14 (that is the position of the last 'n')
console.log(email.slice(0,10)); // Prints mario@then (FROM position 0 TO postion 10)
console.log(email.substr(4,10)); // Prints o@thenetni (FROM position 4th TO the 10th position counting from the 4th position).
console.log(email.replace('n','w')); // Prints mario@thewetninja.co.uk (Replaces the FIRST 'n' and replaces it with 'w').

// Numbers:
let radius = 10;
const pi = 3.14;
console.log(10 / 2); // Prints 5
console.log(radius % 3); // Prints 1 (this devides the radius (10) by the number 3 and returns the remainder of that division (1));
console.log(pi * radius**2); // Prints 314 (the area of the circle) (this multiplies pi by the radius to the power of 2);

// order of operation -  B I D M A S (Brakets, Indices{power}, Division, Multiplication, Addition and finally Substractions )
console.log(5 * (10-3)**2); // Prints 245;

// short-hand to add the number 1:
let likes = 10;
likes++; // instead of likes = likes + 1;
console.log('Number of LIKES after adding 1 = '+likes);

likes--; // instead of likes = likes - 1;
console.log('Number of LIKES after substracting 1 = '+likes);

likes += 10; // instead of  likes = likes + 10;
console.log('Number of LIKES after adding 10 = '+likes);

likes -= 5; // instead of likes = likes - 5;
console.log('Number of LIKES after substracting 5 = '+likes);

likes *= 2; // instead of likes = likes * 2;
console.log('Number of LIKES after multiplying by 2 = '+likes);

likes /= 3; // instead of likes = likes / 3;
console.log('Number of LIKES after dividing by 3 = '+likes);

// NaN - Not a Number: we get this when trying to calculate something that does not result in a number:
console.log(5 / 'hello'); // Prints: NaN

// How to concatenate numbers?
console.log('The Blog has '+ likes + ' Likes!'); // The Blog has 10 Likes!

// Template string: allows to inject variables into a string without having to exit out and without having to use the + symbol de concatenate them:
const title = 'Best reads of 2019';
const author = 'Mario';
const likess = 90;

let result = `The blog called ${title} by ${author} has ${likess} likes`;
console.log(result);

// A good use case for Template strings is to create HTML templates;
// Say you have dynamic content comming from a database and we want to create an HTML template with that content embeded inside it
// ... and then output it to the browser. Example:
const likesss = 101;
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likesss}</span>
`;
console.log(html);

// Arrays (collection of items)
let ninjas = ['shaun', 'ryu','chunli'];
console.log(ninjas);
console.log(ninjas[1]);

// You can override values in an array:
ninjas[1] = 'ken';
console.log(ninjas);

// You can store different data types inside arrays:
let ages= [20,25,30,35];
console.log(ages[2]);

// We can also mix data types in an array (from a functional point of view it may no make sense but, technically it is feasible):
let random = ['shaun','crystal',30,20];
console.log(random);

// Array's properties:
console.log('The length of this array is = '+ninjas.length);

// Array's methods:
console.log(ninjas.join('~')); // Prints: shaun~ken~chunli - This method joins all items of the array separating them by the symbol '~' chosen.
console.log(ninjas.indexOf('chunli')); // Prints: 2;
console.log(ninjas.concat(['ken','crystal'])); // It Concatenates the array ninjas with the array passed as an argument of the method .concat();
console.log(ninjas.push('Theodore')); // Prints: 4; It adds a new value to the array; This method actually alters the variable ninjas (the array), we call it "Destructive method".
console.log('New array--> '+ninjas); // Prints: New array--> shaun,ken,chunli,Ted
console.log('The popped off value is '+ninjas.pop()+'!!!'); // It pops off the end value.
console.log(ninjas); // Prints: ['shaun', 'ryu','chunli']

// Null vs Undefined:
// Null is an intentional lack of value; example:
let myAge1;
console.log(myAge1); // Prints = Undefined;
console.log(myAge1 + 3); // Prints = NaN;
console.log(`the age is ${myAge1}`); // Prints = "the age is undefined"
// Undefined is a lack of value but it is NOT intentional; example:
let myAge2  = null;
console.log(myAge2); // Prints = null;
console.log(myAge2 + 3); // Prints = 3;
console.log(`the age is ${myAge2}`); // Prints = "the age is null"

/// Booleans (true/false) & Comparisons:
console.log('this is a boolean variable type --> '+ true); // Prints true in a different colour
console.log('this is a boolean variable type --> '+ false); // // Prints false in a different colour
console.log("this is a string --> true");
console.log("this is a string --> false");

// methods can return booleans:
let myEmail =  'luigi@thenetninja.co.uk';
let myResult = myEmail.includes('@');
console.log('There is an AT symbole: '+myResult); // Prints: true
myResult = myEmail.includes('!');
console.log('There is an AT symbole: '+myResult); // Prints: false

let myArrayOfNames = ['mario','luigi','toad'];
let myNewResult = myArrayOfNames.includes('luigi');
console.log('My new Result is: ' +myNewResult); // Prints: true

// Comparisons:
let newAge = 25; // here the equal symbol sets a value to a variable;
console.log(newAge == 25); // Prints true because both values, on each side of == are the same;
console.log(newAge == 30); // Prints false;
console.log(newAge != 30); // Prints true because != negates ==;
console.log(newAge > 20); // Prints true;
console.log(newAge < 20); // Prints false;
console.log(newAge <= 25); // Prints true;
console.log(newAge <= 25); // Prints true;

let name = 'shaun';
console.log(name == 'shaun'); // Prints true;
console.log(name == 'Shaun'); // Prints false; (capital "S" is not equal to lower case "s");
console.log(name > 'crystal'); // Prints: true, because in the alphabet, "s" is AFTER than "c";
console.log(name > "Shaun"); // Prints: true, because lower cases are GREATER than capital letters;
console.log(name > 'Crystal'); // Prints: true, because lower cases are ALWAYS GREATER than capital letters;

// Double equal (==) is known as ABSTRACT EQUALITY or LOOSE EQUALITY, i.e. a values type is not considered
// when performing the comparison;

let looseCompAge = 25;

// Loose comparison ==> different types can still be equal:
console.log(looseCompAge == '25'); // Print: true; different types (number and string) can still be equal;
//behind the scene, JavaScript converts the string into an number before it evaluates it.
// Negation of a loose comparison:
console.log('Negation of a loose comparison:');
console.log(looseCompAge != '25'); //Prints: false, because the variable looseCompAge == '25';

// Strict comparison (with 3 equal symbols) means different types can never be equal:
// (Loose comparison is not always the best way to compare,that is why we have the option to perform
//  "strict comparisons" with the 3 equal symbols:
let strictComparAge = 25;
console.log('Underneath {strict comparison} is going to be true:');
console.log(strictComparAge === 25); // Prints true, because BOTH, the variable AND 25 have the same type;

console.log('Underneath is going to be false:');
console.log(strictComparAge === '25'); // Prints false, because even if the value 25 are the same,
// the types are different --> we are comparing a number with a string;

console.log('Negation of a strict comparison:');
console.log(strictComparAge !== 25); //  Prints false;
console.log(strictComparAge !== '25'); //  Prints true;

// ADVICE: Use strict comparison 99% of the time.

// Type conversion (turning a data type into ANOTHER data type):

console.log('When trying to convert something that does not make sense to be a number in to a number, we get NaN: ');
let noSenseResult = Number('hello');
console.log(noSenseResult); // Prints: NaN

console.log('Converting a number 50 into a string:');
let myStringResult = String(50);
console.log(myStringResult, "is a " , typeof myStringResult);


let scoreTypeConvers = '100'; // Notice this is a string;
console.log('Below, lets concatenate a string with a number: ');
console.log (scoreTypeConvers + 1); // Prints: 1001 (it concatenates the string '100' with 1);

console.log('Below, lets convert a string into a number: ');
scoreTypeConvers = Number(scoreTypeConvers);
console.log(scoreTypeConvers + 1); // Prints: 101 (It adds two numbers);

// You can check the type of a variable:
console.log(typeof scoreTypeConvers); // Prints: number;

// Converting something into a boolean, somethings are considered true and others are considered false;
// These can be called "truthy" or "falsy" values;
// In EXPLICIT TYPE CONVERSION positive numbers are considered truthy values, negative values are also considered truthy but...
// but zero is falsy;
// Strings of any length are truethy BUT an EMPTY string is falsy;
let myBooleanResult = Boolean(100); 
console.log(myBooleanResult, typeof myBooleanResult, "This is truthy!"); // Prints true "boolean" "This is truthy!"

myBooleanResult = Boolean(-100); 
console.log(myBooleanResult, typeof myBooleanResult, "This is truthy!"); // Prints true "boolean" "This is truthy!"

myBooleanResult = Boolean(0); 
console.log(myBooleanResult, typeof myBooleanResult, "This is falsy!"); // Prints false "boolean " "This is falsy!"

myBooleanResult = Boolean("0");
console.log(myBooleanResult, typeof myBooleanResult, "This string is truthy!"); 

myBooleanResult = Boolean("");
console.log(myBooleanResult, typeof myBooleanResult, "This EMPTY string is falsy!"); 

// In IMPLICIT TYPE CONVERSION (JS changes the type before comparing them)-








