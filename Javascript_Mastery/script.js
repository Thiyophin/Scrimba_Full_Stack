/* 
Javascript is a single thread synchronous language. Everything in Js happens inside a execution context.
If we think execution stack as a container then inside that we will have two blocks memory and code.
These two phases of execution context, 1, Memory allocation and 2, Code execution by line by line help to Run Js programs.
let's look at a example Js code.
*/
console.log(x);
printData();
var x = 22;

function printData(){
    console.log("Printing Data");
}

/*
Here the code will execute without any error, because of hoisting. Hoisting help to access variables and methods before its initialization.
this all happens in memory block of execution context, where first memory allocation (phase-1) happens, for variables it store
'undefined' and function created like this format :-
function printData(){
    console.log("Printing Data");
}

without variable assigning to a function or using arrow function
var addPrint = () => {
    console.log('Hello')}
the above will work and below functions will not work since memory allocation will consider it as variables.
first memory allocation happens and save variables with undefined and code will execute in execution block line by line,
if a function call comes, the callback stack will insert a function execution stack above global execution stack.
*/
subPrint()

var subPrint = function(){
    console.log('Hello subPrint');
}

addPrint()

var addPrint = () => {
    console.log('Hello addPrint');
}



