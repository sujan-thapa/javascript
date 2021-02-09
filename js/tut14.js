console.log('Welcome to the fourteen');

/*
element selectors
1. Single element selector
2. Multi Element selector 
*/

//Single Element selector
let element = document.getElementById('myFirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.style.color = 'red';
// element.innerText = 'sujan fff';
// element.innerHTML = '<b>sujanghghgh</b>';
// console.log(element);

let sel = document.querySelector('#myFirst');
// sel = document.querySelector('.child');
// sel = document.querySelector('div');
// sel.style.color = 'green';

// console.log(sel);


//Multi Element Selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByClassName('div');
console.log(elems);

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = 'blue';
    
}

// Array.from(elems).forEach(element =>{
//     console.log(element);
//     element.style.color = 'blue';
// });

// console.log(elems[0].getElementsByClassName('child'))
