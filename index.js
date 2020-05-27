var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
});

function nextSequence() {
  var randomNumber = Math.floor(3 * Math.random()) + 1;
  var randomChosenColor = buttonColors[nextSequence()];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  var audio = new Audio("sound/" + randomChosenColor + ".mp3");
  audio.play();
}
