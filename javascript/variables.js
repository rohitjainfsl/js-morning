//variables are containers for storing information / data

// vary + able

// var x = 1;

let x = 1;

// int a = 1;
// float b=  1.5;
// char c=  ["a", "b", "c"]
// int a = "Rohit";

// DIFFERENCE BETWEEN variable IN C & variable IN JS??
// In C, we write data type before the variable name. In JS, we write a keyword before the variable name.
// For example, in C, if we write "int a", then a can only have integer values. It cannot have values of any other data type.
// In JS, since we do not write data type before variable name, we can put any value in the variable.

// var a = "Swati";
// var b = "Javascript";

// document.writeln(b);

// Swati is studying Javascript

// CONCATENATION: combining variables & strings together using "+" sign
// document.writeln(a + " is studying " + b);

// var a = "Swati";
// var b = "Kulsheshtra";
//Hello, My name is Swati Kuls heshtra

// document.writeln("hello, my name " + a + " " + b);

// var n1 = 10;
// var n2 = 20;
// var n3 = 30;

// //The Sum is 60

// document.writeln("The sum is " + (n1 + n2 + n3));

// var x = "Harendra";
// var y = "Ketan";

//Harendra and Ketan are friends

// document.writeln(x + " and " + y + " " + "are friends");

// var a = "Sachin";
// var b = "Rahul";
// var c = "Sourav";

// // Sachin, Rahul and Sourav are friends

// document.writeln(a + ", " + b + " and " + c + " are friend ");

//TEMPLATE LITERAL

// var a = "Sachin";
// var b = "Rahul";

// Sachin and Rahul

// document.writeln(a + " and " + b);

// document.writeln(`${a} and ${b}`);

// document.writeln(a + ", " + b + " and " + c + " are friend ");
// document.writeln(`${a}, ${b} and ${c} are friends`);

// var a = "Ram";
// var b = "Sharma";
// var c = 25;

// // My name is Ram Sharma. I am 25 years old.

// document.writeln(`My name is ${a} ${b} . I am ${c} years old.`);

// DIFFERENCE BETWEEN VAR & LET????

// 1. var creates a variable in global scope, let creates variable in local(function/block) scope.
// 2. variables with var can be reinitialised, causing memory leak, variables with let cannot.
// 3. variables with var can be HOISTED, variables with let cannot be HOISTED.

// {
//   let a = 1;
// }

// console.log(a);
// document.writeln(a);

// var x = 2;

// let x = 2;




// let a = 1;
// let a = 2;

// let a = 1;
// console.log(a); //1
// a = 2;
// console.log(a); //2



// const a = 1;
// a = 2;