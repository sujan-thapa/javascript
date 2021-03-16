console.log('this is fourty eight');

// Regular expressions
    // basic functions 
    // metacharacters
// characters sets

// const regex = /^v/;
// const regex = /w[a-z]th/;  //matches any characters from a to z
const regex = /w[mn]th/; //matches only m and n character 



const string = "vg with sujan";


let result = regex.exec(string);
console.log(result);


if (regex.test(string)) {
    console.log(`the string ${string} matches the expression ${regex.source}`);
} else {
    console.log(`the string ${string} does not matches the expression ${regex.source}`);

}