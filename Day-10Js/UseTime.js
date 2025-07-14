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