// using arrays of index and all

const fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "banana", color: "yellow", calories:95},
]

console.log(fruits[0].name);

fruits.push({name: "orange", color: "orange", calories: 45});

console.log(fruits)

// fruits.splice(1,2);
// console.log(fruits)

// using for each

fruits.forEach(fruits => console.log(fruits.name));
console.log(fruits)

// using map

const fruitName = fruits.map(fruits => fruits.name);

console.log(fruitName);