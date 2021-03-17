// var courseApi = 'http://localhost:3000/courses'

// fetch(courseApi)
//     .then(function(res){
//         return res.json()
//     })
//     .then(function(data){
//         console.log(data)
//     })       
//     .catch(function(err){
//         console.log(err)
//     })



var courseApi = 'http://localhost:3000/courses'

function start(){
    getCoursers(function(courses){
        renderCourse(courses)
       })
    handleForm()
}

 start()

//function get data
function getCoursers(callback) {
    fetch(courseApi)
    .then(function(res){
        return res.json()
    })
    .then(callback)
}
// function create data
function createCourse(data) {
    var options = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) //
    }    
    fetch(courseApi,options)
        .then(function (res) {
            return res.json()
        })
        .then(function () {
            getCoursers(function(courses){
                renderCourse(courses)
               })
        })
        .catch(function (err) {
            console.log(err)
        })
}

//function Delete data
function handleDelete(index) {
    var options = {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        },
    }    
    fetch(courseApi+'/'+index,options)
        .then(function (res) {
            return res.json()
        })
        .then(function () {
        })
        .catch(function (err) {
            console.log(err)
        })
}
//function Edit data
function handleEdit(index) {
    var nameElement = document.querySelector(`#Name${index}`).innerText
    var descriptionElement = document.querySelector(`#Description${index}`).innerText
    var data = {
        name : nameElement,
        description :descriptionElement
    }
    var options = {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) //
    }    
    fetch(courseApi+'/'+index,options)
        .then(function (res) {
            return res.json()
        })
        .then(function () {
        })
        .catch(function (err) {
            console.log(err)
        })
    
}
function renderCourse(courses) {
    var ulElement = document.querySelector("#List-course")
    var outPut = courses.map(function(course){
        return  `<li >
                    <h4 id="Name${course.id}" contentEditable = true>${course.name}</h4>
                     <p id="Description${course.id}"  contentEditable = true> ${course.description}</p>
                     <button id="delete-courses" onclick="handleDelete(${course.id})">delete</button>
                    <button id="edit-courses" onclick="handleEdit(${course.id})">edit</button>
                 </li>`
    })
    ulElement.innerHTML = outPut.join('')
}
//function handle form
function handleForm() {
    var buttonElement = document.querySelector("#create")
    console.log(buttonElement)
    buttonElement.onclick = function (event) {
        console.log({event})
       var name = document.querySelector('input[name="Name"]').value
       var description = document.querySelector('input[name="Description"]').value
        var formData ={
            name:name,
            description:description,
        }
        createCourse(formData)
    }
  
}