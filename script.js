// variable stored in global memory to track score
var userScore = 0;

// variable for starting time of timer until end of game
var secondsLeft = 65;
var oldQuestion = 0;
var newQuestion = 1;
var responseQ = 0;

// This is the first viewing page, and will start the timer when the button is clicked
$("#startQuiz").removeClass("hide");

$("#start").on("click", function () {
  $("#startQuiz").addClass("hide");
  setTime();
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

// template literals to run through all the questions hiding and unhiding the html questions
$("#allQuestions").on("click", function (event) {
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
    secondsLeft -= 5;
  }
  console.log(userScore);

  $("#highScores").text("Score: " + userScore);
});

// this is when the submit button is pushed to enter players name and score.
//  It sends it to local memory and store it there for the future players to see where they rank.



$("#submitName").on("click", function () {
  var name = $("#userName").val().trim();

  console.log(name);

  // Varaible to store both name and score as an object

  // cap to number of items in array
  // highest scores first

  const savedArr = JSON.parse(localStorage.getItem("Name")) || [];

  var savedScore = {
    name: name,
    score: userScore,
  };

  console.log(typeof userScore);

  savedArr.push(savedScore);
  // sets key to name and value as string (showing a problem with score showing a number)
  localStorage.setItem("Name", JSON.stringify(savedArr));
  console.log(savedScore);


  savedArr.forEach((arrayItems) => {
    $("#scoreList").prepend("<li>" + arrayItems.name + ": " + arrayItems.score);

    console.log(arrayItems);
  });

 
});

