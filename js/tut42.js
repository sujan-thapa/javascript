console.log('this is fourty two ');


let myBtn = document.getElementById('myBtn')
let content = document.getElementById('content')

// function getData(){
//     console.log('start get data');
//     url = "vg.txt";

//     fetch(url).then((response)=>{
//         console.log('inside first then');

//         return response.text();
//     }).then((data) =>{
//         console.log('inside second then');

//         console.log(data);
//     })
// }
// console.log('before get data');
// getData();
// console.log('after get data');


// function getData() {
//     console.log('start get data');
//     url = "https://api.github.com/users";

//     fetch(url).then((response) => {
//         console.log('inside first then');

//         // return response.text();
//         return response.json();

//     }).then((data) => {
//         console.log('inside second then');

//         console.log(data);
//     })
// }

function postData() {
    // console.log('start get data');
    url = "http://dummy.restapiexample.com/create";
    data =  '{"name":"vvvvvv","salary":"123","age":"23"}'

    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },body: data 
    }

    fetch(url).then((response) => {
        console.log('inside first then');

        // return response.text();
        return response.json();

    }).then((data) => {
        console.log('inside second then');

        console.log(data);
    })
}
// console.log('before get data');
// getData();
// console.log('after get data');
postData();
