const Gameboard = (function () {

    let player1x = [];
    let scoreBox1 = 0;
    let player2o = [];
    let scoreBox2 = 0;
    let drawScore = 0;
    

    const gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const at = document.querySelector(".at");
    const player1Points = document.querySelector(".player1");
    const player2Points = document.querySelector(".player2");
    const roundNumber = document.querySelector(".round");
        
    const gamePatCall = function(playerVar) {

        
        if (playerVar.includes(1) === true && playerVar.includes(2) === true && playerVar.includes(3) === true || playerVar.includes(4) === true && 
            playerVar.includes(5) === true && playerVar.includes(6) === true || playerVar.includes(7) === true && playerVar.includes(8) === true &&
            playerVar.includes(9) === true || playerVar.includes(1) === true && playerVar.includes(4) === true && playerVar.includes(7) === true ||
            playerVar.includes(2) === true && playerVar.includes(5) === true && playerVar.includes(8) === true || playerVar.includes(3) === true &&
            playerVar.includes(6) === true && playerVar.includes(9) === true || playerVar.includes(1) === true && playerVar.includes(5) === true && 
            playerVar.includes(9) === true || playerVar.includes(3) === true && playerVar.includes(5) === true && playerVar.includes(7)) {

            if (playerVar === player1x) {
                scoreBox1++
                
                if ((drawScore + scoreBox1 + scoreBox2) === 3 ) {
                    roundNumber.textContent = `Round: ${scoreBox1+scoreBox2+drawScore}`, 
                    player1Points.textContent = `Player1: ${scoreBox1}`
                    announcer()
                }   
                
                else {

                    player1x = [];
                    player2o = [];
                    at.textContent = "Player1 is The Winner!";
                    squareSelect.clearSq();
                    roundNumber.textContent = `Round: ${scoreBox1+scoreBox2+drawScore}`
                    player1Points.textContent = `Player1: ${scoreBox1}`;
                    return scoreBox1
                }
            } 
            
            else {
                console.log(playerVar)
                scoreBox2++;
                if ((drawScore + scoreBox1 + scoreBox2) === 3 ) {
                    roundNumber.textContent = 
                    `Round: ${scoreBox1+scoreBox2+drawScore}`, player2Points.textContent = `Player2: ${scoreBox2}` 
                    player1Points.textContent = `Player1: ${scoreBox1}`
                    announcer()
                }   
                
                else {

                    player1x = [];
                    player2o = [];
                    at.textContent = "Player2 is The Winner!";
                    squareSelect.clearSq();
                    roundNumber.textContent = `Round: ${scoreBox1+scoreBox2+drawScore}`
                    player2Points.textContent = `Player2: ${scoreBox2}`, scoreBox2;
                } 
            }
        }

        else if (player1x.length === 5 && player2o.length === 4 || player2o.length === 5 && player1x.length === 4) {
            
            drawScore++

            if ((drawScore + scoreBox1 + scoreBox2) === 3 ) {
                roundNumber.textContent = `Round: ${scoreBox1+scoreBox2+drawScore}` 
                player2Points.textContent = `Player2: ${scoreBox2}` 
                player1Points.textContent = `Player1: ${scoreBox1}`
                announcer();
            }   
            else {

                player1x = [] 
                player2o = [] 
                at.textContent = "Draw!"
                roundNumber.textContent = `Round: ${scoreBox1+scoreBox2+drawScore}` 
                squareSelect.clearSq();

            }
        } 
    }
    
    const announcer = function() {

        if (scoreBox1 > scoreBox2 || scoreBox1 > drawScore || drawScore === 2 && scoreBox1 === 1) {
            
            scoreBox1 = 0;
            scoreBox2 = 0;
            drawScore = 0;
            
            return at.textContent = "player1 Congratulation, You Won The Game!";
        }
 

        else if (scoreBox2 > scoreBox1 || scoreBox2 > drawScore || drawScore === 2 && scoreBox2 === 1) {
            
            scoreBox1 = 0
            scoreBox2 = 0
            drawScore = 0
            
            return at.textContent = "Player2 Congratulation, You Won The Game!"
        } 
        
        else if (scoreBox1 === 1 && scoreBox2 === 1 || drawScore === 3) {
            
            scoreBox1 = 0
            scoreBox2 = 0
            drawScore = 0
            
            return at.textContent = "Game Draw!";
        } 
    }
    
    const PatternCaller  = function(square, variable) {

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
            
        else return  PatternCaller(square, player1x);
    }

    const player2s = function (square) {
        
        if (gameboard.includes(square) === false) return alert("Type Between 1-9 Numbers")
        else if (player2o.includes(square) === true) return "It already exist!"
        else if (player1x.includes(square) === true && gameboard.includes(square) === true) {
                
            return alert("Type number from 1-9 or square has been chosen")
        }
            
        else return  PatternCaller(square, player2o);
    }

    return {player1s, player2s, player1Points, player2Points, roundNumber};
})()


    
const squareSelect = (function() {
    const at = document.querySelector(".at")
    const square1 = document.querySelector(".squares");
    const square2 = document.querySelector(".square2");
    const square3 = document.querySelector(".square3");
    const square4 = document.querySelector(".square4");
    const square5 = document.querySelector(".square5");
    const square6 = document.querySelector(".square6");
    const square7 = document.querySelector(".square7");
    const square8 = document.querySelector(".square8");
    const square9 = document.querySelector(".square9");
    const player1WinTxt = "player1 Congratulation, You Won The Game!"
    const player2WinTxt = "Player2 Congratulation, You Won The Game!";
    const DrawTxt = "Game Draw!"
    const player1RoundAn = "Player1 is The Winner!";
    const player2RoundAn = "Player2 is The Winner!";
    const drawRoundAn = "Draw!"

    let gameboardArray = []

    const cleanGameArray = function() {
        if(at.textContent === player1RoundAn || at.textContent === player2RoundAn || at.textContent === drawRoundAn) {
            console.log(gameboardArray = []);
            at.textContent = "";
        }
    }

    function symbolFunc(element) {
        element.addEventListener("click", () => {
            cleanGameArray()
            if (at.textContent === player1WinTxt || at.textContent === player2WinTxt || at.textContent === DrawTxt) {
                gameboardArray = []
            }
            else if (gameboardArray.length === 0 || gameboardArray[gameboardArray.length - 1] === "O" && element.textContent === "") {
                element.textContent = "X"
                gameboardArray.push("X")
                if(element === square1) return Gameboard.player1s(1);
                else if (element === square2) return cleanGameArray(), Gameboard.player1s(2);
                else if (element === square3) return Gameboard.player1s(3);
                else if (element === square4) return Gameboard.player1s(4);
                else if (element === square5) return Gameboard.player1s(5);
                else if (element === square6) return Gameboard.player1s(6);
                else if (element === square7) return Gameboard.player1s(7);
                else if (element === square8) return Gameboard.player1s(8);
                else if (element === square9) return Gameboard.player1s(9);

            }

            else if (gameboardArray[gameboardArray.length - 1] === "X" && element.textContent === "") {
                element.textContent = "O"
                gameboardArray.push("O")
                if(element === square1) return Gameboard.player2s(1);
                else if (element === square2) return Gameboard.player2s(2);
                else if (element === square3) return Gameboard.player2s(3);
                else if (element === square4) return Gameboard.player2s(4);
                else if (element === square5) return Gameboard.player2s(5);
                else if (element === square6) return Gameboard.player2s(6);
                else if (element === square7) return Gameboard.player2s(7);
                else if (element === square8) return Gameboard.player2s(8);
                else if (element === square9) return Gameboard.player2s(9);
            }
        })
    }

    symbolFunc(square1)
    symbolFunc(square2)
    symbolFunc(square3)
    symbolFunc(square4)
    symbolFunc(square5)
    symbolFunc(square6)
    symbolFunc(square7)
    symbolFunc(square8)
    symbolFunc(square9)

    const clearSq = function() {
        square1.textContent = ""
        square2.textContent = ""
        square3.textContent = ""
        square4.textContent = ""
        square5.textContent = ""
        square6.textContent = ""
        square7.textContent = ""
        square8.textContent = ""
        square9.textContent = ""
    }

    return {clearSq, gameboardArray}
})()

// when the first square is chosen it is "x" that appears but on the next turn "o" appears
// if the player to score board does not have any numbers sometimes 0 appears there, gotta find the reason.