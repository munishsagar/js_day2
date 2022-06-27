/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.

*/

/* WRITE YOUR ANSWER HERE */

let firstName = "sagar"; //String data type
let age = 28; //number data type
let adult = true; //Boolean data type
let X = {
  firstName: "joe", // object data type
  lastName: "doe",
};

/* EXERCISE 2
 Try to describe what an object is, in your own words.
*/

/* WRITE YOUR ANSWER HERE */
// objects are containers that contain value clalled properties with key:value pair
/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR ANSWER HERE */

let sum = 12 + 20;
console.log(sum);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE */

let x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it your name as a string.
*/

/* WRITE YOUR ANSWER HERE */
let name = "munish sagar";

/* EXERCISE 6
 Execute a subtraction between the number 4 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE */
let y = 4;

let substraction = x - y;
console.log(substraction);

/* EXERCISE 7
Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
 YOU DON'T NEED AN IF/ELSE BLOCK. It is enough to use console.log()
*/

/* WRITE YOUR ANSWER HERE */

let name1 = "john";
let name2 = "John";

if (name1.toLowerCase() === name1) {
  console.log("letter is lowwer case");
} else {
  console.log("letter is upeer case");
}
if (name2.toUpperCase() === name2) {
  console.log("letter is upper case");
} else {
  console.log("lettes is lower case");
}
/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
