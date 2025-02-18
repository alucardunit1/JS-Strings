// script.js

// 1. Alerts, Prompts, and document.write()
// Activity: Create an alert box that welcomes the user
// Activity: Use a prompt to ask for the user's name and display it on the page
// Activity: Use document.write() to display a message on the page
// alert("Potatoes inbound")
// ^popup dialog box that has to click ok
// let username = prompt("Enter Username.");
// console.log("the username is " + username);
// let favHobby = prompt("What is your favorite hobby?");
// document.write("My Favorite Hobby is " + favHobby);
// 2. String Concatenation
// Activity: Concatenate two strings and log the result to the console
// let var1 = " Potatoes";
// // let var2 = prompt("What is your favorite kind of potato?");
// console.log(var2 + var1);
// document.write(var2 + var1 + " are the best!")
// 3. Template Literals
// Activity: Use template literals to create a sentence with variables
// let firstname = "Cody";
// let lastName = "Estes";
// let message = `Good Evening, ${firstname} + ${lastName}. Have a great night!`
// // Line 23 shows how to use a template literal
// console.log(message);

// 4. String Methods
// Activity: Experiment with different string methods like .length, .toUpperCase(), .trim(), etc.

let message = "  Javascript is cool?   ";
console.log(message.length);
document.write(message.toUpperCase());
console.log(message.trim())
console.log(message.includes("Potato"))
console.log(message.slice(0, 6));
// 5. Mini Project: Interactive Story
// Activity: Ask the user for inputs and create a short story using their responses
