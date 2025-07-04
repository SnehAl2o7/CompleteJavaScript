// callback = function that is used as an argument to another function.
/*
    used to handle asynchronous operation
    -> reading a file.
    -> network requestes.
    -> Interacting with database.
*/

//Basically used to tell that 
// hey, when you're done, call this next.

hello(goodbye);

function hello(callback){
    console.log("Hello!");
    callback();
}

function goodbye(){
    console.log("Goodbye!");
}


// forEach() = method used to iterate over the elements of an array and apply
// specified funcs

let numbers = [1,2,3,4,5];

numbers.forEach(display);

 function display(element){
    console.log(element);
 }

 function double(element , index, array){
    array[index] = element * 2;
 }

function triple(element, index, array){
    array[index] = element * 3; 
}

console.log(double);

// .map() = accepts a callback and applies that function
//          to each elements of an array, then return a new array.

const numb= [1,2,3,4,5,6];

const squa = numb.map(cube);

console.log(squa);

function square(element){
    return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element,3);
}


// .filter() = create a new array by filtering out elements.


let array = [1,2,3,4,5,6,7,8];
let evenNum = array.filter(isEven);
let oddNum = array.filter(isOdd);

console.log(evenNum);
console.log(oddNum);

function isEven(element){
    return element%2 === 0;
}

function isOdd(element){
    return element%2 === 1;
}
