console.log('Welcome to the 18 one');

// let btn = document.getElementById('btn');

// btn.addEventListener('click',func1);
// btn.addEventListener('dblclick',func2);
// btn.addEventListener('mousedown',func3);

// function func1(e){
//     // console.log('Thanks',e);
//     e.preventDefault();
// }

// function func2(e){
//     console.log('Thanks for clicing double',e);
//     e.preventDefault();
// }

// function func3(e){
//     console.log('its the turn for mouse',e);
//     e.preventDefault();
// }




// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log('you entered no');
// })
// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log('you exited no');
// })


document.querySelector('.no').addEventListener('mousemove',function(e){
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},154)`;
    console.log('you triggered mouse movement');
})