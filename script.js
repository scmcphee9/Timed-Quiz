// variable stored in global memory to track score
var userScore = 0

// variable for starting time of timer until end of game
var secondsLeft = 120

function setTime(){

    var timerInterval = setInterval(function(){
        // decreases timer by 1
        secondsLeft--;
        $(".time").text("secondsLeft" + " seconds remaining");

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            // calls end game function
            endGame()

        }
    }, 1000);
}

function endGame(){

// enter code to send to endgame page if timer goes to 0

}