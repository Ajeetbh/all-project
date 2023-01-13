//1. Comment Your JavaScript Code
//this is in-line comment
/*this is
the multiline
comment*/

//2. Declare JavaScript Variables :
// var myName;
// console.log(myName);

//3. Storing Values with the Assignment Operator:
// var a;
// a=7
// console.log(a)

//4.  Assigning the Value of One Variable to Another :
// var a;
// a=5;
// var b;
// b=a;
// console.log(b)

//5.Initializing Variables with the Assignment Operator:
// var a=9;
// console.log(a)

//6.  Understanding Uninitialized Variables:
// //var a;
// var a=5;
// var b=10;
// var c='I am a'
// console.log(a)

//7 Understanding Case Sensitivity in Variables:
// var myName='Ajeet';
// console.log(myname)
// console.log(myName) //Ajeet

//8 Add Two Numbers with JavaScript
// var myVar=10+15
// console.log(myVar) //25

//9 Subtract One Number from Another with JavaScript:
// var myVar=15-5
// console.log(myVar) //10

//10 Multiply Two Numbers with JavaScript:
// var myVar=15*5;
// console.log(myVar) //75

//11 Divide One Number by Another with JavaScript:
// var myVar=25/5;
// console.log(myVar)//5

//12 Increment a Number with JavaScript:
// var a=6
// //a=a+1
// a++;
// console.log(a)  //7

//13 Decrement a Number with JavaScript:
// var a=6
// //a=a-1
// a--;
// console.log(a)  //5

//14  Create Decimal Numbers with JavaScript
// var a=3.5
// console.log(a)

//15 Multiply Two Decimals with JavaScript:
// var a=2.5*2.0
// console.log(a)

//16 Divide One Decimal by Another with JavaScript
// var a=4.4/2.0
// console.log(a)

//17 Finding a Remainder in JavaScript:
// var a=11%3
// console.log(a)//2

// //18 Compound Assignment With Augmented Addition:
// var a=1
// a+=5;
// var b=3;
// b+=6;
// var c=2;
// c+=8
// console.log(a)//6
// console.log(b)//9
// console.log(c)//10

//19 Compound Assignment With Augmented Subtraction:
// var a=10;
// a-=5;
// var b=13;
// b-=6;
// var c=12;
// c-=8
// console.log(a)//5
// console.log(b)//7
// console.log(c)//4

//20 Compound Assignment With Augmented Multiplication:
// var a=1
// a*=5;
// var b=3;
// b*=6;
// var c=2;
// c*=8
// console.log(a)//5
// console.log(b)//18
// console.log(c)//16

//21 Compound Assignment With Augmented Division:
// var a=15
// a/=5;
// var b=30;
// b/=6;
// var c=24;
// c/=8
// console.log(a)//3
// console.log(b)//5
// console.log(c)//3

//22 Declare String Variable
// var firstName="Ajeet"
// var lastNmae='Bharti'
// console.log(firstName)
// console.log(lastNmae)
// console.log(`${firstName} ${lastNmae}`)

//23 Escaping Literal Quotes in Strings:
// var myStr="I am a \"double quoted\" string inside \"double quotes.\""
// console.log(myStr)

//24  Quoting Strings with Single Quotes
// var myStr='<a href="http://www.example.com" target="_blank">Link</a>';
// console.log(myStr)

//25 Escape Sequences in Strings:
// var myStr="FirstLine\n\t\\SecondLine\nThirdLine"; 
// console.log(myStr)

//26 . Concatenating Strings with Plus Operator:
//var myStr="This is  start. "+"This is the end.";
// console.log(myStr) 

//27. Concatenating Strings with the Plus Equals Operator
// var myStr= "This is the first sentence. ";
// myStr += "This is the second sentence.";
// console.log(myStr)

//28 Constructing Strings with Variables
// var myName='Ajeet Kumar Bhari';
// var myStr='My name is'+myName+'I am well!';
// console.log(myStr)

//29 Appending Variables to Strings
// var someAdjective='Hi Hello Good';
// var myStr = "Learning to code is ";
// myStr += someAdjective
// console.log(myStr)

//30 Use Bracket Notation to Find the First Character in a String
// var firstLetterOfLastName = "";
// var lastName = "Lovelace";
// firstLetterOfLastName = lastName[0]; 
// console.log(firstLetterOfLastName)

//31 Find the Length of a String:
// var lastName='lastNameLength'
// console.log(lastName.length)

//32 Understand String Immutability:
//var myStr = "Jello World";
// myStr[0] = "H";
// console.log(myStr)

//33 Use Bracket Notation to Find the Nth Character in a String
// var lastName = "AjeetKumar";
// var thirdLetterOfLastName = lastName[2]; 
// console.log(thirdLetterOfLastName) //e

//34 Use Bracket Notation to Find the Last Character in a String
// var lastName = "AjeetKumar";
// var lastLetterOfLastName = lastName[lastName.length-1]; 
// console.log(lastLetterOfLastName)//r

//35 Use Bracket Notation to Find the Nth-to-Last Character in a String
// var lastName = "AjeetKumar";
// var secondToLastLetterOfLastName = lastName[lastName.length-2]; 
// console.log(secondToLastLetterOfLastName)  //a

// 36 Word Blanks
// var myNoun = "dog";
// var myAdjective = "big";
// var myVerb = "ran";
// var myAdverb = "quickly";
// var wordBlanks = "The "+" "+myAdjective+" "+myNoun+" "+myVerb+" "+myAdverb+"."; 
// console.log(wordBlanks)

//37 Store Multiple Values in one Variable using JavaScript Array
// var myArray=['Ajeet','kumar',49,50.90]
// console.log(myArray)

//38 Nest one Array within Another Array:
// var myArray=[['Ajeet',50],['Kumar',29]]
// console.log(myArray)

//39 Access Array Data with Indexes:
// var myData=[33,64,65,90]
// console.log(myData[0])

// 40. Modify Array Data With Indexes:
var myArray=[50,68,23,56]
myArray[0]=45
console.log(myArray)
