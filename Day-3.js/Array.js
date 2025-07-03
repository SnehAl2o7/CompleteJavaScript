// learning about arrays

let fruit = ["apple", "orange", "banan"];
console.log(fruit);


// fruit.push("gauva"); add element to the last
// fruit.pop();    this remove the last element of the array
// fruit.unshift("mango"); this add at the start
// fruit.shift()   // this remove element frm the start

// let num = fruit.length; length of array
// let inx = fruit.indexOf("banan"); index of the array


// advanced for 
for (let i of fruit){
    console.log(i);
    fruit.sort().reverse();
}
// console.log(inx);


// 2-D array it is similar as array just a layer of 1-D or 
// normal array

// storing 2-D array

const mat = [[1,2,3],[4,5,6],[7,8,9]];
console.log(mat);

// spread operator = ... expand a array or string into separate elements

let number = [1,2,3,4];
let maximum = Math.min(...number);
console.log(maximum);

// we do the same for strings and all


// rest parameter = (...rest) it bundle the spread elements into a bundle

function openfridge(...foods){
    console.log(foods);
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

openfridge(food1,food2,food3,food4, "paratha");