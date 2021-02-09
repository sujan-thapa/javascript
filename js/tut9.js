console.log('Welcome to the nine');
//For, while and do while loops
let arr = [1,2,3,4,5,6];
arr.forEach(function(element,index,array){
    console.log(element,index,array);
});

let obj = {
    name:'sujan',
    age:23,
    type: 'Beginners',
    os:'windows'
}
for (let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}

console.log('done');