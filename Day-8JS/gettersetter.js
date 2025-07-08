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