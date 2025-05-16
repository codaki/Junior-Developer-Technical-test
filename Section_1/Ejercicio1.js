// 1. FizzBuzz (Basic Logic and Loops)
// Write a function that prints the numbers from 1 to 100. However, for multiples of three print "Fizz"
// instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of
// both three and five print "FizzBuzz".

// Example Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    //se verifica que sea multiplico de 3 y 5 primero
    // para que no se ejecute el  if de 3 o 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
