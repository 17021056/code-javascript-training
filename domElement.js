// var divElement = 
//     document.querySelectorAll('p')
// console.log(divElement)
// for(var index in divElement){
//           divElement[index].onclick = function(e){
//                     console.log(e.target.innerText)
//           } 
// }

// var inputElement =
//           document.querySelector('input[type=text]')

//           console.log(inputElement)
// inputElement.oninput = function(e){
//           console.log(e.target.value)
// // }

// var inputElement =
//           document.querySelector('input[type=checkbox]')

//           console.log(inputElement)
// inputElement.oninput = function(e){
//           console.log(e.target.checked)
// }
// //oninput,onclick,onchange,onkeyup,onkeydown
// var inputElement =
//           document.querySelector('input[type=text]')

//           console.log(inputElement)
// inputElement.onkeyup = function(e){
//           console.log(e.which)
//           switch(e.which){
//           case 13 :
//           console.log('Enter')
//           break;                                  
//           }         
// }

//prevent default bai toan : neu link click chua f8.edu.vn thi chuyen trang

// var aElements = document.querySelectorAll('a')
// console.log(aElements)
// for(var index in aElements){      
//           aElements[index].onclick = function(e){
//                     // console.log(e.target.href.startsWith('https://f8.edu.vn'))
//                     if(!e.target.href.startsWith('https://f8.edu.vn')){
//                               e.preventDefault()
//                     }
//           }
// }

// focus vao thanh input hien list dung 
// e.preventDefault de ngan chan su kien onmousedown mac dinh
// khi nhan chuot ra ngoai input

// var inputElement = document.querySelector('input[type=text]')
// var ulElement = document.querySelector('ul')
// ulElement.onmousedown = function(e){
//           e.preventDefault();
// }

// ulElement.onclick = function(e){
//           console.log(e.target)
// }

//propegration
// var divElement = document.querySelector('div')
// divElement.onclick = function(e){
//           console.log('DIV')
// }
// var button = document.querySelector('button')
// button.onclick = function(e){
//           e.stopPropagation();
//           console.log('Clickme!')
//  }

//Event Listener 

// JSON
// var json = '["oke","JS"]'
// var json1 = '{"name":"thuyet","JS":"javascript"}'
// var json3 = ['oke','hihi']
// console.log(JSON.stringify(json3) )
// console.log(JSON.parse(json))

//promise(sync async)

//promise pain
//callback hell
// var value = 100
// setTimeout(function(){
//           value +=10
//           console.log(value)
//           setTimeout(function(){
//           value +=10
//           console.log(value) 
//                     setTimeout(function(){
//                               value +=10
//                               console.log(value)          
//                               },1000)
//           },1000)
// },1000)

// let cars1 = ['bmw','mes']
// let cars2=cars1
// cars2[1]='oke'
// console.log([...cars1,...cars2])
// function toTal(...args){
//           console.log(args)
// }
// toTal(1,'hello',3)

//Promise in JS ? How to use promise ?
//create Promise 
// var promise = new Promise(function(resolve,reject){
//           resolve([
//                     {
//                               id : 1,
//                               name : 'JS'
//                     }
//           ])
// })

// promise
//           .then(function(courses){
//                     console.log(courses) //thanh cong lam gi
//           })
//           .catch(function(){
//                     console.log('that bai')   //that bai lam gi        
//           })
//           .finally(function(){
//                     console.log('ket thuc')
//           })

//promise Chain
var promise = new Promise(function(resolve,reject){
       resolve()
})

// promise
//           .then(function(){
//                    return new Promise(function(resolve,reject){
//                              setTimeout(function(){
//                                        resolve([1,2,3])
//                              },3000)
//                    }) //thanh cong lam gi
//           })
//           .then(function(data){
//                     console.log(data)
//                     return 2 //thanh cong lam gi
//           })
//           .then(function(data){
//                     console.log(data) //thanh cong lam gi
//           })
//           .catch(function(){
//                     console.log('that bai')   //that bai lam gi        
//           })
//           .finally(function(){
//                     console.log('ket thuc')
//           })

// function sleep(ms){
//         return new Promise(function(resolve){
//                  setTimeout(resolve,ms)
//         })  
// }

// sleep(1000) 
//           .then(function(){
//                 console.log(1)
//                 return sleep(1000)}
//           )   
//           .then(function(){
//                     console.log(1)
//                     return sleep(1000)}
//               )   
//               .then(function(){
//                     console.log(1)
//                     return sleep(1000)}
//               )   
//               .then(function(){
//                     console.log(1)
//                     return sleep(1000)}
//               )         

//promise All

// var promise1 = new Promise(function(resolve,reject){
//           setTimeout(function(){resolve([1,2])},2000)
//    })
// var promise2 = new Promise(function(resolve,reject){
//           setTimeout(function(){resolve([3,4])},2000)
//    })

// Promise.all([promise1,promise2])
//           .then(function(result){
//                     console.log(result[0].concat(result[1]))
//           })
// function sleep(value,ms){
//        return new Promise((resolve)=>{
//               setTimeout(()=>{
//                      resolve(value)
//               },ms)
//       })
// }

// var promise1 = new Promise(function(resolve,reject){
//        resolve()
//    })
// promise1 
//        .then(()=>{
//              return sleep(100,1000)
             
//        })
//        .then((value)=>{
//               console.log(value)
//               return sleep(200,1000)
//        })
//        .then((value)=>{
//        console.log(value)
// })  
  var users =[
         {
                id:1,
                name : 'thuyet',
         },
         {
              id:2,
              name : 'tu',
         },
              {
                     id:3,
                     name : 'thu',
              },
              
         
         
  ]

  var comments =[
         {
                id:1,
                user_id: 1,
                content :'oke ban oi',
         },
         {
              id:2,
              user_id: 2,
              content :'oke con cak',
       },
       {
              id:2,
              user_id: 2,
              content :'oke con cak',}
       

  ]
  //1. lay comment
  //2. tu  comment lay ra user_id
  //tu  user_id lay ra user tuong ung

  //fake api 
  function getComment(){
         return new Promise(function(resolve){
             setTimeout(() => {
                resolve(comments);    
             }, 1000); 
         })
  }
  function getUserById(userId){
       return new Promise(function(resolve){
              setTimeout(() => {
                 var result = users.filter((user)=>{
                     return userId.includes(user.id)
                 })
                 resolve(result);    
              }, 1000); 
          })
  }
  getComment().then((value)=>{
       var getUserId =  value.map((element)=>{
              return element.user_id
        })
              return getUserById(getUserId)
       }) 
       .then((users)=>{
              return {
                     users : users ,
                     comments : comments,
              }})
       .then((value)=>{
              var ulElement = document.querySelector('#box-messege')
              var html =''       
              value.comments.forEach(comment => {
                     var user = value.users.find(element=>{
                            return comment.user_id === element.id
                     })
                     html += `<li>${user.name} : ${comment.content}</li>`
              });
              ulElement.innerHTML=html
              console.log(ulElement)
       })            