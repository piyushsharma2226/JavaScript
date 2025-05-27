/* FUNCTIONS :- Block of code that performs specific task, can be invoked(call) whenever needed */

/*

:-FUNCTION DEFINITION

1.   function func_name(){

        // do some work
        
        }

 //-------------------------------------------
2.   function func_name(param1,param2...){
             
       // do some work
       
       }

//--------------------------------------------

:-FUNCTION CALL

func_name();

*/

//--------------------------------------------

/*

// 1.Function created.....
function myfunc(){
    console.log("I want to be a software engineer");
    console.log("I want placement this year");
}

// Function called......
myfunc();
myfunc(); // Called function 2 times

*/

//----------------------------------------------

//2. Function Created
/*

function sum (x,y){      // PARAMETERS
    console.log(x*y);
}
sum(4,6);               // ARGUMENTS

*/

//----------------------------------------------

/*

function sum(x,y){
    s = x+y;
    return s;
}

let val = sum(3,4);
console.log(val);

*/

//------------------------------------------------

/* 

// ARROW FUNCTION

const arrowSum=(a,b)=> {
    console.log(a+b);
    
};
arrowSum(3,4);

*/

//--------------------------------------------------

/*

const printHello=()=>{
    console.log("Hello");
   
}
 printHello();

*/

//---------------------------------------------------

//---------------------------------------------------------------------------------


/* 
(forEach Loop in Arrays)  ------------ It is function of Arrays */

/* 
Syntax :- arr.forEach(callbackFunction)

CallbackFunction : Here, it is a function to execute for each element in the array

:- A callback is a function passed as an argument to another function.
*/

//----------------------------------------------------------------------------------

/*

let arr = [2,3,4,5,6];
arr.forEach(function printVal(val){
    console.log(val);
})
    
*/

//----------------------------------------------------------------------------------

/*

let arr = [2,3,4,5,6,7,8];
arr.forEach((val) =>{
    console.log(val);
})

*/

//----------------------------------------------------------------------------------

/*

let arr = ["mera juta hai japani"];

arr.forEach((val)=>{
    console.log(val.toUpperCase());
})

*/

//----------------------------------------------------------------------------------

/*

let arr = ["Banana","apple","orange","pear","pomegrante","strawberry"];

arr.forEach((val, idx, arr) =>{
    console.log(val.toUpperCase(),idx,arr);
});

*/

//-----------------------------------------------------------------------------------

/* WHAT IS HIGHER ORDER FUNCTION?
   
   :- Higher order function are type of function that take another function as a parameter or retur funtion of another function,
*/

//------------------------------------------------------------------------------------

/*
MAP METHOD

SYNTAX :- arr.map(callbackfunx(val,idx,arr));

*/

//------------------------------------------------------------------------------------

/*

let nums = [23,45,78,46,42];

nums.map((val) =>{
    console.log(val);
})

*/

//--------------------------------------------------------------------------------------

/*

let nums = [23,45,78,46,42];

let newArr = nums.map((val) =>{
 return val;   
})

 console.log(newArr);

*/

//-------------------------------------------------------------------------------------------

/*

FILTER METHOD

Syntax :- arr.filter

// Question :- Create a new array of elements that give true for a condition/filter.
Eg. all even elements

*/

//-------------------------------------------------------------------------------------------

/*

let arr = [1,2,3,4,5,6,7,8,9,10];

let new_Arr = arr.filter((val)=>{
    return val%2===0;
})

console.log(new_Arr);

*/

//--------------------------------------------------------------------------------------------

/*
REDUCE METHOD
  // Performs some operations and reduce the array to a single value. It returns that single value.
  // For example : average, percentage, sum,etc.


let arr = [12,23,34,45,56];

const output = arr.reduce((result,current) =>{
    return restlt+current;
})
console.log(output); // 170

*/
