// function duplicate(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//        for(let j=i+1;j<arr.length;j++){
//            if(arr[i]===arr[j]){
//               sum+=arr[i]
//               break;
//            }
//        }
//     }
//     return sum;
// }
// console.log(duplicate([1,2,3,4,3,4,2,1]))


// const twoSum = (arr, num) => {
//     let obj = {};
//     let res = [];
//     arr.map(item => {
//       let com = num - item;
//       if (obj[com]) {
//         res.push([obj[com], item]);
//       } else {
//         obj[item] = item;
//       }
//     });
//     return res;
//   };
  
//   console.log(twoSum([2, 3, 2, 5, 4, 9, 6, 8, 8, 7], 10));
//   // Output: [ [ 4, 6 ], [ 2, 8 ], [ 2, 8 ], [ 3, 7 ] ]





// function primeNumber(from, to){ 
//     var flag=false; 
//     for(i = from; i <= to; i++) 
//     { 
//         for( j = 2; j < i; j++) 
//         { 
//            if(i % j == 0){
//                flag = false; 
//                 break;
//             } 
//             else
//             {
//                 flag = true;
//             }
//         }
//         if(flag)
//         {
//             console.log(i);
//         }
//     } 
// } 
// console.log(primeNumber(1,7))


// program to check if a number is prime or not

// // take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;
// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }
// // check if number is greater than 1
// else if (number > 1) {
//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }
// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }



// program to print prime numbers between the two numbers
// take input from the user
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));
// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
// // looping from lowerNumber to higherNumber
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;
//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }
//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }


<script>

// Javascript program to print all primes
// less than N


// function check whether a number
// is prime or not
function isPrime(n)
{
	// Corner case
	if (n <= 1)
		return false;

	// Check from 2 to n-1
	for (let i = 2; i < n; i++)
		if (n % i == 0)
			return false;

	return true;
}
// Function to print primes
function printPrime(n)
{
	for (let i = 2; i <= n; i++) {
		if (isPrime(i))
			document.write(i +" ");
	}
}
// Driver Code

	let n = 7;
	printPrime(n);

// This code is contributed by Mayank Tyagi

</script>
