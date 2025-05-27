/* LOOPS :- Loops are used to execute a piece of code again & again
   TYPES :- There are three types of loops
   1. for
   2. while
   3.do while
*/
// (FOR LOOP)
//----------------------------------------------------

/* 
//Question1. Print your name 5 times uisng for loop

 for(let i=1; i<=5; i++){
    console.log("Piyush Kumar Sharma");
}
*/

//------------------------------------------------------

/*
//Question2. Calculate sum of 1 to 5

let sum = 0;
for(let i=1; i<=5; i++){
    sum = sum+i;
}
console.log(sum);
*/

//-------------------------------------------------------

/*
//Question3. Print number from 1 to 10

for(let i=1; i<=10; i++){
    console.log(i);
}
*/

//--------------------------------------------------------

/*

(WHILE LOOP)
Syntax:-

while(condition){
  //do somthing
}

*/

//--------------------------------------------------------

/*
//Question1. Print number from 1 to 10 using while loop

let i = 1;
while(i<=10){
    console.log(i);
    i++;
}
*/

//--------------------------------------------------------

/*
//Question2. Print you name 5 time using while loop

let i = 1;
while(i<=5){
    console.log("Piyush Kumar Sharma")
    i++;
}
*/

//--------------------------------------------------------

/* 

(DO WHILE LOOP)

Syntax:-

do{
  // somwork
}
while(//condition)

*/

//----------------------------------------------------------

/*
//Question1. Print you name 5 times using "do while" loop

let i = 1;
do{
    console.log("Piyush Kumar Sharma");
}
while(i<=5);
*/

//----------------------------------------------------------

/*
//Question2. Print 1 to 10 using "do while" loop

let i = 1;
do{
    console.log(i);
    i++;
}
while(i<=10);
*/

//-----------------------------------------------------------

/*

(FOR OF LOOP):- Used for string iteration

Syntax:-

for(let val of str_Var ){
//do somthing
}

*/

//------------------------------------------------------------

/*

let str = "Galgotias";
for(let val of str){
    console.log(val);
}

*/

//------------------------------------------------------------

/*

(FOR IN LOOP):- Used for iteration in object

Syntax:-

for(let key in obj_Var){
// do something
}

*/

//------------------------------------------------------------

/*

let student={
    name:"Piyush",
    age:21,
    cgpa:8.5,
    isPass:true,
};
for(let key in student){
    console.log(key);
}
for(let key in student){
    console.log("key = ", key, "value = ", student[key]);
}

*/

//------------------------------------------------------------