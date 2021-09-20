//var
var startClick = document.querySelector(".startTrivia");
var counter = document.getElementById("counter");
var startTimer = 0;
var timeLeft = 0;
var timeInterval = 0;
var questionCount = 0;

//dynamic html element var
var quizContainer;
var quizQuestion;
var options;
var optionBtn;


var quizQuestionsArray = [ 
    {
        question: "Question #1: Which of the following is not a falsy value in JavaScript?",
        options: ["0", "-0", "null", "never"],
        correct: "never"
    },
    {
        question: "Question #2: When using the confirm() method for user input, what type of data can we expect to return?",
        options: ["string", "boolean", "integer", "null"],
        correct: "boolean"
    },
    {
        question: "Question #3: What is the argument of a function? ",
        options: ["Similar to semantic html, for accessiblity in JavaScript functions.", "The call triggering the function to execute.", "Arguments pass data into a function.", "A repeated loop that executes when conditions stay true. "],
        correct: "Arguments pass data into a function."
    },
    {
        question: "Question #4: What does the (this) method refer to in a function?",
        options: ["(this) is a self referance to an object.", "A semantic variable placeholder method.", "A specific object in an array.", "A boolean with a true or false depending on (this) condition/s."],
        correct: "(this) is a self referance to an object"
    },
];

console.log(quizQuestionsArray[questionCount]);

//this function should delete old html, and loop to next object in array
var nextQuestion = function() { 
    questionCount++
    if (questionCount === quizQuestionsArray.length) {endGame()};
    createQuiz();
};

var createQuiz = function() {

    
    

    startClick.remove();
    console.log("startClick");

   

    var quizContainer = document.createElement("div");
    quizContainer.className = "quiz-contents";
    quizContainer.setAttribute("quiz-contents", "");
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
        } else if( questionCount === quizQuestionsArray.length) {
            endGame();
        } else {
            alert("wrong");
            quizContainer.remove();
            timeLeft = timeLeft + -5;
            nextQuestion();
        };
    });
  } 
};

var endGame = function() {
    clearInterval(timeLeft);
    alert("Your score is " + timeLeft);
};

function countdown() {
timeLeft = 60;
var timeInterval = setInterval(function(){
    if (timeLeft <= 1) {
        quizContainer.remove();
        alert('Time is up!');
        clearInterval(timeInterval);
    };
      counter.textContent = timeLeft;
      timeLeft--
      console.log(timeLeft);
  }, 1000);
};


startClick.addEventListener("click", createQuiz);
startClick.addEventListener("click", countdown);

localStorage.setItem("high-score", timeLeft)

var renderScore = function() {
    var oldScore
   var newScore = localStorage.getItem("high-score", timeLeft);
   if (newScore > oldScore) {
       alert("A new high score! Your new record is " + newScore);
   } else {
       alert("The highscore is " + oldScore + ". You did not beat the highscore!");
   }
};


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