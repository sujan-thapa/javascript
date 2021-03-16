console.log('This is fourty one');

// Normal function 
// const vg = function(){
//     console.log('this is normal one');
// }
// vg();

// arrow function
// const vg = () =>{
//     console.log('this is it');

// }
// vg();

// function returning sth
// const greet = function(){
//     return "Good morning";
// }
// // greet();
// console.log(greet());


// one liners do not requires braces, it automatically returns the value 
// const greet = () => "good morning";
// console.log(greet());


// for one line function to return object parenthis required
// const greet = () => ({name: 'vg'});
// console.log(greet());


// for single parameter, paranthesis doesn;t required
// const greet = vg => "good night" + vg;
// console.log(greet('vg'));

// But for more parameters, paranthesis requires
const greet = (name,age) => "good night" + name + age;
console.log(greet('vg',23));



