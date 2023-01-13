//find time and day
// let today=new Date()
// let h=today.getHours()
// let m=today.getMinutes()
// let s=today.getSeconds()

// let day=today.getDay()
// let daylist=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

// let prepand=(h>=12)?" PM ":" AM ";
// h=(h>=12)?h-12:h;

// console.log("TIME "+h+prepand+":"+m+":"+s+"  " +"Day :"+daylist[day])



// let today=new Date()
// let mm=today.getMonth()+1;
// let dd=today.getDate()
// let yy=today.getFullYear()

// console.log(dd,"/",mm,"/",yy)


//area of triangle

// let s1=5;
// let s2=6;
// let s3=7;
// let s=(s1+s2+s3)/2;
// let area=Math.sqrt(s*((s-s1)*(s-s2)*(s-s3)))
// console.log(area)


// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));


// for(let year=2014;year<=2050;year++){
//     let day=new Date(year,0,1)
//         if(day.getDay()===0){
//             console.log("1st jan on sunday",year)
//         }
// }

// let num=Math.ceil(Math.random()*10);
// console.log(num)



// let file="system1.php";
// console.log(file.split(".").pop())
// console.log(file.split(".").shift())


// function diff(n){
//     if(n<=13){
//         return 13-n;
//     }else{
//         return (n-13)*2
//     }
// }
// console.log(diff(15))


// function sum(n1,n2){
//     if(n1==n2){
//         return 3*n1;
//     }else{
//         return n1+n2;
//     }
// }
// console.log(sum(4,4))



// function stringPy(str){
//     if(str==null || str==undefined || str.substring(0,2)=='Py'){
//         return str;
//     }else{
//         return "Py"+str;
//     }
//     //console.log(str.substring(0,2))
// }
// console.log(stringPy('python'))
// console.log(stringPy('Python'))
// console.log(stringPy('ajeet'))
// console.log(stringPy('Pypop'))


// function remove_character(str,pos){
//     let str1=str.substring(0,pos)
//     let str2=str.substring(pos+1,str.length)
//     return str1+str2;
// }
// console.log(remove_character('ajayb',2))
// console.log(remove_character('ajeetkumar',4))
// console.log(remove_character('aloky',3))


// function first_last(str1) 
//   {
//   if (str1.length <= 1)
//   {
//     return str1;
//   }
//   mid_char = str1.substring(1, str1.length-1);
//   return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
// }
// console.log(first_last('a'));
// console.log(first_last('ab'));
// console.log(first_last('abc'))
// console.log(first_last('abcd'));


// function front_back(str){
//     let first=str.substring(0,1);
//     return first+str+first;
// }
// console.log(front_back('a'))
// console.log(front_back('ab'))
// console.log(front_back('abc'))



// function front_back3(str){
//     if(str.length>=3){
//         //str_len=3;
//         back=str.substring(str.length-3)
//         return back+str+back;
//     }else{
//         return false
//     }
// }
// console.log(front_back3('Ajeet'))
// console.log(front_back3('go'))
// console.log(front_back3('went'))


// function java(str){
//     if(str.length<4){
//         return false;
//     }
//     let front=str.substring(0,4)
//     if(front=='Java'){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(java("Javascript"))
// console.log(java('javascript'))
// console.log(java('script java'))
// console.log(java('Jav'))
// console.log(java('Java'))


//largest

// function largest(n1,n2,n3){
//     if(n1>n2 && n1>n3){
//         return n1;
//     }
//     else if(n2>n1 && n2>n3){
//         return n2;
//     }else{
//         return n3;
//     }
// }
// console.log(largest(30,15,8))


//nearest two no of 100

// function nearest(n1,n2){
//     let n3=100-n1;
//     let n4=100-n2;
//     if(n3>n4){
//         return n2;
//     }else{
//         return n1;
//     }
// }
// console.log(nearest(44,55))



//no of occurance of character

// function occurance(str,char){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str.charAt(i)==char){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(occurance('baabbaacc','b'))


//no. of word

// function word(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str.charAt(i)==" "){
//             count++;
//         }
//     }
//     return count+1;
// }
// console.log(word('i am ajeet kumar'))



//*****35 Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.
 
// function check_char(str,char){
//     count=0;
//     for(let i=0;i<=str.length;i++){
//         if((str.charAt(i)==char)&&(i>=1 && i<=3)){
//             count=1;
//             break;
//         }
//     }
//     if(count==1)return true;
//     return false
// }
// console.log(check_char("Python", "y"));
// console.log(check_char("JavaScript", "a"));
// console.log(check_char("Console", "o"));
// console.log(check_char("Console", "C"));
// console.log(check_char("Console", "e"));
// console.log(check_char("JavaScript", "S"));


// Write a JavaScript program to check whether the last digit of the three given positive integers is same.

// function lastDigit(x,y,z){
//     if(x>0 && y>0 && z>0){
//         return (x%10 == y%10 && y%10 == z%10 && x%10 == z%10)
//     }else 
//     return false
// }
// console.log(lastDigit(10,100,1000))
// console.log(lastDigit(15,115,105))
// console.log(lastDigit(-4,-8,9))
// console.log(lastDigit(-4,-74,-4))


// Write a JavaScript program to create a new string with first 3 characters are in lower case from a given string. 
//If the string length is less than 3 convert all the characters in upper case.

// function string(str){
//     if(str.length<3){
//         return str.toUpperCase();
//     }else{
//         let front_part=str.substring(0,3).toLowerCase();
//         let back_part=str.substring(3,str.length);
//         return front_part+back_part
//     }
// }
// console.log(string("Python"));
// console.log(string("Py"));
// console.log(string("JAVAScript"));


