// sort() -> method used to sort elements of an array in place.
//           Sorts elements as strings in lexicographic order, not alphabetical 

let numbers = [1,2,3,45, 56,7,7,7889, 97,98];

numbers.sort((a,b) => b-a);

console.log(numbers);

let people = [
    {name: "Snehal", age: 70, gender: "Male"},
    {name: "Vansh", age: 45 , gender: "Male"},
    {name: "Jyotu", age: 20, gender: "Female"}];

people.sort((a,b) => b.name.localeCompare(a.name));

console.log(people)

// shuffling in javascript

// using Fisher-Yates algorithm

const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

shuffle(cards);

function shuffle(array){
    for(let i = array.length-1; i > 0;i--){
        const ran = Math.floor(Math.random() * (i+1));
        [array[i],array[ran]] = [array[ran], array[i]];
    }
}

console.log(cards)