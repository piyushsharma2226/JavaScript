/* (STRINGS) Properties

:- Create String

let str = "Piyush";

:- String length

str.length

:- String Indices

str[0], str[1], str[2]

*/

//---------------------------------------

/*
let str = "Galgotias University";
console.log(str.length);
console.log(str[0],str[1]);
*/

//----------------------------------------

/* Template Literals 

:- This is a special type of String

*/

//-----------------------------------------

/*

let specialString = 'I am a Computer Science Student';

console.log(specialString);
console.log(typeof specialString);

*/

//---------------------------------------------

/*TEMPLATE LITERALS*/

//---------------------------------------------


/*

let obj = {
    item:"pen",
    price:10,
};

//Normal way to print the value of object

console.log("The cost of", obj.item, "is", obj.price, "rupees");

//Using "Template Literals"

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

*/

//-------------------------------------------------------

/*  (/n) Used to print a string in next line  */

//-------------------------------------------------------

/*
console.log("Galgotias\nUniversity");
*/

//-------------------------------------------------------

/* STRING METHODS

:- str.toUpperCase()
:- str.toLowerCase()
:- str.trim();  // Remove white space
:- str.slice(start,end?)  //return part of string
:- str.1concat(str2)   //joins str2 with str1
:- str.replace(searchVal, newVal)
:- str.charAt(idx)

// They do not change the original value they make a new value

*/

//--------------------------------------------------------

/*

let str = "piyushKumar";
console.log(str.toUpperCase());

let string = "PIYUSHKUMAR";
console.log(string.toLowerCase());

let sTring = "       My name is Piyush    ";
console.log(sTring.trim());

let num = "01234567";
console.log(num.slice(1,5)); // output:- 1234

*/

//---------------------------------------------------------



