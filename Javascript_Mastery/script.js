/* 
Javascript is a single threaded synchronous language. Everything in Js happens inside a execution context.
If we think execution context as a container then inside that we will have two blocks memory and code.
These two phases of execution context, 1, Memory allocation and 2, Code execution by line by line help to Run Js programs.
let's look at a example Js code.
*/

// console.log(x);
// printData();
// var x = 22;

// function printData(){
//     console.log("Printing Data");
// }

/*
Here the code will execute without any error, because of hoisting. Hoisting help to access variables and methods before its initialization.
this all happens in memory block of execution context, where first memory allocation (phase-1) happens, for variables it store
'undefined' and function created like this format :-
function printData(){
    console.log("Printing Data");
}

the above will work and below functions will not work since memory allocation will consider it as variables.

without variable assigning to a function or using arrow function
var addPrint = () => {
    console.log('Hello')}

first memory allocation happens and save variables with undefined and code will execute in execution block line by line,
if a function call comes, the call stack will insert a function execution context above global execution context.
Other names for call stack - Execution context stack, program stack, control stack, runtime stack, machine stack.
*/


/* the below two functions will not work since its assigned to a variable so in memory allocation, it will get assigned as undefined.
*/

// subPrint()
// var subPrint = function(){
//     console.log('Hello subPrint');
// }

// addPrint()
// var addPrint = () => {
//     console.log('Hello addPrint');
// }

// How function work in Js

// var x = 1;
// a();
// b();
// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x);
// }
// function b(){
//     var x = 100;
//     console.log(x);
// }

// output :-
// 10
// 100
// 1
/* Working of above code, the global execution context first allocate memory for variables undefined and function as it is, 
then in phase-2 the code execution part, the var x = 1, so this x = undefined is changed to 1, then function a is invoked so the function's
execution context is taken into callstack and placed above the global execution context. then it also do the phase-1 memory allocation,
and x = undefined and later in phase-2 the code execution part x = 10, then console.log(x) checks for local memory space and prints x value,
here it is 10. after the whole function is completed running, that execution context and memory is deleted from call stack, like wise it 
work for the function b and prints 100, then delete that execution context from call stack, then it goes to global execution context
and for that console.log(x), it find the value of x from local memory and get as 1, in the end global execution context is also deleted from the call stack.
You can visualize and see these all by putting debugger in source of browser's dev tools section.
*/

/*
The shortest js program is the empty js file, even if the js file is empty the js engine will create global execution context, window object and 'this' object, when 
we type 'this' in console it prints window object. this === windows (true), any variable or function in global space gets attached to window, any variable and function not inside a function is called global space.
The below code a and b will get attached to window object.
*/

// var a = 10;
// function b(){
//     var x = 22;
// }

// console.log(window.a); // 10
// console.log(this.a); // 10
// console.log(window.b);
// console.log(window.x); // undefined


// Difference Between undefined and not defined :-

// console.log(x); // undefined, we have allocated memory for this by initializing.
// var x = 10;
// console.log(q) // not defined, wee didn't initialize this, so no memory is allocated.

// var a;
// if(a === undefined){
//     console.log("a is undefined"); // a is undefined
// }else{
//     console.log("a is not undefined");
// }

/*
Js is  a loosely typed language (some says weakly typed language), if in a variable a we can assign string, later we can assign boolean, but in strongly typed languages this is not possible,
undefined is like a placeholder kept inside variables and it keeps that placeholder until in the code a new value is assigned to that variable.
*/

// Scope Chain and Lexical Environment

// 1
// function a(){
//     console.log(b);
// }
// var b = 22;
// a(); // 22

// 2
function a(){
    c();
    function c(){
        console.log(b)
    }
}

var b = 22;
a(); // 22

/*
Scope means where we can access variable and function in the code. Scope is directly dependent on lexical environment. 
in the above two codes it will print b because of lexical environment, when c function is called (in 2nd code), it will check for b in local memory space, then goes 
its lexical environment, that is function a and looks for b there if its not there then it goes to its global lexical environment and finds b = 22 , so prints that. this way of finding b is called scope chain.
Whenever a global execution context is created it will make a lexical environment, lexical environment have its local memory and reference to lexical environment of its parent.
*/





