// 1 Write a JavaScript program to display the current day and time
//   var today = new Date();
//   var day = today.getDay();
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   console.log("Today is : " + daylist[day] + ".");
//   var hour=today.getHours();
//   var minute=today.getMinutes();
//   var second=today.getSeconds();
//   let prepand = (hour >= 12)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;
//   console.log('Time :'+hour+prepand+':'+minute+':'+second)

// 2 Write a JavaScript program to print the contents of the current window
// function printCurrentPage(){
//     window.print();
// }


// 3 Write a JavaScript program to get the current date.
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// let today=new Date()
// let mm=today.getMonth()+1;
// let dd=today.getDate();
// let yy=today.getFullYear();
// console.log(mm+'-'+dd+'-'+yy)
// console.log(mm+'/'+dd+'/'+yy)


// 4 Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

// let side1=5;
// let side2=6;
// let side3=7;
// let s=(side1+side2+side3)/2;
// let area=Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)))
// console.log(area)

//5 Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <title>Document</title>
// </head>
// <body>
//     <h1>Reverse word from left to right</h1>
//     <script>
//         var myVar = setInterval(myFunction, 1000);
//         var word = 'w3resource';
//         var newArray = word.split('');
        
//         function myFunction() {
//         var letter = newArray.pop();
//         var newWord = newArray.unshift(letter);
//         var theWord = newArray.join('');
//         document.getElementById('moveIt').innerHTML = theWord;
//         }
//        </script>
//         <h1 id = 'moveIt'></h1>        
// </body>
// </html> 

//6 leap year
// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));

//7 Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.

// for (var year = 2014; year <= 2050; year++){
//     var d = new Date(year, 0, 1);
//     if ( d.getDay() === 0 )
//     console.log("1st January is being a Sunday  "+year);
// }

//8 Display a message when a number is between a range
//  let num=Math.ceil(Math.random()*10)
//  console.log(num)
//  const guessnum=prompt('guess no between 1 to 10')
//  if(num==guessnum){
//      console.log('Matched')
//  }else{
//      console.log('not matched',guessnum)
//  }


// 9 Write a JavaScript program to calculate number of days left until next Christmas.

// today=new Date();
// var cmas=new Date(today.getFullYear(), 11, 25);
// if (today.getMonth()==11 && today.getDate()>25) 
// {
// cmas.setFullYear(cmas.getFullYear()+1); 
// }  
// var one_day=1000*60*60*24;
// console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
// " days left until Christmas!");


//10 Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Calculation</title>
// </head>
// <body>
//   1st Number :
//   <input type="text" id="first">
//   <br><br>
//   2nd Number :
//   <input type="text" id="second">
//   <br><br>
//   <button onclick="multiply()">Multiply</button>
//   <button onclick="divide()">Divide</button>
//   <h1 id="result"></h1>
//   <script>
//     function multiply(){
//       n1=document.getElementById('first').value;
//       n2=document.getElementById('second').value;
//       document.getElementById('result').innerHTML=n1*n2;
//     }
//     function divide(){
//       n1=document.getElementById('first').value;
//       n2=document.getElementById('second').value;
//       document.getElementById('result').innerHTML=n1/n2;
//     }
//   </script>
// </body>
// </html>

//12 Write a JavaScript program to get the website URL (loading page).
//alert(document.URL)

//13 Write a JavaScript exercise to create a variable using a user-defined name.
//  var a=1234
//  var b='abcd'
//  this[a]=b
//  console.log(this[a])

//14 Write a JavaScript exercise to get the extension of a filename.

// let filename='system.php'
// console.log(filename.split('.').pop())
// let filename1='system.js'
// console.log(filename1.split('.').shift())

// 15 Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

// function difference(n){
//   if(n<=13)
//   return 13-n;
//   else
//   return (n-13)*2
// }
// console.log(difference(32))
// console.log(difference(11))

// 16 Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
// function sum(n1,n2){
//     if(n1==n2){
//         return 3*(n1+n2)
//     }
//     else{
//         return n1+n2;
//     }
// }
// console.log(sum(2,3))
// console.log(sum(5,5))


// 17 Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
 
// function difference(n){
//     if(n<=19)
//         return 19-n;
//     else
//        return 3*(n-19)
// }
// console.log(difference(15))
// console.log(difference(25))

//18 Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

// function check(n1,n2){
//     if((n1==50 || n2==50)||(n1+n2==50))
//     return true;
//     else
//     return false;
// }
// console.log(check(12,0))
// console.log(check(12,50))
// console.log(check(50,50))
// console.log(check(15,35))

//19 Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.


//20 Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

// function positive_negative(x,y){
//     if((x>0 && y<0) ||(x<0 && y>0)){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(positive_negative(2,-3))
// console.log(positive_negative(-2,3))
// console.log(positive_negative(2,3))
// console.log(positive_negative(-2,-3))

//21 Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

// function string_Check(str1){
//     if(str1===null || str1===undefined || str1.substring(0,2)==="Py"){
//         return str1;
//     }else{
//         return "Py"+str1;
//     }
// }
// console.log(string_Check("Python"))
// console.log(string_Check("thon"))
// console.log(string_Check("Ajeet"))
// console.log(string_Check("python"))

//22 Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

// function remove_character(str,char_pos){
//     let str1=str.substring(0,char_pos)
//     let str2=str.substring(char_pos+1,str.length)
//     return (str1+str2);
// }
// console.log(remove_character('ajeetkumar',4))

//23 Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.

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


//24 Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.

// function front_back(str){
//     let first=str.substring(0,1);
//     return first+str+first;
// }
// console.log(front_back('a'))
// console.log(front_back('ab'))
// console.log(front_back('abc'))

//25 Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

// function test37(x) 
// {
//   if (x % 3 == 0 || x % 7 == 0) 
//   {
//     return true;
//   } 
//   else {
//     return false;
//   }
// }
// console.log(test37(12));
// console.log(test37(14));
// console.log(test37(10));
// console.log(test37(11));


// 26 Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.

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

//27 Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

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


//28 Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

// function check_numbers(x,y){
//     if((x>=50 && x<=99)||(y>=10 && y<=99))
//     return true
//     else false
// }
// console.log(check_numbers(12, 101));
// console.log(check_numbers(52, 80));
// console.log(check_numbers(15, 99));


//29 Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.

// function check_three_nums(x, y, z) 
// {
//   return (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99);
// }

// console.log(check_three_nums(50, 90, 99));
// console.log(check_three_nums(5, 9, 199));
// console.log(check_three_nums(65, 89, 199));
// console.log(check_three_nums(65, 9, 199));

//30 Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.

// function check_script(str)
// {
//   if (str.length < 6) {
//     return str;
//   }
//   let result_str = str;
    
//   if (str.substring(10, 4) == 'Script') 
//     {
//    result_str = str.substring(0, 4) + str.substring(10,str.length);
//   }
//   return result_str;
// }
// console.log(check_script("JavaScript"));
// console.log(check_script("CoffeeScript"));

//31 Write a JavaScript program to find the largest of three given integers.

// function largest(n1,n2,n3){
//     if((n1>n2)&& (n1>n3)){
//         return n1;
//     }
//     else  if((n2>n1)&& (n2>n3)){
//         return n2;
//     }else{
//         return n3;
//     }
// }
// console.log(largest(20,5,10))
// console.log(largest(1,0,1))
// console.log(largest(0,-10,-20))
// console.log(largest(1000,510,440))

//32 Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

// function nearest(n1,n2){
//     let n3=100-n1;
//     let n4=100-n2;
//     if(n3<n4){
//         return n1;
//     }else 
//     return n2;
// }
// console.log(nearest(90,89))
// console.log(nearest(-90,-89))
// console.log(nearest(90,90))

//33 Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// function range(x,y){
//     if((x>=40 && x<=60 && y>=40 && y<=60) || (x>=70 && x<=100 && y>=70 && y<=100)){
//         return true
//     }else
//     return false;
// }
// console.log(range(44,56))
// console.log(range(70,95))
// console.log(range(50,89))

//34 Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

// function larger(x,y){
//     if((x>=40 && x<=60) && (y>=40 && y<=60)){
//         if(x===y){
//             return 'number same';
//         }
//         else if(x>y){
//             return x;
//         }else{
//             return y;
//         }
//     }else{
//         return "number don't fit in range";
//     }
// }
// console.log(larger(45,60))
// console.log(larger(25,60))
// console.log(larger(45,80))
// console.log(larger(45,45))


// ** {Important} program to check the number of occurrence of a character

// function countString(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) == letter) {
//             count ++;
//         }
//     }
//     return count;
// }
// const result = countString('aabcbabasbaa', 'a');
// console.log(result);

// *****count the number of word in a sentence

// function countWord(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) ==' ') {
//             count ++;
//         }
//     }
//     return count+1;
// }
// const result = countWord('I am ajeet Kumar Bharti');
// console.log(result);

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

//36 Write a JavaScript program to check whether the last digit of the three given positive integers is same.

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

// 37 Write a JavaScript program to create a new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.

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

//39 Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// function checkSum(x,y){
//     let sum=x+y;
//     if(sum>=50 && sum<=80){
//         return 65;
//     }else{
//         return 80;
//     }
// }
// console.log(checkSum(30,20))
// console.log(checkSum(30,15))
// console.log(checkSum(70,10))
// console.log(checkSum(40,50))


//40 Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

// function sum_diff(x,y){
//     let sum=x+y
//     let diff=Math.abs(x-y)
//     if((x==8 || y==8) || (sum==8 || diff==8)){
//         return true
//     }else{
//         return false;
//     }
// }
// console.log(sum_diff(7,8))
// console.log(sum_diff(16,8))
// console.log(sum_diff(24,32))
// console.log(sum_diff(17,18))

//41 Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

// function three_two(x,y,z){
//     if(x==y && y==z){
//         return 30;
//     }
//     if(x==y||y==z||z==x){
//         return 40;
//     }
//     else{
//     return 20;
//     }
// }
// console.log(three_two(8,8,8))
// console.log(three_two(8,8,18))
// console.log(three_two(8,7,18))

//42 Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.
//Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

// function increasing(x,y,z){
//     if(y>x && z>y){
//         return 'strict mode'
//     }else if(z>y){
//         return "soft mode"
//     }else{
//         'Undefinded'
//     }
// }
// console.log(increasing(10,15,31));
// console.log(increasing(24,22,31));
// console.log(increasing(50,21,15));

//43 Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

// function lastDigit(x,y,z){
//     return (x%10===y%10)||(y%10===z%10)||(z%10===x%10);
// }
// console.log(lastDigit(22,32,42));
// console.log(lastDigit(102,302,2));
// console.log(lastDigit(20,22,45));


//44 Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.

// function greater(x,y,z){
//     return (x >= 20 && (x < y || x < z)) ||
//     (y >= 20 && (y < x || y < z)) ||
//     (z >= 20 && (z < y || z < x));
// }
// console.log(greater(23, 45, 10));
// console.log(greater(23, 23, 10));
// console.log(greater(21, 66, 75));

//45 Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.

// function test_number(x,y){
//     let sum=x+y;
//     let diff=Math.abs(x-y)
//     if(x==15 || y==15){
//         return true;
//     }
//     if(sum==15 || diff==15){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(test_number(15, 9));
// console.log(test_number(25, 15));
// console.log(test_number(7, 8));
// console.log(test_number(25, 10));
// console.log(test_number(5, 9));
// console.log(test_number(7, 9));
// console.log(test_number(9, 25));


//46 Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.

    // function valCheck (a, b) {
    //     if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
    //     return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
    //     }
    //     else
    //     return false;
    //     }
    //     console.log(valCheck(14, 21));
    //     console.log(valCheck(14, 20));
    //     console.log(valCheck(16, 20));   

//47 Write a JavaScript program to check whether a given number is presents in the range 40..10000.
//For example 40 presents in 40 and 4000.   

// function test_digit(x, y, n) 
//   {    
//     if (n < 40 || n > 10000)
//       return false;
//     else
//       if (n >= x && n <= y)
//         return true;
//       else
//         return false;
//   }
// console.log(test_digit(40, 4000, 45));  
// console.log(test_digit(80, 320, 79));  
// console.log(test_digit(89, 4000, 30));


//48 Write a JavaScript program to reverse a given string.

// function string_reverse(str) 
// {
//     return str.split("").reverse().join("");
// }
// console.log(string_reverse("w3resource"));
// console.log(string_reverse("www"));
// console.log(string_reverse("JavaScript"));

//49 *** Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

// function alphabet_char_Shift(str) {
//     var all_chars = str.split("");
//     for(var i = 0; i < all_chars.length; i++) {
//       var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
//       n = (n + 1) % 26; 
//       all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
//     }
//     return all_chars.join("");
//   }
//   console.log(alphabet_char_Shift("ajeet"))


//50 Write a JavaScript program to capitalize the first letter of each word of a given string.

// function capital_letter(str) 
// {
//     str = str.split(" ");
//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }
//     return str.join(" ");
// }
// console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));
