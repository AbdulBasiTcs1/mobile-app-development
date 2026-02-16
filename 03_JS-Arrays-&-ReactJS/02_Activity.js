// Define a function called cleanNames that accepts an array of strings containing additional space 
// characters at the beginning and end. The cleanNames() function should use the array map method to 
// return a new array full of trimmed names 

function cleanNames(arr){
    return arr.map(name=>name.trim())
}
console.log(cleanNames([" avengers"," iran  "," Pakistan    ","   India"]));
