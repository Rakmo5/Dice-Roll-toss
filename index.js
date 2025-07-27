
function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
function rollDice(){
    
    var randomNumber1 = getRandomInt(6)+1;
    var randomNumber2 = getRandomInt(6)+1;
    // console.log(randomNumber1);

    document.querySelector(".img1").setAttribute("src",`./images/dice${randomNumber1}.png`);
    document.querySelector(".img2").setAttribute("src",`./images/dice${randomNumber2}.png`);

    // Win Logic
    if(randomNumber1===randomNumber2){
        document.querySelector("h1").innerHTML = `Its a tie`;
    }else if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML = `${playerOneName} win`;
    }else{
        document.querySelector("h1").innerHTML = `${playerTwoName} win`;
    }
}


var playerOneName = prompt("Enter Player 1 name :");
document.querySelector("#playerOne").innerHTML = playerOneName;
var playerTwoName = prompt("Enter Player 2 name :");
document.querySelector("#playerTwo").innerHTML = playerTwoName;
// playerOneName = "rak";
// playerTwoName = "ram";
