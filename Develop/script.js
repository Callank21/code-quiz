var body = document.body;
var openingEl = document.createElement("div");
var endingEl = document.createElement("div");
var form = document.createElement("form");
openingEl.className = "opening";
var openingh1El = document.createElement("h1");
openingh1El.textContent = "Coding Quiz Challenge";
var openingpEl = document.createElement("p");
var endingpEl = document.createElement("p");
openingpEl.textContent = "Try to complete the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!";
var openingbuttonEl = document.createElement("button");
openingbuttonEl.textContent = "Start Quiz!";
openingbuttonEl.setAttribute('id','start');
body.appendChild(openingEl);
openingEl.appendChild(openingh1El);
openingEl.appendChild(openingpEl);
openingEl.appendChild(openingbuttonEl);

var Qh2El = document.createElement("h2");
var button1 = document.createElement("button");
button1.setAttribute("data-answer", "wrong");
var button2 = document.createElement("button");
button2.setAttribute("data-answer", "wrong");
var button3 = document.createElement("button");
button3.setAttribute("data-answer", "wrong");
var button4 = document.createElement("button");
button4.setAttribute("data-answer", "wrong");
var input = document.createElement("input");
var inputBtn = document.createElement("button");
inputBtn.setAttribute("id", "end-button");
var timer = document.getElementById("timer");

const Q1 = {
    Question: "The role of a meta tag is that it provides information about your webpage for _______.",
    option1: "Back-end servers",
    option2: "User Devices",
    option3: "Search Engines",
    option4: "Script Writers",
    correct: button3
};

const Q2 = {
    Question: "What does changing display: block to display: flex do to the html elements on a page?",
    option1: "Makes them organize into a row vs. a column",
    option2: "Makes them grow and shrink with the screen",
    option3: "Makes them centered in the middle of the screen",
    option4: "Makes them wrap to the bottom of the screen",
    correct: button1
};

const Q3 = {
    Question: "Data attributes are used to store data within what elements?",
    option1: "CSS classes",
    option2: "ID Tags",
    option3: "Javascript Objects",
    option4: "Semantic HTML",
    correct: button4
};

const Q4 = {
    Question: "How is 'this' used in an object?",
    option1: "It refers to the global object",
    option2: "It refers to the object it is within",
    option3: "It refers to a variable just called last",
    option4: "It refers to the first function within an object",
    correct: button2
};

const Q5 = {
    Question: "What does HTML DOM allow programmers to do?",
    option1: "It allows for communication between a website's host and the page",
    option2: "It checks the means through which written code is interpreted for a webpage",
    option3: "It is an object model for how to get, change, add, or delete HTML",
    option4: "It allows users to write information to the web page",
    correct: button3
};

var Qlist = [Q1, Q2, Q3, Q4, Q5];

var startBtn = document.querySelector("#start");
 function startQuiz() {
    startTimer();
    rmvPage();
    setQ();
    loadQ();
 }
 var timerCount = 75;
var myInterval;
function startTimer() {
    timer.textContent = timerCount;
    myInterval = setInterval(Timer, 1000);
}
function Timer() {
    if (timerCount > 0) {
    timerCount--;
    timer.textContent = timerCount;
    }
    else {
    loadEnd();
    } 
}
function rmvPage() {
    for (var i = openingEl.getElementsByTagName('*').length; i > 0; i--) {
        openingEl.removeChild(openingEl.firstChild);
    }
}
function finalRmvPage() {
    for (var i = openingEl.getElementsByTagName('*').length - 1; i > 0; i--) {
        openingEl.removeChild(openingEl.firstChild);
    }
}
var endInit;
var inputBtnRead = document.querySelector("#end-button");
function loadEnd() {
    clearInterval(myInterval);
    openingEl.appendChild(Qh2El)
    Qh2El.textContent = "All done!"
    openingEl.appendChild(openingpEl);
    openingpEl.textContent = "Your Score: " + timerCount;
    timer.textContent = "";
    openingEl.appendChild(endingpEl);
    endingpEl.textContent = "Initials:";
    openingEl.appendChild(form);
    form.appendChild(input);
    input.setAttribute("type", "string");
    openingEl.appendChild(inputBtn);
    inputBtn.textContent = "Submit";
}
function setQ() {
    openingEl.appendChild(Qh2El);
    openingEl.appendChild(button1);
    openingEl.appendChild(button2);
    openingEl.appendChild(button3);
    openingEl.appendChild(button4);
}
var Qiterate = -1;
function loadQ() {
        Qiterate++;
        Qh2El.textContent = Qlist[Qiterate].Question;
        button1.textContent = Qlist[Qiterate].option1;
        button2.textContent = Qlist[Qiterate].option2;
        button3.textContent = Qlist[Qiterate].option3;
        button4.textContent = Qlist[Qiterate].option4;
        Qlist[Qiterate].correct.dataset.answer = "correct";
}
function checkAnswer(event) {
    console.log(event.target.dataset.answer);
    console.log(Qiterate);
    console.log(Qlist.length)
    if (event.target.dataset.answer == "wrong") {
        timerCount = timerCount - 10;
    }
    if (event.target.dataset.answer && Qiterate < Qlist.length - 1) {
        Qlist[Qiterate].correct.dataset.answer = "wrong";
        loadQ();
    }
    else if (Qiterate == Qlist.length - 1) {
        openingEl.removeEventListener("click", checkAnswer);
        rmvPage();
        loadEnd();
    }
}
var initials = document.getElementById("initials");
function writeInit() {
    endInit = initials.value;
}
function scoreScreen() {
    finalRmvPage();
    localStorage.setItem(endInit,timerCount);
    for (var i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        openingEl.appendChild(endingEl);
        endingEl.appendChild(endingpEl);
        endingpEl.textContent = `${key} : ${localStorage.getItem(key)}`;
    }   
}

startBtn.addEventListener("click", startQuiz);
openingEl.addEventListener("click", checkAnswer);
if (initials) {
    initials.addEventListener("keyup", writeInit);
}
inputBtn.addEventListener("click",scoreScreen);
