// variable stored in global memory to track score
var userScore = 5;

// variable for starting time of timer until end of game
var secondsLeft = 65;
var oldQuestion = 0;
var newQuestion = 1;
var responseQ = 0;
var responseQ2 = 2;

// This is the first viewing page, and will start the timer when the button is clicked
$("#startQuiz").removeClass("hide");

$("#start").on("click", function () {
  $("#startQuiz").addClass("hide");
  setTime();
});

// template literals to run through all the questions hiding and unhiding the html questions
$("body").on("click", function (event) {
  if (event.target.matches("button")) {
    $(`#question_${oldQuestion}`).addClass("hide");
    $(`#question_${newQuestion}`).removeClass("hide");
    oldQuestion++;
    newQuestion++;
  }
  // if a user selects a correct answer this will say correct on the following question, and add 10points to the users score
  // if the player selects an incorrect answer this will remove 5 points from the score and 5 seconds from the timer
  if (event.target.matches("#correctAnswer")) {
    $(`#rightWrong_${responseQ}`).text("Correct!");
    responseQ++;
    userScore += 10;
  } else {
    $(`#rightWrong_${responseQ}`).text("Wrong...");
    responseQ++;
    userScore -= 5;
    secondsLeft -= 5;
  }
  console.log(userScore);
  $("#highScores").text(userScore);
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
      // When timer =0 this will bring the player to the last screen if they run out of time
      $("#allQuestions").addClass("hide");
      $("#question_6").removeClass("hide");
    }
  }, 1000);
}
