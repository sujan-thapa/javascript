console.log('this is fourty six');

let reg = /vg/;  //this is a regular expression literal in js
// reg = /vg/g; //g means global
// reg = /vg/i; //i means case-sensitivity



console.log(reg);
console.log(reg.source);



let s = "this is great code with sujan vg and also a vg";
// functions to match regular expressions
// exec function - this will return an array for match or null for no match
let result = reg.exec(s);

if(result){
    console.log(result);
    console.log(result.index);
    console.log(result.input);
}else{
    console.log('not matched');
}



// result = reg.exec(s);
// console.log(result);


// result = reg.exec(s);
// console.log(result);


//2 test() - returns true or false
// let result2 = reg.test(s);
// console.log(result2);



// 3. match() -> It will return an array of results or null
// let result3 = reg.match(s) ---> This is a wrong
let result3 = s.match(reg) //-- - > This is a right
console.log(result3);


// 4. search()  --> Returns index of first match else -1
let resutl4 = s.search(reg)
console.log(resutl4);

// 5. replace() --> returns new replaced string with all the replacement (if no flag is given, first match will be replaced)
let resutlt5 = s.replace(reg,'sujanvg');
console.log(resutlt5);