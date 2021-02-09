//Type Converion and Type cohersion
console.log('Welcome to the tutorial five');
let myVar;
myVar = String(34);
// console.log(typeof myVar);

let bolVar = String(true);
// console.log(typeof bolVar);

let date = String(new Date());
// console.log(date,typeof date);

myArray = String([1,2,3,4,5]);
// console.log(myArray.length, typeof(myArray));

let i = 8;
// console.log(i.toString());



let sth = Number('33');
console.log(sth,typeof(sth));

// let numm = parseInt('3.28');
// let numm = parseFloat('3.28');
let numm = parseInt('3.28');
console.log(numm.toFixed(2),typeof numm);


//Type Coercionn
let myNum = 34;
let myStr = '45';
// console.log(myStr + myNum);
console.log(myNum + myStr);

