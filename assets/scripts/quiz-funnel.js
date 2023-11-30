// Object for storing correct answers
let userAnswers = {};
const correctAnswers = {
    "quiz-1": ["up-12-month", "over-12-month"],
    "quiz-2": ["web-development"],
    "quiz-3": ["senior-level", "intermediate-level", "junior-intermedite"],
    "quiz-4": ["up-60-minutes", "over-60-minutes"],
    "quiz-5": ["1000-10000", "over-10000"],
};

// Function to save user answers
function saveAnswer(questionId, answer) {
    let storedUserAnswers = localStorage.getItem('userAnswers');

    if (!storedUserAnswers) {
        storedUserAnswers = {};
    } else {
        storedUserAnswers = JSON.parse(storedUserAnswers);
    }

    storedUserAnswers[questionId] = [];


    storedUserAnswers[questionId].push(answer);

    localStorage.setItem('userAnswers', JSON.stringify(storedUserAnswers));
}

// Feature to compare user answers with correct answers
function checkAnswers() {
    let correctCount = 0;
    for (const questionId in userAnswers) {
        if (userAnswers.hasOwnProperty(questionId)) {
            const userAnswer = userAnswers[questionId];
            const correctAnswer = correctAnswers[questionId];

            if (Array.isArray(correctAnswer)) {
                // Check if any of the user answers are included in the correct answers
                if (correctAnswer.some(answer => userAnswer.includes(answer))) {
                    correctCount++;
                }
            } else {
                // Check if there is only a single correct answer
                if (userAnswer === correctAnswer) {
                    correctCount++;
                }
            }
        }
    }
    return correctCount;
}

function showResults() {
    const resultText = document.getElementById("resultText");
    const resultMessage = document.getElementById("resultMessage");
    const scheduleCTA = document.getElementById("scheduleCTA");

    // Compare results
    const correctCount = checkAnswers();

    // Decide which text and button to display based on the results
    if (correctCount === Object.keys(userAnswers).length) {
        resultMessage.textContent = "Herzlichen Glückwunsch, Du erfüllst unsere Anforderungen für eine Teilnahme!";
        scheduleCTA.style.display = "block";
    } else {
        resultMessage.textContent = "Tut uns leid, leider erfüllst du unsere Anforderungen für eine Teilnahme nicht! Wir wünschen Dir viel Erfolg für Deinen weiteren beruflichen Weg.";
    }

    // Show the result
    resultText.style.display = "block";
}

