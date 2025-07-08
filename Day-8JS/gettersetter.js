// using getters and setters

/*
getter = special method that makes a property readable
setter = special method that makes a property writeable

validate and modify a value when reading/writing a property

*/

class Rect{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    set width(newwidth){
        if(newwidth > 0){
            this._width = newwidth;
        }
        else {
            console.error("Width must be a positive number.")
        }
    }

    set height(newheight){
        if(newheight > 0){
            this._height = newheight;
        }
        else {
            console.error("Height must be a positive number.");
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
}

const rect = new Rect(3,4);

rect.width = 5;
rect.height = 9;

console.log(rect.width);
console.log(rect.height);


/* Destructuring = extract values from arrays and objects,
                    then assign them to variables in a convenient way

                    [] = to perform array destructuring 
                    {} = to perform object destructuing                

*/

// ---------Example -1 -------------
// swap the value of two variables

let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a,b);

 // swapping elements in array

const color = [1,5,6,7,8,9,3];

[color[0], color[5]] = [color[5] , color[0]];

console.log(color);

// assigning array elements

const [ first, second, third, ...extraColor] = color;
console.log(first, second, third);
console.log(extraColor);

// extract values from objects

const person1 = {
    firstN : "Snehal",
    lastN : "Bisht",
    age : 30,
    job: "Coder",
}

const person2 = {
    firstN : "Vansh",
    lastN : "Bisht",
    age : 15,
    job: "Developer",
}

const {firstN, lastN, age,job} = person1;
console.log(firstN, lastN, age, job);

// destruction in Function parameters

function displayPerson({firstN,lastN,age,job = "Unemplyed"}){
    console.log(`name: ${firstN} ${lastN}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);





