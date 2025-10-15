let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour); 
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
    let audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

function nextSequence() {

    userClickedPattern = [];
    
    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
    
}

function animatePress(currentColour){
      $("#" + currentColour).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100); 
}

$(document).keypress(function() {
    if(!started){
    
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function checkAnswer(currentLevel){

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){

        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    } else {

        let wrong = "wrong";
        playSound(wrong);
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}
