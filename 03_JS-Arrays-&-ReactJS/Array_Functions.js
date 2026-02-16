//task1
let n = [22, 33, 44];
for (const el of n) {
    console.log("value is", el);
}
//task2
let name = ["ali", "kamran"];
for (const index in name) {
    console.log("name are ", name[index]);
}
//task3 concate
let names = ["waqas", "junaid", "waqar"];
let names2 = ["ali", "asif"];

const all = names.concat(names2);

for (const index in all) {
    console.log("name are ", all[index]);
}
// task 4 copy within

const arr = [1, 2, 3, 4, 5, 6];
arr.copyWithin(0, 2);
console.log(arr); //[ 3, 4, 5, 6, 5, 6 ]
const arr2 = [1, 2, 3, 4, 5, 6];
arr2.copyWithin(0, 2, 4);
console.log(arr2);  // [ 3, 4, 3, 4, 5, 6 ]

// task 5 array fill 
const arr3 = [1, 2, 3, 4, 5, 6];
arr3.fill(0, 4, 6);
console.log(arr3); // [ 1, 2, 3, 4, 0, 0 ]
// task 6 slice
const arr4 = [10, 20, 30, 40, 50];
const part = arr4.slice(1, 6);
console.log(part); // [ 20, 30, 40, 50 ]

// task 7 array enteries ftn
let arr5 = [21, 22, 23, 24, 25];
const it = arr5.entries();
for (const e of it) {
    console.log(e);
}
/*
[ 0, 21 ]
[ 1, 22 ]
[ 2, 23 ]
[ 3, 24 ]
[ 4, 25 ]
*/

// task 8 array map
let arr6 = [3, 4, 5, 8];
let square = arr6.map(n => n * n);
console.log(square);

// task 9 array reducer ftn
let arra7 = [1, 2, 3, 4, 5];
const sum = arra7.reduce((sum, cur) => sum + cur, 0);
console.log(sum);
// task 10 foreach
let arra8 = [11, 22, 23, 24];
arra8.forEach((n) => console.log(n));
console.log("task 11 find")
//task 11 find array ftn
let array9 = [44, 55, 22, 38, 88];
const result = array9.find((n) => n > 44);
console.log(result);
console.log("task 12 filter")
//task 12 filter array ftn
let array10 = [44, 55, 22, 38, 88];
const g = array10.filter((n) => n > 44);
console.log(g);

// activity1 reducer
const numbers = [10, 20, 30, 40];
let add = (a, b) => a + b;
let r = numbers.reduce(add);
console.log(r);

// activity 2  arraymap
let countries = ["  Pakistan", " Iran "];
function cleanNames(countries) {
    const c = countries.map((n) => n.trim());
    return c;
}
console.log(cleanNames(countries));

// array.splice(start, deleteCount, item1, item2, ...)
//remov el
let arr11 = [10, 20, 30, 40];
arr11.splice(1, 2);
console.log(arr11); //[10,40]

//add el
let arr12 = [10, 40];

arr12.splice(1, 0, 20, 30); //0 menas delete nothing
console.log(arr12);   // [10,20,30,40];

// activity 3
function toCamelCase(str) {
    return str
        .split('')
        .map((ch, i, arr) => {
            if (arr[i - 1] === '-' || arr[i - 1] === '_') {
                return ch.toUpperCase();
            }
            if (ch === '-' || ch === '_') {
                return '';
            }
            return ch;
        })
        .join('');
}
console.log(toCamelCase("the_stealth_warrior"));