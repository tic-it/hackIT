// In Javascripts, datatyoes refers to what types/kinds of value is hold o stored by a variable.
// Javascripts is dynamically programming lamhuage.(type script- derived from js using for mainly typing(transpile))convert the code in original form.

// In Javascript, There are two major classification of datatypes:
// 1.  primitive datatypes or references
//   a. string 
//       ->  let FirstName="ram"
//       ->  let LastName= "gurung"
//       ->  let Address =`koteshwor`
//         console.log(typeof(FirstNmae))


//   b. number
//       -> let num1=1234567890
//       -> let num2=43.4367


//   c. Boolean
//      2>4=Fale, 
//      7>5=True

//   d. undefined(not defined the value)
//       i. let x;
//       ii. let y=undefined;

//   e. null(empty)
//     i. let income=null

//   f. Symbol( any data that we defined as unique)
    //   i.  let value1=Symbol(10)
    //   ii. let value2=symbol(10)
    //         console.log(value1==vakue2)
//   g. bigInt
//        i.  let num5=10n  

// 2.  Non primitive or reference datatypes
//   a. Array (multiple type data types can be store)
//    i. let friends = ["RAM","Sita","rishi"]
//        let arr1=["hello",90,true,null, undefined, symbol(1),10n,friends,{a:1,B:1}]


//   b. object
//           let detail={firstname="ram",lastname="thapa",age=30,is married=true}
//            friends = ["RAM","Sita","rishi"]
//           address={city="ktm",street="subidhanagar marg"}
//            ward=32    
//   let x=9
//   let y=x
//   x=10
//   console.log(x)
//   console.log(y)

// let a=[1,2,3]
// let b=a
// b.push(4)
// console.log(b)
// console.log(a)
//







// b.  Nullish coelscing operator (??):if LHS side of operator has null or undefinedd value then RHS side of opertaor will be executed.
let a;
a ?? console.log (' this is executed because there is null or undefined value')


// c. unary operator: the operator that operators with only one operand (value) are called unary operators.
//    i.   NOT operator(!)
//   ii.   typeof operator
       console.log(typeof(5))  //numbers

//   iii. negation operatos(-)
        //let x = -5
        //console.log(-x)

//   iv. increment operator(++)
        // let x = 5
        //a++
        //console.log(a) //6

   //  v. decrement operator(--)
    //    let b=6
    //    b--
    //    console.log(b)


//   POSTFIX nad PREFIX

// let y=5
// let z=a++
// console.log(y) //6
// console.log(z)  //5


// let c=5
// let d=++a
// console.log(c)
// console.log(d)


let e=10
console.log(x--)
console.log(--x)
console.log(x)