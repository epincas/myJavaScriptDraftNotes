// Adding a new todo item leveraging the form.
// We want: when inserting a new todo item, avoid the page from refreshing and add the item to the list.

// step#1: get a reference to the form.
const addForm = document.querySelector('.add');

// step#2: attach an event listener when submitting, prevent the page from reloading and get whatever the user typedin
addForm.addEventListener(
    'submit',
    e => {
        e.preventDefault(); //preventing the page from reloading
        const todo = addForm.add.value.trim(); // the method .trim() removes spaces accidentally inserted
        console.log(todo); // this is what we nave to add to the DOM
        if(todo.length){ // because we trim the value before, even if entering a space, the task will not be added because the user is not entering a value.
            generateTemplateString(todo); // sending this new todo item the DOM through a function we prepare for that. 
            addForm.reset(); // it cleans all the input field of the form.
        };
        
    }
);

const generateTemplateString = todoParam => {
    const htmlTemp = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todoParam}</span>
          <i class="far fa-trash-alt delete"></i> <!--leveraging fontawsome-->
        </li>
    `;
    list.innerHTML += htmlTemp;
}; // we want to inject this into the <ul> tag in the html code which is where todo tasks are added.
   // so we first need a reference to that <ul>
const list = document.querySelector('.todos'); // we can grab it through the class .todos

// step#3: if user insert empty task, this should not be added as a new TextTrackList.
// check if the .length() of todo (line 14) is true AFTER todo being trimmed (line 12).

// step#4: after adding the task to the list, clean the form.
// leverage the method .reset() on the form, right after sending the templateString to the DOM (line 16)