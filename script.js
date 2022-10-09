let lvlCount = 1;
let started = false;
let colorArr = ["blue", "red", "yellow", "green"];
let colorPattern = [];
let playerPattern = [];
let i = 0;

$(".start-btn").on("click", function () {
      if (!started) {
            colorPattern = [];
            playerPattern = [];
            $("body").removeClass("red-background");
            lvlCount = 1;
            $("#level-title").text("Level " + lvlCount);
            setTimeout(() => {
                  nextSequence();
            }, 1000);
            started = true;
      }
})

function cssWhenPressed() {
      $('.btn').click(function (event) {
            $('#' + event.target.id).addClass("pressed");
            setTimeout(function () { $('.btn').removeClass("pressed"); }, 100);
      });
}

function cssWhenLost() {
      $("body").addClass("red-background");
      $("h1").html("You Lose ! Click <span class=\"start-btn\">Here</span> to restart.")
}

function playSound(color) {
      audio = new Audio("sounds/" + color + ".mp3")
      audio.play();
}
function makeColorPattern() {
      randNum = Math.floor((Math.random() * 100) % 4)
      randColor = colorArr[randNum];
      colorPattern.push(randColor)
      console.log("colorPattern is: ", colorPattern)
}

$(".btn").on("click", function (event) {
      playerPattern.push(event.target.id)
      console.log("playerPattern : ", playerPattern)
      cssWhenPressed();
      checkAnswer(event.target.id);

})

function checkAnswer(color) {

      if (colorPattern[i] === playerPattern[i])
            console.log("correct");
      else {
            console.log("wrong");
            playSound("wrong");
            cssWhenLost();
            started = false;
            return;
      }
      playSound(color);
      if (playerPattern.length === colorPattern.length) {
            setTimeout(() => {
                  nextSequence();
            }, 1000);
      }
      i++;
}

function nextSequence() {
      i = 0;
      playerPattern = [];
      $("#level-title").text("Level " + lvlCount);
      makeColorPattern();
      lvlCount++;
      $('#' + randColor).addClass("pressed");
      setTimeout(function () { $('.btn').removeClass("pressed"); }, 100);
      playSound(randColor);
}

$(".help").on("click", function () {
      showRules();
})

function showRules() {
      $(".rules").slideToggle();

}





