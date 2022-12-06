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