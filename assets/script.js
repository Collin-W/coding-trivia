//connect timer to start click
//the highscore must be stored in the local storage then displayed 
//a correct answer should take you to next question, and a wrong answer deducts 5 seconds
//if timer ends, quiz is over

var startClick = document.getElementsByClassName("startTrivia");
var startTimer = 0;
var timer = 0;
var points = 0;

var quizQuestionsArray = [ 
    {
        question: "Question #1: Color of the sky",
        answer1: "blue",
        answer2: "green",
        answer3: "grey",
        answer4: "orange"
    },
    {
        question: "Question #2: Color of a banana",
        answer1: "green",
        answer2: "blue",
        answer3: "grey",
        answer4: "yellow"
    },
    {
        question: "Question #3: Color of a grass",
        answer1: "grey",
        answer2: "green",
        answer3: "red",
        answer4: "blue"
    },
    {
        question: "Question #4: Color of a coffee",
        answer1: "blue",
        answer2: "yellow",
        answer3: "brown",
        answer4: "whites"
    },
];


//this function should delete old html, and loop to next object in array
var nextQuestion = function() { 

    quizContainer.remove();
    quizQuestion.remove();
    optionBtn1.remove();
    optionBtn2.remove();
    optionBtn3.remove();
    optionBtn4.remove();

//loops though each object of array
for(var question of quizQuestionsArray) {

    createQuiz();
  }
};



var createQuiz = function() {
    var quizContainer = document.createElement("div");
    quizContainer.className = "quiz-contents";

    var quizQuestion = document.createElement("p");
    quizQuestion.className = "";
    quizContainer.appendChild("quizQuestion");

    var optionBtn1 = document.createElement("button");
    optionBtn1.textContent = quizQuestionsArray.answer1;
    optionBtn1.className = "btn";
    quizContainer.appendChild(optionBtn1);

    var optionBtn2 = document.createElement("button");
    optionBtn2.textContent = quizQuestionsArray.answer2;
    optionBtn2.className = "btn";
    quizContainer.appendChild(optionBtn2);

    var optionBtn3 = document.createElement("button");
    optionBtn3.textContent = quizQuestionsArray.answer3;
    optionBtn3.className = "btn";
    quizContainer.appendChild(optionBtn3);

    var optionBtn4 = document.createElement("button");
    optionBtn4.textContent = quizQuestionsArray.answer4;
    optionBtn4.className = "btn";
    quizContainer.appendChild(optionBtn4);

    // if button click is correct, next question, else lose 5 seconds
    if (optionBtn1) {
        alert("correct");
        nextQuestion();
    } else {
        alert("wrong")
        timer += -5;
        nextQuestion();
   }
};


var endGame = function() {
    alert("You scored this many points " + points);
};

// endgame
if (question === quizQuestionsArray.length) {
    endGame();
};


startClick.addEventListener("click", createQuiz());