console.log('Welcome to the seventeen');


document.getElementById('heading').addEventListener('click',function(e){
    let variable;


    console.log('you clicked heading');
    // location.href = '//twitter.com'
    variable = e.target;
    variable = e.target.className;
    variable = Array.from(e.target.classList);
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    // variable = e.clientY;
    console.log(variable);
})
