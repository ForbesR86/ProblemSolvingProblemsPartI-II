// Happy Numbers
// https://en.wikipedia.org/wiki/Happy_number
// A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1. An example of a happy number is 19
// Write a method that determines if a number is happy or sad


// Prime Numbers
// A prime number is a number that is only divisible by one and itself.
// Write a method that prints out all prime numbers between 1 and 100 
//Primes 2,3,5,7,11
function amIPrime(){
    let primeNumberArry = new Array(0)
    let compositeNumberArray = new Array(0)
    for (let i = 0; i <=100; i++){
        // check i if it's 0, 1, or itself
        if (i == 0 || i == 1){
            console.log(i + ' is neither prime or composite')
        }
        else{
        //check for prime by modulusss 2-the number
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                compositeNumberArray.push(i)
            }
            else{
                primeNumberArry.push(i)
            }
        }
        }        
    }
    console.log(primeNumberArry)
}
amIPrime()

// Fibonacci
// A series of numbers in which each number (Fibonacci number) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
// Write a method that does the Fibonacci sequence starting at 1
// HARDER VERSION: Write a method that does the Fibonacci sequence starting at a number that a user inputs
function fibonacci(numberF, iterationF){ // first number to start, 2nd number how far down the rabbit hole
    let fibonacciArray = new Array(0)
    fibonacciArray.push(numberF)
    let addThisNumber = 0
    let addThisNumbera = 0
    let addThisNumberb = 0
    for (let i = 0; i <= iterationF; i++){
        
        if(fibonacciArray.length == 1){
            //console.log(fibonacciArray[0])
            addThisNumber = fibonacciArray[0] + 0
            fibonacciArray.push(addThisNumber)             
        }
        else{
            addThisNumbera = fibonacciArray[fibonacciArray.length - 2]
            addThisNumberb = fibonacciArray[fibonacciArray.length - 1]
            addThisNumber = addThisNumbera + addThisNumberb
            fibonacciArray.push(addThisNumber)

        }


    }
    console.log(fibonacciArray)
}
fibonacci(16,12)