//There are three major loops in any programming language. They are: 
//i.For Loop :-
//A For Loop is the type of loop in which the number of interactions is known beforehand / in advanced.

//Syntax:
//for(initialization; condition;increment/decrement)
//{
//code to be executed
//}

//write a program to print first 20 odd numbers.
// for(let i=0; i<=19; i++){
//     i=i+1;
//     console.log(i)
// }

//WAP to print Heloo World 10 times.
// for(let i=1; i<=10; i++){
//     console.log('Hello World')
// }

// //WAP to print even number.
// for(let i=1; i<=20; i++){
//     i=i+1;
//     console.log(i)
// }

//WAP to print first 20 numbers.
// for(let i=1; i<=20; i++){
//         console.log(i)
//  }

//ODD
// for (let i = 1; i<=20; i++)
//  if(i%2 === 1)
//  {
//      console.log(i)
//  }

//EVEN
//  for (let i = 1; i<=20; i++)
//  if(i%2 !== 0)
//  {
//      console.log(i)
//  }

//WAP to print
//1 is odd because it is not divisible by 2
//2 is even because it is divisible by 2
//3 is odd because it is not dividible by 2
//4 is even because it is divisible by 2
//upto 20

// for(let i=1; i<=21; i++)
// if(i%2===0)
// {
//     console.log(`${i} is odd because it is not divisible by 2`)
// }
// else{
//     console.log(`${i} is even because it is divisible by 2`)
// }

//using ternary operator
// for(let i=1; i<=20; i++){
//    i%2===0 ? console.log(`${i} is even because it is divisible by 2`): console.log(`${i} is odd because it is not divisible by 2`)
// }

//SHORTER
for(let i=1; i<=20; i++){
    let isEven = i % 2 === 0
    console.log(`${i} is ${isEven ? 'even': 'odd'} because it ${isEven? 'is' : 'is not'} divisible by two`)
}

//ii.While Loop:


//iii.Do while Loop