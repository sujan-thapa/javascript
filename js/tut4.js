console.log('dataTypes');
////Data Types

//Primitive DataTypes
let number = 5;
console.log("Data Type is " + (typeof number));

let nullV = null;
console.log("Data type is "+(typeof nullV));

let sth = undefined;
console.log("Data type is "+ (typeof sth));

let isT = true;
console.log(typeof isT);


//Reference Data Types

//Arrays
let myarr = [1,2,3,4, false,"sujan"];
console.log("Data type is "+(typeof myarr));

//Object literals
let gh = {
    sujan: 56,
    thapa: 55
}
console.log(typeof gh);

function myName(){

}
console.log(typeof myName);

let date = new Date();
console.log(typeof date);