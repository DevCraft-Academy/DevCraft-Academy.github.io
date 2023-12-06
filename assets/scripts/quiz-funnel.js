let userAnswers = {};
const correctAnswers = {
    "quiz-1": ["up-12-month", "over-12-month"],
    "quiz-2": ["web-development"],
    "quiz-3": ["senior-level", "intermediate-level", "junior-intermedite"],
    "quiz-4": ["up-60-minutes", "over-60-minutes"],
    "quiz-5": ["1000-10000", "over-10000"],
};

function checkAnswers() {
    let correctCount = 0;

    const storedUserAnswers = localStorage.getItem('userAnswers');

    if (storedUserAnswers) {
        const userAnswers = JSON.parse(storedUserAnswers);

        for (const questionId in userAnswers) {
            if (userAnswers.hasOwnProperty(questionId)) {
                const userAnswer = userAnswers[questionId];
                const correctAnswer = correctAnswers[questionId];

                if (Array.isArray(correctAnswer)) {
                    if (correctAnswer.includes(userAnswer)) {
                        correctCount++;
                    }
                } else {
                    if (userAnswer === correctAnswer) {
                        correctCount++;
                    }
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

    const storedUserAnswers = localStorage.getItem('userAnswers');

    if (storedUserAnswers) {
        const userAnswers = JSON.parse(storedUserAnswers);

        const quiz1Answer = userAnswers["quiz-1"];
        const quiz2Answer = userAnswers["quiz-2"];
        const quiz4Answer = userAnswers["quiz-4"];
        const quiz5Answer = userAnswers["quiz-5"];

        if (quiz1Answer && !correctAnswers["quiz-1"].includes(quiz1Answer)) {
            quiz1Message.textContent = "Grundsätzlich brauchst Du mindestens 6 Monate Berufserfahrung.";
        }

        if (quiz2Answer && !correctAnswers["quiz-2"].includes(quiz2Answer)) {
            quiz2Message.textContent = "Das Programm bezieht sich inhaltlich auf Full Stack Web Development. Wie es aussieht kommst du aus einem anderen Bereich, bist du sicher, dass du dich im Web Development weiterbilden möchtest?";
        }

        if (quiz4Answer && !correctAnswers["quiz-4"].includes(quiz4Answer)) {
            quiz4Message.textContent = "Für einen erfolgreichen Abschluss, musst du bereit sein zumindest 1 Stunde täglich aufzuwenden. Es ist nicht vorgesehen das Programm in geblockten Einheiten durchzuführen.";
        }

        if (quiz5Answer && !correctAnswers["quiz-5"].includes(quiz5Answer)) {
            quiz5Message.textContent = "Das sorgfältig geplante Programm strebt die Zugehörigkeit zu führenden Bildungsinstituten an und soll unseren Absolventen als Referenz dienen. Niedrigere Preise würden unsere Werte von Aktualität und Fachkompetenz gefährden.";
        }
    }

    const totalQuestions = Object.keys(correctAnswers).length;

    const correctCount = checkAnswers();

    if (correctCount === totalQuestions) {
        correctQuiz1.textContent = "Herzlichen Glückwunsch, Du erfüllst unsere Anforderungen für eine Teilnahme!";
        correctQuiz2.textContent = "Nutze ein kostenloses Erstgespräch, um deine Karriere im Web Development zu beleuchten.";
        falseQuiz.textContent = "";
    } else {
        falseQuiz.textContent = "Wenn du denkst, dass du trotzdem an unserem Programm teilzunehmen kannst, dann vereinbare ein Gespräch mit uns, und wir klären das ab.";
        correctQuiz1.textContent = "";
        correctQuiz2.textContent = "";
    } 
}

