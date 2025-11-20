var overlay=document.getElementById("overlay")
var popup=document.getElementById("popup")
var std=document.getElementById("stds")
var co=document.getElementById("co")
function opa(){
    overlay.style.display="block"
}

    function register(){
    popup.style.display="block"
}

function show2(){
    co.style.display='block';
}

function showcourses(){
    fetch("http://localhost:8080/courses")
    .then((Response)=>Response.json())
    .then((courses)=>{
        var tbody=document.getElementById("tablebody")

        courses.forEach(course => {

            var row=`<tr>
            <td>${course.cid}</td>
             <td>${course.cname}</td>
             <td>${course.trainer}</td>
             <td>${course.durationinweeks}</td>
             </tr>`

             tbody.innerHTML+=row;
            
        });
    })
}

function showenrolledstudents(){

    var tbody=document.getElementById("tablebody2")
    fetch("http://localhost:8080/enrolledstudents")
    .then((Response)=>Response.json())
    .then((students)=>{
        students.forEach(student=>{
            var row=`<tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.courseselected}</td>`

            tbody.innerHTML+=row;
        })
    })
}

function show1(){
    std.style.display='block';
}