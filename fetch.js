var postApi = "https://jsonplaceholder.typicode.com/posts";
var ulElement = document.querySelector('ul')
fetch(postApi) // la 1 promise
  .then(function (response) {
    console.log(response)
    return response.json(); //no parse : JSON -> JS dataType // tra lai 1 promise
  })
  .then(function (data) {
     var  html =''
     var htmls = data.map(function (element) {
           return `<li>${element.userId} : ${element.title}</li> `
        })
     htmls.forEach(element => {
          html += element
     })
     return html              
    })         
    .then(function (data) {
         ulElement.innerHTML=data
      })
  .catch(function (err) {
       console.log(err)
    })