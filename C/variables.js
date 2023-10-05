// Variables are very important concept in programming. It allows us to store and manipulate the various types/kinds of values. For eg: (string, number, boolean,etc.) We store values and expression in variables. 
// In Javascript, there are three ways to declare a variable. They are: 1. var (pre ES6) 2. let (ES6+) 3. const (ES6+)

// Syntax:
//variableType variableName (identifier) = (assignment operator) value

// Rules for identifiers
// 1. It must start with (a-z, A-Z) or $, _. 2. It should not start with special characters (except $ and _) and numbers. 3. It is case sensitive. 4. There shouln't be spaces in between.  5. Reserved keywords can't be used as identifiers.

// Standards for identifiers in Javascript
// 1. Identifiers are written in camelCase format. 2. Identifiers must be relevant to the value. 


// var - var is used to declare variable which value may/change during the runtime.
// 1. variable declaration is possible in var.
// var x; (variable declaration)
// x=10; (value initilization)
// 2. Value in the variable can be re-assigned.
// x="Hello"; // re-assign
// 3. Variable redeclaration is possible.
// var y = "Hello"
// var y = "There"
// 4. Variable defined with var is function scoped.
// function dummy(){
//     var x=9
//     console.log//valid
// }
// console.log(x)//not valid
// // 5. It is hoisted.
// 6. It is attached to the global window object.




// let - let is used to declare variables which may/can change during the runtime.
// 1. variable declaration is possible in let.
// let y;
// y="Nine"
// 2. Value in the variable can be re-assigned.
// y=4; (re-assign)
// 3. Variable redeclaration isn't possible.
// let x=9
// let x=10
// 4. Variable defined with let is blocked scoped.
// 5. It isn't hoisted.
// 6. It isn't attached to the global window object.




//const - const is used to define constant variables that means values stored using const can't/shouldn't be changed.
// 1. variable declaration only is not possible in const.
//  const PI; this is not valid.
// 2. Value can't be re-assigned in the in variable declared wiht const.
// const PI = 3.14
// PI=4;
// 3. Variable redeclaration isn't possible.
// 4. Variable defined with const is blocked scoped.
// 5. It isn't hoisted.
// 6. It isn't attached to the global window object.



// Classification of variables
// a. Global Variables
// b. Local Variables- 
   // i. Function scoped variables 
   // ii. Block scoped variables
   //Block - region inside curly braces


   
// Hoisting : It is the default behaviour of javascript to raise "variables decalred with var" and "function declarations" to the top of the scope.
console.log(a)
var a = 7
console.log(a)
