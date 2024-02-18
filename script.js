// This function is only responsible for taking input and sending user inputs
const inputTaker = (function() {

    const player1 = (input) => {
        InputAppraiser.appraise(input, "p1")
    }

    const player2 = (input) => {
        InputAppraiser.appraise(input, "p2")
    }
    
    return {player1, player2}
})()


// This function adds the inputs to the corresponding container of both player.
// when player input containers and appraises the container to check if it has sufficient inputs for the next step 
// which will compare the  two players input or choices and announce the winner of the round
const InputAppraiser = (function() {
    
    let player1o = []
    let player2x = []

    const arrayFresh = () => {
        player1o = [];
        player2x = [];
    }

    const appraise = (input, player) => {
        
        if (player === "p1") {
            
            player1o.push(input)
            if(player1o.length === 3 || player1o.length === 4 || player1o.length === 5) return roundWinCheck.roundWin(player1o, "p1")
        }
        else if (player === "p2") {
        
            player2x.push(input)
            if(player2x.length === 3 || player2x.length === 4) return roundWinCheck.roundWin(player2x, "p2")
        }
        
    }


    return {appraise, arrayFresh, player2x, player1o}

})()



// This function does exactly that, it puts the inputs through a series of conditions to check which players inputs wins.
// which if none passes it will declare draw if all the square of the game board has been filled else it will take 
// more inputs until all the game board squares has been filed.
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




// This function adds scores to both player containers when ever one wins or if its draw it also give that
// a score for round counting purposes and it also manages all the game score related things, such as reading the score
// containers of the player or emptying them when necessary.
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


// This function is responsible for checking who wins the whole game after all there rounds have been completed 
// it does so based on the data provided by the score board function, the end game result is decided based on a series a conditions 
// being met.
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


// this module targets squares of the game board and populates the squares based on user interactions and it also refreshes
// the square when called for.
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

// The name input element function is responsible getting the user name of both player when entered or using the default
// when none is provided.
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
