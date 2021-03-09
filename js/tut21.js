console.log("Welcome to the twenty one");


document.getElementById('twenty1').addEventListener('click',editable);
function editable(){
    document.getElementById("twenty1").contentEditable=true;
    document.getElementById('twenty11').contentEditable=true;
}
function store(){
    let vv = document.getElementById('twenty1').textContent;
    let vvv = document.getElementById('twenty11').textContent;
    localStorage.setItem('userEdits',vv);
    localStorage.setItem('usrEdits',vvv)
}
function lclStorage(){
    if(localStorage.userEdits!=null){
        document.getElementById("twenty1").innerHTML=localStorage.userEdits;
    }else if (localStorage.usrEdits!=null){
        document.getElementById("twenty11").innerHTML=localStorage.usrEdits;
    }

}