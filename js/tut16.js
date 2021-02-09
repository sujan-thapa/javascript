console.log('Welcome to the sixteen ');

let element = document.createElement('li');

let text = document.createTextNode('sujanvg');
element.appendChild(text)
//Ad a class name to the li element

element.className = 'childul';
element.id = 'createLi';
element.setAttribute('title','mytitle');
// element.innerText = "This is created by vg";

let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);
console.log(element);

let element2 = document.createElement('h3');
element2.id = 'element2';
element2.className ='element2';
let tnode = document.createTextNode('For element 2');
element.appendChild(tnode);
element.replaceWith(element2);

let myul =  document.getElementById('myul');
myul.replaceChild(element,document.getElementById('lui'));
let pr = element2.hasAttribute('href');
element2.removeAttribute('id');
element2.setAttribute('title', 'myelem2title');
console.log(element2, pr);

// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"