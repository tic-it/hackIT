// //variables are very important concept in programmig.it allows us to store and manipulate the various typle/kints of value
// //for examples(string,number,boolean,etc.)we store values
// //In javascripts, there are three wways to declare a variable.they are:-1. varkeyboard(prenes6) 2. let(ES6+) 3. const(ES6+)


// // 1. syntax;
// // variableType varibleName (identifier) = (assignment operator) value
// //  # Rule for identifier
// // i.    it must start with (a-z,A-Z) or $,-
// // ii.   it shouldn't start with specialcharacter(except $ and -) andnumbers.
// // iii.  it is care sensitive.
//                        // for example let x=5 and let X=5
// // iv.   There shouldn't be spaces between
// //  v.   Reserved keyword can't be used as identifies.

// // # standard for indentifier in javascript :-
// // i.   identifier are written in camelcase format.
// // ii.  identifier must be relevant to the value 



// //var-- var is used to declare variables which value can/may change during the runtime.
// // 1. variable declaration is possible in var
//   varx; //variable declarationlet
//  x=10; //variable declarationlet
// // 2. value in the variable can be re-assigned
// //3. variable re-declarartion in var
// var y = "hello"
// var y = "three"
// //4. variables defined with var is function scoped.
// //5. it is hoisted. 




// //let - let is used to declare variable which value may/can change during the runtime.
// // 1. variable declaration is possible in let
// let y; //variable declaration in let 
// y="nine"
// // 2.value in the variable can be e-assigned
// y=4; //re-assigned
// //3. variable redeclaration isn't possible
// //4. variable defined with let is block scoped 
// //5. it isn't hoisted



// //const - const is used to define constant variables, that means values stored using const can't shouldn't be change.
// // 1. variable declararion only is not possible in const
// //const PI; //variable declaration only is nit possible in const
// //2. value can't be re-assiged in variable declared with const
// const PI=3.14
// PI=4;

// //4. variables defined with const is block scoped.
// //5. it isn't hoisted.



// //classification of variables in javascripts.
// // 1. global variables
// //    i. function scoped variables
// //   ii. block scoped variables
//     // Block-> region inside curly braces
//     //function-> if the commands is guiven of the function scoped  ot other command.

// // 2. local variables



// // var function scoped
// // function dummy(){
// //   var x=9
// //   console.log(x) // valid
// // }
// // console.log(x) //  not valid


// // // let and const are block scoped
// // if(true){
// //   let z=56
// //   const y=10
// //   var a=15

// //   console.log(z)
// //   console.log(y)
// //   console.log(a)
// // }
// //   console.log(z)
// //   console.log(y)
// //   console.log(a)


// //   //example:1
// //   let messi=30
// //   let neymar=10
// //   function players(){
// //     var mbeppa=7
// //     let dimaria=11
// //     if (true){
// //       var luisuman=9
// //       let sejib ronas=4
// //       console.log(luisuman)
// //       console.log(sejibronas)
// //       console.log(mbeppe)
// //       console.log(dimariaa)
// //       console.log(messi)
// //     }
// //     console.log(messi)
// //     console.log(neymar)
// //     console.log(mbeppa)
// //     console.log(dimaria)
// //   }



  //hoisting-> it is the default behaviour of javascripts to raise "vaiables declared with the var" 
  //and "function declarations" to the top of the scope.
//  console.log(a)
//  let a=7
//  console.log(a) 
