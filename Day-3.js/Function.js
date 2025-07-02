// functions = A section of reusable code. 
            // Declare code once, use it whenever you want.
            // Call the function to execute that code.

function HappyBirthday(name,age){
     console.log("Happy Bithday to you!");
     console.log("Happy Bithday to you!");
     console.log("Happy Bithday dear "+ name + "!");     
     console.log("Happy Bithday to you!");
     console.log(`Your age ${age} years old.`)
}

HappyBirthday("name",24);
HappyBirthday(20, "Snehal");

function add(a,b){
    let res = a+b;
    return res;
}

console.log(add(2,add(3,4)));