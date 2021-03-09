function saveEdits() {

    //get the editable element
    let editElem = document.getElementById("edit");
    let editElem2 = document.getElementById("edit2");

    //get the edited element content
    let userVersion = editElem.innerHTML;
    let userVersion2 = editElem2.innerHTML;

    //save the content to local storage
    // localStorage.userEdits = userVersion;
    // localStorage.userEdits = userVersion2;
    localStorage.setItem('userEdits', userVersion)
    localStorage.setItem("usrEdits", userVersion2)

    //write a confirmation to the user
    document.getElementById("update").innerHTML = "Edits saved!";
}

//     write a confirmation to the user
//     document.getElementById("update").innerHTML="Edits saved!";
// }
// function saveEdits() {
//     //get the editable elements.
//     var editElems = {
//         'edit1': document.getElementById('edit1').innerHTML,
//         'edit2': document.getElementById('edit2').innerHTML
//     };

//     //save the content to local storage. Stringify object as localstorage can only support string values
//     localStorage.setItem('userEdits', JSON.stringify(editElems));

//     //write a confirmation to the user
//     document.getElementById("update").innerHTML="Edits saved!";
// }

function checkEdits() {

    //find out if the user has previously saved edits
    if (localStorage.userEdits != null){
        document.getElementById("edit").innerHTML = localStorage.userEdits;
    }else if(localStorage.usrEdits !=null){
        document.getElementById("edit2").innerHTML = localStorage.usrEdits;
    }
}



    // function checkEdits(){
    //     //find out if the user has previously saved edits
    //     var userEdits = localStorage.getItem('userEdits');
    //     if(userEdits){
    //         userEdits = JSON.parse(userEdits);
    //         for(var elementId in userEdits){
    //           document.getElementById(elementId).innerHTML = userEdits[elementId];
    //         }
    //     }
    // }