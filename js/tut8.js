console.log('This is the number eight');

const age = 23;

if (age !== 23){
    console.log('age is not 23');
}else{
    console.log('sujan');
}

// console.log(typeof sujan); //undefined

//Ternary operator
// console.log(age==25? 'Age is 25':'Age is not 25');

//Switch statement
switch (age) {
    case 22:
        console.log('age is 22');        
        break;
    case 23:
        console.log('age is 23');        
        break;
    case 25:
        console.log('age is 25');        
        break;

    default:
        console.log('undefined age');
        break;
}