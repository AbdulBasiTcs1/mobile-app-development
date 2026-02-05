// Lab Task 1 


// Implement a program with four functions (add, subtract, multiply and divide). Each function should have 
// different number of arguments passed. 

//  First function ‘add’ should check the undefined arguments within the defined function.  
//  Second function ‘subtract’ should use the ES6 default parameter to tackle the same problem.  
//  Third function ‘multiply’ should use the ES6 rest parameters to multiply each argument with one 
// another.  
//  Fourth ‘divide’ should use the ‘Arguments’ object to finish the job. 

function add(a,b,c){
    if(a===undefined || b===undefined || c===undefined){
        return "Error missing arguments";
    }
    return a+b+c ;
}
function subtract(a=0,b=0){
    return a-b;
}
function multiply(...params){
    let result = 1;
    for(let n in params){
        return n*params;
        result=n*result;
    }
    return result;
}
function divide(){
    if(arguments.length<2){
        return "Error: At least two arguments required";
    }
    let result = arguments[0];
    for(let i=1; i<arguments.length; i++){
        result=result/arguments[i];
    }
    return result;
}

console.log(add(2, 3, 4));        // 9
console.log(add(2, 3));           // Error

console.log(subtract(10, 5));     // 5
console.log(subtract(10));        // 10

console.log(multiply(2, 3, 4));   // 24

console.log(divide(100, 2, 5)); //10