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
    const correctQuiz1 = document.getElementById("correctQuiz1");
    const correctQuiz2 = document.getElementById("correctQuiz2");
    const falseQuiz = document.getElementById("falseQuiz");

    // Show appropriate answers based on user responses
    const quiz1Answers = userAnswers["quiz-1"];
    const quiz2Answers = userAnswers["quiz-2"];
    const quiz4Answers = userAnswers["quiz-4"];
    const quiz5Answers = userAnswers["quiz-5"];

    // Compare results
    const correctCount = checkAnswers();

   
    if (quiz1Answers && !correctAnswers["quiz-1"].some(answer => quiz1Answers.includes(answer))) {
        quiz1Message.textContent = "Grundsätzlich brauchst Du mindestens 6 Monate Berufserfahrung.";
    }

    if (quiz2Answers && !correctAnswers["quiz-2"].includes(quiz2Answers[0])) {
        quiz2Message.textContent = "Die Weiterbildung bezieht sich inhaltlich auf Full Stack Web Development. Wie es aussieht kommst du aus einem anderen Bereich, bist du sicher, dass du dich im Web Development weiterbilden möchtest?";
    }

    if (quiz4Answers && !correctAnswers["quiz-4"].includes(quiz4Answers[0])) {
        quiz4Message.textContent = "Für einen erfolgreichen Abschluss, musst du bereit sein zumindest 1 Stunde täglich für die Weiterbildung aufzuwenden. Es ist nicht vorgesehen den Lehrgang in geblockten Einheiten durchzuführen.";
    }

    if (quiz5Answers && !correctAnswers["quiz-5"].includes(quiz5Answers[0])) {
        quiz5Message.textContent = "Die sorgfältig geplante Weiterbildung strebt die Zugehörigkeit zu führenden Bildungsinstituten an und soll unseren Absolventen als Referenz dienen. Niedrigere Preise würden unsere Werte von Aktualität und Fachkompetenz gefährden.";
    }

    // Decide which text and button to display based on the results
    if (correctCount === Object.keys(userAnswers).length) {
        correctQuiz1.textContent = "Herzlichen Glückwunsch, Du erfüllst unsere Anforderungen für eine Teilnahme!";
        correctQuiz2.textContent = "Nutze ein kostenloses Erstgespräch, um deine Karriere im Web Development zu beleuchten.";
    } else {
        falseQuiz.textContent = "Wenn du denkst, dass du trotzdem an unserem Programm teilzunehmen kannst, dann vereinbare ein Gespräch mit uns, und wir klären das ab.";
    } 
}

