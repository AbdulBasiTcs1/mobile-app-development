// Implement following methods just like round() method using ES6 Arrow Function. These methods 
// would be wrap around Math JS Functions: 
//  abs 
//  ceil 
//  floor 

round = (...args) => {
    arr=[];
    args.forEach((element,index) => {
        arr[index]=Math.round(element) 
    })
    return arr;
}
console.log(round(1.2,4.3,7.7));