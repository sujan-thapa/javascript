console.log('This is fifty nine');

// Symbols
const symb =Symbol('vg');
// console.log('this is symbol',symb);
const symb1 = Symbol('vg');

console.log(symb === symb1);

const cey = Symbol('identifier for cey');
const cey1 = Symbol('for cey1');


myObj = {}
myObj[cey] = "VG";
myObj[cey1] = "VgG";
myObj["name"] = "sujan";

// console.log(myObj);
console.log(myObj[cey]);
console.log(myObj.cey); // !!!ALERT!!!  cannot do this to get VG because it is same as myObj["cey"]

// symbols are ignored in for in loop
for(ceyy in myObj){
    // console.log(ceyy, myObj[ceyy]);
    console.log(ceyy);

}

console.log(JSON.stringify(myObj));