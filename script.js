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
        console.log(`arrayfresh::Before: Player1: ${player1o} Player2: ${player2x}`)
        player1o = [];
        player2x = [];
        console.log(`arrayfresh::after: Player1: ${player1o} Player2: ${player2x}`)
    }

    const appraise = (input, player) => {
        
        if (gameBoard.includes(input) === false) return alert("Type Between 1-9 Numbers");
        else if (player1o.includes(input) === true || player2x.includes(input) === true) {
            console.log("This Square Has already Been Selected!");
        } 
        else {
        
            if (player === "p1") {
                
                player1o.push(input)
                if(player1o.length === 3 || player1o.length === 4 || player1o.length === 5) return roundWinCheck.roundWin(player1o, "p1")
            }
            else if (player === "p2") {
            
                player2x.push(input)
                if(player2x.length === 3 || player2x.length === 4) return roundWinCheck.roundWin(player2x, "p2")
            }
        }
    }


    return {appraise, arrayFresh, player2x, player1o}

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
                gameResult.announcementBoard.textContent = `${nameInputEl.player1Ip.value} Is The Winner!`;
                SquareSelect.refreshSqDom()
                InputAppraiser.arrayFresh();
            } 
            
            else if (player === "p2") {

                scoreBoard.setScore("p2");
                
                if(scoreBoard.totalScore() === 3) return gameResult.result()
                gameResult.announcementBoard.textContent = `${nameInputEl.player2Ip.value} Is The Winner!`;
                SquareSelect.refreshSqDom()
                InputAppraiser.arrayFresh()
            }
        }
        
        else if (player === "p1" && playerVar.length === 5 ) {

            scoreBoard.setScore("drawScore");

            if(scoreBoard.totalScore() === 3) return gameResult.result()
            gameResult.announcementBoard.textContent = "Draw!";
            SquareSelect.refreshSqDom()
            InputAppraiser.arrayFresh()
        }
    }

    return {roundWin}
})()





const scoreBoard = (function() {

    let scoreBox1 = 0;
    let scoreBox2 = 0;
    let drawScore = 0;
    
    const player1DomEl = document.querySelector(".player1")
    const player2DomEl = document.querySelector(".player2")
    const roundCountEl = document.querySelector(".round")

    const setScore = (scoreContainer) => {

        if(scoreContainer === "p1") {
            scoreBox1++
            player1DomEl.textContent = `${nameInputEl.player1Ip.value}: ${scoreBox1}`;
            roundCountEl.textContent = `Round: ${scoreBox1+scoreBox2+drawScore}`
            
        } 
        else if(scoreContainer === "p2") {
            scoreBox2++
            player2DomEl.textContent = `${nameInputEl.player2Ip.value}: ${scoreBox2}`;
            roundCountEl.textContent = `Round: ${scoreBox1+scoreBox2+drawScore}`
        } 
        else if (scoreContainer === "drawScore") {
            
            drawScore++
            roundCountEl.textContent = `Round: ${scoreBox1+scoreBox2+drawScore}`;
        }   
    }

    const refreshScore = () => {
        
        scoreBox1 = 0;
        scoreBox2 = 0;
        drawScore = 0;
    }

    const getScore = (player) => {

        if(player === "p1") return scoreBox1;
        else if(player === "p2") return scoreBox2;
        else if (player === "drawScore") return drawScore;
    }

    const totalScore = () => {
        let total = (scoreBox1 + scoreBox2 + drawScore)
        return total
    }

    return {setScore, getScore, refreshScore, totalScore}
})()



const gameResult = (function() {

    const announcementBoard = document.querySelector(".at");

    const playerScore = function(scoreContainer) {
        
        if (scoreContainer === "p1") return scoreBoard.getScore("p1");
        else if (scoreContainer === "p2") return scoreBoard.getScore("p2");
        else if (scoreContainer === "drawScore") return scoreBoard.getScore("drawScore");
    }

    const result = () => {

        if (playerScore("p1") > playerScore("p2") || playerScore("p1") > playerScore("drawScore") && playerScore("p1" > playerScore("p2")) ||
            playerScore("drawScore") === 2 && playerScore("p1") === 1) return gameRestart.resetOpenDialogBtnTxt(), announcementBoard.textContent = `Congratulation ${nameInputEl.player1Ip.value}!`;

        else if (playerScore("p2") > playerScore("p1") || playerScore("p2") > playerScore("drawScore") && playerScore ("p2") > playerScore("p1") ||
                playerScore("drawScore") === 2 && playerScore("p2") === 1) return gameRestart.resetOpenDialogBtnTxt(), announcementBoard.textContent = `Congratulation ${nameInputEl.player2Ip.value}!`;
            
        else if (playerScore("p1") === 1 && playerScore("p2") === 1 || playerScore("drawScore") === 3) return gameRestart.resetOpenDialogBtnTxt(), announcementBoard.textContent ="Game Draw!";
    }

    return {result, playerScore, announcementBoard}
})()


// this module targets squares of the game board 
const SquareSelect = (function() {
    
    let ticMark = []
    let squareArray = []
    
    for(let i = 1; i < 10; i++) {
     squareArray.push(document.querySelector(`.square${i}`))   
    }
     
    const dynamicSquare = function(square) {
        
        square.addEventListener("click", () => {

            let squareEl = square;
            if (scoreBoard.totalScore() === 3) {}
            else if(square.textContent === "" && ticMark[ticMark.length -1] === "X" || ticMark.length === 0) {
                square.textContent = "O"
                ticMark.push("O")
                inputTaker.player1(Number(squareEl.getAttribute("data-key")))
            }
            else if ( square.textContent === "" && ticMark.length !== 0 && ticMark[ticMark.length -1] === "O"){
                square.textContent = "X";
                ticMark.push("X")
                inputTaker.player2(Number(squareEl.getAttribute("data-key")))
            }
        })
    }

    for (let i = 0; i < 9; i++) {
        dynamicSquare(squareArray[i])
    }

    const refreshSqDom = () => {
        ticMark = []
        for (let i = 0; i < 9; i++) {
            squareArray[i].textContent = ""
        }
    } 

    return {squareArray, refreshSqDom}
})()


const nameInputEl = (function() {

    const dialog = document.querySelector("dialog");
    const submitBtn = document.querySelector(".submitBtn")
    const openDialog = document.querySelector(".openDialogBtn");
    const player1Ip = document.querySelector(".player1Input")
    const player2Ip = document.querySelector(".player2Input")

    openDialog.addEventListener("click", () => {
        if(openDialog.textContent === "Restart") {
            gameRestart.restart()
            dialog.showModal()
        }
        else {
            dialog.showModal()
        }
    })
    
    function restartScoreDom() {
        document.querySelector(".player1").textContent = `${player1Ip.value}: `
        document.querySelector(".player2").textContent = `${player2Ip.value}: `
        document.querySelector(".round").textContent = `Round: `
    }

    submitBtn.addEventListener("click", () => {
        document.querySelector(".player1").textContent = `${player1Ip.value}: `
        document.querySelector(".player2").textContent = `${player2Ip.value}: `
        if (openDialog.textContent === "Restart") return openDialog.textContent = "Game Start"
    })


    return {player1Ip, player2Ip, restartScoreDom}
})()



const gameRestart = (function() {
    
    const restart = () => {
        InputAppraiser.arrayFresh()
        SquareSelect.refreshSqDom()
        document.querySelector(".at").textContent = ""
        scoreBoard.refreshScore()
        nameInputEl.restartScoreDom()
        
    }

    document.querySelector(".openDialogBtn").addEventListener("click", () => {
        if (document.querySelector(".openDialogBtn").textContent === "Restart") {restart()} 
    })

    const resetOpenDialogBtnTxt = () => {
        
        if (document.querySelector(".round").textContent === `Round: 3`) [
            document.querySelector(".openDialogBtn").textContent = "Restart"
        ]
    }
    
    return {resetOpenDialogBtnTxt, restart}
})()
