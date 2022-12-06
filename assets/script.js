var timer = document.getElementById("#.timer");
var points= document.getElementById("#.points")
var startSection = document.getElementById("start-section");
var startButton = document.getElementById("start-button");
var questionCard = document.getElementById("question-card");
var questionEl= document.getElementById("question");

var scores = document.getElementById("scores-section")

//this question index will help us keep track of question you're on
var timer;
var timerCount;
var quizOver;
var questionIndex = 0;
var pointCount = 0;

startButton.addEventListener("click",function(event){
    event.preventDefault();
    //hide start section
    startSection.classList.add("hidden");
    questionSection.classList.remove("hidden");
    console.log(startSection.style.display);
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
     
]



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