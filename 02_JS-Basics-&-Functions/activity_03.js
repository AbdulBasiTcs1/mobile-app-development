// Implement min and max methods which returns minimum and maximum value of supplied arguments. 
// Implement your own algorithm to find the minimum and maximum value.  - min(4,8,1,3) // returns 1  - max(4,6,5,3,2) // returns 6

function min(...parameters){
    var min = parameters[0];
    for (let index=0; index<parameters.length; index++){
        if (min>parameters[index]){
            min=parameters[index];
        }
    }
    return min;
}
function max(...parameters){
    var max = 0;
    for(let index=0;index<parameters.length;index++){
        if(max<parameters[index]){
            max=parameters[index];
        }
    }
    return max;
}

console.log(min(3,2,5,6,8,1));
console.log(max(3,2,1,4,6,3,7));