console.log('Welcome to the 12 one');
// DOM Document Object Module

let a = document;
a = document.all;
// a = document.body;
// a = document.forms;
Array.from(a).forEach(function(element){
    console.log(element)
});
console.log(a);