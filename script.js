const Gameboard = (function () {

    let player1x = [];
    let scoreBox1 = 0;
    let player2o = [];
    let scoreBox2 = 0;
    let drawScore = 0;

    const gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const gamePatCall = function(playerVar) {
        
        if (playerVar.includes(1) === true && playerVar.includes(2) === true && playerVar.includes(3) === true || playerVar.includes(4) === true && 
            playerVar.includes(5) === true && playerVar.includes(6) === true || playerVar.includes(7) === true && playerVar.includes(8) === true &&
            playerVar.includes(9) === true || playerVar.includes(1) === true && playerVar.includes(4) === true && playerVar.includes(7) === true ||
            playerVar.includes(2) === true && playerVar.includes(5) === true && playerVar.includes(8) === true || playerVar.includes(3) === true &&
            playerVar.includes(6) === true && playerVar.includes(9) === true || playerVar.includes(1) === true && playerVar.includes(5) === true && 
            playerVar.includes(9) === true || playerVar.includes(3) === true && playerVar.includes(5) === true && playerVar.includes(7)) {
            console.log(player2o, player1x)

            if (playerVar === player1x) {
                console.log(playerVar)
                scoreBox1++
                
                if ((player1x.length + player2o.length) === 9 && (drawScore + scoreBox1 + scoreBox2) === 3 
                    || scoreBox1 === 2 || scoreBox2 === 2) return announcer();
                else player1x = [], player2o = [], console.log("Player1 is The Winner!");
            } 
            
            else {
                console.log(playerVar)
                scoreBox2++;
                if ((drawScore + scoreBox1 + scoreBox2) === 3 || scoreBox1 === 2 || scoreBox2 === 2) return announcer();
                else return player1x = [], player2o = [], console.log("Player2 is The Winner!");
            }
        }

        else if (player1x.length === 5 && player2o.length === 4 || player2o.length === 5 && player1x.length === 4) {
            
            console.log(playerVar)
            drawScore++
            if ((player1x.length + player2o.length) === 9 && (drawScore + scoreBox1 + scoreBox2) === 3 ) return announcer();
            else return player1x = [], player2o = [], console.log("Draw!", drawScore)
        } 
    }
    
    const announcer = function() {

        if (scoreBox1 > scoreBox2 || drawScore === 2 && scoreBox1 === 1) {
            
            scoreBox1 = 0;
            scoreBox2 = 0;
            drawScore = 0;
            
            return console.log("player1 Congratulation, You Won The Game!");
        } 

        else if (scoreBox2 > scoreBox1 || drawScore === 2 && scoreBox2 === 1) {
            
            scoreBox1 = 0
            scoreBox2 = 0
            drawScore = 0
            
            return console.log("Player2 Congratulation, You Won The Game!")
        } 
        
        else if (scoreBox1 === 1 && scoreBox2 === 1 || drawScore === 3) {
            
            scoreBox1 = 0
            scoreBox2 = 0
            drawScore = 0
            
            return console.log("Game Draw!");
        } 
    }
    
    const invokeJudge  = function(square, variable) {

        if (variable.length < 3 || player1x.length === 3 || player2o.length === 3 || player1x.length > 3 || player2o.length > 3) {
            variable.push(square);
            if (player1x.length === 3 || player2o.length === 3 || player1x === 4 || player2o.length === 4 || player1x.length === 5 
                || player2o.length === 5) {

                gamePatCall(variable);
            }
        }
    }

    const player1s = function (square) {

        if (gameboard.includes(square) === false) return alert("Type Between 1-9 Numbers")
        else if (player1x.includes(square) === true) return "It already exist!"
        else if (player2o.includes(square) === true && gameboard.includes(square) === true) {
                
            return alert("Type number from 1-9 or square has been chosen")
        }
            
        else return  invokeJudge(square, player1x);
    }

    const player2s = function (square) {

        if (gameboard.includes(square) === false) return alert("Type Between 1-9 Numbers")
        else if (player2o.includes(square) === true) return "It already exist!"
        else if (player1x.includes(square) === true && gameboard.includes(square) === true) {
                
            return alert("Type number from 1-9 or square has been chosen")
        }
            
        else return  invokeJudge(square, player2o);
    }

    return {player1s, player2s};
})()


    
const square1 = document.querySelector(".squares");
const square2 = document.querySelector(".square2");
const square3 = document.querySelector(".square3");
const square4 = document.querySelector(".square4");
const square5 = document.querySelector(".square5");
const square6 = document.querySelector(".square6");
const square7 = document.querySelector(".square7");
const square8 = document.querySelector(".square8");
const square9 = document.querySelector(".square9");

const gameboardArray = []

square1.addEventListener("click", () => {

    if (gameboardArray.length === 0 || gameboardArray[gameboardArray.length - 1] === "X" && square1.textContent === "") {
        square1.textContent = "O"
        gameboardArray.push("O")
    }
    else if (gameboardArray[gameboardArray.length - 1] === "O" && square1.textContent === "") {
        square1.textContent = "X"
        gameboardArray.push("X")
    }

})

square2.addEventListener("click", () => {

    if (gameboardArray.length === 0 || gameboardArray[gameboardArray.length - 1] === "X" && square2.textContent === "") {
        square2.textContent = "O"
        gameboardArray.push("O")
    }
    else if (gameboardArray[gameboardArray.length - 1] === "O" && square2.textContent === "") {
        square2.textContent = "X"
        gameboardArray.push("X")
    }

})

square3.addEventListener("click", () => {

    if (gameboardArray.length === 0 || gameboardArray[gameboardArray.length - 1] === "X" && square3.textContent === "") {
        square3.textContent = "O"
        gameboardArray.push("O")
    }
    else if (gameboardArray[gameboardArray.length - 1] === "O" && square3.textContent === "") {
        square3.textContent = "X"
        gameboardArray.push("X")
    }

})
square4.addEventListener("click", () => {

    if (gameboardArray.length === 0 || gameboardArray[gameboardArray.length - 1] === "X" && square4.textContent === "") {
        square4.textContent = "O"
        gameboardArray.push("O")
    }
    else if (gameboardArray[gameboardArray.length - 1] === "O" && square4.textContent === "") {
        square4.textContent = "X"
        gameboardArray.push("X")
    }

})
square5.addEventListener("click", () => {

    if (gameboardArray.length === 0 || gameboardArray[gameboardArray.length - 1] === "X" && square5.textContent === "") {
        square5.textContent = "O"
        gameboardArray.push("O")
    }
    else if (gameboardArray[gameboardArray.length - 1] === "O" && square5.textContent === "") {
        square5.textContent = "X"
        gameboardArray.push("X")
    }

})
square6.addEventListener("click", () => {

    if (gameboardArray.length === 0 || gameboardArray[gameboardArray.length - 1] === "X" && square6.textContent === "") {
        square6.textContent = "O"
        gameboardArray.push("O")
    }
    else if (gameboardArray[gameboardArray.length - 1] === "O" && square6.textContent === "") {
        square6.textContent = "X"
        gameboardArray.push("X")
    }

})
square7.addEventListener("click", () => {

    if (gameboardArray.length === 0 || gameboardArray[gameboardArray.length - 1] === "X" && square7.textContent === "") {
        square7.textContent = "O"
        gameboardArray.push("O")
    }
    else if (gameboardArray[gameboardArray.length - 1] === "O" && square7.textContent === "") {
        square7.textContent = "X"
        gameboardArray.push("X")
    }

})
square8.addEventListener("click", () => {

    if (gameboardArray.length === 0 || gameboardArray[gameboardArray.length - 1] === "X" && square8.textContent === "") {
        square8.textContent = "O"
        gameboardArray.push("O")
    }
    else if (gameboardArray[gameboardArray.length - 1] === "O" && square8.textContent === "") {
        square8.textContent = "X"
        gameboardArray.push("X")
    }

})
square9.addEventListener("click", () => {

    if (gameboardArray.length === 0 || gameboardArray[gameboardArray.length - 1] === "X" && square9.textContent === "") {
        square9.textContent = "O"
        gameboardArray.push("O")
    }
    else if (gameboardArray[gameboardArray.length - 1] === "O" && square9.textContent === "") {
        square9.textContent = "X"
        gameboardArray.push("X")
    }

})


/* 

the player function requires a number input to start the game.

The first player is 0 and  the next one will be x.

now write a function that will automatically switch between "x" and "o" depending on the players turn



*/