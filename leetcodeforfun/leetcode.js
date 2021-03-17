// EX1
// console.log('oke')
// let count = 0
// var hammingWeight = function(n) {
//     if(n>0){
//         if(n%2===1){
//             count++;
//         }
//         n=(n-n%2)/2
//         hammingWeight(n)
//     }
//     return count
// };
// var n = 128
// console.log(hammingWeight(n))
// EX2

// var addTwoNumbers = function(l1, l2) {
//     var i = 0
//     var j = 0
//     var arr = []
//     var sonho = 0
//     if(l1.length>=l2.length){
//         while(i<l1.length){ 
//             var sum = 0
//             var sohang = 0
//             if(j<l2.length){
//                  sum = l1[i] + l2[j]
//                  sohang = sum%10 + sonho
//                  sonho = (sum - sum%10)/10
//                  arr.push(sohang)    
//             }
//             else{
//                 sohang = (l1[i] + sonho) 
//                 sohang = sohang%10
//                 arr.push(sohang) 
//             } 
//             i++
//             j++
//         }
//         if(sonho===1)
//         {arr.push(sonho)}
//     }
//     else {
//         while(j<l2.length){ 
//             var sum = 0
//             var sohang = 0
//             if(i<l1.length){
//                  sum = l1[i] + l2[j]
//                  sohang = sum%10 + sonho
//                  sonho = (sum - sum%10)/10
//                  arr.push(sohang)    
//             }
//             else{
//                 sohang = (l2[j] + sonho) 
//                 sohang = sohang%10
//                 arr.push(sohang) 
//                 console.log( sohang , sonho )
//             } 
//             i++
//             j++
//         }
//         if(sonho===1)
//         {arr.push(sonho)}
//     }
//     return arr
// };
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
// var addTwoNumbers = function(l1, l2) {
//     let tail, head = null;
//     let prevTenth = 0;
    
//     while(l1 || l2){ // continue until any of l1 and l2 is not NULL
//         let sum = 0;
		
//         sum += l1? l1.val:0; // Get value from l1 node, or 0 if l1 is NULL
//         sum += l2? l2.val:0; // Get value from l2 node, or 0 if l1 is NULL
        
//         l1 = l1? l1.next:l1; // Move l1 pointer to next node
//         l2 = l2? l2.next:l2; // Move l2 pointer to next node
        
//         let curVal = (sum+prevTenth)%10;  // Store curVal
//         prevTenth = Math.floor((sum+prevTenth)/10); // Get tenth of curVal
        
//         if(!head){
//             tail = head = new ListNode(curVal); // since head and tail were empty, we need to set to new ListNode
//         }
//         else{ 
//             tail.next = new ListNode(curVal); 
//             tail = tail.next;
//         }
//     }
//     if(prevTenth>0){  // if after itetaion, we have prevTenth, which is not added to our list yet, ex: 9+9 => 8 -> 1 (1 is this prevTenth)
//         tail.next = new ListNode(prevTenth);
//     }

//     return head;
// }

// var l1 = new ListNode([2,4,3])
// var l2 =  new ListNode([2,4,3])
// console.log(addTwoNumbers(l1, l2));

// console.log(l2[3])


// EX3
// var lengthOfLongestSubstring = function(s) {
//     // if(s===''){
//     //     return 0
//     // }
//     // else{
//     //     var newString=''
//     //     var lenghtMax = 1
//     //     for(var i=0 ; i < s.length;i++){
//     //         newString= s[i]
//     //         var count = 1
//     //         for(var j=i+1 ; j<s.length;j++){
//     //             if(s[j]!==s[j-1] && newString.indexOf(s[j])===-1){
//     //                 count++;
//     //                 newString+=s[j]
//     //                 if(lenghtMax<count){
//     //                     lenghtMax=count
//     //                 }
//     //                 // console.log(newString,count)
//     //             }
//     //             else if(newString.indexOf(s[j])!==-1){
//     //                 newString=s[j]
//     //                 count=1
//     //                 if(lenghtMax<count){
//     //                     lenghtMax=count
//     //                 }
//     //                 // console.log(newString)
//     //             }
//     //         }
//     //     }
//     //     return lenghtMax
//     // }
//     let i = 0;
//     let j = 0;

//     let ans = 0;

//     let x = [];

//     while (i < s.length && j < s.length) {
//         console.log(x , 150)
//         while (x.includes(s[j])) {
//             x.splice(x.indexOf(s[i]), 1);
//             console.log(x,153)
//             i++;
//         }
//         x.push(s[j]);
//         console.log(x,157)
//         j++;
//         ans = Math.max(ans, j - i);
//     }
//     return ans;
// };

// var s = 'abcabcbbnlajksndlk'
// console.log(lengthOfLongestSubstring(s))

// EX4
// var findMedianSortedArrays = function(nums1, nums2) {
//     nums1 = nums1.concat(nums2).sort((a,b)=>a-b)
//     return nums1.length%2 ? (nums1[(nums1.length-1)/2]) 
//     :(nums1[(nums1.length)/2]+nums1[(nums1.length/2-1)])/2
   
// };
// var nums1 = [1,3]
// var nums2 = [2,7]
// console.log(findMedianSortedArrays(nums1, nums2))
// // console.log(6 & 1)
// EX5
// var longestPalindrome = function(s) {
//     let i = 0;
//     let j = 0;
//     var arr=[]
//     while (i<s.length || j < s.length){
//         // while(){

//         // }
        
//         arr.push(s[j])
       
//         j++;
//         i++;
//     }
//     console.log(arr)
//     var index = arr.findIndex((element)=>{return element==='a'})
//     console.log(index)
// };
// s = "babad"
// console.log(longestPalindrome(s))
// EX2
// var l1 = {
//     val : 2,
//     next :{
//         val :4,
//         next : {
//             val : 4,
//         }
//     }
// }
// var l2 = {
//     val : 5,
//     next :{
//         val :6,
//         next : {
//             val : 4,
//         }
//     }
// }
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
// var addTwoNumbers = function(l1, l2) {
//     var total = new ListNode(-1)
//     var result = total
//     var carry = 0
//     while(l1!==null || l2!==null){
//         let num1 = l1 ? l1.val : 0  
//         let num2 = l2 ? l2.val : 0  
//         total.next = new ListNode((num1 + num2+carry)%10)
//         carry = Math.floor((num1+num2+carry)/10)
//         total = total.next      
//         if(l1) l1= l1.next;
//         if(l2) l2= l2.next;
//     }
//     if(carry===1){
//         total.next = new ListNode(1)
//     }
//     return result.next

// }
// var l1 = new ListNode(9)
//     l1.next = new ListNode(9)
//     l1.next.next = new ListNode(9)
// var l2 = new ListNode(4)
//     l2.next = new ListNode(9)
//     l2.next.next = new ListNode(4)
// console.log(addTwoNumbers(l1, l2))
// EX5
// var lengthOfLongestSubstring = function(s) {
//     var arr = []
//     var dem = 0 
//     var max = 0
//     for(var i= 0; i < s.length;i++){
//         arr.push(s[i])
//         dem = 1
//         if(max<dem){
//             max = dem
//         }
//         for(var j= i+1; j < s.length;j++){
//             if(s[j]!==s[i] && arr.indexOf(s[j])===-1){
//                 arr.push(s[j])
//                 dem++
//                 if(max<dem){
//                     max = dem
//                 }
//                 console.log(arr,dem)
//             }
//             else if(arr.indexOf(s[j])!==-1){
                
//                 dem=1
//                 arr=[]
//                 break
//             }
//         }

//     }
//     return max;
// };
// var s="asssssss"
// console.log(lengthOfLongestSubstring(s))

// EX7
// var reverse = function(x) {
//     if(x===0){
//         return 0
//     }
//     else{
//         var dau = 1
//         if(x<0){
//             dau=-1
//         }
//         var arr = []
//         while(x%10===0){
//             x=x/10
//         }
//         x=Math.abs(x).toString()
//         for(var i=x.length-1; i>=0; i--){
//             arr.push(x[i])
//         }
//         arr=parseInt(arr.join(''))
//         return arr*dau
//     }
// };
// var x = 222554000000
// console.log(reverse(x))
var longestPalindrome = function(s) {
    return s 
};
var s = 'babad'
console.log(longestPalindrome(s))
console.log("okeland")