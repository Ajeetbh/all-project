//wap to find fibnoacci series

// function fibnoacci(n){
//     var a=0,b=1;
//     for(var i=0;i<n;i++){
//         var tamp=a+b;
//         a=b;
//         b=tamp;
//     }
//     return b;
// }
// console.log(fibnoacci(4)) //0,1,  1,2,3,5,8,13,21,34

//wap sum of digit

// function sumDigit(n){
//     var sum=0;
//     while(n>0){
//         var r=n%10;
//         sum+=r;
//         n=Math.floor(n/10);
//     }
//     return sum;
// }
// console.log(sumDigit(12345))

//wap reverse of digit 

// const reverseDigit=(n)=>{
//     var rev=0;
//     while(n>0){
//         var r=n%10;
//         rev=rev*10+r;
//         n=Math.floor(n/10)
//     }
//     return rev;
// }
// console.log(reverseDigit(2345))


//wap find the no. word

// const noOfWord=(str)=>{
//     var count=0;
//     for(let i=0;i<str.length;i++){
//         if(str.charAt(i)==' '){
//             count++;
//         }
//     }
//     return count+1;
// }
// console.log(noOfWord('I am ajeet Kumar Bharti'))


//wap no of letter

// const noOfLetter=(str,letter)=>{
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str.charAt(i)==letter){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(noOfLetter('seeffjeedfdseescse','e'))


//************************************************ */
//forEach()    forEach(value,index,array)  calls a function once for each array element. it is not return new array

// let ar=[3,4,5,8,9]
// ar.forEach((value)=>{
//     return value;
// })
// console.log(ar)

//**************************** */
//map()    map(value,index,array) . it return new array

// let ar=[4,5,6,7,8]
// let a=ar.map((value)=>{
//     return value;
// })
// console.log(a)

// let ar=[4,5,6,7,8]
// let a=ar.map((value,index,ar)=>{
//     console.log(value,index,ar)
//     return value;
// })
// console.log(a)

//**************************** */

//filter()    filter(value,index,array) . it return new array

// let ar=[4,5,1,6,3,7,2,8]
// let a=ar.filter((value)=>{
//     return value<6;
// })
// console.log(a)


//reduce()    reduce(value,index,array) . it return a value

// let ar=[4,5,6,7,8]
// let ar1=ar.reduce((a,b)=>{
//     return a+b;
// })
// console.log(ar1)


// let first='ajay'
// let last='bharti'
// let fullName=(name,index)=>{
//     console.log(name[index])
// }
// fullName(first,2)
// fullName(last,5)


//hoisting

// console.log(sum(2,3,4))
// var sum=(a,b,c)=>{
//     return a+b+c;
// }


//push pop

let a=[2,3,5,6,7]
a.splice(1,2,8,9,10,15)
console.log(a)