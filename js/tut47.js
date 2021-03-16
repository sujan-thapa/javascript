console.log('this is fourty seven');

let regex = /vg/;
// let''s drive into metacharacter symbols
regex =/^vgddddd/;  //^ means expression will match if it starts with this expression
regex = /ry$/; //$ at the end of the string means "strings ends with"
regex = /w.th/; //matches any character
regex = /w*th/; //matches 0 or any character
regex = /w?th?/; //optional letter before the ? 
regex = /w\*th/; //to match exact star characters





let string = 'vg is very very phenomenal and vg is wth vg';
// let string = 'vg is very very phenomenal and vg is w*th vg';


let result = regex.exec(string);
console.log(result);


if(regex.test(string)){
    console.log(`the string ${string} matches the expression ${regex.source}`);
}else{
    console.log(`the string ${string} does not matches the expression ${regex.source}`);

}