const inputTaker = (function() {

    const player1 = (input) => {
        InputAppraiser.appraise(input, "p1")
    }

    const player2 = (input) => {
        InputAppraiser.appraise(input, "p2")
    }
    
    return {player1, player2}
})()


    
const InputAppraiser = (function() {
    
    let player1o = []
    let player2x = []
    
    const gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const arrayFresh = () => {
        player1o = [];
        player2x = [];
    }

    const appraise = (input, player) => {
        
        if (gameBoard.includes(input) === false) return alert("Type Between 1-9 Numbers");
        else if (player1o.includes(input) === true || player2x.includes(input) === true) {
            console.log("This Square Has already Been Selected!");
        } 
        else {
        
            if (player === "p1") {
                
                player1o.push(input)
                if(player1o.length === 3) return roundWinCheck.roundWin(player1o, "p1")
            }
            else if (player === "p2") {
            
                player2x.push(input)
                if(player2x.length === 3) return roundWinCheck.roundWin(player2x, "p2")
            }
        }
    }

    return {appraise, arrayFresh}

})()




const roundWinCheck = (function() {
    
    const roundWin = function (playerVar, player) {
        
        if(playerVar.includes(1) === true && playerVar.includes(2) === true && playerVar.includes(3) === true || playerVar.includes(4) === true && 
           playerVar.includes(5) === true && playerVar.includes(6) === true || playerVar.includes(7) === true && playerVar.includes(8) === true &&
           playerVar.includes(9) === true || playerVar.includes(1) === true && playerVar.includes(4) === true && playerVar.includes(7) === true ||
           playerVar.includes(2) === true && playerVar.includes(5) === true && playerVar.includes(8) === true || playerVar.includes(3) === true &&
           playerVar.includes(6) === true && playerVar.includes(9) === true || playerVar.includes(1) === true && playerVar.includes(5) === true && 
           playerVar.includes(9) === true || playerVar.includes(3) === true && playerVar.includes(5) === true && playerVar.includes(7)) {
            
            if(player === "p1") {
                
                scoreBoard.setScore("p1");
                
                if (scoreBoard.totalScore() === 3) return gameResult.result()
                console.log("Player1 Is The Winner!");
                InputAppraiser.arrayFresh();
            } 
            
            else if (player === "p2") {

                scoreBoard.setScore("p2");
                
                if(scoreBoard.totalScore() === 3) return gameResult.result()
                console.log("Player2 Is The Winner!");
                InputAppraiser.arrayFresh()
            }
        }
        else {

            scoreBoard.setScore("drawScore");

            if(scoreBoard.totalScore() === 3) return gameResult.result()
            console.log("Draw!")
            InputAppraiser.arrayFresh()
        }
    }

    return {roundWin}
})()





const scoreBoard = (function() {

    let scoreBox1 = 0;
    let scoreBox2 = 0;
    let drawScore = 0;

    const setScore = (scoreContainer) => {

        if(scoreContainer === "p1") return scoreBox1++;
        else if(scoreContainer === "p2") return scoreBox2++;
        else if (scoreContainer === "drawScore") return drawScore++;
    }

    const refreshScore = () => {
        
        scoreBox1 = 0;
        scoreBox2 = 0;
        drawScore = 0;
    }

    const getScore = (boxes) => {

        if(boxes === "p1") return scoreBox1;
        else if(boxes === "p2") return scoreBox2;
        else if (boxes === "drawScore") return drawScore;
    }

    const totalScore = () => {
        let total = (scoreBox1 + scoreBox2 + drawScore)
        return total
    }

    return {setScore, getScore, refreshScore, totalScore}
})()



const gameResult = (function() {

    const playerScore = function(scoreContainer) {
        if (scoreContainer === "p1") return scoreBoard.getScore("p1");
        else if (scoreContainer === "p2") return scoreBoard.getScore("p2");
        else if (scoreContainer === "drawScore") return scoreBoard.getScore("drawScore");
    }

    const result = () => {
        
        if (playerScore("p1") > playerScore("p2") || playerScore("p1") > playerScore("drawScore") && playerScore("p1" > playerScore("p2")) ||
            playerScore("drawScore") === 2 && playerScore("p1") === 1) return console.log("Congratulation Player 1!");

        else if (playerScore("p2") > playerScore("p1") || playerScore("p2") > playerScore("drawScore") && playerScore ("p2") > playerScore("p1") ||
                playerScore("drawScore") === 2 && playerScore("p2") === 1) return console.log("Congratulation Player 2!");
            
        else if (playerScore("p1") === 1 && playerScore("p2") === 1 || playerScore("drawScore") === 3) return console.log("Game Draw!");
    }

    return {result, playerScore}
})()