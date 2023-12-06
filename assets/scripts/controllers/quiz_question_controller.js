import { Controller } from "../../vendor/stimulus/stimulus.js";

export default class extends Controller {
  static targets = ["submitButton"];
  static values = { number: Number };

  change() {
    this.submitButtonTarget.disabled = !this.currentAnswer;
  }

  get currentAnswer() {
    const formData = new FormData(this.element);
    return formData.get("answer");
  }

  submit(event) {
    this.saveAnswer();

    // Avoid putting the form data in the URL
    event.preventDefault();
    window.location.href = event.target.action;
  }

  saveAnswer() {
    const storedUserAnswers = localStorage.getItem("userAnswers");
    const answers = JSON.parse(storedUserAnswers || "{}");

    answers[`quiz-${this.numberValue}`] = this.currentAnswer;

    localStorage.setItem("userAnswers", JSON.stringify(answers));
  }
}
