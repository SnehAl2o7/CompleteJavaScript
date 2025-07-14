/*
setTimeout() = function in JS that allow us to schedule
               the execution of a function after an amount of time(ms)
               Times are approximate

            
setTimeout(callback, dely)
*/

function sayHello(){
    console.log("Hello");
    // window.alert("Hello");
}

setTimeout(sayHello,3000);

const Time = setTimeout(function(){console.log("HI")}, 2000);

setTimeout(() => console.log("yeps"), 1500);

clearTimeout(Time)                              

// learning the console.time()

/* 
console.time() = tool that allows us to measure the time it
                 takes for a section of code or process to execute
                 Great for identifying performance "bottlenecks"



console.time("Label")
cosole.timeEnd("label")
*/

console.time("test");

for(let i = 0; i < 10000000000;i++){
    // do some code
}

console.timeEnd("test");


function loaddlata(){
    console.time("loacaldata");
    for(let i = 0; i< 10000;i++){
        //pretend to load some data

    }

    console.timeEnd("loacaldata");
}

loaddlata();


/* 
using various things format currency

.toLocaleString() = returns a string with a languae
                    sensitive representation of a number

Intl.NumberFormat()

number.toLocaleString("lacale", {options});

locale = specify the language (undefined = default set in browser)
options = object with formatting options

*/

let number = 123456.678;

// number = number.toLocaleString("de-DE");


number = number.toLocaleString("hi-IN", {style: "currency", currency: "USD"});
console.log(number);




