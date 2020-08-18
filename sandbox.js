










// Primitives and Reference types - Basic concepts(video 28:00)
// Primitive Types: numbers, strings, Booleans, null, undefined, symbols
// Reference Types: all types of objects (object literals, arrays, functions, dates, all other objects like for example the Math object)
// when storing a value in a Primitive Type variable, the value is stored in the stack (the values can be accessed pretty quickly but the space inside the stack is quite limited).
// when storing a Reference type variable, that is stored (not in the stack) in a different type of memory called the Heap. The Heap has more space but it is a bit slower too.
// So the Stack and the Heap are 2 different types of memory. Why is this so important? (Video 29:44):
// When storing a primitive value (in the Stack), JavaScript locks the variable name to it's value as an accessor to that value.
// When storing a Reference Type / object value, this object value is stored in the Heap memory and a pointer/reference name locked to that object value is actually stored in the Stack.
// (Video 30:40)
// Imagine we declare a variable scoreOne01 = 50 and we make a copy of this variable into another variable scoreTwo02:
let scoreOne01 = 50; // Primitive type stored in the Stack
let scoreTwo02 = scoreOne01; // copying the value of scoreOne01 into a new variable scoreTwo02, i.e. into a new/different space in the Stack (both variables have different spaces in the Stack memory).
// Eventually, you re-assign a new value to the variable scoreOne01 = 100;
scoreOne01 = 100; // this is only updating the value in variable scoreOne01; it does not afect the value in the other variable scoreTwo02 which continues being 50.
console.log('scoreOne01: '+scoreOne01); // Output = 100;
console.log('scoreOne02: '+scoreTwo02); // Output = 50; this is stored in another piece of Stack memory and has not changed.

// With Reference Type variables, the way values are stored in variables is different:
// Imagine we declare a new Reference / object variable:
const userOne01 = {name: 'shaun', score: 100}; // this object is stored in the Heap memory while its variable name (userThree03) is stored in the Stack memory.
// Now, create a copy of this object with name userTwo02:
const userTwo02 = userOne01; // this creates a new pointer / variable name in the Stack TO the SAME memory space and value in the Heap where userOne001 object is stored
console.log(`userOne01: ${userOne01.name} | ${userOne01.score} - userTwo02: ${userTwo02.name} | ${userTwo02.score}`); // Output = userOne01: shaun | 100 - userTwo02: shaun | 100
// Afterwards, re-assign a new value to a property of the object userOne01 (a new score = 600):
userOne01.score = 600; // reassign a new value to the property score of the reference / object userOne01. 
// This time, the value of this Reference/object variable is changed for BOTH pointers, userOne01 AND userTwo02 because, after all, you have 2 references pointing to one same memory space in the Heap.
console.log(`userOne01: ${userOne01.name} | ${userOne01.score} - userTwo02: ${userTwo02.name} | ${userTwo02.score}`); // Output = userOne01: shaun | 600 - userTwo02: shaun | 600

// Modern JavaScript Tutorial #6 - The Document Object Model
// Interact with the web page:
// - add/change/delete content to the browser
// - change CSS styles
// - react to user events (e.g. clicking)
// - cool effects like popups

// DOM: it is automatically created by the brower when an HTML document loads and it models the html page. the browsers creates an object when an HTML document loads. This document is called the document object.
// The document object contains many diff properties and methods that we can use to interact with the HTML document.
// From the Console, you can key document. (dot) and see all the properties and methods of the object document. Examples:
document.location; // property
document.URL;
document.getElementById; // method
document.getElementsByClassName;
document.getElementsByName;
// etc...

// STEPS to interact with the DOM:
// STEP #1: select an element from the dom to get its reference, i.e. querying the DOM, and store it in a variable:
// const parameterVariable = document.querySelector('CSS-SELECTOR-HERE!!!');
const heading1 = document.querySelector('h1'); // it goes to the html document from top to down and grabs the FIRST <p> and ignores the rest of them.
console.log(heading1); // Output = properties and methods accessible on that node.

// leveraging the class selector (using the dot)
const classVar = document.querySelector('.error'); // it grabs the first error class and ignores other existing class tags with same name.
console.log(classVar);

const classVar2 = document.querySelector('div.error'); // It should grab the first div node with a class name 'error'
console.log(classVar2); // Output: undefined!!!!!! Why is it displaying undefined instead of the second error?

// Leveraging the browser to get any specific node: use the mouse to point the element > write-click > Inspector > select the element > write-click > Copy > CSS Selector
// This gets you the UNIQUE selector for the element:
const mySpecificElement = document.querySelector('.people');
console.log(mySpecificElement);

// grabing multiple elements:
const paraVars = document.querySelectorAll('p');
console.log(paraVars); // Output = collection (nodeList) of paragraphs in my html document. It looks like an array but it is not. You can only use SOME of the array's methods on a NodeList.

// You can use square bracket notation to get a single element of the NodeList:
console.log("The first element of the NodeList is: ", paraVars[1]);

// You can use a .forEach() method to interate on the NodeList:
paraVars.forEach(
    myParagraph => {
        console.log(myParagraph); // Output: displays each paragraph iterated by the for each loop.
    }
);

// You could select anything with the class error:
const myErrorsLst = document.querySelectorAll('.error'); // gets all elements with class named error
console.log(myErrorsLst); // Output = NodeList with all class named error

// get an element by ID
const myTitleId = document.getElementById('page-title'); // the id should be unique
console.log(myTitleId);

// get elements by their class name
const errors = document.getElementsByClassName('error'); // we do not need a dot; it is already implied in the method.
console.log(errors); // Output = HTMLCollection (different to NodeList, ex: we cannot use a .forEach() method)
console.log(errors[0]); // You can use bracket notation 

// get elements by their tag name (ex: grab all the references with <p> tag)
const paragraphsVar = document.getElementsByTagName('p'); // grabs all the <p> tags paragraphs and store them in a collection
console.log(paragraphsVar);
console.log(paragraphsVar[0]); // you can use bracket notation in a Collection


// STEP #2: (video 21:05) do something with that element (change its content etc.)
// once we have queried the DOM, we can do something with the returned references.
const mySpecParagraph = document.querySelector('p');
console.log(mySpecParagraph.innerText); // the property .innerText contains the text of an element. A property does not have parenthesis ().
mySpecParagraph.innerText = 'New paragraph text (after manipulating the DOM). '; // It re-assigns a value to the element (substitutes the text!)
mySpecParagraph.innerText += ' This is absolutely awesome!' // It appends a value to the existing value on the element.

// Changing the text of serveral items at once:
const myParagraphsNodeLst = document.querySelectorAll('p'); // grabing a NodeList of references to paragraphs
console.log(myParagraphsNodeLst);
myParagraphsNodeLst.forEach(
    paragraphParameter => {
        paragraphParameter.innerText += ' - New text in all paragraphs!'
        console.log(paragraphParameter.innerText);
    }
);

// Changing the HTML code in a tag:
// step #1: grab the reference to the content class (in the <div> tag):
const content = document.querySelector('.content'); // grabing the reference of the content class
console.log(content.innerHTML); // ¡¡¡ IT ONLY PRINTS THE TEXT!! ¡I WAS EXPECTING TO SEE THE HTML!!!!!

// step #2: change the HTML inside the content class
content.innerHTML = '<h2>This is a NEW html H2 TAG<h2>'; // this changes the html code and the text (can be seen on the html page, not the Console).

// Changing html on a list of items based on a list of people (stored in an array) we supposedly got from a database:
const people4 = ['mario','luigi','yoshi'];
people4.forEach(
    item => {
        content.innerHTML += `<p>${item}</p>`; // NOT CLEAR WHY WE TRY TO APPEND HERE AND THE EFFECT IN THE HTML PAGE!!!!!
    }
);

// Changing ATTRIBUTES of HTML tags (We can add a get or set in JavaScript) ?????
// Step #1: we need a reference to the element we are going to change:
const link = document.querySelector('a');
console.log(link); // Output = <a href="https://www.google.com">

console.log(link.getAttribute('href')); // Output = https://www.google.com 
link.setAttribute('href','https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

// Another example:
const mssg = document.querySelector('body > p:nth-child(11)');
console.log(mssg.getAttribute('class')); // Output = error (which is the class of the tag <p>, as expected)
mssg.setAttribute('class','success'); // observe with the Inspector of th web page that the <p> tag now has an attribute class="success"
//--> use case: a user populates a form, if there is an error when submitting the form, we could change the colour of the font.

// Setting the attribute of an HTML that does not already have an attribute, i.e. it does attribute does not exist to start with.
mssg.setAttribute('style','color: green;'); // it does not really matter if the attribute did not exist, JS is going to create it.

// Here is one major drawback to adding a get or set 
// Imagine you want to add a new style to this HTML line of code: <h1 id="page-title" style="color:orange;">The DOM</h1>
const myTitleH1 = document.querySelector('h1');
// myTitleH1.setAttribute('style', 'margin:50px;'); // It is overwriting the orange style

// This could be a problem. I would just like to add another style attribute without replacing the existing attribute. We can do that by usine the .style property of JavaScript:
console.log(myTitleH1.style); // Output = it displays all the CSS properties of ????; scroll down to color and observe it is equal to orange.
console.log(myTitleH1.style.color); // Output = orange
myTitleH1.style.margin = '50'; // adding extra styles on the fly (by adding the .style property)
myTitleH1.style.color = 'crimson'; // changing the colour to crimson. This has overwritten the original color but NOT the margin.
myTitleH1.style.fontSize = '60'; // adding an extra style (fontSize) without loosing the existing color and margin.
myTitleH1.style.margin = ''; // resetting the margin property to "no margin".
// most often than not, this approach (instead of using set or get) is more convinient.
// even better, instead of adding inline styles, it can be easier to define a file for all css classes and then use JS to add/remove/change classes on your HTML elements

// (video 42:23) ## Adding or removing classes ## from elements with a CSS File
// I add this line of code in the HTML file (within the <head> tag): <link rel="stylesheet" href="styles.css"> and...
// ... a <p> line of code: <p class="error">Learning to manipulated the html class element</p> and...
// ... a css file called styles.css

const myContent = document.querySelector('p.error:nth-child(12)'); //copying/pasting css selector of the <p> line of code.
console.log(myContent.classList); // Output = DOMTokenList ["error"] // .classList is a property of myContent which provides a list of all the class this element has.
// before saving next line, manually remove the attribute class="error" in he HTML; it automatically will be created by next line of JS code.
// myContent.classList.add('error'); // The class="error" is added by JS
// myContent.classList.remove('error'); // The class="error" is removed by JS and only class="" is left.
// myContent.classList.add('success'); // The class="success" is added by JS.

// (video 45:45) - Little challenge (next file)

    // # CHALLENGES (video 45:45)
    // - Query all the <p> elements;
    // - Iterate through each element and...
    //        - if its tag includes the text error, give the tag <p> the attribute class="error";
    //        - if its tag includes the text success, give the tag <p> the attribute class="success";

// we add the following code on the index.html file:
{/* <h1>Challenge</h1>
    <p>lorem error ipsum</p>
    <p>lorem success ipsum</p>
    <p>lorem ipsum lorem</p>
    <p>lorem ipsum success</p>
    <p>error lorem ipsum</p>
    <p>lorem ipsum lorem</p>
    <p>lorem ipsum error</p>
    <p>success lorem ipsum</p> */}

// Solution to the challenge:
const paragraphs4Challenge = document.querySelectorAll('p');

paragraphs4Challenge.forEach(
    listItem => {
        if(listItem.textContent.includes('error')){ // insead of .textContent, you could use .innerText
            listItem.classList.add('error');

        } else if (listItem.textContent.includes('success')){
            listItem.classList.add('success');
        } else {
            console.log('The strings error or success are NOT included, so do nothing');
        }
    }
);
// because the CSS file knows how the classes error and success have to be treated, the colour of each paragraph changes to...
// crimson or limegreen depending on if the listItem.textContent.includes finds the string error or success respectively.

// Toggle classes: if an element has a class we toggle it of, if an element does not have a class we apply the class to the element.
// for that, we use the .toggle method.
// to demonstrate, we apply a class to the <h1> title create above: <h1 class="title">The Challenge</h1>
const paragraphs4ChallengeTitle = document.querySelector('.title');
paragraphs4ChallengeTitle.classList.toggle('test');
paragraphs4ChallengeTitle.classList.toggle('test');

// Tutorial #7 (Udemy)
// Forms & Events - focus on the Submit event, keyboard events and regular expressions

// Step#1: attach an event listener to the Form HTML line of code so that it can be submitted.
const form = document.querySelector('.signup-form');
const username = document.querySelector('#username'); // we leverage id="username"

// this eventListener is listning for an event of type submit: notice we do not listen to the buton but to the form;
// this is better than listening for an event of type click: because the submit type of event includes, the intro key.
form.addEventListener('submit', e => {  // callback function.
      e.preventDefault(); 
      // The 1st thing happening when clicking the HTML submit button is the refresh of the page. We want to prevent this refresh action because we want to control/handle the submit event in our own way (not letting the default way the browswer does it).
      // To get the data from the form fiel--> get ref to field with the above query based on id="username" (in html code)
          console.log(`The super-user-name entered is ${username.value}!!!`); // gets the value populated by a user in the field.
      }
  );

// Another way to get the value of a field, instead of having to querySelector with its ID:
//console.log(form.username); // username is considered a property of the object form (Pending to verify)

// #### Validation rules with JavaScript and Regular Expressions (RegEx) (Tutorial #7 - item #60)
// Free 16 videos on youtube focused on RegEx: https://youtu.be/r6I-Ahc0HB4 
// RegEx starts and ends with a forward slash; the 2 letters afterwards are called flags (WHAT ARE THESE FOR?).
// To validate a single string (without any characters before or after the string) use a combination of the circumflex accent before the word and the dollar sign at the end: ^ninja$
// Validate (enforece) any letter from a to z (only 1 character): use a character set in square brackets: [a-z], so now you have /^[a-z]$/
// Validate any letter between c and e: /^[c-e]$/
// Validate capital letters: /^[a-zA-Z]$/
// Validate words to have 6 to 10 characters long --> curly brackets /^[a-zA-Z]{6,10}$/
// To include numbers in the validation: add them within the square brackets /^[a-zA-Z0-9]{6,10}$/

// Dot meaning in RegEx: it means any characters, ex: /^.{6-10}$/  this means: any length of between 6 and 10 characters.

// #### Testing RegEx patterns in JS (Tutorial #7 - item #61) - Implementing it in a JavaScript file:
const form1 = document.querySelector('.signup-form');
const username1 = 'shaunp';
const pattern = /^[a-z]{6,}$/; // validation rule: accept any character with minimum length=6, without a maximum length, the characters must be at the begining and end.
let testResult = pattern.test(username1); // nice method on the pattern; we pass it the parameter username.

console.log(`The result of the RegEx validation rule on ${username1} is ${testResult}`);
if(testResult){
    console.log('regex test passed :) ');
} else {
    console.log('regex test fail :( ');
}

// Another method we can use (below) with same username and same pattern:
let testResult2 = username1.search(pattern); // this time, the method is on the string (username1) and, we pass the parameter pattern.
console.log(`Test result with new method: ${testResult2}`); // this outputs an integer: 0 zero which means = match the first position (-1 would mean it does not match?)

const username2 = '34567shaunp3434345'; // different value.
const pattern2 = /[a-z]{6,}/; // same pattern as above
let testResult3 = username2.search(pattern2);
console.log(`Test result with new method and new value: ${testResult3}`); // Output = 5 (the match only begins to happen on the 5th position of the evaluated username2).

// #### Basic form validation (Tutorial #7 - item #62)
const form2 = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback'); // The HTML has a feedback class: <div class="feedback"></div>
const newPattern = /^[a-zA-Z]{6,12}$/; // will enforce characters (lowercases OR uppercases).

form2.addEventListener('submit', e => {
    e.preventDefault();
    console.log(`This is a type of event--> ${e}`);
    // validation of what the user enters in the form:
    const myUserName = form2.username.value;
    
    if(newPattern.test(myUserName)){
        feedback.textContent = 'Well done! This username is valid';
    } else {
        feedback.textContent = 'This username should contain letters only & be between 6 and 12 characters long';
    }
  }
); 
//  #### Keyboard Events (Tutorial #7 - item #63)
// Use case: as you type the keyboard, the form could react with different colours to progressively validate the input
// This works, not when pushing the key down but when lifting the finger up to release the key (based on the keyup type of event).

form.username.addEventListener('keyup',
  e => {
    console.log(e); // Output = [object KeyboardEvent]-> we can see all the properties of this object (such as the populated key by the user).
    // console.log(`This is the target of the event: ${e.target}`); // Output = [object HTMLInputElement]
    // console.log(e.target.value, form.username.value); // just 2 different ways to see the same value.
    if(newPattern.test(e.target.value)){ // verifies if what your are writting matches the RegEx formula.
        console.log('passed');
        form.username.setAttribute('class', 'successRegExValidation');
    } else {
        form.username.setAttribute('class', 'errorRegExValidation');
    }
  }
);

//Project - Interactive Ninja Quiz (Tutorial #8 - item #64)
// Goto folder ninja_quiz


