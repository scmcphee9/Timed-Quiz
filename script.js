// variable stored in global memory to track score
var userScore = 0;

// variable for starting time of timer until end of game
var secondsLeft = 120;

// need event listener to start timer when start button is pushed

// this variable selects the the question id
var questions = [
  "#question_1",
  "#question_2",
  "#question_3",
  "#question_4",
  "#question_5",
];
var questionCount = 0;

$("#startQuiz").removeClass("hide");

$("#start").on("click", function () {
  $("#startQuiz").addClass("hide");
  $("#question_1").removeClass("hide");
});

// counts down timer

function setTime() {
  var timerInterval = setInterval(function () {
    // decreases timer by 1
    secondsLeft--;
    // selects class time and adds the following text
    $(".time").text(secondsLeft + " seconds remaining");

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      // calls end game function
      endGame();
    }
  }, 1000);
}

function endGame() {
  // enter code to send to endgame page if timer goes to 0
}

// calls timer function
setTime();
