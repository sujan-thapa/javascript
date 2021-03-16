console.log('this is fourty four');

// pretend this is coming from server
// let a =  "Vg sujan";
let a = undefined;


if (a != undefined) {
    throw new Error('this is not undefined');
}else{
    console.log('this is undefined');
}

try {
    vh
    console.log('we are in try catch');
} catch (error) {
    console.log('Are you ocay??');
    // console.log(error);
    // console.log(error.name);
    console.log(error.message);
}finally{
    console.log('finally we run this');
}