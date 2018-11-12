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
var targetScoreRandom = Math.floor(Math.random() * 102) + 19;

function startGame() {
    userScore = 0;
    targetScoreRandom;
    crystals = crystalSet();
    for (var key in crystals) {
        var crystalsDiv = $("<div>").attr("class", "crystalStyle").attr("data-", key);
        var imageWrite = $("<img>").attr("src", crystals[key].image).attr("worth", crystals[key].worth);
        crystalsDiv.append(imageWrite);
        $(".crystalDiv").append(crystalsDiv);
        console.log("worth: " + crystals[key].worth)
    }
};

startGame();