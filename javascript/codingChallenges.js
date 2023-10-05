//CodingChallenges #1

let markHeight = 1.69
let markWeight = 78
let johnHeight = 1.95
let johnWeight = 92

let markBMI = markWeight / markHeight** 2
let johnBMI = johnWeight / johnHeight** 2
console.log(markBMI)
console.log(johnBMI)

let markHigherBMI = markBMI > johnBMI

//CodingChallenges #2
if (markHigherBMI) //task1
{
    console.log(`Mark's BMI is higher than John's BMI`)
}
else
{
    console.log(`John's BMI is higher than Mark.`)
}

if (markHigherBMI) //task 2
{
    console.log(`Mark's BMI(${markBMI}) is higher than John's BMI (${johnBMI}.`)
}
else
{
    console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI (${markBMI}.`)
}







// //CodingChallenges #3
// let dolphinScore1 = [97,112,101]
// let koalasScore1 = [109,95,106]
// let dolphinAverage1 = (97+112+101)/3
// let koalasAverage1 = (109+95+123)/3
// console.log(`The average of Dolphins:`,dolphinAverage1)
// console.log(`The average of Koalas:`,koalasAverage1)

// if(dolphinAverage1>=100 && koalasAverage1>=100){
//     if(koalasAverage1>dolphinAverage1){
//         console.log(`koalas win`)
//     }
//     else if(dolphinAverage1>koalasAverage1){
//         console.log(`Dolphins are the winner`)
//     }
//     else{
//         console.log(`Its a draw.`)
//     }
// }
// else {
//     console.log(`Nobody wins.`)
// }


//CodingChallenges #3
//1.
    let avgDolphins = (96 + 108 + 89)/3
    let avgKoalas = (88 + 91 + 110)/3
    console.log(avgDolphins,avgKoalas)

//2.
    if(avgDolphins>avgKoalas)
    {
        console.log(`Dolphins are winner`)
    }
    else if(avgKoalas>avgDolphins)
    {
        console.log(`Koalas are winner`)
    }
    else
    {
        console.log(`both team draws.`)
    }

//3.
if(avgDolphins>avgKoalas && avgDolphins>=100)
{
    console.log(`Dolphins are winner`)
}
else if(avgKoalas>avgDolphins && avgKoalas>=100)
{
    console.log(`Koalas are winner`)
}
else if (avgDolphins === avgKoalas)
{
    console.log(`Both team draws`)
}
else{
    console.log(`No one wins.`)
}