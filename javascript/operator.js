// Operators are the signs and symbols that are used to make operations out of operands and manipulate the value.
// Something that resolves into a value is called expression.
// Types of Operators in Javascript:
// i. Arithmetic Operator
//  a.Addition Operator(+)
//  b.Subtraction Operator(-) 
//  c.Multiplication Operator(*) 
//  d.Division Operator(/) 
//  e.Modulo Operator(%) 
//  f.Exponential Operator(**)
// let a=5
// let b=10
// console.log(a+b)//addition
// console.log(a-b)
// console.log(a*b)
// console.log(b/a)
// console.log(b%a)
// console.log(a**2)

//  g.concat operator
     // In case of strings in JavaScript, '+' sign acts as concat operator.
     // Eg: 
        //   let x = "Ram"
        //   let y = "Sita"
        //   let z = 10
        //   console.log(x+y+z)
// Type Coercion
   //  It is the default behaviour of javascript that forcefully changes one datatype to another datatype to execute the operation successfully.
// Type Conversion
   //   It is the method of converting one datatype to another datatype according to developer`s will to generate expected outcome. 
// Truthy and falsy values in Javascript
    //  0,0n(Big Int),-0,"",false,undefined,null,NaN are falsy values in JavaScript. Except these values all the values are considered as truthy values during the condition/Boolean Check.

// ii. Assignment Operator
// example: let x = 4
      // a. Assignment operator (=)
       // let x = 4

      // b. Addition assignment(+=)
      // x+=4  //x = x + 4

      // c. Subtraction assignment(-=)
      // x-=4  //x = x - 4

      // d. Multiply assignment(*=)
      // x*=4  //x = x * 4

      // e. Division assignment(/=)
      // x/=4  //x = x / 4

      // f. Modulo assignment(%=)
      // x%=4  //x = x % 4

      // g. Exponential assignment(**=)
      // x**=4  //x = x ** 4

// iii.Comparison(Relational) Operator
       //It always returns boolean value based on the comparison. 
       //a. Greater than(>)
    //    eg: console.log(9>10)
    //        console.log(10>10) 
       //b. less than(<)
    //    eg: console.log(9<10)
    //        console.log(10<9)
       //c. Greater than or equal to(>=)
    //    eg: console.log(9>=10)
    //        console.log(10>=10)
       //d. Less than or equal to(<=)
    //    eg: console.log(9<=10)
    //        console.log(10<=10)
       //e. Equals to(==) //loose
            //-   It checks if the values are equal.
            //    eg: console.log(`10`==10)
            //        console.log(10==9) 

       //f. Equals to(===) //strict
            //-   It checks if both values and the datatypes are equal.
            //    eg: console.log(`10`===10)
            //        console.log(`10`===`10`)

       //g. Not equals to (=!)
// iv. Logical Operator
        // This operator is used to combine boolean values and manipulate them.
       //a. AND operator(&&)
            // It returns true if all of the values are true.
       // eg: WAP to check if you are eligible to enter the club and get a free drink.
              //  conditions:- You must be 18 or older.
                //             You must be a girl to get a free drink.
                        //     let age = 20
                        //     let gender='girl'
                        //     if(age>=18 && gender=='girl')
                        //     {
                        //     console.log(`You are eligible to enter and get a free drink.`)
                        // }
                        // else
                        // {
                        //     console.log(`SORRY`)
                        // }
                            // eg: WAP to check if office is opened or closed.
               //  conditions:- office time 10 to 17.
                //              office closes on weekend.
                 //             office closes on Holiday.
                           //  let time=13,weekend=false,Holiday=false
                           //  if (time>=10 && time<=17 && weekend==false && Holiday==false)
                           //  {
                           //      console.log(`Office is opened.`)
                           //  }
                           //  else
                           //  {
                           //      console.log(`Office is closed.`)
                           //  }
       //b. OR operator(||)
            // It returns true if at least of one of the value is true.
                            //eg:You can enter the club if:
                            // conditions:- You`re 18 or older.
                            //              You own the club.
                            //              Your chacha is vidhayak.
                           //  let age=18,owner=true,vidhayak=true
                           //  if (age>=18 || owner==true || vidhayak==false)
                           //  {
                           //    console.log(`You can enter the club.`)
                     
                           //  }
                           //  else{
                           //    console.log(`You cannot enter the club.`)
                           //  }

                           // //eg:WAP to find greatest number among three numbers.
                           // let a=2,b=4,c=8
                           // if(a>b && a>c)
                           // {
                           //    console.log(`a is greatest.`)
                           // }
                           // else if(b>a && b>c)
                           // {
                           //    console.log(`b is greatest.`)
                           // }
                           // else{
                           //    console.log(`c is greatest.`)
                           // }

                        
// let a=12,b=12,c=20
// if(a>b && a>c){
//     console.log("a is the greatest number")
// }
// else if(b>a && b>c){
//     console.log("b is the greatest number")
// }
// else if(c>a && c>b){
//     console.log("c is the greatest number")
// }
// else if(a==b && a==c){
//     console.log("all number are equal")
// }
// else if(b==c){
//     console.log("b and c are equal")
// }
// else if(a==c){
//     console.log("a and c  are equal")
// }
// else{
//     console.log("a and b are equal")
// }

                       
                     
//        //c. NOT operator(!)
//             // It is a unary operator that inverts the boolean value.




// //Using AND operator
// // let age=18
// // let hasvoterid = true
// // if(age>=18 && hasvoterid)
// // {
// //     console.log("Go to vote")
// // }

// //Using short circuiting
// let age=18
// let hasvoterid = true
// age>=18 && hasvoterid && console.log("Go to vote")

// //Using OR operator
// let firstName="Ram"
// let lastName="Thapa"
// let username=" "
// if(!username)
// {
//     username=firstName+"_"+lastName
// }
// else
// {
//     username=username
// }

// v. Special Operator
    // a.  Ternary(Conditional) Operator
       // - It is the shorthand of If Else statement.
       // - Since,it is an operator it can be stored in a variable.   

  //Syntax:

//   Condition ? code to be executed if the condition is true : code to be executed if the condition is false


// WAP to check if you`re eligible to vote.
    let age=18
    // if (age>=18){
    //     console.log(`You are eligible to vote.`)
    // }
    // else{
    //     console.log(`You're not eligible to vote.`)
    // }
    // console.log(age>=18 ? `You are eligible to vote.` : `You arenot eligible to vote.`)




    // let outputString = age>=18 ? `You're eligible to vote` : `You're not eligible to vote`
    // console.log(outputString)
    
 
// let canVote=age>=18 ? true : false
// console.log(canVote)

let canVote=age>=18
console.log(canVote)
    

   // b. Nullish Coelcing Operator (??)
   //      - If LHS side of operator has null or undefined value then RHS side of operator will be executed.

   // let a;

   // a?? console.log(`This is executed because there is null or undefined value.`)

   
   // let address="KTM";
   // address?? console.log(`Please enter your address.`)

   // Long form
   // if(address===null || address===undefined)
   // {
   //    console.log(`Please enter your address`)
   // }

   //c. Unary Operator
   //       - The operator that operates with only one operand (value) are called unary opeartor.

   // i. NOT Operator(!)
   // ii.   typeof Operator
      // It returns the datatyoe of the operand (value)
      

   // iii.  Negation Operator (-)
      console.log(typeof (5)) //number

      let x = -5
      console.log(-x)


   //iv. Increment Operator(++)
   //       - It increments value by 1.
   let a = 5
   a++
   console.log(a) //6

   //v.  Decrement Operator(--)
   //       - It decrements value by 1.

   let b = 7
   b--
   console.log(b)


   //POSTFIX and PREFIX

   // let c = 5
   // let d = c++
   // console.log(c) //6
   // console.log(d) //5

    let e = 5
    let f = ++e
    console.log(e) //6
    console.log(f) //6
   
    let y =10
    console.log(y--)
    console.log(--y)
    console.log(y)