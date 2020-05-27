var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  var soundFileName = "sounds/" + userChosenColor + ".mp3";
  animatePress(userChosenColor);
  playSound(userClickedPattern);
});

function nextSequence() {
  var randomNumber = Math.floor(3 * Math.random()) + 1;
  var randomChosenColor = buttonColors[nextSequence()];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(currentColor) {
  var audio = new Audio("sounds/" + currentColor + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");
  setTimeout(function () {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}
