// Write a JS function which takes an array of numbers and returns following: 
// Sum of all numbers 
// Example: [2, 4, 3] 
// Returns: 9 

const numbers = [10,20,30,40]
add=(a,b)=>a+b
const sum = numbers.reduce(add)
console.log(sum)