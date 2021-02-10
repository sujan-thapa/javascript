console.log('Welcome to the twenty');


let impArray = ['aston','martin','raphsody'];


// Add ey value pair inside the local storage
localStorage.setItem('Name','Sujan');
localStorage.setItem('Name2','vg');

// Store in local storage by converting list into string
// localStorage.setItem('Car',impArray);

// after converting it into json it stores as a string which looccs licce arrray
localStorage.setItem('Car', JSON.stringify(impArray));



// clear all the ey value pair from local storage
// localStorage.clear();

// remove single item from localstorage
// localStorage.removeItem('Name2');

//Retrieve an item from localstorage
// let name = localStorage.getItem('Car');
let name = JSON.parse(localStorage.getItem('Car'));
console.log(name);


sessionStorage.setItem('sName','sSujan');
sessionStorage.setItem('sName2','svg');
sessionStorage.setItem('sCar', JSON.stringify(impArray));