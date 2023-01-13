//101**** Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.

// function test_string(input_str) {
//     var is_lower_case = function(symbol) {
//       if ('a' <= symbol && symbol <= 'z') {
//         return true;
//       }
//       return false;
//     }
//     var is_upper_case = function(symbol) {
//       if ('A' <= symbol && symbol <= 'Z') {
//         return true;
//       }
//       return false;
//     }
//     var is_first_char_lower = is_lower_case(input_str[0]),
//     var is_first_char_upper = is_upper_case(input_str[0]);
//     if (!(is_first_char_lower || is_first_char_upper)) {
//       return false;
//     }
//     for (var i = 1; i < input_str.length; i++) {
//       if (i % 2) {
//         if (is_lower_case(input_str[i]) === is_first_char_lower ||
//           is_upper_case(input_str[i]) === is_first_char_upper) {
//           return false;
//         }
//       } else {
//         if (is_lower_case(input_str[i]) !== is_first_char_lower ||
//           is_upper_case(input_str[i]) !== is_first_char_upper) {
//           return false;
//         }
//       }
//     }
//     return true;
//   }
//   console.log(test_string('xYr'));   
//   console.log(test_string('XXyx'));  
//   console.log(test_string('xxYr'));   
//   console.log(test_string('XxYx'));   
  

//102 Write a JavaScript program to find the number of inversions of a given array of integers.

// function number_of_InversionsNaive(arr) {
//     var ctr = 0;
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) 
//               ctr++;
//         }
//     }
//     return ctr;
// }
// console.log(number_of_InversionsNaive([0, 3, 2, 5, 9]));   
// console.log(number_of_InversionsNaive([1, 5, 4, 3]));   
// console.log(number_of_InversionsNaive([10, 30, 20, -10]));  


//103 ***Write a JavaScript program to find the maximum number from a given positive integer by deleting exactly one digit of the given number.
// function digit_delete(num) {
//     var result = 0,
//         num_digits = [];
//     while (num) {
//         num_digits.push(num % 10);
//         num = Math.floor(num / 10);
//     }
//     for (var index_num = 0; index_num < num_digits.length; index_num++) {
//         var n = 0;
//         for (var i = num_digits.length - 1; i >= 0; i--) {
//             if (i !== index_num) {
//                 n = n * 10 + num_digits[i];
//             }
//         }
//         result = Math.max(n, result);
//     }
//     return result;
// }
// console.log(digit_delete(100));
// console.log(digit_delete(10));
// console.log(digit_delete(1245)); 


//104 ***Write a JavaScript program to find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer.

// function different_values(ara, n) {
//     var max_val = -1;
//     for (var i = 0; i < ara.length; i++) {
//         for (var j = i + 1; j < ara.length; j++) {
//             var x = Math.abs(ara[i] - ara[j]);
//             if (x <= n) {
//                 max_val = Math.max(max_val, x)
//             }
//         }
//     }
//     return max_val
// }
// console.log(different_values([12, 10, 33, 34], 10));
// console.log(different_values([12, 10, 33, 34], 24));
// console.log(different_values([12, 10, 33, 44], 40));


//105 **Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number.

// function digit_to_one(num) {
//     var digitSum = function(num) {
//         var digit_sum = 0;
//         while (num) {
//             digit_sum += num % 10;
//             num = Math.floor(num / 10);
//         }
//         return digit_sum;
//     };
//     var result = 0;
//     while (num >= 10) {
//         result += 1;
//         num = digitSum(num);
//     }
//     return result;
// }
// console.log(digit_to_one(123))
// console.log(digit_to_one(156))

//106 Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.

// function divide_digit(num, d) {
//     if (d==1)
//       return num;
//     else
//     {
//    while (num % d === 0) {
//      num /= d;
//      }
//  return num;
//     }
// }
// console.log(divide_digit(-12, 2))
// console.log(divide_digit(13, 2))
// console.log(divide_digit(13, 1))


//107 Write a JavaScript program to find the number of sorted pairs formed by its elements of a given array of integers such that one element in the pair is divisible by the other one.

// function pairDivisible(arr){
//     var result=0;
//     for(var i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]%arr[j]===0 ||arr[j]%arr[i]===0){
//                 result++;
//             }
//         }
//     }
//     return result;
// }
// console.log(pairDivisible([1,2,3]))
// console.log(pairDivisible([2,4,6]))
// console.log(pairDivisible([2,4,16]))

//108 ***Write a JavaScript program to create the dot products of two given 3D vectors.
//Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.

// function dot_product(vector1, vector2) {
//     var result = 0;
//     for (var i = 0; i < 3; i++) {
//       result += vector1[i] * vector2[i];
//     }
//     return result;
//   }
//   console.log(dot_product([1,2,3], [1,2,3]))
//   console.log(dot_product([2,4,6], [2,4,6]))
//   console.log(dot_product([1,1,1], [0,1,-1]))
  

//109 ** Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.

// function sort_prime(num) {
//     var prime_num1 = [],
//         prime_num2 = [];
//     for (var i = 0; i <= num; i++) {
//       prime_num2.push(true);
//     }
//     for (var i = 2; i <= num; i++) {
//       if (prime_num2[i]) {
//         prime_num1.push(i);
//         for (var j = 1; i * j <= num; j++) {
//           prime_num2[i * j] = false;
//         }
//       }
//     }
//     return prime_num1;
//   }
//   console.log(sort_prime(5))
//   console.log(sort_prime(11))
//   console.log(sort_prime(19))
  

//110 Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.

// function find_numbers(arr_num, num) {
//     var result = 0;
//     for (var i = 0; i < arr_num.length; i++)
//     {
//         if (arr_num[i] % 2 !== 0 && arr_num[i] !== num) {
//             result++;
//         }
//         if (arr_num[i] === num) 
//         {
//             return result;
//         }
//     }
//     return -1;
// }
// console.log(find_numbers([1,2,3,4,5,6,7,8], 5))
// console.log(find_numbers([1,3,5,6,7,8], 6))


//111  Write a JavaScript program to check a number from three given numbers where two numbers are equal, find the third one.

// function find_third_number(x, y, z) {
//     if((x!==y) && (x!==z) && (y!==z))
//      return "Three numbers are unequal.";
//      if(x==y) return z;
//      if(x==z) return y;
//      return x;
//  }
//  console.log(find_third_number(1,2,2))
//  console.log(find_third_number(1,1,2))
//  console.log(find_third_number(1,2,3))

//112 Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number

// function trailing_zeros_factorial(n) {
//     var result = 0;
//     for (var i = 5; i <= n; i += 5) {
//         var num = i;
//         while (num % 5 === 0) {
//             num /= 5;
//             result++;
//         }
//     }
//     return result;
// }
// console.log(trailing_zeros_factorial(8))
// console.log(trailing_zeros_factorial(9))
// console.log(trailing_zeros_factorial(10))

 
//113  Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integer.
// function int_sum(num) {
//     var s_sum = 0;
//     while (num > 0) {
//         s_sum += num;
//         num = Math.floor(num / 2);
//     }
//     return s_sum;
// }
// console.log(int_sum(8))
// console.log(int_sum(9))
// console.log(int_sum(26))


//114 Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered correct sentence if it starts with the capital letter and ends with a full stop (.).

// function is_correct_Sentence(input_str) {
//     var first_char = input_str[0];
//     var last_char = input_str[input_str.length - 1];
//     return /[A-Z]/.test(first_char) && last_char == "."
// }
// console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts."));
// console.log(is_correct_Sentence("This tool will help you write better English and efficiently corrects texts"));            
// console.log(is_correct_Sentence("this tool will help you write better English and efficiently corrects texts."));


//115 Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right).

// function diagonalMatrix(arr){
//     for(var i=0;i<arr.length;i++){
//         for(var j=0;j<arr.length;j++){
//             if(i!==j && arr[i][j]!==0)
//             return false;
//         }
//     }
//     return true;
// }
// console.log(diagonalMatrix([[1,0,0],[0,2,0],[0,0,3]]))
// console.log(diagonalMatrix([[1,0,0],[0,2,3],[0,0,3]]))

//****116 Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.

// function is_divisible_by3(mask_str) {
//     var digitSum = 0,
//       left = '0'.charCodeAt(),
//       right = '9'.charCodeAt(),
//       result = [],
//       mask_data = mask_str.split(''),
//       hash_pos = -1;
//     for (var i = 0; i < mask_data.length; i++) {
//       if (left <= mask_data[i].charCodeAt() && mask_data[i].charCodeAt() <= right)
//       {
//         digitSum += mask_data[i].charCodeAt() - left;
//       } 
//       else 
//       {
//         hash_pos = i;
//       }
//     }
//     for (var i = 0; i < 10; i++) {
//       if ((digitSum + i) % 3 === 0) {
//         mask_data[hash_pos] = String.fromCharCode(left + i);
//         result.push(mask_data.join(''));
//       }
//     }
//     return result;
//   }
//   console.log(is_divisible_by3("2#0"))
//   console.log(is_divisible_by3("4#2"))

//117 *** Write a JavaScript program to check whether a given matrix is an identity matrix.

// function is_identity_Matrix(matrix_data) {
//     //Checks whether given matrix is a square matrix or not
//     for (var i = 0; i < matrix_data.length; i++)
//     {
//         rows = matrix_data.length;
//         cols = matrix_data[i].length;
//         if(rows != cols){
//             console.log("Matrix should be a square matrix");
//             return false;
//         }
//     }
//     for (var i = 0; i < matrix_data.length; i++)
//     {
//         for (var j = 0; j < matrix_data.length; j++)
//         {
//           if (matrix_data[i][j] !== 1 && i === j || matrix_data[i][j] && i !== j)
//           {
//             return false;
//           }
//         }
//       }
//       return true;
//     }
//     console.log(is_identity_Matrix([[1, 0, 0, 2], [0, 1, 0], [0, 0, 1]]))
//     console.log(is_identity_Matrix([[1, 0, 0],  [0, 1, 0],  [0, 0, 1]]))
//     console.log(is_identity_Matrix([[1, 0, 1],  [0, 1, 0],  [0, 0, 1]])) 
    

//118 Write a JavaScript program to check whether a given number is in a given range.

// function is_inrange(x, y, z) 
// {
//     return y >= x && y <= z;
// }

// console.log(is_inrange(1,2,3));
// console.log(is_inrange(1,2,-3));
// console.log(is_inrange(1.1,1.2,1.3));

//119 **Write a JavaScript program to check whether a given integer has an increasing digits sequence.
// function is_increasing_digits_Sequence(num) {
//     var arr_num = ('' + num).split(''); 
//     for (var i = 0; i < arr_num.length - 1; i++) {
//       if (parseInt(arr_num[i]) >= parseInt(arr_num[i + 1]))
//         return false;
//       }
//     return true;
//   }
//console.log(is_increasing_digits_Sequence(123));
//console.log(is_increasing_digits_Sequence(1223));
//console.log(is_increasing_digits_Sequence(45677));
  
//120 Write a JavaScript program to check whether a point lies strictly inside a given circle

// function check_a_point(a, b, x, y, r) {
//     var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
//     r *= r;
//     if (dist_points < r) {
//         return true;
//     }
//     return false;
// }
// console.log(check_a_point(0, 0, 2, 4, 6));
// console.log(check_a_point(0, 0, 6, 8, 6));


//121 Write a JavaScript program to check whether a given matrix is lower triangular or not.
//Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.

// function lower_triangular_matrix(user_matrix) {
//     for (var i = 0; i < user_matrix.length; i++) 
//          {
//         for (var j = 0; j < user_matrix[0].length; j++) 
//             {
//             if (j > i && user_matrix[i][j] !== 0)
//               return false;
//         }
//     }
//     return true;
// }
// console.log(lower_triangular_matrix([[1, 0, 0],[2, 0, 0], [0, 3, 3]]));
// console.log(lower_triangular_matrix([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));


//122 ***Write a JavaScript program to check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence
// function is_monotonous(num) {
//     if (num.length === 1) {
//         return true;
//     }
//     var num_direction = num[1] - num[0];
//     for (var i = 0; i < num.length - 1; i++) {
//         if (num_direction * (num[i + 1] - num[i]) <= 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(is_monotonous([1, 2, 3]));
// console.log(is_monotonous([1, 2, 2]))
// console.log(is_monotonous([-3, -2, -1]))
// console.log(is_monotonous([4,2,1]))


//123 ***Write a JavaScript program to find whether the members of a given array of integers is a permutation of numbers from 1 to a given integer.

// function is_permutation(input_arr, n) {
//     for (var i = 0; i < n; i++) {
//         if (input_arr.indexOf(i + 1) < 0) 
//           return false;
//     }
//     return true;
// }
// console.log(is_permutation([1, 2, 3, 4, 5], 5));
// console.log(is_permutation([1, 2, 3, 5], 5));

//124 Write a JavaScript program to create the value of NOR of two given booleans.
// function test_logical_Nor(a, b) {
//     return (!a && !b)
//   }
//   console.log(test_logical_Nor(true, false));
//   console.log(test_logical_Nor(false, false));
//   console.log(test_logical_Nor(true, true));
  
//125 Write a JavaScript program to find the longest string from a given array.

// function longest_str_in_array(arra)
//   {
//     var max_str = arra[0].length;
//     var ans = arra[0];
//     for (var i = 1; i < arra.length; i++) {
//         var maxi = arra[i].length;
//         if (maxi > max_str) {
//             ans = arra[i];
//             max_str = maxi;
//         }
//     }
//     return ans;
// }
// console.log(longest_str_in_array(["ab", "a", "abcd"]));
// console.log(longest_str_in_array(["ab", "ab", "ab"]));


//126***  Write a JavaScript program to get the largest even number from an array of integers.

// function max_even(arra) {
//     arra.sort((x, y) => y - x);
//     for (var i = 0; i < arra.length; i++) {
//       if (arra[i] % 2 == 0)
//         return arra[i];
//       }
//     }
//   console.log(max_even([20, 400, 200]));
//   console.log(max_even([20990, 40, 30, 301]));
  

//127 ***Write a JavaScript program to reverse the order of the bits in a given integer.

// function mirror_bits(n) {
//     return parseInt(n.toString(2).split("").reverse().join(""), 2);
//   }
//   console.log(mirror_bits(56));
//   console.log(mirror_bits(234));
  

//128 ***Write a JavaScript program to find the smallest round number that is not less than a given value.

// function nearest_round_number(num) {
//     while (num % 10) {
//         num++;
//     }
//     return num;
// }
// console.log(nearest_round_number(56));
// console.log(nearest_round_number(591));

//129 Write a JavaScript program to find the smallest prime number strictly greater than a given number. 

// function next_Prime_num(num) {
//     for (var i = num + 1;; i++) {
//         var isPrime = true;
//         for (var d = 2; d * d <= i; d++) {
//             if (i % d === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             return i;
//         }
//     }
// }
// console.log(next_Prime_num(3));
// console.log(next_Prime_num(17));


//130 Write a JavaScript program to find the number of even digits in a given integer.
// function even_digits(num) {
//     var ctr = 0;
//     while (num) {
//       ctr += num % 2 === 0;
//       num = Math.floor(num / 10);
//     }
//     return ctr;
//   }
//   console.log(even_digits(123));
//   console.log(even_digits(1020));
//   console.log(even_digits(102));
  

//131 Write a JavaScript program to create an array of prefix sums of the given array

// function prefix_sum(arr){
//     let new_arr=[];
//     for(let i=0;i<arr.length;i++){
//         new_arr[i]=0;
//         for(let j=0;j<i+1;j++){
//             new_arr[i]+=arr[j];
//         }
//     }
//     return new_arr;
// }
// console.log(prefix_sum([1, 2, 3, 4, 5]));
// console.log(prefix_sum([1, 2, -3, 4, 5]));


//132** Write a JavaScript program to find all distinct prime factors of a given integer.

// function prime_factors(num) {
//     function is_prime(num) {
//       for (let i = 2; i <= Math.sqrt(num); i++)
//       {
//         if (num % i === 0) return false;
//       }
//       return true;
//     }
//     const result = [];
//     for (let i = 2; i <= num; i++)
//     {
//       while (is_prime(i) && num % i === 0) 
//       {
//         if (!result.includes(i)) 
//         result.push(i);
//         num /= i;
//       }
//     }
//     return result;
//   }
//   console.log(prime_factors(100));
//   console.log(prime_factors(101));
//   console.log(prime_factors(103));
//   console.log(prime_factors(104));
//   console.log(prime_factors(105));
  
//133 Write a JavaScript program to check whether a given fraction is proper or not.

// function proper_improper_test(num) {
//     return Math.abs(num[0] / num[1]) < 1
//       ? "Proper fraction."
//       : "Improper fraction.";
//   }
//   console.log(proper_improper_test([12, 300]));
//   console.log(proper_improper_test([2, 4]));
//   console.log(proper_improper_test([103, 3]));
//   console.log(proper_improper_test([104, 2]));
//   console.log(proper_improper_test([5, 40]));
  

//134 ***Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

// function change_char(str1) {
// 	var result = [];
// 	for (var i = 0; i < str1.length; i++)
//     {
// 		var char_order = str1.charCodeAt(i) - 'a'.charCodeAt(0),
// 			change_char = 25- char_order + 'a'.charCodeAt(0);
// 		result.push(String.fromCharCode(change_char));
// 	}
// 	return result.join("");
// }
// console.log(change_char("abcxyz"));
// console.log(change_char("python"));  


//135 **Write a JavaScript program to remove all characters from a given string that appear more than once.
// function remove_duplicate_cchars(str) {
//     var arr_char = str.split("");
//     var result_arr = [];
  
//     for (var i = 0; i < arr_char.length; i++) {
//       if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
//         result_arr.push(arr_char[i]);
//       }
  
//     return result_arr.join("");
//   }
//   console.log(remove_duplicate_cchars("abcdabc"));
//   console.log(remove_duplicate_cchars("python"));
//   console.log(remove_duplicate_cchars("abcabc"));
//   console.log(remove_duplicate_cchars("1365451"));
  
//136** Write a JavaScript program to replace the first digit in a string (should contains at least digit) with $ character. 

// function replace_first_digit(input_str) {

//     return input_str.replace(/[0-9]/, '$');
//   }
//   console.log(replace_first_digit("abc1dabc"));
//   console.log(replace_first_digit("p3ython"));
//   console.log(replace_first_digit("ab1cabc"));   
  

//137 **Write a JavaScript program to test whether a given integer is greater than 15 return the given number, otherwise return 15.

// function test_fifteen(num) 
// {
//     while(num<15){
//         num++;
//     }
//     return num;
// }
// console.log(test_fifteen("123"));
// console.log(test_fifteen("10"));
// console.log(test_fifteen("5"));


//138**Write a JavaScript program to reverse the bits of a given 16 bits unsigned short integer.
// function sixteen_bits_reverse(num) {
// 	var result = 0;
// 	for (var i = 0; i < 16; i++) 
//     {
// 		result = result * 2 + (num % 2);
// 		num = Math.floor(num / 2);
// 	}
// 	return result;
// }
// console.log(sixteen_bits_reverse(12345));
// console.log(sixteen_bits_reverse(10));
// console.log(sixteen_bits_reverse(5));

//139***Write a JavaScript program to find the position of a rightmost round number in an array of integers. Returns 0 if there are no round number. 
// function find_rightmost_round_number(input_arr) {
//     var result = 0;
//     for (var i = 0; i < input_arr.length; i++)
//     {
//       if (input_arr[i] % 10 === 0) {
//         result = i;
//       }
//     }
//     return result;
//   }
//   console.log(find_rightmost_round_number([1, 22, 30, 54, 56]));
//   console.log(find_rightmost_round_number([1, 22, 32, 54, 56]));
//   console.log(find_rightmost_round_number([1, 22, 32, 54, 50]));
  

//140** Write a JavaScript program to check whether all the digits in a given number are the same or not. 
// function test_same_digit(num) {
//     var first = num % 10;
//     while (num) {
//       if (num % 10 !== first) return false;
//   num = Math.floor(num / 10);
//     }
//     return true
//   }
//   console.log(test_same_digit(1234));
//   console.log(test_same_digit(1111));
//   console.log(test_same_digit(22222222));
  

//141** Write a JavaScript program to find the number of elements which presents in both of the given arrays.

// function test_two_array(arr1,arr2){
//     let count=0;
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]===arr2[j]){
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// console.log(test_two_array([1,2,3,4], [1,2,3,4]));
// console.log(test_two_array([1,2,3,4], [1,2,3,5]));
// console.log(test_two_array([1,2,3,4], [11,22,33,44]));

//142*******Write a JavaScript program to simplify a given absolute path for a file in Unix-style. 

// function simplify_path(main_path) {
//     var parts = main_path.split('/'),
//         new_path = [],
//         length = 0;
//     for (var i = 0; i < parts.length; i++) {
//       var part = parts[i];
//       if (part === '.' || part === '' || part === '..') {
//         if (part === '..' && length > 0) {
//           length--;
//         }
//         continue;
//       }
//       new_path[length++] = part;
//     }
  
//     if (length === 0) {
//       return '/';
//     }
//     var result = '';
//     for (var i = 0; i < length; i++) {
//       result +=  '/'+new_path[i] ;
//     }
//     return result;
//   }
//   console.log(simplify_path("/home/var/./www/../html//sql/"));
  

//143****Write a JavaScript program to sort the strings of a given array of strings in the order of increasing lengths. 

// function sort_by_string_length(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i].length>arr[j].length){
//                 let temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
//     return arr;
// }
// var arr = ["xyz","acd","aa","bb","zzz","", "a","b"];
// console.log("Original array: "+ arr+"\n");
// console.log(sort_by_string_length(["xyz","acd","aa","bb","zzz","", "a","b"]));

//144** ***Write a JavaScript program to break an address of an url and put it's part into an array.
//Note: url structure : ://.org[/] and there may be no part in the address.

// function break_address(url_add) {
//     var data = url_add.split("://")
//     var protocol = data[0];
//     data = data[1].split(".com");
//     var domain = data[0];
//     data = data[1].split("/");
//     if(data[1]){
//         return [protocol,domain,data[1]]
//     }
//     return [protocol,domain]
// }
// var url_add = "https://www.w3resource.com/javascript-exercises/"
// console.log("Original address: "+url_add)
// console.log(break_address(url_add))


//145 **Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer. 
// function sumn(val) {
//     let sn = 0;
//     let i = 0;
//     while (sn <= val) {
//       sn += i++;
//     }
//     return i - 2;
//   }
//   console.log(sumn(11))
//   console.log(sumn(15))
  

//146 ***Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer. 
// function sum_Of_Cubes(n) {
//     var sumn = 0;
  
//     for (var i = 1; i <= n; i++) {
//       sumn += Math.pow(i, 3);
//     }
//     return sumn;
//   }
  
//   console.log(sum_Of_Cubes(3));
//   console.log(sum_Of_Cubes(4));
  
//147***Write a JavaScript program to compute the sum of all digits that occur in a given string. 

// function sum_digits_from_string(dstr) {
//     var dsum = 0;
//     for (var i = 0; i < dstr.length; i++)
//     {
//       if (/[0-9]/.test(dstr[i])) dsum += parseInt(dstr[i])
//     }
//     return dsum;
//   }
//   console.log(sum_digits_from_string("abcd12efg9"))
//   console.log(sum_digits_from_string("w3resource"))
  

//148**Write a JavaScript program to swap two halves of a given array of integers of even length.

// function halv_array_swap(iarra) {
//     if (((iarra.length)%2)!=0)
//       {
//       return false;
//       }
//     for (var i = 0; i < iarra.length / 2; i++) {
//       var tmp = iarra[i];
//       iarra[i] = iarra[i + iarra.length / 2];
//       iarra[i + iarra.length / 2] = tmp;
//     }
//     return iarra;
//   }
//   console.log(halv_array_swap([1,2,3,4,5,6]))
//   console.log(halv_array_swap([1,2,3,4,5,6,7]))
  
//149 Write a JavaScript program to change the capitalization of all letters in a given string.

// function change_case(txt) {
//     var str1 = "";
//     for (var i = 0; i < txt.length; i++) {
//         if (/[A-Z]/.test(txt[i])) str1 += txt[i].toLowerCase();
//         else str1 += txt[i].toUpperCase();
//     }
//     return str1;
// }

// console.log(change_case("w3resource"));
// console.log(change_case("Germany"));

//150****Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.

// function swap_adjacent_digits(n)
// {
//    if (n.toString().length%2!=0)
//      {
//        return false;
//      }
//   var result = 0,
// 		x = 1;
// 	while (n != 0) {
// 		var dg1 = n % 10,
// 			dg2 = ((n - dg1) / 10) % 10;
// 		result += x * (10 * dg1 + dg2);
// 		n = Math.floor(n / 100);
// 		x *= 100;
// 	}
// 	return result;
// }
// console.log(swap_adjacent_digits(15));
// console.log(swap_adjacent_digits(1234));
// console.log(swap_adjacent_digits(123456));
// console.log(swap_adjacent_digits(12345));
