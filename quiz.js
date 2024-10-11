// Questions and Answers
const questions = [
    "What color is Garfield the Cat?",
    "What animal says 'neigh'?",
    "What is 8 + 2?"
];
const answers = ["orange", "horse", "10"];

// Quiz function
function quiz() {
    let score = 0;  // Initialize score

    // Loop through each question
    for (let i = 0; i < questions.length; i++) {
        let guesses = 3;  // Initialize guesses for each question
        let correct = false;

        // While loop to give the user 3 attempts
        while (guesses > 0 && !correct) {
            let userAnswer = prompt(questions[i]);
            if (userAnswer.toLowerCase() === answers[i].toLowerCase()) {
                correct = true;  // Correct answer found
                if (guesses === 3) {
                    score += 3;  // 1st try = 3 points
                } else if (guesses === 2) {
                    score += 2;  // 2nd try = 2 points
                } else {
                    score += 1;  // 3rd try = 1 point
                }
            } else {
                guesses--;  // Decrease remaining guesses
            }
        }
    }

    return score;  // Return final score
}

// Display the score on the webpage
document.getElementById("score").innerHTML = "Your score is: " + quiz();

