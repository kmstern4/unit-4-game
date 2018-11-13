function crystalSet() {
    return {
        green: {
            worth: Math.floor(Math.random() * 12) + 1,
            image: "Assets/Images/gemgreen.png",
        },
        purple: {
            worth: Math.floor(Math.random() * 12) + 1,
            image: "Assets/Images/gempurple.png",
        },
        yellow: {
            worth: Math.floor(Math.random() * 12) + 1,
            image: "Assets/Images/gemyellow.png",
        },
        pink: {
            worth: Math.floor(Math.random() * 12) + 1,
            image: "Assets/Images/gempink.png",
        }
    }
};

var userScore = 0;
var wins = 0;
var losses = 0;
var crystals ;
var targetScoreRandom;

function startGame() {
    $(".crystalStyle").remove();
    userScore = 0;
    targetScoreRandom = Math.floor(Math.random() * 102) + 19;
    crystals = crystalSet();
    for (var key in crystals) {
        var crystalsDiv = $("<div>").attr("class", "crystalStyle").attr("data-crystal", key);
        var imageWrite = $("<img>").attr("src", crystals[key].image).attr("worth", crystals[key].worth).attr("class", "crystalBtn");
        crystalsDiv.append(imageWrite);
        $(".crystalDiv").append(crystalsDiv);
        console.log("worth: " + crystals[key].worth);
    };
    clickEvent();
    $("#targetScore").text(targetScoreRandom);
    $("#currentScore").text(userScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
};

function clickEvent() {
    $(".crystalBtn").on("click", function () {
    console.log(this);
    console.log($(this).attr("worth"));
    var numWorth = parseInt($(this).attr("worth"));
    console.log(numWorth);
    console.log(userScore);
    userScore = userScore + numWorth;
    console.log(userScore);
    $("#currentScore").text(userScore);
    if (userScore > targetScoreRandom) {
        alert("You lose");
        losses++;
        startGame();
    };
    if (userScore == targetScoreRandom) {
        alert("you win");
        wins++
        startGame();
    }
    })
};

startGame();
