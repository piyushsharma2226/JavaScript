/* ARRAY :- Collention of itmes (linear) */

//-----------------------------------------------------------------------

/*

let marks = [97,56,45,89,98];
console.log(marks);
console.log(marks.length); // property
console.log(marks[0]); //97
console.log(marks[2]);
console.log(marks[5]); //Undefined

// We can change the value of an index in array

marks[1]= 100;
console.log(marks[1]);

// looping over array (FOR OF LOOP)

for(let elements of marks){
    console.log(elements);
}

*/

//---------------------------------------------------------------------

/*

let heroes = ["Ironman","thor","hulk","spiderman","Caiptain America"];
    console.log(heroes);
    console.log(heroes.length);
    console.log(typeof heroes);
    console.log(heroes[0]);
    console.log(heroes[3]);
    
    // We can change the value of an index in array

    heroes[2]= "Doctor Strange";
    console.log(heroes[2]);

    // Looping over array (FOR LOOP)
    
    for(let idx=0; idx<heroes.length; idx++){
        console.log(heroes[idx]);
    }

*/

//----------------------------------------------------------------------

/*

let cities = ["Delhi","Mumbai","Hyderabad"," Gurgaon"]

// looping over array (FOR OF LOOP)

 for(let element of cities){
   
    console.log(element.toUpperCase());

}

*/

//-----------------------------------------------------------------------

/* 

ARRAY METHODS

:- Push(): add to end
:- Pop() : delete from end & return
:- toString(): converts array to string
:- Concat() : Joins multiple arrays & return result
:- unshift() : add to start
:- shift() : delete from start

*/

//----------------------------------------------------------------------

/* 

// PUSH() METHOD

let fooditems = ["Apple","litchi","Potato","Chips","Burger"];

fooditems.push("Guava","Pizza","Butter");

console.log(fooditems);

*/

//-------------------------------------------------------------

/*

// POP() METHOD

let cities = ["Delhi","Pune","Kolkata","Gurgaon","Bengaluru"];
console.log(cities);

cities.pop();
//Benagaluru will delete because of operation(it delete item from last)
console.log(cities)

*/

//----------------------------------------------------------------------

/*

// toString() METHOD

let stu_names = ["Piyush", "Riya", "Annu", "Dheeraj", "Deepak"];

console.log(stu_names);
console.log(stu_names.toString());

*/

//-----------------------------------------------------------------------

/*

CONCAT() METHOD

let marvel_heroes = ["Thor","Spiderman","Ironman"];
let dc_heroes = ["Superhero","Batman"];
let indian_heroes = ["Krish","Shaktiman","Raone"]

let heroes = marvel_heroes.concat(dc_heroes, indian_heroes);

console.log(heroes);

*/

//------------------------------------------------------------------------

/*

UNSHIFT() METHOD

let animal = ["Cow","Elephant","Cat","Horse","Sheep","Deer"];

animal.unshift("Goat","Lion","Tiger","Rhinocerous");

console.log(animal);

*/

//--------------------------------------------------------------------------

/*

SHIFT() METHOD

let university = ["Galgotias","NIU","SHARDA","GL BAJAJ","AMITY","LPU"];

let left_university = university.shift();

console.log(left_university);

*/

//---------------------------------------------------------------------------


/* MAP METHOD
   
    Syntax :- 

    arr.map(callbackfnx(value, index, array))

*/

//---------------------------------------------------------------------------





    

    







