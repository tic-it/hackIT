//operator are signs and symbols that are used to make operations out of operands and manipulate the value.
// Types of operator in javascript:
// i. Arithmetic operator
// - Addition Operator(+)
// - Subtraction Operator(-)
// - Multiplication Operator(*)
// - Division Operator(/)
// - Modulus Operator(%)
// - Exponential Operator(**)
// let a = 5
// let b = 10
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(b/a)
// console.log(b%a)
// console.log(a**2)


//Concat Operator:
//Incase of strings in javascript "+" acts as concat operator.

//Type consercion:
//It is the default behaviour of javascript that forcefully changes one datatype to another daattype to execute the operations successfully.

//Type Conversion: (IMP)
//It is the method of converting one datatype to anothe datatype according to developers will to generate expected outcome.

//Truthy and falsy values on javascript
//0,0n,-0,"",false,undefined,null,NaN, are falsy values in javascript except these values all the values are considered as truthy values during the condition/Boolean check. 

// ii. Assignment operator
//a. Assignment Operator(=)
//let x = 2

//b.Addition Assignment(+=)
//x = x+2 // x+ = 2

//c.Substraction Assignment(-=)
//x- = 2 //x = x - 2

//d.Multiplication Assignment(*=)
//x* = 2 // x = x * 2

//e.Division Assignment(/=)
//x/ = 2 // x = x / 2

//f.Modulus Assignmental(%=)
//x% = 2 // x = x % 2

//g.Exponential Assigment(**=)
//x** = 2 // x = x ** 2


// iii. Comparison (relational operator)
// It always return boolean value based on the comparison.
// a. Greater than(>)
// console.log(9>10)    //False
// console.log(10>9)    //True
// console.log(10>10)   //False

// b. less than(<)
// console.log(9<10)   //True
// console.log(10<9)   //False
// console.log(9<9)    //False

// c. Greater than or equal to (>=)
// console.log(9>=10)    //False
// console.log(10>=9)    //True
// console.log(10>=10)   //True
// \
// d. Less than or equal to(<=)
// console.log(9<=10)   //True
// console.log(10<=9)   //False
// console.log(9<=9)    //True

// e. Equals to(==) //Loose
// -It checks if the values are equal.
// console.log('10'==10)  //True
// console.log(10==9)     //False


// f. Equals to (===) //Strict
// -It checks if both values and the datatype are equal.
// console.log('10'===10)   //False
// console.log('10'==='10') //True

// iv. Logical operator
//This operator is used to combine boolean values and manipulate them.
//a. AND operator(&&)
//It returns true if all of the values are true.
//WAP to check if you are eligible to enter the club and get a free drink.
//conditions:
//-You must be 18 or older.
//-You must be a girl to get a free drink.
// let age = 20
// let gender = 'girl' 
// if (age>=18 && gender=='girl')
// {
//     console.log(`You're eligible to enter & get a free drink.`)
// }
// else
// {
//     console.log(`SORRY`)
// }

//WAP to check if office is opened or closed.
//Condition:
//-Office time 10 to 17
//-Office closes on weekemd
//-Office closes on holiday

// let time = 13
// let weekend = `no`
// let holiday = `no`

// if (time<=10 && time>=17 && weekend == `no` && holiday ==`no`)
// {
//     console.lo(`office is closed.`)
// }
// else
// {
//     console.log(`office is closed.`)
// }

//b. OR operator(||)
//It returns true if atleast one of the value is true.
//You can enter the cub if:
//Conditions:
//-Ypou're 18 or older.
//-You own the club.
//-Your chacha is vidhayak.
// let age = 18
// let owner = `True`
// let ChachaVidhayak = `True`
// if(age>=18 || owner==`True` || ChachaVidhayak==`True`)
// {
//     console.log(`You can enter the club.`)
// }
// else
// {
//     console.log(`You can enter the club.`)
// }

//Wap to find greatest number among three numbers.
// let a= 20
// let b = 22
// let c = 13
// if(a>b && a>c)
// {
//     console.log(`a is the greatest Number.`)
// }
// else if(b>a && b>c)
// {
//     console.log(`b is the greatest number.`)
// }
// else
// {
//     console.log(`c is the greatest number.`)
// }

//


//c. NOT operator(!)
//It is a unary operator that invests the boolean value.

//Short Circuiting 
//Using AND operator:
// let age = 18
// let hasvoterId = true
// if(age>=18 && hasvoterId)
// {
//     console.log("Go to vote")
// }

//OR

// let age = 18
// let hasvoterId = true
// age>=18 && hasvoterId && console.log("Go to vote")

// v. Special Operator
//a.Ternary (conditional) Operator : I t is the shorthand of If Else statement. Since it is an operator it can be stored in a variable.

//Syntax:d

//Condition ? code to be executed if the condition true : code to be executed if the condition false.

//WAP to check if you're eligible to vote

// let age = 17
// if(age>=18){
//     console.log(`you're aligible to vote.`)
// }
// else{
//     console.log(`you're not eligible to vote.`)
// }


// let age = 17
// {
//     console.log(age >=18 ? `You're eligible to vote` : `You're not eligible to vote.`)
// }


// let age = 17
// let outputstring =( age >= 18 ? `You're eligible to vote` : `You're not eligible to vote`)
// console.log(outputstring)


// let canVote = age >= 18 ? true : false
// console.log(canVote)

//b.Nullish Coelscing Operator (??) : If LHA side of operator has null or undefined value then RHS side of operator will be executed.

// let a;

// a ?? console.log(`This is executed because there is null or undefined value`) 

// let address = "KTM"
// address ?? console.log(`Please enter your address`)

// if(address === null || address === undefined){
//     console.log(`Please enter your address`)
// }

//c.Unary Operator : The operator that operates with only one operand (value) are called unary operator.

//i. NOT Operator
//2.typeof Operator
//It returns the datatype of the operand (value)

// console.log(typeof (5)) Number

//iii. Negation Operator (=)

// let x= -5
// console.log(-x)

//iv. Increment Operator (++) : It increments value by 1.
// let a = 5
// a++
// console.log(a) //6

//v. Decrement Operator (--) : It decremnents the value by 1.

// let b = 7
// b--
// console.log(b)

//POSTFIX and PREFIX

// let a = 5
// let b = a++
// console.log(a)
// console.log(b)

// let a = 5
// let b = ++a
// console.log(a)
// console.log(b)
