//51 Write a JavaScript program to convert a given number to hours and minutes.Write a JavaScript program to convert a given number to hours and minutes.

// function hoursMinutes(num){
//     let hours=Math.floor(num/60);
//     let minutes=num%60;
//     return hours+':'+minutes;
// }
// console.log(hoursMinutes(71))
// console.log(hoursMinutes(450))

//52 Write a JavaScript program to convert the letters of a given string in alphabetical order.

// function alphabet(str){
//     return str.split('').sort().join('')
// }
// console.log(alphabet('Ajeet'))
// console.log(alphabet('Python'))

//53 Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

// function check3Char(str){
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='a' && str[i+4]=='b'){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }
// console.log(check3Char("Chainsbreak"));
// console.log(check3Char("pane borrowed"));
// console.log(check3Char("abCheck"));

//54 Write a JavaScript program to count the number of vowels in a given string.

// function countVowels(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("Python"));
// console.log(countVowels("w3resource.com"));


//55 Write a JavaScript program to check whether a given string contains equal number of p's and t's.

//56 Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.

// function division_string(n1, n2) {
  
//     n1 = 80;
//     n2 = 6;
    
//     var div = Math.round(n1 / n2).toString(),
//     result_array = div.split("");
    
//     if (div >= 1000)
//     {
//     for (var i = div.length - 3; i > 0; i -= 3) 
//     {
//     result_array.splice(i, 0, ",");
//     }
//     result_array;
//     }
//     console.log(result_array)
// }''


//57 Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
// function string_copies (str, n) 
// {
//   if (n < 0)
//     return false;
//   else
//   return str.repeat(n);
// }
// console.log(string_copies("abc", 5));
// console.log(string_copies("abc", 2));
// console.log(string_copies("abc", -2));


//58 Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.

// function lastThree(str){
//     if(str.length>=3){
//         result_str=str.substring(str.length-3);
//         return str+result_str+result_str+result_str;
//     }else{
//         return false;
//     }
// }
// console.log(lastThree('Aj'))
// console.log(lastThree('Ajju'))
// console.log(lastThree('Ajeet'))
// console.log(lastThree('abc'))

//59 Write a JavaScript program to extract the first half of a string of even length.

// function halfString(str){
//     if(str.length%2==0){
//         //let result_str=str.substring(str.length-((str.length)/2)) //after half
//         //let result_str=str.slice(0,str.length/2)  //before half
//         return result_str;
//     }else{
//         return false;
//     }
// }
// console.log(halfString('abcd'))

//60 Write a JavaScript program to create a new string without the first and last character of a given string.

// function without_first_end(str) {
//     return str.substring(1, str.length - 1);
// }
// console.log(without_first_end('JavaScript'));
// console.log(without_first_end('JS'));
// console.log(without_first_end('PHP'));

// function without_first_end(str) {
//     for(let i=1;i<str.length-1;i++){
//         let new_str=str[i];
//         return new_str;
//     }
// }
// console.log(without_first_end('JavaScript'));
// console.log(without_first_end('JS'));
// console.log(without_first_end('PHP'));
  

//61 Write a JavaScript program to concatenate two strings except their first character.

// function concatenate(str1,str2){
//     str1=str1.substring(1,str1.length)
//     str2=str2.substring(1,str2.length)
//     return str1+str2;
// }
// console.log(concatenate("PHP","JS"));
// console.log(concatenate("A","B"));
// console.log(concatenate("AA","BB"));

//62 Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.

// function right_three(str) {
//      if (str.length > 1)
//        {
//          return str.slice(-3) + str.slice(0, -3);
//        }
//   return str;
// }
// console.log(right_three("Python"));
// console.log(right_three("JavaScript"));
// console.log(right_three("Hi"));


//63 *** Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.

// function middleCharacter(str){
//     if(str.length%2!=0){
//         mid=(str.length+1)/2;
//         return str.slice(mid-2,mid+1)
//     }
//     return str;
// }
// console.log(middleCharacter('abcdefg'));
// console.log(middleCharacter('HTML5'));
// console.log(middleCharacter('Python'));
// console.log(middleCharacter('PHP'));
// console.log(middleCharacter('Exercises'));

//64 ***Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.

// function str_con_cat(str1, str2) {
//     const m = Math.min(str1.length, str2.length);
//     return str1.substring(str1.length - m) + str2.substring(str2.length - m);
//   }
//   console.log(str_con_cat("Python", "JS"));
//   console.log(str_con_cat("ab", "cdef"));

//65 ***Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6.

// function end_script(str) {
//     if (str.substring(str.length - 6 , str.length) == 'Script') 
//     {
//       return true;
//     } 
//     else 
//     {
//       return false;
//     }
//   }
//   console.log(end_script("JavaScript"));
//   console.log(end_script("Java Script"));
//   console.log(end_script("Java Scripts"));

//66 Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

// function cityName(str){
//     if(str.length>=3 && ((str.substring(0,3)=='Los')||(str.substring(0,3)=='New'))){
//         return str;
//     }else{
//         return '';
//     }
// }
// console.log(cityName("New York"));
// console.log(cityName("Los Angeles"));
// console.log(cityName("London"));

//67 ****Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.

// function nop(str) {
//     let start_pos = 0;
//     let end_pos = str.length;
//     if (str.length > 0 && str.charAt(0) == 'P') 
//       { 
//         start_pos = 1; 
//       }
//     if (str.length > 1 && str.charAt(str.length - 1) == 'P') 
//     {
//       end_pos--;
//     }
//     return str.substring(start_pos, end_pos);
//   }
//   console.log(nop("PythonP"));
//   console.log(nop("Python"));
//   console.log(nop("JavaScript"));
  

//68 Write a JavaScript program to create a new string taking the first and last n characters from a given string. The string length must be greater or equal to n.

// function firstLast(str,n){
//     return str.substring(0,n)+str.substring(str.length-n)
// }
// console.log(firstLast("JavaScript", 2));
// console.log(firstLast("JavaScript", 3));

//69 Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

// function sum(arr){
//     let s=0;
//     for(let i=0;i<=2;i++){
//         s+=arr[i]
//     }
//     return s;
// }
// console.log(sum([10,32,20]))

//70 Write a JavaScript program to rotate the elements left of a given array of integers of length 3.

// function rotate_elements_left(array)
// {
//     return [array[1], array[2], array[0]];
// }
// console.log(rotate_elements_left([3, 4, 5]));  
// console.log(rotate_elements_left([0, -1, 2]));  
// console.log(rotate_elements_left([7, 6, 5])); 

//71 Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.

// function firstLast1(arr){
//     if(arr[0]==1 || arr[arr.length-1]==1){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(firstLast1([1,3,5]))
// console.log(firstLast1([4,3,1]))
// console.log(firstLast1([8,3,5]))


//72 Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3.

// function firstLastEqual(arr){
//     if(arr[0]==arr[arr.length-1]){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(firstLastEqual([10, 20, 30])); 
// console.log(firstLastEqual([10, 20, 30, 10])); 
// console.log(firstLastEqual([20, 20, 20]));

//73 Write a JavaScript program to reverse the elements of a given array of integers length 3.

// function reverse(arr){
//     let newstr=[];
//     for(let i=arr.length-1;i>=0;i--){
//         newstr.push(arr[i]);
//     }
//     return newstr;
// }
// console.log(reverse([1,2,3]))
// console.log(reverse([4,6,2,7,8,0,9]))
// console.log(reverse([4,6,1,2,3]))

//74 ****Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.

// function all_max(nums) 
//  {
//     var max_val = nums[0] > nums[2] ? nums[0] : nums[2];
//     nums[0] = max_val;
//     nums[1] = max_val;
//     nums[2] = max_val;
//     return nums;
// }
// console.log(all_max([20, 30, 40]));
// console.log(all_max([-7, -9, 0]));
// console.log(all_max([12, 10, 3]));


//75 Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.
// function middle_elements(a, b) 
// {
//   var new_array = []
//   new_array.push(a[1], b[1]);
//   return new_array;
// }
// console.log(middle_elements([1, 2, 3], [1, 5, 6]));  
// console.log(middle_elements([3, 3, 3], [2, 8, 0]));  
// console.log(middle_elements([4, 2, 7], [2, 4, 5])); 

//76 Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1.
// function started(nums) {
//     var array1 = [];
//     array1.push(nums[0], nums[nums.length - 1]);
//     return array1;
// }
// console.log(started([20, 20, 30]));
// console.log(started([5, 2, 7, 8]));
// console.log(started([17, 12, 34, 78])); 


//77 Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.

// function check1Or3(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==1 || arr[i]==3){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }
// console.log(check1Or3([1, 5]));  
// console.log(check1Or3([2, 3]));  
// console.log(check1Or3([7, 5])); 

// function contains13(nums) {
//     if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1){
//        return true
//     } 
//     else
//     {
//        return false
//     }
// }
// console.log(contains13([1, 5]));  
// console.log(contains13([2, 3]));  
// console.log(contains13([7, 5])); 


//78 Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3.
// function is13(nums) {
//     if (nums.indexOf(1) == -1 && nums.indexOf(3) == -1){
//         return true;
//     } else {
//         return false;
//     }
//   }
//   console.log(is13([7, 8]));
//   console.log(is13([3, 2]));
//   console.log(is13([0, 1])); 
  

//79Write a JavaScript program to test whether a given array of integers contains 30 or 40 twice. The array length should be 0, 1, or 2.
// function twice3040(arra1) {
//     let a = arra1[0],
//         b = arra1[1];
//     return (a === 30 && b === 30) || (a === 40 && b === 40);
// }
// console.log(twice3040([30, 30]));
// console.log(twice3040([40, 40]));
// console.log(twice3040([20, 20]));
// console.log(twice3040([30]));


//80 Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

// function swap(arr){
//     [arr[0],arr[arr.length-1]]=[arr[arr.length-1],arr[0]]
//     return arr;
// }
// console.log(swap([1, 2, 3, 4]));  
// console.log(swap([0, 2, 1]));  
// console.log(swap([3])); 

//81 Write a JavaScript program to add two digits of a given positive integer of length two.

// function sumDigit(num){
//     let sum=0;
//     while(num>0){
//         let r=num%10;
//         sum+=r;
//         num=Math.floor(num/10);
//     }
//     return sum;
// }
// console.log(sumDigit(53434))

//82 ***Write a JavaScript to add two positive integers without carry.

// function add_two_int_without_carrying(n1, n2) {
//     var result = 0,
//         x = 1;
//     while (n1 > 0 && n2 > 0) {
//         result += x * ((n1 + n2) % 10);
//         n1 = Math.floor(n1 / 10);
//         n2 = Math.floor(n2 / 10);
//         x*= 10;
//     }
//     return result;
// }
// console.log(add_two_int_without_carrying(222, 911))
// console.log(add_two_int_without_carrying(208, 908))


//83 ***Write a JavaScript to find the longest string from a given array of strings.

// function longestString(arr){
//     let l=0;
//     var longest;
//     for(var i=0 ;i<arr.length;i++){
//         if(arr[i].length>l){
//             l=arr[i].length;
//             longest=arr[i]
//         }
//     }
//     return longest;
// }
// console.log(longestString(['a', 'aa', 'aaa','aaaaa','aaaa']))
// console.log(longestString(['ajju', 'ajay', 'anjeet','ajeet']))

//84 ****Write a JavaScript to replace each character of a given string by the next one in the English alphabet.

// function alphabet_char_Shift(str) {
//     var all_chars = str.split("");
//     for(var i = 0; i < all_chars.length; i++) {
//       var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
//       n = (n + 1) % 26; 
//       all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
//     }
//     return all_chars.join("");
//   }
//   console.log(alphabet_char_Shift("abcdxyz"))
  


//85 *** Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.

// function alternate_Sums(arr) {
//     var result = [0, 0];
//     for(var i = 0; i < arr.length; i++) 
//     {
//       if(i % 2) result[1] += arr[i];
//       else
//         result[0] += arr[i];
//     }
//     return result
//   }
//   console.log(alternate_Sums([1, 3, 6, 2, 5, 10]))
  

//86  Write a JavaScript program to check whether two given integers are similar or not, if a given divisor divides both integers and it does not divide either.

// function checking_numbers(x, y, divisor) {
//     if(x % divisor === 0 && y % divisor === 0 || x % divisor !== 0 && y % divisor !==
//       0) {
//       return true;
//     }
//     return false;
//   }
//   console.log(checking_numbers(10, 25, 5))
//   console.log(checking_numbers(10, 20, 5))
//   console.log(checking_numbers(10, 20, 4))
  
  //87 Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.

//   function check_arithmetic_Expression(x, y, z) {
//     return x + y == z || x * y == z || x / y == z || x - y == z;
//   }
  
//   console.log(check_arithmetic_Expression(10, 25, 35))
//   console.log(check_arithmetic_Expression(10, 25, 250))
//   console.log(check_arithmetic_Expression(30, 25, 5))
//   console.log(check_arithmetic_Expression(100, 25, 4.0))
//   console.log(check_arithmetic_Expression(100, 25, 25))
  

//90 ********Write a JavaScript program to find the kth greatest element of a given array of integers.

// function Kth_greatest_in_array(arr, k) {
//     for (var i = 0; i < k; i++) {
//       var max_index = i,
//         tmp = arr[i];
//       for (var j = i + 1; j < arr.length; j++) {
//         if (arr[j] > arr[max_index]) {
//           max_index = j;
//         }
//       }
//       arr[i] = arr[max_index];
//       arr[max_index] = tmp;
//     }
//     return arr[k - 1];
//   }
//   console.log(Kth_greatest_in_array([1,2,6,4,5], 3))
//   console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))
  
//91 ****Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.

// function array_max_consecutive_sum(nums, k) {
//     let result = 0;
//     let temp_sum = 0;
//     for (var i = 0; i < k - 1; i++) {
//       temp_sum += nums[i];
//     }
//     for (var i = k - 1; i < nums.length; i++) {
//       temp_sum += nums[i];
//       if (temp_sum > result) {
//         result = temp_sum;
//       }
//       temp_sum -= nums[i - k + 1];
//     }
//     return result;
//   }
//   console.log(array_max_consecutive_sum([1, 2, 3, 14, 5], 2))
//   console.log(array_max_consecutive_sum([2, 3, 5, 1, 6], 3))
//   console.log(array_max_consecutive_sum([9, 3, 5, 1, 7], 2))
  

//92 Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.

// function max_difference(arr) {
// 	var max = -1;
//     var temp;
// 	for (var i = 0; i < arr.length - 1; i++)
//       {
// 		temp = Math.abs(arr[i] - arr[i + 1]);
// 		max = Math.max(max, temp);
// 	  }
// 	return max;
// }
// console.log(max_difference([1, 2, 3, 8, 9]))
// console.log(max_difference([1, 2, 3, 18, 9]))
// console.log(max_difference([13, 2, 3, 8, 9]))

//93 ***Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.

// function array_max_diff(arr) {
//     var max_result = 0;
//     for(var i=0;i<arr.length;i++)
//        {
//         for(var k=0; k!=i && k<arr.length; k++)
//         {
//             var diff = Math.abs(arr[i]-arr[k]);
//             max_result = Math.max(max_result, diff);
//         }
//     }
//     return max_result;
// }
// console.log(array_max_diff([1, 2, 3, 8, 9]))
// console.log(array_max_diff([1, 2, 3, 18, 9]))
// console.log(array_max_diff([13, 2, 3, 8, 9]))


//94 ***Write a JavaScript program to find the number which appears most in a given array of integers.

// function array_element_mode(arr) {
//     var ctr = [],
//       ans = 0;
//     for(var i = 0; i < 10; i++) {
//       ctr.push(0);
//     }
//     for(var i = 0; i < arr.length; i++) {
//       ctr[arr[i] - 1]++;
//       if(ctr[arr[i] - 1] > ctr[ans]) {
//         ans = arr[i] - 1;
//       }
//     }
//     return ans + 1;  
//   }
//   console.log(array_element_mode([1, 2, 3, 2, 2, 8, 1, 9]))
  

//95 ***Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.

// function array_element_replace(arr, old_value, new_value) {
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] === old_value) {
//         arr[i] = new_value;
//       }
//     }
//     return arr;
//   }
//   num = [1, 2, 3, 2, 2, 8, 1, 9];
//   console.log("Original Array: "+num);
//   console.log(array_element_replace(num, 2, 5));
  

//96 ****Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.

// function sum_adjacent_difference(arr) {
// 	var result = 0;
// 	for (var i = 1; i < arr.length; i++) {
// 		result += Math.abs(arr[i] - arr[i - 1]);
// 	}
// 	return result;
// }
// console.log(sum_adjacent_difference([1, 2, 3, 2, -5]));


//97 ***Write a JavaScript program to find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it.

// function build_Palindrome(new_str) {
//     var flag;
//     for (var i = new_str.length;; i++) {
//       flag = true;
//       for (var j = 0; j < i - j - 1; j++) {
//         if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
//           flag = false;
//           break;
//         }
//       }
//       if (flag) {
//         for (var j = new_str.length; j < i; j++) {
//           new_str += new_str[i - j - 1];
//         }
//         return new_str;
//       }
//     }
//   }
//   console.log(build_Palindrome("abcddc"))
//   console.log(build_Palindrome("122"))
  

//98 Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case.


//99 *****Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string.
// function rearrangement_characters(str1, str2) {
//     var first_set = str1.split(''),
//         second_set = str2.split(''),
//         result = true;
//     first_set.sort();
//     second_set.sort();
//     for (var i = 0; i < Math.max(first_set.length, second_set.length); i++) {
//       if (first_set[i] !== second_set[i]) {
//         result = false;
//       }
//     }
//     return result;
//   }
//   console.log(rearrangement_characters("xyz", "zyx"))
//   console.log(rearrangement_characters("xyz", "zyp"))
  

//100  Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers.
function check_common_element(arra1, arra2) {
    for (var i = 0; i < arra1.length; i++)
    {
      if (arra2.indexOf(arra1[i]) != -1) 
        return true;
    }
    return false;
  }
  console.log(check_common_element([1,2,3], [3,4,5]));   
  console.log(check_common_element([1,2,3], [5,6,7]));   
  