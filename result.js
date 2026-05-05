const correctAnswers = {
    q1: "size",
    q2: "height",
    q3: "inside",
    q4: "bcolor",
    q5: "justify",
    q6: "grid",
    q7: "absolute",
    q8: "down",
    q9: "skew",
    q10: "boxshadow",
    q11: "timing",
    q12: "wrap"
};

document.querySelector(".evaluate-button").addEventListener("click", () => {
    let score = 0;

    for (let question in correctAnswers) {
        let selected = document.querySelector(`input[name="${question}"]:checked`);
        let questionBox = document.querySelector(`input[name="${question}"]`).closest(".question-box");

        // reset barvy (když klikneš znovu)
        questionBox.style.backgroundColor = "";

        if (selected) {
            if (selected.value === correctAnswers[question]) {
                score++;
                questionBox.style.backgroundColor = "#b6f5b6"; // zelená
                questionBox.style.border = "4px solid #1eff00"
            } else {
                questionBox.style.backgroundColor = "#ffacac"; // červená
                questionBox.style.border = "4px solid #ff0000"
            }
        } else {
            questionBox.style.backgroundColor = "#ffacac"; // nevyplněno = špatně
            questionBox.style.border = "4px solid #ff0000"
        }
    }

    document.getElementById("result").textContent =
        `Skóre: ${score} z ${Object.keys(correctAnswers).length}`;
});

//https://chatgpt.com/share/69f8774a-5924-83eb-b566-37d7a97be04c