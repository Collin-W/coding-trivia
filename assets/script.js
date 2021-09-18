//connect timer to start click
//the highscore must be stored in the local storage then displayed 
//a correct answer should take you to next question, and a wrong answer deducts 5 seconds
//if timer ends, quiz is over

//var hotspring
var startClick = document.querySelector(".startTrivia");
var counter = document.querySelector(".counter");
var startTimer = 0;
var timer = 0;
var questionCount = 0;


//dynamic html element var
var quizContainer;
var quizQuestion;
var options;
var optionBtn;


var quizQuestionsArray = [ 
    {
        question: "Question #1: Color of the sky",
        options: ["blue", "green", "grey", "orange"],
        correct: "blue"
    },
    {
        question: "Question #2: Color of a banana",
        options: ["green", "blue", "grey", "yellow"],
        correct: "yellow"
    },
    {
        question: "Question #3: Color of a grass",
        options: ["grey", "green", "red", "blue"],
        correct: "green"
    },
    {
        question: "Question #4: Color of a coffee",
        options: ["blue", "yellow", "brown", "whites"],
        correct: "brown"
    },
];

console.log(quizQuestionsArray[questionCount]);

//this function should delete old html, and loop to next object in array
var nextQuestion = function() { 
    questionCount++
    createQuiz();
};

var createQuiz = function() {
    

    startClick.remove();
    console.log("startClick");

    

    var quizContainer = document.createElement("div");
    quizContainer.className = "quiz-contents";
    quizContainer.setAttribute("quiz-contents", "");
    //body.appendChild(quizContainer);
    document.getElementById("body").appendChild(quizContainer); 

    var quizQuestion = document.createElement("p");
    quizQuestion.className = "read-question";
    quizContainer.textContent = quizQuestionsArray[questionCount].question;
    quizContainer.appendChild(quizQuestion);

var options = quizQuestionsArray[questionCount].options;
    for (var option of options)  {
    var optionBtn = document.createElement("button");
    optionBtn.textContent = option;
    optionBtn.className = "btn";
    quizContainer.appendChild(optionBtn);
    optionBtn.addEventListener("click", function() {
        console.log(this.textContent)
        if (quizQuestionsArray[questionCount].correct === this.textContent) {
            console.log(this.textContent);
            console.log(quizQuestionsArray[questionCount].correct);
            alert("correct");
            quizContainer.remove();
            nextQuestion();
        } else {
            alert("wrong");
            quizContainer.remove();
            timer += -5;
            nextQuestion();
        };
    });
  } 
};

var endGame = function() {
    alert("You scored this many points ");
};


startClick.addEventListener("click", createQuiz);


//setInterval(function, milliseconds, param1, param2, ...)


// endgame
//if (question === quizQuestionsArray.length) {
   // endGame();
//};
  //quizQuestion.remove();
        //options.remove();
        //optionBtn.remove();

        
    //body.getElementById("quiz-contents").remove();
    //document.getElementsByClassName("read-question").remove();
   // document.getElementsByClassName("btn").remove();
    //quizQuestion.remove();
    //optionBtn.remove();

    //for(var i = 0; i < 3; i++) {
    //optionBtn.addEventListener("click", function() {
 // });