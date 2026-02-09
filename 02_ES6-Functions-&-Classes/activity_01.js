// Implement following methods just like round() method using ES6 Arrow Function. These methods 
// would be wrap around Math JS Functions: 
//  abs 
//  ceil 
//  floor 


// round
round = (...args) => {
    arr=[];
    args.forEach((element,index) => {
        arr[index]=Math.round(element) 
    })
    return arr;
}

// abs
console.log(round(1.2,4.3,7.7));
abs = (...args) => {
    arr=[];
    args.forEach((element,index) => {
        arr[index]=Math.abs(element) 
    })
    return arr;
}

// ceil
console.log(round(1.2,4.3,7.7));
ceil = (...args) => {
    arr=[];
    args.forEach((element,index) => {
        arr[index]=Math.ceil(element) 
    })
    return arr;
}
console.log(round(1.2,4.3,7.7));

// floor
floor = (...args) => {
    arr=[];
    args.forEach((element,index) => {
        arr[index]=Math.floor(element) 
    })
    return arr;
}
console.log(round(1.2,4.3,7.7));