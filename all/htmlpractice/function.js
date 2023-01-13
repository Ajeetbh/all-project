//1 Write a JavaScript function that reverse a number.
// function reverse(num){
//    num=num+"";
//    return num.split("").reverse().join('');
//    //.reverse().join("");
// }
// console.log(reverse(4321))

// function reverse(n){
//     let rev=0;
//     while(n>0){
//         rev=(rev*10)+(n%10);
//         n=Math.floor(n/10)
//     }
//     return rev;
// }
// console.log(reverse(321))

// function reverseNumber(number) {
//     var revNumber = 0;
//     while (number > 0) {
//       revNumber = (revNumber * 10) + (number % 10);
//       number = Math.floor(number / 10);
//     }
//     return revNumber;
//   }
//   console.log(reverseNumber(876));


//add digit of a number

// function digit(n){
//     let sum=0;
//     while(n>0){
//         let r=n%10;
//         sum=sum+r;
//         n=Math.floor(n/10)
//     }
//     return sum;
// }
// console.log(digit(321231))


//2 Write a JavaScript function that checks whether a passed string is palindrome or not?

// function palindrome(str){
//     let len=str.length;
//     for(let i=0;i<len/2;i++){
//         if(str[i]!=str[len-i-1]){
//             return "not palindrome string"
//         }
//         else{
//             return "palindrome"
//         }
//     }
// }
// console.log(palindrome('madam'))


// 3  *****Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d,o,do,g,dg,og,dog

// let possibleCombinations = (str) =>{
//     let combinations = [];
//     for(let i = 0 ;i < str.length; i++)
//     {
//         for(let j = i + 1; j< str.length + 1; j++)
//         {
//             combinations.push(str.slice(i , j));
//         }
//     }
//    return combinations;
// }
// console.log(possibleCombinations('Dog'));


// 4 Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'

// function alphabetical(str){
//     return str.split('').sort().join('');
// }
// console.log(alphabetical('ajay'))

// 5 **** Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));


//6 Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

// function longest(str){
//     // Split the string using regex
//     str = str.match(/[a-zA-Z0-9]+/gi);
//     // Creating a empty string to store largest word
//     let largest = "";
      
//     // Creating a for...loop to iterate over the array
//     for(let i = 0; i < str.length; i++){
//       // If the i'th item is greater than largest string 
//       // then overwrite the largest string with the i'th value
//       if(str[i].length > largest.length){
//         largest = str[i]
//       }
//     }
//     return largest;
//   }
// console.log(longest("Web Development Tutorial"))


//7 *** Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// function countVowel(str){
//     var vowelList='aeiouAEIOU'
//     var count=0;
//     for(var i=0;i<str.length;i++){
//         if (vowelList.indexOf(str[i]) !== -1)
//         {
//           count += 1;
//         }
//     }
//     return count;
// }

// console.log(countVowel('The quick brown fox'))


//8 ***Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

// function prime(n){
//     if(n==1){
//         return false;
//     }else if(n==2){
//         return true
//     }else{
//         for(let i=2;i<n;i++){
//             if(n%i==0){
//                 return false;
//             }else{
//                 return true;
//             }
//         }
//     }
// }
// console.log(prime(2))
// console.log(prime(3))
// console.log(prime(12))
// console.log(prime(11))

//9 Write a JavaScript function which accepts an argument and returns the type.
// function detect_data_type(value)
// {
// var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
// if (typeof value === "object" || typeof value === "function") 
//     {
//      for (x = 0, len = dtypes.length; x < len; x++) 
//      {
//             if (value instanceof dtypes[x])
//             {
//                 return dtypes[x];
//             }
//       }
//     }
//     return typeof value;
// }
// console.log(detect_data_type(12));
// console.log(detect_data_type('w3resource'));
// console.log(detect_data_type(false));


//10 Write a JavaScript function which returns the n rows by n columns identity matrix.

// function matrix(n){
//     var i,j;
//     for(i=0;i<n;i++){
//         for(j=0;j<n;j++){
//             if(i===j){
//                 console.log('1')
//             }else{
//                 console.log('0')
//             }
//             console.log('-------')
//         }
//     }
// }
// matrix(3);


//11 **** Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

// var array = [3,8,5,6,5,7,1,9];
// var outputArray = [];
// function arrayTrim(){
//   var sortedArray = array.sort();
//   outputArray.push(sortedArray[1],array[array.length-2]);
//   return outputArray;
// }
// console.log(arrayTrim());



// function output(arr){
//     var newArr=[]
//     var sortArray=arr.sort();
//     newArr.push(sortArray[1],sortArray[arr.length-2])
//     return newArr;
// }
// console.log(output([3,4,6,1,8,9,5]))


//12 Write a JavaScript function which says whether a number is perfect.

// function perfect(n){
//     let sum=0;
//     for(let i=1;i<n;i++){
//         if(n%i==0){
//             sum+=i;
//         }
//     }
//     if(sum==n){
//         return "Perfect number"
//     }else{
//         return "Not Perfect number"
//     }
// }
// console.log(perfect(6))
// console.log(perfect(28)) //1,2,4,7,14
// console.log(perfect(10))
// console.log(perfect(8))


//13 *** Write a JavaScript function to compute the factors of a positive integer.

// function factors(n){
//     let fact=[];
//     for(let i=1;i<=n;i++){
//         if(n%i==0){
//           fact.push(i);
//         }
//     }
//     return fact;
// }
// console.log(factors(15))
// console.log(factors(30))
// console.log(factors(7))

//15 Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

// function exponent(b,n){
//     var ans=1;
//     for(var i=1;i<=n;i++){
//         ans=b*ans;
//     }
//     return ans;
// }
// console.log(exponent(2,3))

//16***** Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

// function unique_char(str1)
// {
//  var str=str1;
//  var uniql="";
//  for (var x=0;x < str.length;x++)
//  {
//  if(uniql.indexOf(str.charAt(x))==-1)
//   {
//   uniql += str[x];  
//    }
//   }
//   return uniql;  
// }  
// console.log(unique_char("ajeet"));


//17 Write a JavaScript function to get the number of occurrences of each letter in specified string. 

function count_occur( str )
{
  for( let i = 0 ;i < str.length ;i++)
  {
    //variable counting occurrence
    let count = 0;
    for( let j = 0 ;j < str.length ;j++)
    {
      if( str[i] == str[j]  )
      {
        count++;
      }
    }
    if( count > 0)
    console.log(`${str[i]} occurs ${count} times`);
  }
}
console.log(count_occur('ajaeethjjr'))


//18 Write a function for searching JavaScript arrays with a binary search. 

// function binarySearch(arr,n){
//     let array=arr;
//     for(let i=0;i<array.length;i++){
//         if(array[i]==n){
//             return i;
//         }
//     }
// }
// console.log(binarySearch([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23],6))


//19 Write a JavaScript function that returns array elements larger than a number.

// function BiggerElements(val)
//    {
//      return function(evalue, index, array)
//      {
//      return (evalue >= val);
//      };
//    }
// var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
// console.log(result);


//20 Write a JavaScript function that generates a string id (specified length) of random characters.
//Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// function makeid(l)
// {
// var text = "";
// var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// for(var i=0; i < l; i++ )
// {  
// text += char_list.charAt(Math.floor(Math.random() * char_list.length));
// }
// return text;
// }
// console.log(makeid(8));


//22 Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

// function occurrence(str,ch){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]==ch){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(occurrence('w3resorurce.com','r'))


//23 Write a JavaScript function to find the first not repeated character.
//Sample arguments : 'abacddbec'
//Expected output : 'e'

// function find_FirstNotRepeatedChar(str) {
//     var arra1 = str.split('');
//     var result = '';
//     var ctr = 0;
//     for (var x = 0; x < arra1.length; x++) {
//       ctr = 0;
//       for (var y = 0; y < arra1.length; y++) 
//       {
//         if (arra1[x] === arra1[y]) {
//           ctr+= 1;
//         }
//       }
//       if (ctr < 2) {
//         result = arra1[x];
//         break;
//       }
//     }
//     return result;
//   }
//   console.log(find_FirstNotRepeatedChar('abacddbec'));
  
//24 Write a JavaScript function to apply Bubble Sort algorithm.

// function bubble_Sort(a)
// {
//     var swapp;
//     var n = a.length-1;
//     var x=a;
//     do {
//         swapp = false;
//         for (var i=0; i < n; i++)
//         {
//             if (x[i] < x[i+1])
//             {
//                var temp = x[i];
//                x[i] = x[i+1];
//                x[i+1] = temp;
//                swapp = true;
//             }
//         }
//         n--;
//     } while (swapp);
//  return x; 
// }
// console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


//25 Write a JavaScript function that accept a list of country names as input and returns the longest country name as output
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

// function Longest_Country_Name(country_name)
//   {
//   return country_name.reduce(function(lname, country) 
//   {
//     return lname.length > country.length ? lname : country;
//   }, 
// "");
// }
// console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));


//26