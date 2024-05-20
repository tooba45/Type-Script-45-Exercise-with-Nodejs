//Q24 //Define variable
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["peach", "strawberry", "pineapple", "banana"];


//Test for equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

//Tests using the lower case function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.groupCollapsed("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple" );

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//equal to
console.log("\nIs 10 is equal to 20");
console.log(ten == twenty);

//not equal to
console.log("\nIs 20 is not equal to 10");
console.log(twenty != ten);

//greater than
console.log("\nIs 10 is greater than 0");
console.log(ten > 0);

//less than
console.log("\n10 is less than 20");
console.log(ten < twenty);

//greater than or equal to 
console.log("\n10 is greater than or equal to 5?");
console.log(ten >= 5);

//less than or equal to
console.log("\ntwenty is less than or equal to ten");
console.log(20 <= 10);

//Tests using "and" and "or" operators
console.log("\ntwenty is not equal to ten and twenty is greater than ten");
console.log(twenty != 10 && twenty > 10);

console.log("\ntwenty is not equal to ten and twenty is greater than ten");
console.log(twenty != 10 && twenty > 30);

//using || Or
console.log("\ntwenty is greater than 50 or twenty is equal twenty");
console.log(20 > 50 || 20 == 20 );

console.log("\ntwenty is greater than 50 or twenty is not equal twenty");
console.log(20 > 50 || 20 != 20);

//Test whether an item is in a array
console.log("\nIs peach include in my Fruits array");
console.log(fruits.includes("peach"));

//Test whether an item is not in a array
console.log("\nIs peach not include in fruits arrya");
console.log(!fruits.includes("peach"));







