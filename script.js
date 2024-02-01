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
                if ((player1x.length + player2o.length) === 9 && (drawScore + scoreBox1 + scoreBox2) === 3 ||
                    scoreBox2 === 2 || scoreBox1 === 1) return announcer();
                else return player1x = [], player2o = [], console.log("Player2 is The Winner!");
            }
        }

        else if (player1x.length === 5 && player2o.length === 4 || player2o.length === 5 && player1x.length === 4) {
            
            console.log(playerVar)
            drawScore++
            if ((player1x.length + player2o.length) === 9 && (drawScore + scoreBox1 + scoreBox2) === 3 ) return announcer();
            else return player1x = [], player2o = [], console.log("Draw", drawScore + scoreBox1 + scoreBox2, player1x.length + player2o.length)
        } 
    }
    
    const announcer = function() {

        if (scoreBox1 > scoreBox2) {
            
            scoreBox1 = 0;
            scoreBox2 = 0;
            drawScore = 0;
            
            return console.log("player1 Congratulation, You Won The Game!");
        } 

        else if (scoreBox2 > scoreBox1) {
            
            scoreBox1 = 0
            scoreBox2 = 0
            drawScore = 0
            
            return console.log("Player2 Congratulation, You Won The Game!")
        } 
        
        else if (drawScore > (scoreBox1 + scoreBox2)) {
            
            scoreBox1 = 0
            scoreBox2 = 0
            drawScore = 0
            
            return console.log("Game Draw!");
        } 
    }
    
    const invokeJudge  = function(square, variable) {

        if (variable.length < 3 || player1x.length === 3 || player2o.length === 3 || player1x.length > 3 || player2o.length > 3) {
            variable.push(square);
            if (player1x.length === 3 || player2o.length === 3 || player1x.length === 5 || player2o.length === 5) {

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



/*

Gameboard.player1s(5)

Gameboard.player1s(3)

Gameboard.player1s(4)

Gameboard.player1s(8)

Gameboard.player2s(1)

Gameboard.player2s(2)

Gameboard.player2s(7)

Gameboard.player2s(6)

Gameboard.player2s(9)



Gameboard.player1s(2)

Gameboard.player1s(3)

Gameboard.player1s(8)

Gameboard.player1s(9)

Gameboard.player2s(1)

Gameboard.player2s(5)

Gameboard.player2s(6)

Gameboard.player2s(7)

Gameboard.player2s(4)



Gameboard.player2s(1)

Gameboard.player2s(2)

Gameboard.player2s(7)

Gameboard.player2s(6)

Gameboard.player2s(9)

Gameboard.player1s(5)

Gameboard.player1s(3)

Gameboard.player1s(4)

Gameboard.player1s(8)
 */