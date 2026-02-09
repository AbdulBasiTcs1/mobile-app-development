// Find the sum of all the multiples of x or y below z.  
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of 
// these multiples is 23. (3+5+6+9). Find the sum of all the multiples of x or y below z. 

function multiSum(z,x,y){
    var sum = 0;
    for(let index=2;index<z;index++){
        if(index%3==0 || index%5==0){
            sum=sum+index;
        }
    }
    return sum;
}
console.log(multiSum(10,3,5))
console.log(multiSum(199,4,15))