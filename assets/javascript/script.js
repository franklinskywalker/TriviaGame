//start game

var gameQuestions = [
    "Jon Snow the baster of the North?",
    "What is the name of Jon's direwolf?",
    "Who has Brienne sworn her loyalty to?",
    "R+L=?",
    "Whats Jon snow's real name"
];
console.log(gameQuestions);


var gameAnswers = [
    ["true", "false"],
    ["Ghost", "Lady", "Nymeria", "Summer"],
    ["Rodrik Cassel", "Catelyn Stark", "Robb Stark", "Arya"],
    ["Jon Snow", "Night King", "Bran the builder", "Sansa"],
    ["Jon Stark", "Jon Baratheon", "Jon Targaryen", "Aegon Targaryen"]
];


var answersRight = [
    "true",
    "Ghost",
    "Catelyn Stark",
    "Jon Snow",
    "Aegon Targaryen"
];



$("body").on("click", ".start-button", function(event) {
    generateHTML();

    TicTacTimer();

}); // Closes start-button click
//timer


function TicTacTimer() {
    gameClock = setInterval(thirtySeconds, 1000);

    function thirtySeconds() {
        if (Timelimit === 0) {
            clearInterval(gameClock);
            generateLossDueToTimeOut();
        }
        if (Timelimit > 0) {
            Timelimit--;
        }
        $(".timer").html(Timelimit);


        $("body").on("click", ".answer", function(event) {
            clickSound.play();
            selectedAnswer = $(this).text();
            if (selectedAnswer === answersRight[gameCounter]) {
                //alert("correct");

                clearInterval(gameClock);
                generateWin();
            }
            else {
                //alert("wrong answer!");
                clearInterval(gameClock);
                generateLoss();
            }
        }); // Close .answer click

        $("body").on("click", ".reset-button", function(event) {
            clickSound.play();
            resetGame();
        });

        function generateLossDueToTimeOut() {
            unansweredTally++;
            gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + Timelimit + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + answersRight[gameCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
            $(".mainArea").html(gameHTML);
            setTimeout(wait, 4000); //  change to 4000 or other amount
        }

        function generateWin() {
            correctTally++;
            gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + Timelimit + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + answersRight[gameCounter] + "</p>" + imageArray[gameCounter];
            $(".mainArea").html(gameHTML);
            setTimeout(wait, 4000); //  change to 4000 or other amount
        }

        function generateLoss() {
            incorrectTally++;
            gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + Timelimit + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + answersRight[gameCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
            $(".mainArea").html(gameHTML);
            setTimeout(wait, 4000); //  change to 4000 or other amount
        }

        function generateHTML() {
            gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + gameQuestions[gameCounter] + "</p><p class='first-answer answer'>A. " + gameAnswers[gameCounter][0] + "</p><p class='answer'>B. " + gameAnswers[gameCounter][1] + "</p><p class='answer'>C. " + gameAnswers[gameCounter][2] + "</p><p class='answer'>D. " + gameAnswers[gameCounter][3] + "</p>";
            $(".mainArea").html(gameHTML);
        }

        function wait() {
            if (gameCounter < 7) {
                gameCounter++;
                generateHTML();
                Timelimit = 30;
                TicTacTimer();
            }
            else {
                finalScreen();
            }
        }

        function TicTacTimer() {
            gameClock = setInterval(thirtySeconds, 1000);

            function thirtySeconds() {
                if (gameCounter === 0) {
                    clearInterval(gameClock);
                    generateLossDueToTimeOut();
                }
                if (gamecounter > 0) {
                    Timelimit--;
                }
                $(".timer").html(Timelimit);
            }
        }

        function generateLossDueToTimeOut() {
            unansweredTally++;
            gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + Timelimit + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + answersRight[gameCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
            $(".mainArea").html(gameHTML);
            setTimeout(wait, 4000); //  change to 4000 or other amount
        }

        function generateWin() {
            correctTally++;
            gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + Timelimit + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + answersRight[gameCounter] + "</p>" + imageArray[gameCounter];
            $(".mainArea").html(gameHTML);
            setTimeout(wait, 4000); //  change to 4000 or other amount
        }

        function generateLoss() {
            incorrectTally++;
            gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + Timelimit + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + answersRight[gameCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
            $(".mainArea").html(gameHTML);
            setTimeout(wait, 4000); //  change to 4000 or other amount
        }

        function generateHTML() {
            gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + gameQuestions[gameCounter] + "</p><p class='first-answer answer'>A. " + gameAnswers[gameCounter][0] + "</p><p class='answer'>B. " + gameAnswers[gameCounter][1] + "</p><p class='answer'>C. " + gameAnswers[gameCounter][2] + "</p><p class='answer'>D. " + gameAnswers[gameCounter][3] + "</p>";
            $(".mainArea").html(gameHTML);
        }

        function wait() {
            if (gamerCounter < 7) {
                gameCounter++;
                generateHTML();
                Timelimit = 30;
                TicTacTimer();
            }
            else {
                finalScreen();
            }
        }

        function TicTacTimer() {
            gameClock = setInterval(thirtySeconds, 1000);

            function thirtySeconds() {
                if (Timelimit === 0) {
                    clearInterval(gameClock);
                    generateLossDueToTimeOut();
                }
                if (Timelimit > 0) {
                    Timelimit--;
                }
                $(".timer").html(Timelimit);
            }
        };
        var gameHTML;
        var Right = 0;
        var Wrong = 0;
        var Timelimit = 30;
        var gameClock;
        var selectedAnswer;
        var gameCounter = 0;
        var correctTally = 0;
        var incorrectTally = 0;
        var unansweredTally = 0;
