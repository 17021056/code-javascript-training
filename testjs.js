//Prefix && Postfix
var a=6;
    // ++a;
    // a++;
// VD:
var output = a++ + --a;
// <=> output = 6 + 6 = 12;
console.log(output);

// cau lenh DK va toan tu logic 
var output1 = '' || '' || "B"
if(output1){
    console.log(output);
}
else{
    console.log("false")
}
//template string
const Name = 'Thuyet'
var Name2 = ['huong','thien','thuyet']
console.log(`ten cua toi la : ${Name2}`)
//lam viec voi chuoi tim vi tri phan tu
console.log( Name.indexOf('h'))
var textString = "toi yeu ha Noi";
if(textString.toLowerCase().indexOf("ha noi")!=-1){
    console.log("mang co chu Ha Noi");
}
else{
    console.log("ko co roi")
}
//search()
const regex = /[^\w\s]/g;
console.log(regex)
var b=3.14
//tofixed()
console.log(b.toFixed())
//object constructor
function User(name,age,address){
    this.name=name;
    this.age=age;
    this.address=address;
}
var person = new User()
person.name = 'thuyet'
person.age = 22
person.address = 'ha noi'
User.prototype.level = 'oke'
console.log(person.level)

//for of 
var arr=[1,2,5,8,9]
for(var value of arr){
    console.log(value)
}
// for of on object
var user = {
    name: 'thuyet',
    age : 22,
    address: 'ha noi',
}
console.log(Object.values(user))
for(var value of Object.values(user)){
    console.log(value)
}
//foreach()
function Counter() {
    this.sum = 0;
    this.count = 0;
  }
  Counter.prototype.add = function(array) {
    array.forEach(function(entry) {
      this.sum += entry;
      ++this.count;
      console.log(this)
    }, this);
    // ^---- Note
  };
  const obj = new Counter();
obj.add([2, 5, 9]);
const array1 = ['a', 'b', 'c'];
const callback = (e,index)=>{
  console.log(e)
}
array1.forEach(callback);
//every()
var arr2=[1,6,8,7,9,25]
const callback1 = (element) =>{
    return element>0
}
var output2 = arr2.every(callback1)
console.log(output2)
//find()
const callback2 = (element) =>{
    return element>8
}
var output3 = arr2.find(callback2)
console.log(output3)
var output4 = arr2.filter(callback2)
console.log(output4)
var output5 = arr2.map(callback2)
console.log(output5)
console.log(Math.min(...arr2))
console.log(...arr2)
//rest 
var [a,...rest] = arr2
console.log(rest)
function test(...rest){
    console.log(rest)
}
test(1,5,8,6,8)
//spread
var arr3 = [...arr,...arr2]
console.log(arr3)
//sort()
console.log(arr2.sort((a,b) =>a-b))

//ax^2 + bx + c 
function round2(value){
    return Math.round(value*100)/100
}
function PT2(a,b,c){
const delta = b**2 - 4*a*c
if(delta>=0){
const x1 = (-b - Math.sqrt(delta))/(2*a)
const x2 = (-b + Math.sqrt(delta))/(2*a)
console.log(`x1=${round2(x1)} x2=${round2(x2)}`)}
else{
    console.log("no solution")
}
}
PT2(1,-5,6)
//AVERAGE

function average(count,...arr){
    for(var index in arr){
        if(arr[index]<0){
            count+=arr[index]
        }
    }
    return round2(count/(arr.length))
}
console.log(average(0,1,-5,2,-6,2,-7))
//MAX
// function Max(...arr){
//     let max = arr[0];
//     for(var index in arr){
//         if(arr[index]>=max){
//             max = arr[index]
//         }
//     }
//     return max
// }

function Min(...arr){
    let min = arr[0];
    for(var index in arr){
        if(arr[index]<=min){
            min = arr[index]
        }
    }
    return min
}
console.log(Min(0,1,-5,2,-6,2,-7))
function Max(...arr){
   arr.sort((a,b)=>a-b)
   console.log(arr)
    return arr[arr.length-1]
}
console.log(Max(0,1,-5,2,-6,2,-7))
var as2D = [ 
    ["a","b","c","d","e","f","g","h","i","j"], 
    ["A","B","C","D","E","F","G","H","I","J"], 
    ["!","@","#","$","%","^","&","*","(",")"] 
    ];
    console.log(as2D[1][2])
// unique
function unique(...arr){
    arr.sort((a,b)=>a-b)
    let arrNew = []
    arrNew.push(arr[0])
    for(var i = 1; i < arr.length;i++){
        if(arr[i]!=arr[i-1]){
            arrNew.push(arr[i])
        }
    }
    return arrNew
}
console.log(unique(0,1,1,2,-5,2,-6,2,-7))
//chuoi dai
function chuoiDai(...arr){
    let max=0
    let count = 0
    for(var i = 0; i < arr.length;i++){
        if(arr[i]==arr[i-1]){
          ++count
        }
        else{
        if(count>max){
            max = count
        }
        count=0
        }
    }
    return max+1
}
console.log(chuoiDai(1,7,2,2,3,3,3,3,3,4,1,1,1,7,7))