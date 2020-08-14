/*************
FUNCTIONS AND METHODS:
A function falls in the bag of data types called Object;
A function is a block of code which you can call and execute whenever you want;
You can pass input values to functions and obtain output values from them.
 ************/

// FUNCTION DECLARATION: write out the "function" keyword, the name of the function, parenthesis and...
// curly braces {} for the code block;
// Function declaration does NOT store the function in a variable;
// In function declararion, we do not add a semi-colon  because it is not an expression;

function greet(){
     console.log('Hello there');
 }

 // calling / invoking the function:
 greet();
 greet();
 greet();

 // FUNCTION EXPRESSION: When assigning the result of a function in a variable.
 // Assigning any value (including a function) to a variable is called an expression;
 // We always add a semi-colon (;) at the end of an expression (probably one of the only time when we add a semi-colon at the end of a code-block);

const speak = function(){
    console.log("Good day!");
};
speak();
speak();
speak();

// HOISTING:
// Functions are artificially hoisted to the top of a file before our JavaScript actually runs even though the function is declared at the bottom of the file or below the invocation.
// They are all artificially declared before the rest of our JavaScript even though they are written down below on the file.
// Hoisting happens with Functions declarations but NOT with Functions expressions (because with Function expression the variable has not been declared yet to be able to invoke it as a function).
// Hoisting means we can declare the function at the bottom and invoke it from the top part of the code:


// Invoking the function greet2 BEFORE it is actually written (it's written further down below):
greet2();
// --> Here is the Function declaration, at the bottom of the code:
function greet2(){
    console.log('Greetings2! The function has already been declared; this is HOISTING!');
}

// Which to use?
// To keep a logical order of code flow, Function Declarations are more appropriate as...
// ... they force the developer to FIRST declare the variable and SECOND use it.
// So, avoid hoisting functions

// ARGUMENTS AND PARAMETERS:

const speak2 = function(name2){ // --> nam2 is a PARAMETER of the function;
    console.log(`Good day ${name2}`); // we can print/invoke the variable name2 from inside the scope;
}
speak2('Mario'); // the value 'Mario' is the  ARGUMENT;

// console.log(`Good day ${name2}`); // from outside the scope of the variable, JS throughs an error;

// The above variable 'name' is a local variable with a local scope defined by...
// ... the function´s code-block; this means this variable can only be leveraged from INSIDE...
// ... THAT specific scope (the scope the function);

// ARGUMENT is the value "Mario" that we are passing to the function when invoking it.
// PARAMETER is the value "Mario" that the FUNCTION is RECEIVING.
//The parameter of a function actually declares a local variable that can only be used inside the code block of the function.

// Recieving various PARAMETERS:
// The ORDER of the ARGUMENTS must match the order of the PARAMETERS:

const speak3 = function(name3, time){
    console.log(`Good ${time} ${name3}`);
}

speak3('Mario','morning!');

// To avoid situation where a function is invoked without the necessary ARGUMENTS, we can...
// ... assign default values to the PARAMETERS of the function:

const speak4 = function(name4 = 'luigi', time4 = 'night'){
    console.log(`good ${time4} ${name4}`);
}
speak4(); // the default PARAMETERS are leveraged because no ARGUMENTS are passed.

speak4('Ted', 'afternoon'); // the ARGUMENTS replace the default values assigned to the PARAMETERS;

speak4('shaun'); // This takes the available ARGUMENT and the DEFAULT value assigned to PARAMETER;

// RETURNING VALUES:
// The above function  greet(), speak(), greet2(), speak2(), speak3, speak4 are NOT really storing...
// ... the result of the function but only the function itself!
// To store the result of the function, you need to use the keyword RETURN;
// Be aware that, any calculation performed by your function is made inside the scope of the function,...
// ... so if you need the result of that calculation OUTSIDE the SCOPE of the function, it is ...
// ... not suficient to assign the result to a variable DECLARED inside that scope  {code-bloc}...
// you need to use the RETURN keyword (written just before that result):

const calcArea = function(radius){
    let area = 3.14 * radius**2; // this variable would only be available locally, within the scope of the function;
    return area; // now this variable is available outside the scope of the function;
}

// You could shorten the above 2 lines of code like this: return = 3.14 * radius**2;

// We now declare a new variable area (same name) with global scope and asign to it, the returned result by the function;
let area = calcArea(5); 
console.log('The area calculated by the calcArea function is: ', area); Prints: 78.5

//As the area is now a global function, we can use it to calculate another function
const calcVolCylinder = function (area, height = 10){
    let volume = area * height;
    return volume;
}

let volume = calcVolCylinder(area);
console.log('The volum of the cylinder calculated by function calcVolCylinder is', volume);


/*************
ARROW FUNCTIONS: cleaner and shorter syntax.
*************/
// Example of 'translating" the first version of our calcAre function into an Arrow function:

const calcAreaArrow = (radius) => {
    return 3.14 * radius**2;
};

const arrowArea = calcAreaArrow(5); // calling the above arrow function;
console.log('Same function but with the Arrow format: ', arrowArea);

// if the arrow function has ONLY ONE PARAMETER, we can omit the parentheses around that parameter:
const calcAreaOneParam = radius => {
    return 3.14 * radius**2;
};

const areaOneParam = calcAreaOneParam(5);
console.log('only 1 parameter on arrow fx => you can omit the parenthesis: ', areaOneParam);

// if the arrow function has NO PARAMETERS, you still need the parentheses ();
const myVariable = () => {
    console.log('write whatever here');
}

myVariable();

// if the function's code block can be done with 1 single RETURN line,...
// ... we can omit the RETURN keyword AND the curly braces of the code block, like this:
// Example:

const calcAreaSuperClean = radius => 3.14 * radius**2;

const areaSuperClean = calcAreaSuperClean(5);
console.log('One line return code-block => super clean function & same results! ', areaSuperClean); // Output = 78.5

// Another example:
const myMessage = mssg =>  console.log(mssg);

myMessage('Hi there! this function was super clean!');

// Exercise 1: convert the following function Expression into an arrow function:
const greetFxExpression = function(){
    return 'hello, world!';
};
let gExpressionFx = greetFxExpression();
console.log('From an normal Expression Function',gExpressionFx);

// Solution #1: the "translation" into an ARROW function (I change the name variable):

const greetArrowFx = () => 'hello, world!';
let gArrowFX = greetArrowFx();
console.log('From Arrow Function:', gArrowFX);

// Exercise #2: convert the following function Expression to an ARROW function: 
const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i< products.length; i++){
        total += products[i] + products[i] * tax; // prod. price + (prod. price * tax);
    }
    return total;
}

console.log(bill([10,15,30], 0.2)); // I am directly invoking the function from within console.log();

// Solution #2: the "translation" into an ARROW function (I change the name variable):
const billArrow = (products, tax) => {
    let total = 0;
    for(let i = 0; i< products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log('calculated through the Arrow function:', billArrow([10,15,30], 0.2));

/*************
 * Difference between FUNCTION & METHOD
 * We use METHODS on DATA TYPES or OBJECTS (objects are 1 of the 7 Data types in JS);
 * A method is a function which is invoked by an OBJECT OR a DATA TYPE (like a string).
 * In both, functions and methods, we use parenthesis and can pass an argument;
 * The METHOD is invoked with DOT NOTATION: <value><dot notation><method>;
 * Functions are not invoked by a <value>, instead they are invoked on their own; Ex:
 * Ex: greetFx('hello'); --> this would invoke a function called "greetFx" with an argument "hello";
 * METHODS are declared inside an OBJECT or DATA TYPE whereas a regular function was just defined ...
 * ... on its own by the Developer (NOT on an Object or Data Type), ex. of fx: const greet = () > 'hello';
 **************/

// Here is a simple METHOD called "toUpperCase();" which is invoked by the string variable "name":
const name = 'shaun';
let resultTwo = name.toUpperCase();
console.log("The METHOD .toUpperCase() on the string variable name results in: ", resultTwo);

// in the future we will create our own METHODS on our own OBJECTS and we will also use many...
// ... METHODS already built into the JavaScript language like "toUpperCase()";

/*************
CALL BACK FUNCTIONS: is the FUNCTION we pass to another FUNCTION as an ARGUMENT.
 *************/

// Below, this is a function accepting a parameter "myCallBackFunc";
const myFunc = (myCallBackFunc) => { 
    let value1 = 25;
    let value2 = value1 * 2;
    myCallBackFunc(value2); // invoking the received parameter which happens to be a function;
};

// Below, I am invoking the above function and passing an argument which happens to be a function;
// This ARGUMENT function is the CALLBACK function!
myFunc(value2 => {
        console.log(value2);
    }
);

/********************
The ".foreach" METHOD
 ********************/

 // ".foreach" is a built-in ARRAY method that iterates over an array and expects a CALLBACK function;

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach((myElement, myIndex) => {
    console.log(myIndex, myElement);
});

// Instead of passing the whole transcript of the callback function as an argument of ...
// ... the ".foreach()" method, we could store that callback function in a variable and then ...
// ... pass such variable to the ".foreach()" method:

let people2 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const myCallBackFunc2 = (myElement, myIndex) => {
    console.log(`${myIndex} - Hello ${myElement}`);
};

console.log("************");
people2.forEach(myCallBackFunc2);

// If the CALLBACK function is a bit long, this could be helpful (it modularises/externalises...
// ... the code) but if the CALLBACK function is short, it is probably not worth and can be...
// ... shorter to write it directly into the invoking METHOD "myCallBackFunc2".

// CALLBACK functions in action ([?] difficult to understand at this stage of the course):
// Insert this html code:     <ul class="myElement"></ul>
// get a reference to a'ul' (video time: 39:17 )
const ul = document.querySelector('.myElement'); // First, get a reference to an element on the page:
                                              // we want the <ul>, that is where we are going to
                                              // inject our html; this will be explained later
                                              // (we are not expected to understand this yet).

const people3 = ['mario3', 'luigi3', 'ryu3', 'shaun3', 'chun-li3'];

let myHtml = ``;

people3.forEach(
    person => {
        myHtml += `<li style="color: purple">${person}</li>`;
    }
);

console.log(myHtml);

ul.innerHTML = myHtml;  // we invoke the method .innerHTML on the variable ul (which has grabed ...
                        // ... the html element) and, we assign to it the myHtml value we...
                        // ... have created by iterating the array; this places the value of...
                        // ... myHtml inside the variable ul; that is only one use of the ...
                        // ... method .forEach() and its callback function:
                        // to create some html template for data we want to display on ...
                        // the html page.

