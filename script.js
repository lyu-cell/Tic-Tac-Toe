const Gameboard = (function () {

    let player1x = [];
    let player2o = [];

    const gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function gamePatCall(playerVar) {
        
        if (playerVar.includes(1) === true && playerVar.includes(2) === true && playerVar.includes(3) === true || playerVar.includes(4) === true && 
            playerVar.includes(5) === true && playerVar.includes(6) === true || playerVar.includes(7) === true && playerVar.includes(8) === true &&
            playerVar.includes(9) === true || playerVar.includes(1) === true && playerVar.includes(4) === true && playerVar.includes(7) === true ||
            playerVar.includes(2) === true && playerVar.includes(5) === true && playerVar.includes(8) === true || playerVar.includes(3) === true &&
            playerVar.includes(6) === true && playerVar.includes(9) === true || playerVar.includes(1) === true && playerVar.includes(5) === true && 
            playerVar.includes(9) === true || playerVar.includes(3) === true && playerVar.includes(5) === true && playerVar.includes(7)) {
            console.log(player2o, player1x)
            if (playerVar === player1x) return console.log(playerVar), player1x = [], player2o = [], "Player1 is The Winner!";
            else console.log(playerVar), player1x = [], player2o = [], "player2 is The WInner!";
        }

        else if (player1x.length === 5 || player2o.length === 5) {
            console.log(playerVar), player1x = [], player2o = [] 
             
            return "Draw";
        } 
    }

    
    
    const invokeJudge  = function(square, variable) {
        
        if (variable.length < 3 || player1x.length === 3 || player2o.length === 3 || player1x.length > 3 || player2o.length > 3) {
            variable.push(square);
            console.log(player1x, player2o)
            if (player1x.length === 3 || player2o.length === 3 || player1x.length === 5 || player2o.length === 5) {
                return gamePatCall(variable)
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


// the winning pattern data set will have 10 sets, in each of which there will be three numbers.
// if the numbers in the player array matches with any of the data win set, then that player will be the winner.
// a program should be made which will check every index numbers of the players array to find the winning
// numbers.





















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