var clockIsRunning = false;
var start = false;
var time = 30;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// start the game by pressing the START button

// game starts timer that gives the user 30 seconds to finish the quiz

$("#start").on("click", function () {
    start = true;
    quizLoad();
    setInterval(countdown, 1000);
    $("#timer").text("Time Remaining: " + time);
});

// game form loads and produces list of multiple choice or true and false options and questions

function countdown() {
    clockIsRunning = true;
    time--;
    $("#timer").text("Time Remaining: " + time);
}

function quizLoad() {
    setTimeout(timerUp, 30000);
    $("#starting-h1").hide();
    $("#quiz-h1").show();
    $("#main-div").height("1000px");
    $("#start").hide();
    $("#hidden-form").show();
}

function timerUp() {
    $("#quiz-h1").hide();
    $("#hidden-form").hide();
    $("#main-div").height("600px");
    results();
    clockIsRunning = false;
    start = false;
}

function results() {
    var myQuestions = [
        {
            question: "How long is New Zealand's Nintey Mile Beach?",
            answers: {
                A1: 'ninety-miles',
                A2: 'fifty-feet',
                A3: '23.4-miles',
                A4: '55-miles'
            },
            correctAnswer: '55-miles'
        },
        {
            question: "Before Mount Everest was discovered, what was the highest mountain in the world?",
            answers: {
                A1: 'mount-fuji',
                A2: 'mount-everest',
                A3: 'mount-baldy',
                A4: 'mount-leconte'
            },
            correctAnswer: 'mount-everest'
        },
        {
            question: "The beaver is the national emblem of which country?",
            answers: {
                A1: 'kentucky',
                A2: 'holland',
                A3: 'canada',
                A4: 'croatia'
            },
            correctAnswer: 'canada'
        },
        {
            question: "What's in the box?!",
            answers: {
                A1: 'frosted-flakes',
                A2: 'shoes',
                A3: 'wifes-head',
                A4: 'surprise'
            },
            correctAnswer: 'wifes-head'
        },
    ];

    // console.log('input[name=Q'+i+']:checked');
    // 'input[name=Q0]:checked'

    for (var i = 0; i < myQuestions.length; i++) {
        // var currentQuestion = ("'input[name=Q"+i+"]:checked'");
        console.log($("'input[name=Q" + i + "]:checked'").val());
        console.log($(myQuestions[i].correctAnswer))
        // if ($(currentQuestion).val() === myQuestions[i].correctAnswer) {
        //     correct++;
        // } else if ($(currentQuestion).val() === undefined) {
        //     unanswered++
        // } else {
        //     incorrect++;
        // }
    }

    $("#correct").text("Correct: " + correct);
    $("#correct").show()
    $("#incorrect").text("Incorrect: " + incorrect);
    $("#incorrect").show()
    $("#unanswered").text("Unanswered: " + unanswered);
    $("#unanswered").show()

}

// timer ends and produces how many questions the user got right, wrong, and how many they werent able to answer