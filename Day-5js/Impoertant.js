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

 numbers.forEach(double);

 function display(element){
    console.log(element);
 }

 function double(element , index, array){
    array[index] = element * 2;
 }

//  function triple(element, index, array){
//     array[index] = element * 3; 
// }

console.log(double);