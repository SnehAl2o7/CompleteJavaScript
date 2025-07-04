// using arrow functions =  a concise way to write function expression
//                          good for sample function that you use only once
//                          (parameter) => some code
 // syntax
const hello = (name, age) => {console.log(`Hello ${name}`)
                            console.log(`you are ${age} years old`)};

hello(`snehal`, 24);

const num = [1,2,3,4,5,6,78];
const table = num.map((element) => {
    return Math.pow(element,2);
})

console.log(table);



// object = a collection of related properties and / or methods
// can represent real world objects  (people, products, place)
//              object = {key: value, function()}

const person = {
    firstName: "Snehal",
    lastName: "Bisht",
    age: 30,
    isEmployed: true,
    sayHello: function(){
        console.log(`Hi, I am Vansh!`)
    },
    whatage: () => {
        console.log(`Your age is ${person.age} years old.`)
    }
}

console.log(person.age);
person.sayHello();
person.whatage();

