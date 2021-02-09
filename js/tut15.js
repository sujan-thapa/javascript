console.log('Welcome to the fifteen ');

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
// console.log(cont.childNodes);
// console.log(cont.children);
// console.log(cont);
// let nodeName = cont.childNodes[1].nodeName;
// console.log(nodeName);
// let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeType);

/*
Node Types
1.element
2. attribute
3. text node
8. comment
9. document
10. docType 
*/

let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children);
// console.log(container.childNodes);
// console.log(container.firstChild);
// console.log(container.firstElementChild);
// console.log(container.childElementCount);


// console
console.log(container.firstElementChild);
console.log(container.firstElementChild.parentElement);
console.log(container.firstElementChild.nextElementSibling);
