// Objekt zur Speicherung der korrekten Antworten
let userAnswers = {};
const correctAnswers = {
    "quiz-1": ["no-education", "up-6-month", "up-12-month", "over-12-month"],
    "quiz-2": ["up-12-month", "over-12-month"],
    "quiz-3": ["web-development"],
    "quiz-4": ["senior-level", "mid-level", "junior-level"],
    "quiz-5": ["up-60-minutes", "over-60-minutes"],
    "quiz-6": ["up-1000", "up-1500", "over-2000"],
};

// Funktion zum Speichern der Benutzerantworten
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

// Funktion zum Vergleichen der Benutzerantworten mit den korrekten Antworten
function checkAnswers() {
    let correctCount = 0;
    for (const questionId in userAnswers) {
        if (userAnswers.hasOwnProperty(questionId)) {
            const userAnswer = userAnswers[questionId];
            const correctAnswer = correctAnswers[questionId];

            if (Array.isArray(correctAnswer)) {
                // Überprüfe, ob eine der Benutzerantworten in den korrekten Antworten enthalten ist
                if (correctAnswer.some(answer => userAnswer.includes(answer))) {
                    correctCount++;
                }
            } else {
                // Überprüfe, wenn es nur eine einzelne korrekte Antwort gibt
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

    // Ergebnisse vergleichen
    const correctCount = checkAnswers();

    // Entscheide, welcher Text und Button angezeigt werden sollen, basierend auf den Ergebnissen
    if (correctCount === Object.keys(userAnswers).length) {
        resultMessage.textContent = "Herzlichen Glückwunsch, Du erfüllst unsere Anforderungen für eine Teilnahme!";
        scheduleCTA.style.display = "block";
    } else {
        resultMessage.textContent = "Tut uns leid, leider erfüllst du unsere Anforderungen für eine Teilnahme nicht! Wir wünschen Dir viel Erfolg für Deinen weiteren beruflichen Weg.";
    }

    // Zeige das Ergebnis
    resultText.style.display = "block";
}

