//HANDLING FORMS IN JS

document.getElementById("submitBtn").addEventListener("click", function() {
  let name = document.getElementById("nameInput").value;
  //ensuring that user doesn't submit an empty form
  //trim() method removes extra spaces so that empty spaces don't count as input
  if (name.trim() === ""){
    alert ('please enter your name!');
  }else{
  
  document.getElementById("greeting").innerText = "Hello, " + name + "!";
  }
});

//This makes the box move to the right when the button is clicked.

document.getElementById("moveBtn").addEventListener("click", function() {
  let box = document.getElementById("box");
  let position = 0;

  let interval = setInterval(function() {
      if (position >= 300) {
          clearInterval(interval); // Stop when it reaches 300px
      } else {
          position += 5;
          box.style.left = position + "px";
      }
  }, 50);
});

//Modifying Multiple Elements at Once
//we use document.querySelectorAll
//All list items turn blue when the button is clicked.

document.getElementById("changeColorBtn").addEventListener("click", function() {
  let items = document.querySelectorAll("#myList li");
  
  items.forEach(function(item) {
      item.style.color = "blue";
  });
});


//  Dynamically Creating & Removing Elements

document.getElementById("addTaskBtn").addEventListener("click", function() {
  let taskInput = document.getElementById("taskInput").value;
  
  if (taskInput.trim() !== "") {
      let newItem = document.createElement("li");
      newItem.innerText = taskInput;
      
      document.getElementById("taskList").appendChild(newItem);
      document.getElementById("taskInput").value = ""; // Clear input
  }
});


