/*************
FUNCTIONS AND METHODS:
A function falls in the bag of data types called Object;
A function is a block of code which you can call and execute whenever you want;
You can pass input values to functions and obtain output values from them.
 ***********/

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

// ARROW FUNCTIONS: cleaner and shorter syntax.
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

const calcAreaSuperClean = radius => 3.14 * radius**2;

const areaSuperClean = calcAreaSuperClean(5);
console.log('One line return code-block => super clean function & same results! ', areaSuperClean); // Output = 78.5

