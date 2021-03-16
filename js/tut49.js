console.log('this is fourty nine');

// Character classes
let regex = /\wth/; //Word character  -> _ or alphabet or number
regex = /\w+d1r/; //\w+ means one or more characters
regex = /\Wbhai/    //Non word character
regex = /\W+bhai/ // One or more than one non-word character
regex = /\d9999/ //One digit and four nines
regex = /number \d+/ //One digit or more than one digit
regex = /\D99/ //Non digit and double nine
regex = /\D+99/ //One or more than one non-digit double nine
regex = /\sca number/ //match white character
regex = /\Sca number/ //match Non white space character
regex = /\S+ca number/ //match one or More than one Non white space character
regex = /vg\b/; //word boundary


// Assertions
regex = /d(?=1)/; //after d, there must be 1
regex = /d(?=2)/; //after d, there must be 2
regex = /d(?!1)/; //after d everything except 1


const string = "vgvwithd1r %%%%%%bhai sujan ca number 8999999vg999977777";

let result = regex.exec(string);
console.log("The result from exec is",result);


if (regex.test(string)) {
    console.log(`the string ${string} matches the expression ${regex.source}`);
} else {
    console.log(`the string ${string} does not matches the expression ${regex.source}`);

}