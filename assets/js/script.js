/**Create my variables */
let correctAnswers = [26, 'Tallinn', 'Western Australia', 'Sao Paulo', 3, 'Sydney', 5, 'Dubai', 'Russia', 'Servern'];
let answerChosen = [];
let score = 0;



let buttons = document.getElementsByClassName("btn");


for (let btn of buttons) {
    btn.addEventListener("click", function () {
        if (this.getAttribute("data-type") === "true") {
            btn.style.backgroundColor = "green";
            score++;
            showResult();
        } else {
            btn.style.backgroundColor = "red";
        } btn.disabled = "true";
    });
}

function showResult() {
    correctAnswers.innerHTML = "correctAnswers" + score;
};












