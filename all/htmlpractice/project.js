//var let const variable

// var x=10
// console.log(x)
// x=12
// console.log(x)

// let x=40
// console.log(x)
// x=30
// console.log(x)

// const x=10
// console.log(x)
// x=12
// console.log(x)


//function

// function add(n1,n2){
//     let result=n1+n2;
//     return result;
// }
// console.log(add(2,3))

//Async/Await in Javascript

// async function hello(){
//     return 'Hi'
// }
// let a=hello()
// console.log(a)

// async function hello(){
//     return 'Hi'
// }
// console.log("before calling hello")
// let a=hello()
// console.log("after calling hello")
// console.log(a)
// console.log("last line")


//asynchronous

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}