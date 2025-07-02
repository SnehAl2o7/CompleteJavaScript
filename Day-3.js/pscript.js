

function rollDice(){
    const numD = document.getElementById("numofDice").value;
    const diceR = document.getElementById("diceresult");
    const diceI = document.getElementById("diceimage");
    const values = [];
    const images = [];

    for( let i = 0;i < numD;i++){
        const val= Math.floor(Math.random() * 6) + 1;
        values.push(val);
        images.push(`<img src="Dice_images/${val}.png" alt="Dice ${val}" class="dice-img">`);
    }

    diceR.textContent = `dice: ${values.join(`, `)}`;
    diceI.innerHTML = images.join(``);


}