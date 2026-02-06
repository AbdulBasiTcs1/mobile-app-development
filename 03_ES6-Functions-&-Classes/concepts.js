// Lab 02 
// JavaScript ES6 Functions & Classes 

// Objective: 

// The objective of this lab will learn the students about the basics of JavaScript ES6 functions and classes 
// with the help of examples and learning tasks. 


// Activity Outcomes: 

// The activities provide hands - on practice with the following topics 
//  Working with built-in functions 
//  Implementation of ES6 arrow functions 
//  Implementation of ES6 classes and OOP concepts 


// Instructor Note: 
// As a pre-lab activity, read Chapter 07 from the text book “JavaScript For Impatient Programmers, Edition 
// 2022”. 

// 1) Useful Concepts: 

// In this lab we will see how we can write functions in different ways introduced in ES6. Similar to 
// previous lab 1, where we have seen the functions calling and its definition, let’s see how we can call and 
// define functions and classes in ES6. 

//  We can write the function as expression with the following syntax 
// const square = function(number) { return number * number }  
// var x = square(4)  

//  We can also write it as arrow functions. Let’s take an example for that. 
// hello = () => { 
// return "Hello World!"; 
// } 
// console.log(hello()) 

//  The arrow function gets much shorter when it has only single statement. 
// hello = () => "Hello World!"; 
// console.log(hello()) 
// 
//  Class syntax has 2 components i.e. class expression and class declaration. To write a class in JS, 
// we will follow this structure. 
// let Rectangle = class Rectangle2 { 
// constructor(prop) { 
// this.prop = prop;  
// }}; 