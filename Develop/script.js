var body = document.body;
var openingEl = document.createElement("div");
openingEl.className = "opening";
var openingh1El = document.createElement("h1");
openingh1El.textContent = "Coding Quiz Challenge";
var openingpEl = document.createElement("p");
openingpEl.textContent = "Try to complete the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!";
var openingbuttonEl = document.createElement("button");
openingbuttonEl.textContent = "Start Quiz!";
openingbuttonEl.setAttribute('id','start');
body.appendChild(openingEl);
openingEl.appendChild(openingh1El);
openingEl.appendChild(openingpEl);
openingEl.appendChild(openingbuttonEl);

var startBtn = document.querySelector("#start");
startBtn.addEventListener("click", function() {
rmvStart();
});
function rmvStart() {
    for (var i = openingEl.getElementsByTagName('*').length; i > 0; i--) {
        openingEl.removeChild(openingEl.firstChild);
    }
}