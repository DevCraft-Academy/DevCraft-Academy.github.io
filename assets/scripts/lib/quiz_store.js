---
---
const quizQuestions = {{ site.data.quiz_questions | jsonify }};
const storageKey = "quizAnswers";

function readAnswers() {
  const storedUserAnswers = localStorage.getItem(storageKey);
  return JSON.parse(storedUserAnswers || "{}");
}

export let answers = readAnswers();

function calculateWrongQuestionIds() {
  const answers = readAnswers();
  const wrongIds = [];

  Object.entries(quizQuestions).forEach(([questionId, question]) => {
    const answerValue = answers[questionId];
    const correctAnswers = question.answers.filter((answer) => answer.correct).map((answer) => answer.value);
    if (answerValue == null || !correctAnswers.includes(answerValue)) {
      wrongIds.push(questionId);
    }
  });

  return wrongIds;
}

let wrongQuestionIds = calculateWrongQuestionIds();

export const isWrong = (questionId) => wrongQuestionIds.includes(questionId);

export const areAllCorrect = () => wrongQuestionIds.length === 0;

export function storeAnswer(questionKey, answer) {
  answers[questionKey] = answer;
  wrongQuestionIds = calculateWrongQuestionIds();
  localStorage.setItem(storageKey, JSON.stringify(answers));
}

export function answerLabel(questionId) {
  const question = quizQuestions[questionId];
  const answerValue = answers[questionId];
  return question.answers.find((answer) => answer.value === answerValue).label;
}
