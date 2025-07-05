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