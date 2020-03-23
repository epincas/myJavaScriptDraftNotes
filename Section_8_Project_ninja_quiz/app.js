//Project - Interactive Ninja Quiz (Tutorial #8 - item #64)
/*
const correctAnswers = ['B','B','B','B'];

// Associate an event listener to the form to listen when the user has submitted the form:
const form = document.querySelector('.quiz-form'); // this grabs the whole form.
const result = document.querySelector('.result'); // this grabs the object result with all its properties and methods.
form.addEventListener(
    'submit',
    e => {
        e.preventDefault();
        // create a score for the user based on the answers
        let score = 0;
        const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
        // compare usersAnswers with correctAnswers to calculate a score
        userAnswers.forEach(
            (answer, index) => { // callback function
                if(answer === correctAnswers[index]){
                    score+= 25;
                }
            }
        );
        console.log(score);

        // show result on page - (Tutorial #8 - item #68 Showing the Score)

        scrollTo(0,0); // window to scroll up upon clicking the button submit.
        result.querySelector('span').textContent = `${score}%`; // displays the score.
        result.classList.remove('d-none'); // removing the class d-none to display the above score.
    }
);
// declare the variable result (above) and store the reference to the result class
*/

/*
// (Tutorial #8 - item #69 Showing the Score)
// The window object:
// we do not need to type the name of the window object to invoke one of its properties or method because it is automatically infered:
// window.console.log('Hello world, WITH the window object'); // is the exact same thing as console.log('Hello world');
// console.log('Hello world, WITHOUT the window object');
// console.log(`The form element WITH the window object: ${window.document.querySelector('form')}`);
// console.log(`The form element WITHOUT the window object: ${document.querySelector('form')}`);
// window.alert('Hello! with window');
// alert('Hello! without window');
// window.setTimeout(
//     () => {
//         alert('3 seconds later...hello ninja! - WITH window');
//     },
//     3000
// );

// setTimeout(
//     () => {
//   alert("3 seconds later...hello ninja! - WITHOUT window");
// }, 
// 3000);
// window is inferred because it is a global object and document is stored on that.
// so, everytime you see, directly, a property or method, these are ultimately stored on the window object (but we do not need to write it explicitely).

// The method we need to scroll up the user to the top of the html index page, upon submitting the form is called: scroll to.
*/

// How to animate the score (from 0 to the xx%).
// The method setInterval() repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
// Example of setInterval() method below:
/*
let i = 0;
const timer = setInterval( // assigned to a variable so as to leverage that variable to invoke .clearInterval() below
  () => {
    console.log("Hello!");
    i++;
    if (i === 5) {
      clearInterval(timer); //stop the interval
    }
  },
  1000 // the function is going to fire every 1 second.
);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////
// (Udemy video 03:20) INTERVALS & ANIMATING OUR SCORE (applying the above technique with .setInterval(): 
// I copying & pasting code underneath, from above:
const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener(
    'submit',
    e => {
        e.preventDefault();
        let score = 0;
        const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
        userAnswers.forEach(
            (answer, index) => {
                if(answer === correctAnswers[index]){
                    score+= 25;
                }
            }
        );
        //show results:
        scrollTo(0, 0);
        result.querySelector('span').textContent = `${score}%`; // chaining on another querySelector
        result.classList.remove('d-none');

        let output = 0; // to keep track of how many times the .setInterval() interates and fires the callback function;
        //it is going to be the score increasing.
        const timer1 = setInterval(
            () => {
                result.querySelector('span').textContent = `${output}%`; // this will update everytime the function is ran
                if (output === score) {
                    clearInterval(timer1);
                } else {
                    output++;
                }
            }, 10
        ); // end of setInterval()
    } // end of callbackfunction
);// end of listener
