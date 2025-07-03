// Random Password Generation

function generatePass(length,lower,upper,number, symbol){
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberCase= "0123456789";
    const symbolCase = "!@#$%^&*()_+-=";   
    
    let allow = "";

    let password = "";


    allow += lower?lowerCase: "";
    allow += upper?upperCase: "";
    allow += number?numberCase: "";
    allow += symbol?symbolCase: "";

    if(length <= 8){
        return `(password lenght must be at least 8)`;
    }
    if(allow.length === 8){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i = 0;i < length; i++){
        const random = Math.floor(Math.random() * allow.length);
        password += allow[random];
    }

    return password;

}

const passleng = 1;
const lower = true;
const upper = true;
const number = true;
const symbol = true;

let password = generatePass(passleng,lower,upper,number,symbol);

console.log(`Generated password: ${password}`);
