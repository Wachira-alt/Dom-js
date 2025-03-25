/*How Javascript interacts with the DOM
find elements, Change text, colors or styles, Add or remove things
KEY JS objects for Dom Manipulation
Windows - Represents the whole browser window
Document - Represents the webpage itself
*/

<h1 id="title">Hello, World!</h1>

document.querySelector("h1"); //This finds the first <h1> heading on the page.
//We can change it using JavaScript like this:
document.getElementById("title").innerText = "Hello, Dennis!";



//Selecting Elements in the DOM
//To change things, we first need to select them. JavaScript gives us different ways:





//getElementById() - selects a single element by it's ID
let heading = document.getElementById("title");

//querySelector() - selects the first element that matches
let head = document.querySelector("h1");

//querySelectorAll()- selects all matching elements

let allParagraphs = document.querySelectorAll("p");


//MODIFYING THE DOM
//once we select an element we can change it's content style or attributes

//Change Text:
document.getElementById("title").innerText = "New Title!";

//Change HTML inside an element:
document.getElementById("title").innerHTML = "<span>Styled Text</span>";

//Change CSS Style

document.getElementById("title").style.color = "blue";



//Adding and Removing Elements
//JavaScript lets us create and delete elements in the DOM dynamically.

//Adding a new paragraph
let newPara = document.createElement("p");
newPara.innerText = "This is a new paragraph!";
document.body.appendChild(newPara);

//Removing an element

let title = document.getElementById("title");
title.remove();

// Event Listeners - Making Webpages Interactive
//We can tell the DOM to listen for actions (like clicks or typing) and respond.

document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("message").innerText = "You clicked the button!";
});

//📌 Example: Clicking a button to change the text

document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});

/*
Types of Events
There are many events you can listen for. Here are some of the most common ones:


click	-         When a user clicks an element	Clicking a button
mouseover -     When a user hovers over an element	Hovering over an image
mouseout	-     When the user moves the mouse away	Moving away from a     button
keydown	-       When a key is pressed	Typing in an input field
keyup	-         When a key is released	Letting go of a key
submit	-       When a form is submitted	Clicking "Submit" on a form
change	-       When an input value changes	Selecting from a dropdown
*/


//Example: Hovering over an element

document.getElementById("title").addEventListener("mouseover", function() {
  document.getElementById("title").style.color = "red";
});


//How to Add Event Listeners
//There are two main ways to add event listeners in JavaScript:

//1️⃣ Using onclick in HTML (Not recommended)
/*
<button onclick="changeText()">Click Me</button>
<script>
function changeText() {
    document.getElementById("message").innerText = "You clicked me!";
}
</script>

*/

// Using .addEventListener() (Recommended)
document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("message").innerText = "You clicked me!";
});



// Removing an Event Listener
// Sometimes, you may want to remove an event listener after it runs
// Example: Remove click event after first click
function changeText() {
  document.getElementById("message").innerText = "Clicked!";
  document.getElementById("btn").removeEventListener("click", changeText);
}

document.getElementById("btn").addEventListener("click", changeText);


//Event Delegation (Handling Many Elements Efficiently)



// Event Object (event)
// Sometimes, you need more details about the event (like which key was pressed or where the mouse clicked). JavaScript provides an event object that gives this information.
// Example: Detecting which key was pressed

document.addEventListener("keydown", function(event) {
  console.log("You pressed: " + event.key);
});
