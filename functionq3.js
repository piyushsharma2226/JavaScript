/* Question:- We are given array of marks of student. Filter out of the marks of students that scored 90+ */

let marks = [67,45,98,96,93,89,76,84,91,56];

let toppers = marks.filter((val)=>{
    return val>90;

})
console.log(toppers);
