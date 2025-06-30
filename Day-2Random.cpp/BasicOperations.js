// Doing and learning all the basic operations
// implementation and logic

//using if statement
let age =25;
if(age >= 18){
    console.log(`You are old enough to enter`);
}
else {
    console.log(`you should be 18`);
}
 //checked property in JS

 // we use it when we encouter checkbox or radio buttons 
 // in if we check the id with checked

 /* example 

 if(mycheckBox.checked){
    // true the code run
 }
else if(visaBtn.checked){

}


the similar goes for rest of the code or not .
*/

//Ternary operator

// it is similar as java, c++ and all

let age1 = 20;
console.log(age1 >= 18 ? "Adult" : "Minor");

// using switch case

// the syntax is same

let day = 4;

switch(day){
    case 1: 
        console.log("ONe");
        break;
    case 2:
        console.log("Two");
        break;
    case 3: 
        console.log("Three");
        break;
    case 4: 
        console.log("Four");
        break;
    default:
        console.log("NaN");

}

// String methods

let username = "943191665120";

console.log(
    username.charAt(0),
    username.indexOf("o"),
    username.length,
    username.trim(" "),
    username.padStart(16,"*"),
    username.padEnd(13,"#")
);
 // string slicing 

 const fullName = "Snehal";
 console.log(fullName.slice(2,4));









