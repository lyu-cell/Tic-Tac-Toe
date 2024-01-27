const Gameboard = (function () {

    let player1 = [];
    let player2 = [];

    const gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const gameJudge = function () {
        const win = "123";
        if(player1.toString().replaceAll(",", "") === win) return player1 = [], "Player1 You Win!";
        else if (player2.toString().replaceAll(",", "") === win) return "player2 You Win"
    }

    const invokeJudge  = function() {
        if (player1.length === 3 && player2.length === 3) {
            return gameJudge()
        }
    }

    const player1s = function (square) {
             if (player1.includes(square) === true && player2.includes(square) === true && 
                gameboard.includes(square) === true) {
                
                alert("Type number from 1-9 or square has been chosen")
             }
            if (player1.length === 3 && player2.length === 3) {
                gameJudge()
            }
            
            else return player1.push(square), invokeJudge();
        }

    const player2s = function (square) {
        
        if (player2.includes(square) === true && player1.includes(square) === true && gameboard.includes(square) === true) {
             alert("Type number from 1-9 or chose a different square that is unselected!")
            }
            else return player2.push(square), invokeJudge();
          
        }

    return {player1s, player2s};
})()


























/* 
1. tic tac toe project doesn't require an ai or anything.

2. two players should be able to play tic tac toe
_____________________________________________

if i give gameboard array of tictactoe a series of numbers from 1-9 each
of which represent a square on the board.

players are gonna chose any one of these numbers and that chosen number will
represent that persons chosen square.

__________________________________________________________

Algorithm:

1. gameboard array that have numbers from 1-9.

2. player function clicks a square which represent a number in the gameboard array.

3. the player function sends its input to the gameJudge.

4. if it matches with the one of the unfilled square of gameboard then it accepts it.

5. if not then it doesn't accept the input.

6. 

2. gameJudge object that has function that takes the inputed number from 
player and matches it with the gameboard array. 


*/