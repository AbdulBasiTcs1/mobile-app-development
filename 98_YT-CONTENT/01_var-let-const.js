// var - let - const

// ================================
// var in javascript
// ================================

// var is function-scoped
var a = 10;
var a = 20;        // re-declaration is allowed
a = 30;            // re-assignment is allowed
var a = 15;
var a = 8;


console.log(a);    // output: 8

// var ignores block scope
if (true) {
    var b = 50;
    // console.log(b); 
}
console.log(b);     // output: 50 (accessible outside block)


// ================================
// let in js
// ================================

{
    let g=6;
}
console.log(g);  // outside of block

// let is block-scoped
let x = 10;
// let x = 20;     // ❌ Error: re-declaration not allowed
x = 25; 

x = 15; // re-assignment allowed

console.log(x);    // output: 15




if (true) {
    let y = 40;
    console.log(y); // output: 40 (inside block)
}
// console.log(y);  // ❌ Error: y is not defined outside block









// ================================
// const example
// ================================

// const is block-scoped and cannot be changed
const z = 100;
// z = 200;        // ❌ Error: re-assignment not allowed

console.log(z);    // output: 100

// const with array
const arr = [1, 2, 3];
arr.push(4);       // allowed (modifying array)
console.log(arr);  // output: [1, 2, 3, 4]

// const with object
const student = {
    name: "Ali",
    marks: 90
};

student.marks = 95;    // allowed (modifying object)
console.log(student);


// ================================
// Summary
// ================================

// let   → use when value changes


// const → use by default
