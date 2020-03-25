// Section 10- Project - Todo List
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

// Deleting Todos (80)
// Best solution design: use "Event Delegation"--> attach Event Listener to the whole <ul> block of code where...
// ... each <li> tag with the trash is writen. That way, when anything is clicked inside that <ul>, the callback function...
// ... will fire. Inside the callback function, we can detect if the tab element was in fact a trash-can, if it was...
// ... the trash-can, we can delete the <li> tag for that Todo item, if it was not the trash-can, then we do not need to...
// ... do anything.
// Advantage of Event Delegation:
//      a) we only need 1 event listener to one container element, the <ul>; (less lines of code, less maintenance, more speed of code execution).
//      b) when adding new Todo items using the form, we don't need to worry about adding new listeners for those Todo items because these Todo items will be inside the <ul> tag which is what the listener will be attached to.

// we can add an event listener to the variable list we already declared as a reference to the class .todos:
list.addEventListener(
    'click',
    e => {
        if(e.target.classList.contains('delete')){
            e.target.parentElement.remove(); // the parent of the trash is the <li> where the trash is. ¿¿HOW DOES IT KNOW WHAT <li> NODE IS THE ONE WE WANT TO DELETE?
        };
    }
);

// Searching & Filtering Todos (81)
// You can leverage the method .filter()
// Step#1: listen to a keyup event on the input field to search because that is where we want to fire some kind of function.
const search = document.querySelector('.search input'); // reference to the search class and then to the input inside it.
const filterTodos = (term) => {
    console.log(term);
    console.log(list.children);
    console.log(Array.from(list.children)); // converting the list variable which is HTMLCollection into an Array so as to be able use Array's methods (.filter() and forEach()).
    Array.from(list.children)
        .filter((todoItem) => !todoItem.textContent.toLowerCase().includes(term))
        .forEach((todoItem) => todoItem.classList.add('filtered')); // it hides the <li> by adding "filtered" when the term does NOT match.(!) (related to CSS code)
    Array.from(list.children)
        .filter((todoItem) => todoItem.textContent.toLowerCase().includes(term)) // getting the matched terms
        .forEach((todoItem) => todoItem.classList.remove('filtered')); // we will display these. (related to CSS code)
    };

search.addEventListener(
    'keyup',
    () => {
        const term = search.value.trim().toLowerCase(); // capture whatever the user writes on the search box (trimmed)
        filterTodos(term);
    }
);
// hide the Todo items from the list that do not match with what the user keys-in
// the <ul> is the parent of each <li>, i.e it is the parent of each Todo item. (each Todo item is related to an <li> tag).
// we want a list of all the <li> tags, we can get the children elements of the .todos class which we already have.
