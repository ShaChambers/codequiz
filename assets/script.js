var timer = document.getElementById("#.timer-count");
var points= document.getElementById("#.points")
var startSection = document.getElementById("start-section");
var startButton = document.getElementById("start-button");
var questionSection = document.getElementById("question-section");
var questionEl= document.getElementById("question") ;
var scores = document.getElementById("scores-section")

//this question index will help us keep track of question you're on
var timer;
var timerCount;
var quizOver;
var questionIndex = 0;
var pointCount = 0;

//Question array
var questionArray = [
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
    {
        question: "Which of the following represent falsy values in javascript", 
        choices: ["False","Nothing","Undifined","All of the Above"],
        answer: "3"
    },
    {
        question: "Which of the following represent truthy values in javascript", 
        choices: ["True","Something","[]","All of the Above"],
        answer: "3"
    },
    {
        question: "What is the type of variable data declare below const data=[ ]", 
        choices: ["Array","Object","String","None of the above"],
        answer: "0"
    },
    {
        question: "Which of the following represents loops in javascript", 
        choices: ["For","While","forEach","All of the Above"],
        answer: "3"
    },
    {
        question: "An object is an unordered collection of_____", 
        choices: ["Values","Names","Properties","All of the Above"],
        answer: "2"
    },
    {
        question: "What is the role of continue keyword inside a loop", 
        choices: ["Restart","Break Loop","Ignore Statements and Continue Loop","None of the Above"],
        answer: "2"
    },
    {
        question: "The code snippet described below represents const [value1,value2,value3]= data", 
        choices: ["Destructuring in an object","Destructuring in an array","Can be both destructuring in array or object","None of the above"],
        answer: "1"
    },
     
]
//game start
startButton.addEventListener("click",function(event){
    event.preventDefault();
    //hide start section
    startSection.classList.add("hidden");
    questionSection.classList.remove("hidden");
    console.log(startSection.style.display);

    //reveal question section
    renderQuestion()
})


function renderQuestion(){
//make sure ur not at end of array
// for(var i=0; i <questionIndex.length) i++;{
    
// }

    //call on question element
    //change inner text of question <p> element
    //render new question
    //render new choices

}
function checkQuestion(){
    //before we incriment, we need to check to see if the choice was right or wrong
    questionIndex ++
    //render new question
    //render new choices
    renderQuestion()
}

//penalty
//timer
//