console.log('this is sixty ');

// Destructuring in JavaScript

let a,b;
[a, b] = [34,56];
// console.log(a,b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// ({
//     a,
//     b,
//     c
// } =  {a:34, b:35, c:36, d: 37, e:38})

// console.log(a,b,c);

// Array destructuring
({
    a,
    b,
    c, ...d
} = {
    a: 34,
    b: 35,
    c: 36,
    d: 37,
    e: 38
})
// console.log(a, b, c,d);



// Object destructuring
laptop = {
    model: 'acer',
    age: '6 yrs',
    gender: 'ff',
    net: '122',
    start: function(){console.log('started')}
}

const {model, age, gender,start} = laptop
console.log(model, age, gender,start );
start()
