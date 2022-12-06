//id tags to be called
var timeEl = document.getElementById("time"); 
var questionEl = document.getElementById("question"); 
var aEl = document.getElementById("answerA"); 
var bEl = document.getElementById("answerB");
var cEl = document.getElementById("answerC");
var startBtn = document.getElementById("startBtn");
var evaluationEl = document.getElementById("evaluation");
var scoresListEL = document.getElementById("scoresList");
var resultsEL = document.getElementById("resultsArea");
var scoreEL = document.getElementById("finalScore");
var submitBtn = document.getElementById("submitBtn");
var playerNameEl = document.getElementById("playerName");

//Global vars to be called later
var correctAnswer = "";
var secondsRemaining = 30;
var i = 0;
var leaderboard = [];

//questionSet contains the questions that will be referenced by nextQuestion function
var questionSet = [
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        choices: ["<javascript>","<js>","<src>","<script>"],
        answer: "3"
    },
    {
        question: "How many ways are there with which we can declare a variable in javascript?", 
        choices: ["Only One","Three","Infinately Many","None of the Above"],
        answer: "1"
    },
    {
        question: "Is a variable named 'apple' same as 'Apple' in javascript?", 
        choices: ["Yes","No","Only when we use strict","None of the Above"],
        answer: "1"
    },
     
];
//Call the next question in questionSet and assign all of the answers to answer buttons
function nextQuestion(i) {
    correctAnswer = questionSet[i].correctAnswer;
    questionEl.textContent = questionSet[i].question;
    aEl.textContent = questionSet[i].answers[0];
    bEl.textContent = questionSet[i].answers[1];
    cEl.textContent = questionSet[i].answers[2];
  
  
    questionEl.hidden = false;
  }
  
//highscores.html will error because there is no start btn, so only add event listener to index page
if(startBtn !== null) {
    startBtn.addEventListener("click", startGame);
  
    submitBtn.addEventListener("click", submitScore);
  };

  
  //let the games begin!
  function startGame(event) {
    event.preventDefault();
     // Start a timer
     var countdown = setInterval(function () {
        secondsRemaining--;
        // if time expires, quiz has ended
        if(secondsRemaining > -1) {
          timeEl.textContent = secondsRemaining;
            } else { clearInterval(countdown);
             questionEl.hidden = true;
            answerA.hidden = true;
            answerB.hidden = true;
            answerC.hidden = true; 
            evaluationEl.hidden = true;
            setScore();
            
        };
      }, 1000);
    }

    //event listener on buttons
    aEl.addEventListener("click", checkAnswer);
    bEl.addEventListener("click", checkAnswer);
    cEl.addEventListener("click", checkAnswer);
//If the answer is correct, and not the last question, respond correct - next question
//if the answer is correct and the last question, respond correct - end quiz
//if the answer is incorrect and time and not the last question, deduct 10 points and next question
//if the answer is incorrect and the last question, deduct 10 points, end quiz
