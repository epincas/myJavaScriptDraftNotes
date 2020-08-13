// For loops

for(let i = 0; i < 5; i++){
    console.log("Hello! This is the "+i+"th iteration of the code being run with this loop!");
} // Remember: NO semi-colon a the end of the curly braces of the code block of a for loop;
// the let i = 0 initialises the loop and the i < 5 is the condition of the loop 
// (to execute or not the code block);
console.log("The 'for loop' is over!");

const names = ['shaun','mario','luigi'];
for(let j = 0; j < names.length; j++){
    console.log(j, names[j]);
}

// creating a small html template that can be, eventually, rendered in a browser :
const listOfNames = ['shaun','mario','luigi'];
for(let k = 0; k < listOfNames.length; k++){
    let html = `<div>${listOfNames[k]}</div>`; // Template string surounded by backticks
    console.log(html);
}

// Note: each iteration = 1 cycle through the list of items of the array

// While loops
let l = 0; // Declare the counter variable outside AND before the while loop condition;
while (l < 5) {
    console.log('Interation in the While loop ' + l);
    l++; // increment the counter variable outside the while loop condition (in the end of code block);
}

// this was just a different way to write a loop (different to a 'for' loop);

// Iterating a list of items whith a while loop:
let m = 0;
const listOfnamesToBeIterated = ['shaun','mario','luigi'];
while(m < listOfnamesToBeIterated.length){
    console.log('Iterating the list of names with a while loop '+listOfnamesToBeIterated[m]);
    m++;
}

// Do While loops
// Sometimes, you want the code to run at least once, regardless of the condition and then stop when
// not matching the condition:

let n = 1;

do {
    console.log("Executing the 'Do' block of code BEFORE the 'While condition': "+n);
    n++;
} // it will run this block-code AGAIN while the condition below is true; semi-colon is REMOVED cause it's block-code;

while(n < 2); // we ADD the semi-colon at the end of the line because it is NOT a block-code any more;

// REMOVE the semi-colon at the end of a code block;
// ADD the semi-colon at the end of the line when it is NOT a block code;



// IF statements (aka conditional statements)
// It only executes a code-block if a condition is true;
const age = 25;

if (age > 20){
    console.log('You are over 20 years old');
}


const ninjas = ['shaun','ryu','chun-li','yoshi'];

if(ninjas.length > 3){
    console.log("That's a lot of ninjas!"); // Use double quotes to avoid messing arround with the single quote;
}

const password = 'p@ssword';
if(password.length >= 8){
    console.log('That password is sufficiently long!');
}


// ELSE statement
// When the code-block inside a conditional statement does NOT execute (because the IF statement is FALSE),
// you may need to feedback some information; that's when you can use an ELSE statement;
// When the IF statement is TRUE, in that case the ELSE statement would not be executed;
// it is only ever to run either the first code OR the second code but NOT both.


const psswrd = 'p@ss';
if(psswrd.length >= 8){
    console.log('That password is long enough!'); // either this code or the one below is ran...
} else {
console.log("That password is NOT long enough."); // ... but NOT both code blocks are ran, only one;
}

// Checking multiple conditions (ELSE IF)

const contraseña = '123';
if(contraseña.length >= 12){
    console.log('This password is mighty strong!');

} else if (contraseña.length >= 8){
    console.log('This password is long enough.');

} else {
    console.log('This password is NOOOOT long enough');
}

// Logical operators - OR || AND and &&
// These will help you build combinations of different conditions inside the same verification;

const motDePasse = '12@';
if(motDePasse.length >= 12 && motDePasse.includes('@')){ //the 1st code will run if BOTH conditions are true;
    console.log('This password is mighty strong!');

} else if (motDePasse.length >= 8 || motDePasse.includes('@') && motDePasse.length >= 5){
    console.log('This password is strong enough.');

} else {
    console.log('This password is NOOOOT strong enough');
}

// Logical NOT (!): evaluates if a condition is NOT true, i.e. FALSE:

let user = false;

if(!user){
console.log('You must be logged-in to be able to continue.');
}

// break (exits a loop) & Continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i= 0; i < scores.length; i++){
    if(scores[i] === 0){ // what a shame to get a zero, let's not display it on the console log!
        continue; // it ignores/jumps the code right after the continue line BUT it continues the loop (it does not exit the loop);
    }

    console.log('your score is: ', scores[i]);
    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;
    }
}

// switch statements (ideal when having to implement too many conditional statements based on a same single variable;
// be aware that switch uses strict equality when checking each condition;

const grade = 'F';

switch(grade){    // checks the value on the variable grade;
    case 'A':     // in case the value of var grade is 'A', then it will execute the code-block right after the colon (:);
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got an B!');
        break;
    case 'C':
        console.log('you got an C!');
        break;
    case 'D':
        console.log('you got an D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade');
}

// Variables & {Block Scope}: focus on block-level-scope with variables;
// Scope is the area  of code in which a variable value is relevant;

// When declaring a variable using let or const IN THE ROOT of the document (outside block-code-scope)
// then, that variable has GLOBAL SCOPE: it can be accessed from anywhere in the file (from inside or outside a code block);
// BEWARE:
//  A) you cannot RE-DECLARE the same variable within the same scope, but only re-assign a new value to it;
//  B) you can RE-DECLARE (with let or const) a same variable if you do it in a DIFFERENT SCOPE to the scope it was originally declared;
//  C) only when declaring variables with 'let' or with 'const', JavaScript will respect scope's rules (not when declaring variables with 'var');
//  D) variables declared with 'var' cannot be redeclared in a different scope because scope is not respected for such variables.
// It is much better to use let or const instead of var because you can declare your variables within a scope.

let myAge = 30; // this variable has global scope;

if(true){
    console.log('Subject -> Scope:','inside First code block: ', myAge);
}

console.log('Subject -> Scope:', 'root / outside code block: ', myAge);


// We can change/reassign a new value to a variable that has global scope:
let myNewAge = 30; // this variable has global scope;

if(true){
    myNewAge = 40; // this actually reassigns a new value to the global scoped variable myAge;
    console.log('RE-ASSIGNING:','inside First code block: ', myNewAge);
}

console.log('After RE-ASSIGNING:', 'root / outside code block: ', myNewAge);
console.log('Conclusion: you can reassign a diff value to the global variable from within a diff scope and THIS WILL CHANGE the value in the global variable;');


// We can RE-DECLARE a same variable if you do it a in a DIFFERENT SCOPE to the scope it was originally declared:

let myAgeVar = 30; // this variable has global scope;

if(true){
    let myAgeVar = 52; // this actually RE-DECLARE the same named variable inside a different scope;
    let name = 'shaun'; // declaring a local variable
    console.log('RE-DECLARING VARIABLE:','inside First code block: ', myAgeVar, name);
}

console.log('Subject -> Scope:', 'root / outside code block: ', myAgeVar, name);

console.log("Conclusion: you can redeclare a global variable from within a diff scope but THIS WILL ONLY impact the LOCAL variable's value where that variable has been redeclared");
console.log("Observe: the variable 'name' is only visible within the scope where it was declared, that is inside the First code block scope.");
console.log("Conclusion: if you define a variable within a scope, it can only be leveraged from within that scope and/or from a nested scope.");

// Nested scope

let nestedVarAge = 30;

if(true){
    let nestedVarAge = 40;

    if(true){
        console.log('inside Second code block (accessing var declared in First parent scope): ', nestedVarAge);
    }
}
console.log('Conclusion: a nested/child scope will see/access the most recently declared variable, i.e. probably the one declared on an inmediate parent scope;');


// Expample: nested in a second level of scope:
let nestedSecondLevelVarAge = 30;

if(true){
    let nestedSecondLevelVarAge = 40;

    if(true){
        let nestedSecondLevelVarAge = 50;
        console.log('inside Second code block (accessing var declared most recently in same scope): ', nestedSecondLevelVarAge);
    }
}
console.log('Conclusion: a nested/child scope will see/access the most recently declared variable, in this example, the var is declared in the same scope where it is being printed.');

console.log("The same rules apply when declaring a var with 'const' (to declare a constant).");

// When a variable is declared with 'var' it is not given a scope;
// it can be leveraged from anywhere:

if(true){
    if(true){
        var anyAge = 50;
    }
}
console.log("The variable was declared with 'var', therefore, it does not have a scope and it can be leveraged from outside the code block where it was declared", anyAge);
console.log("Variables declared with 'var' cannot be redeclared in a different scope because scope is not respected for such variables.");