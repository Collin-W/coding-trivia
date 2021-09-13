var startBtn = 0;
var startTimer = 0;
var timer = 0;
var points = 0;
var correctAnswer = document.querySelector("input[name='correct']");
var wrongAnswer = document.querySelector("input[name='wrong']");

var quizQuestions = ["quiz1", "quiz2", "quiz3"];


//start button calls other functions
var start = function() {
    if (startBtn) {
        startTimer = 1;
        nextQuestion();
    }
};


//acesses array of questions and allows you to contiunne 
var nextQuestion = function() {
    for(var i = -1; i < quizQuestions.length; i++) {
    questionDisplay([i]);  
}
    if (i === quizQuestions.length) {
    timer === 0;
    alert("You are done! This is your score " + points);
}
};


//right or wrong outcomes
var Question = function() {
    if (correctAnswer) {
        points++;
        nextQuestion();
    } else if (wrongAnswer) {
        timer += -5;
        return start();
    }
};

var questionDisplay = function() {

    var displayedQ = document.getElementById(quizQuestions);

    if (displayedQ.style.display = "none") {
        displayedQ.style.display = "block";
    }

};






correctAnswer.addEventListener("click");
wrongAnswer.addEventListener("click");