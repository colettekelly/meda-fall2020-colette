// Takes the text within the quotes and sends it to the JavaScript Console.

console.log("Hello World!");
console.log("My name is Colette");
console.log(1000);
console.log(true);
console.log("hey there")

// This is a single line comment

/* 

multi-line
comment

*/

// JavaScript DATATYPES
// String
"This is a really long sentence. !@#$%^&*(()_+";
"To use single quotes ' and ' in the string, use double qoutes on the outside.";
'To use double quotes " and " in the string, use single quotes on the outside.';

// 'There's a nice day!' INCORRECT
// "There's a nice day!" CORRECT

// The computer will break on the "second" string.
// " Hello this is a double quote " "its used for text"; INCORRECT
// ' Hello this is a double quote " "its used for text'; CORRECT

"'''''''''''''''''''''''''";

'"""""""""""""""""""""""""';
"100";

console.log(1000);

console.log(true);

console.log("Hey there");

// Number
100;
10.9;
.70009;

// Boolean
true;
false;

//  VARIABLE
var myBox;

// Naming Schemes
// Camel Case: capitalize every word AFTER the first word.
// Example: originalLocation
// Snake Case: every space is replaced by an underscore, no capital letters.
// Example: original_location

myBox = "kitchen utensils";
var secondVariable = "bathroom supplies";


myBox = "books";

console.log(myBox);
// Mathematical Operators
// +, -, /, *, %

var sum = 2 + 4;
var difference = 2 - 4;
var quotient = 2 / 4;
var product = 2 * 4;
var remainder = 2 % 4;

console.log("The Quotient of 2 and 4 is", quotient);
console.log(remainder);

// Logical Operator
// ==, >, <, !=, <=, >=

var someNumber = 100;

someNumber == 50; //false

someNumber >= 50; //true

someNumber < 50; //false

"hello" == "hello"; //true
"goodbye" == "hello"; //false
"Hello" == "hello"; //false
"hello " == "hello"; //false

true == true; //true
true == false; //false
false == false; //true

sum > product; //false

var personAge = 19;


// If Statement, is to run code based on existing data.
//If    this is true      then run this
//if        ()                 {}

if (false) {
    console.log("Nice Day!");
    console.log("Hello there!");
}
//It doesn't run in console

if (personAge >= 21) {
    console.log("Yea, enjoy your drink!");
} else {
    console.log("Sorry, you have to be 21 to legally drink!");
}
console.log("We march on!");
// Function
// keyword       name of function       code block
// function        myFunction()             {}

function myFirstFunction() {
    
    console.log("Have a nice day!");
    console.log("Today will be sunny");
    console.log("Today will be dry");

    if (raining) {
        console.log("Bring an umbrella");
    }
    
    var raining = true;
}

myFirstFunction();
myFirstFunction();
myFirstFunction();
nonExistingVariable;

// Practice creating the following:
/*

Variables
Datatypes
If Statements
Logical Comparison
Functions

*/