// Date Objects = Objects that contain values that represent dates and times
//                these date objects can be changed and formatted.

const date = new Date(2024,0,20,14,3,24);
const date1 = new Date("2024-01-20")
console.log(date); 
console.log(date1);

// learning the closures 

/*
closure = A function defined iside of another function,
          the inner function has access to the variables
          and scope of the outer function.
          Allow for private variables and state maintenance
          Used frequently in JS frameworks: React, Vue, Angluar
*/

function outer(){
    let message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();
}

outer();

message = "Goodbye";   // no change as scope is differenet

// closure will make the variables private 
// implement the concept of abstraction & security

function increment(){
    let cnt = 0;
    cnt++;

    console.log(`Count increased to ${cnt}`);
}

increment();