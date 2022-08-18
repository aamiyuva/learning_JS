// alert("Hare Krishna 🙏")

// Variables
// Data Types
//   - Numbers
//   - Strings
//   - List
// Operators
// Function
// Loops 
//   - While Loop
//   - For Loop
// Object


function name(value1, value2) {
  // this is function body 
  // do this
  // do that
  if (value1>value2) {

  } else {

  }
  // get that
  // calculate that
  // done ?
  // return the result
}

// IDE - Integrated Development Environment


// creating function with variables
function add(a,b) {
  return a+b;
}

// there are many event listeners like select start and copy
document.getElementById("t1").addEventListener('selectstart', () => {
  alert("Hey stop copying 😠");
})

// DIRECTLY CALLING THE FUNCTION
document.getElementById("btn1").addEventListener('click', () => {

  let num1 = document.getElementById("box1").value;
  num1 = parseInt(num1);
  let num2 = document.getElementById("box2").value;
  num2 = parseInt(num2);

  let result = add(num1, num2);
  console.log(result);
}) 


// ES6 style of function
let myFunc = () => {
  let num1 = document.getElementById("box1").value;
  num1 = parseInt(num1);
  let num2 = document.getElementById("box2").value;
  num2 = parseInt(num2);

  let result = add(num1, num2);
  console.log(result);
}

// old style of function
function myFunc () {
  let num1 = document.getElementById("box1").value;
  num1 = parseInt(num1);
  let num2 = document.getElementById("box2").value;
  num2 = parseInt(num2);

  let result = add(num1, num2);
  console.log(result);
}

// adding event listener
document.getElementById("btn1").addEventListener('click', myFunc);


// hard coded function -> not very useful
function add_me() {
  return 5+3 ;
}

console.log(add_me());

