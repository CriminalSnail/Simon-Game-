var userClickedPattern=[];
var gamePattern=[];
var buttonColors = ["red", "blue", "green", "yellow"];

var started=false;

var randomNumber;
var randomChoosenColor;
function nextSequence() {
      var randomNumber = Math.floor(Math.random() * 4);
    gamePattern.push(buttonColors[randomNumber]);
    randomChoosenColor=buttonColors[randomNumber];
    flash(randomChoosenColor);
    playSound(randomChoosenColor);
    $("#level-title").html(`level ${level}`);
    level++;
    userClickedPattern=[];
   
}


function flash (randomChoosenColor)
  {$("#"+ randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  }

 var count=0;
$(document).on("keydown", function(event) {nextSequence();
started=true;
count++});
  

$(".btn" ).on("click", function(event) {
  let userChosenColor=event.target.id;
  userClickedPattern.push(userChosenColor);
playSound(event.target.id);
animatePress(event.target.id);
checkAnswer(userClickedPattern.length-1);} )

function playSound(name) { var audio = new Audio(`sounds/${name}.mp3`);

audio.play();
}
function animatePress(currentColor) {
  $("#"+currentColor).addClass("pressed");

  var delayInMilliseconds = 100; 

setTimeout(function() {
  $("#"+currentColor).removeClass("pressed");
}, delayInMilliseconds);
}

var level=0;

function checkAnswer(currentLevel) 
{if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) 
  
  {console.log("success");

  if (userClickedPattern.length === gamePattern.length)
{setTimeout(function() {nextSequence();
userClickedPattern=[];}, 1000 );}
}

else {
  let gameover= new Audio("sounds/wrong.mp3");
  gameover.play();
  $("body").addClass("game-over");

  var delayInMilliseconds = 200; 
  startOver();
setTimeout(function() {
  $("body").removeClass("game-over");
}, delayInMilliseconds);
$("h1").html("Game Over, Press Any Key to Restart")
   console.log("wrong")};
   
  }

   function startOver() {
    level=0;
    gamePattern=[];
    started=false;

   }