//  this = reference to the object where THIS is used
//         (this og=bject depends on the immediate context)
//          person.name = this.name

const person1 = {
    name: "SNehal",
    food: "dal-bhat",
    sayHello: function () {
        console.log(`hello ${this.name}`);
    }
}

person1.sayHello()

// constructors in javascript

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Ford","Mustang",2024,"red");

console.log(car1.make)

// classes in javaScript

class Poducts{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Print the product is $(name)`)
    }
}

//static = keyword that defines properties or methods that belong to
//          a class itself rather then the objects created from that class.

class MathUtil{
    static PI = 3.14;

    static getDiameter(radius){
        return radius*2;
    }
    static getcircumferenece(radius){
        return 2*this.PI*radius;
    }

    static getArea(radius){
        return this.PI * radius ** 2;
    }

}

const MathUtil1 = new MathUtil();

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(19));
console.log(MathUtil.getcircumferenece(23));
console.log(MathUtil.getArea(34));

// Inhertiance = allow a new class to inherit
//              properties and methods from 
//              an existing class
// helps with code reusability

class Animal {
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";
}

class Fish extends Animal{
    name = "fish";
}

const Rabbit = new Rabbit();

console.log(Rabbit.alive);