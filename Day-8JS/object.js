/*
 nested objects= objects inside of ogjects.
                Allows you to represent more complex DS
                Child Object is enclosed by a Parent Object

    Person{Address{}, ContactInfo{}}
    ShoppingCart{Keyboard{},Mouse{},Monitor{}}
*/

const Person = {
    fullName: "Snehal",
    age: 20,
    isStudent: true,
    Hobbies: ["Taekwondo","Cooking", "SPorts"],
    location: {
        street: "slfkjalj",
        city: "fjsjks;l",
        country: "lksjfajk"
    }
}

console.log(Person.fullName);
console.log(Person.location.country);
console.log(Person.location.city);

for (const pro in Person.location){
    console.log(Person.location[pro]);
}


// using class and the nested objects

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

class Persan{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

const person1 = new Persan("Snehal",30,"sfgsfg","sfdgsgfd","dgdgfs");

const person2 = new Persan("Patrick",34,"sdf;lsf",";fjsadkjflkj","dfjadkfjs");

console.log(person1.age, person1.address.country);


