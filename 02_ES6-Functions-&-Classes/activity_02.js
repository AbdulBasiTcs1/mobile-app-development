// Create a generic ES6 Function which takes the operation name to perform and the data as arguments 
// for the methods created in above tasks.

floor = (...args) => {
    arr = []
    args.forEach((element, index) => {
        arr[index] = Math.floor(element);
    })

    return arr;
}
round = (...args) => {
    arr = []
    args.forEach((element, index) => {
        arr[index] = Math.round(element);
    })

    return arr;
}
ceil = (...args) => {
    arr = []
    args.forEach((element, index) => {
        arr[index] = Math.ceil(element);
    })

    return arr;
}
abs = (...args) => {
    arr = []
    args.forEach((element, index) => {
        arr[index] = Math.abs(element);
    })

    return arr;
}

genericOpertaions = (operation, ...args) => {
    if (operation === 'round') {
        return round(...args);
    }
    else if (operation === 'abs') {
        return abs(...args)
    }
    else if (operation === 'ceil') {
        return ceil(...args)
    }
    else if (operation === 'floor') {
        return floor(...args);
    }
    else {
        return "Invalid Operation"
    }
}
console.log(genericOpertaions('floor', 1.3, 2.4, 3.6, 4.2, 5.5));
console.log(genericOpertaions('round', 1.3, 2.4, 3.6, 4.2, 5.5));
console.log(genericOpertaions('ceil', 1.3, 2.4, 3.6, 4.2, 5.5));
console.log(genericOpertaions('abs', 1.3, 2.4, 3.6, 4.2, 5.5));