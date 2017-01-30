// defining the tree function:

function tree(singleObjectAsArgument) {
  singleObjectAsArgument.character;
  singleObjectAsArgument.height;
  for (var i=0; i < singleObjectAsArgument.height; i++) {
  console.log(" ".repeat(singleObjectAsArgument.height-1-i) + singleObjectAsArgument.character.repeat((2*i) +1))
  }
}

// This runs the function when values are entered and the "Grow your tree" BUTTON IS CLICKED. Displays alert if any values are missing.
var button = document.querySelector("button");
button.addEventListener("click", function() {
    if (document.getElementById("CharacterInput").value != "" && document.getElementById("HeightInput").value != "") {
      var myObject = {
      "character": document.getElementById("CharacterInput").value,
      "height":  document.getElementById("HeightInput").value
      }
      tree(myObject)
    }
    else {
      alert("Oops! Both fields must have a value!")
    }
});
// button in the first line is referring to html tag
// querySelector will work for id, class, or tag
// button needs to grab values of input fields
// has to be done inside a function so it doesn't evaluate it before the JS has a chance to load
// now this will wait until button is clicked to grab values & call the tree function to grow tree

// This adds an event listener for inputField1 and runs the function when both values are entered and the ENTER KEY IS PRESSED. Displays alert if any values are missing.
var inputField1 = document.querySelector('#CharacterInput');
inputField1.addEventListener("keypress", function(kbEvt) {
  if (kbEvt.code === 'Enter') {
    if (document.getElementById("CharacterInput").value != "" && document.getElementById("HeightInput").value != "") {
      var myObject = {
      "character": document.getElementById("CharacterInput").value,
      "height":  document.getElementById("HeightInput").value
      }
      tree(myObject)
    }
    else {
      alert("Oops! Both fields must have a value!")
    }
  }
});

// This adds an event listener for inputField2 and runs the function when both values are entered and the ENTER KEY IS PRESSED. Displays alert if any values are missing.
var inputField2 = document.querySelector('#HeightInput');
inputField2.addEventListener("keypress", function(kbEvt) {
  if (kbEvt.code === 'Enter') {
    if (document.getElementById("CharacterInput").value != "" && document.getElementById("HeightInput").value != "") {
      var myObject = {
      "character": document.getElementById("CharacterInput").value,
      "height":  document.getElementById("HeightInput").value
      }
      tree(myObject)
    }
    else {
      alert("Oops! Both fields must have a value!")
    }
  }
});


// function = tree
// argument = singleObjectAsArgument

// var myObject is an object with key/value pairs.
// keys = character and height
// values = * and 5

// "i < singleObjectAsArgument.height" makes sure the loop stops at the height the user specifies (since we're starting at 0)
// repeat is a function that you can do on all strings & it takes an argument of a number (or equation)

// The math equation goes in the for loop b/c you need to know what i is each time.

// For button - We don't need the first if statement for the button because there's only one button here.
// For Enter - We do need the first if statement for the input fields because we needed to specify that we're talking about the Enter key.
// And that's why we needed to name it kbEvt.

// The whole part before else is saying, "If inputs aren't empty, then run function."
