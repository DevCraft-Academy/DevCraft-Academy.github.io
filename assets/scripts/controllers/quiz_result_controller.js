import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

const correctAnswers = Object.freeze({
  "quiz-1": ["up-12-month", "over-12-month"],
  "quiz-2": ["web-development"],
  "quiz-3": ["senior", "mid-level", "junior"],
  "quiz-4": ["up-60-minutes", "over-60-minutes"],
  "quiz-5": ["1000-10000", "over-10000"],
});

export default class extends Controller {
  static targets = ["successMessage", "failureMessage", "questionFailureMessage"];

  connect() {
    if (this.allCorrect) {
      this.successMessageTarget.hidden = false;
    } else {
      this.failureMessageTarget.hidden = false;
    }

    this.questionFailureMessageTargets
      .filter((message) => this.wrongQuestionIds.includes(message.dataset.questionId))
      .forEach((message) => message.hidden = false);
  }

  get wrongQuestionIds() {
    const storedUserAnswers = localStorage.getItem("userAnswers");
    const answers = JSON.parse(storedUserAnswers || "{}");
    const wrongIds = [];

    Object.entries(correctAnswers).forEach(([questionId, correctAnswers]) => {
      const answer = answers[questionId];
      if (answer == null || !correctAnswers.includes(answer)) {
        wrongIds.push(questionId);
      }
    });

    return wrongIds;
  }

  get allCorrect() {
    return this.wrongQuestionIds.length === 0;
  }
}
