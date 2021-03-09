console.log('this is thirty seven');

// pretend that this is coming from the server
const students = [
    {name: 'vg', subject: 'javascript'},
    {name: 'vgg', subject: 'machine learning'}

]

// students.forEach()

function enrollStudent(student, callback) {
    setTimeout(function(){
        students.push(student);

        console.log('students has been enrolled');
        callback(); 

    },8000);
}



function getStudents(){
    setTimeout(function () {
        // students.push(student);
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`
        });

        document.getElementById('student').innerHTML = str;
        console.log('students has been fetched');   

    }, 3000);
}


// 

let newStudent = {name: 'sujan', subject: 'python'}
enrollStudent(newStudent,getStudents);
// getStudents();