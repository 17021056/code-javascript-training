// -----class in ES6
// function Courses(name,price){
//     this.name = name;
//     this.price = price
// }

// class Courses {
//     constructor(name,price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// const course = new Courses('PHP',1000);

// console.log(course)

// -----Default parameter values trong javascript ES6

// function logger(log ,type='log') {
// console[type](log)
//   }
// logger('okela...','error')

//------Destructuring trong javascript ES6
// var array =['js','php','Rudy']

// var [a,b,c] = array;
// console.log(a,b,c)

//----------REST parameters
//=====voi array

// var array =['js','php','Rudy']

// var [a,...rest] = array;
// console.log(a)
// console.log(rest)

//======voi Object 

// var courses = {
//     name: 'Js',
//     price: 2000,
//     image :'oke',
//     children : {
//         name : 'react'
//     },
//     description: 'oke'
// }
// var {name:parentName ,children:{name:childrenName},description='default'} = courses

// console.log(parentName)
// console.log(childrenName+','+description)
 
//=====VD  trong function
// function logger({name,price,...rest}) { // su dung destruturing cho tham so
//     console.log(name,price,rest)
//   }
// logger({
//         name: 'Js',
//         price: 2000,
//         image :'oke',
//         children : {
//             name : 'react'
//         }})
// function logger([a,...rest]) { // su dung destruturing cho tham so
//         console.log(a,rest)
//       }
// logger(['js','php','Rudy'])

//Spread in ES6


// Tagged template literals trong ES6 (ít người biết)
// function hightlight([first,...data],...values) {
//     return values.reduce(
//         (acc,curr)=>[...acc,`<span>${curr}</span>`,data.shift()]
//         ,[first])
// }

// var brand = 'F8'
// var course = 'JS'
// const html = hightlight`Hoc lap trinh ${course} tai ${brand}!`

// console.log(html.join(''))

//Optional chaining (?.)

var obj = {
    name: 'oke',
    cat :{
        name: 'oke1',
        // cat2:{
        //     name: 'oke2',
        // }
    }
}
if(obj.cat?.cat2){console.log(cat.cat2.name)}
