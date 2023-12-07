import {
  Controller,
} from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";
import { storeAnswer } from "../lib/quiz_store.js";

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
    storeAnswer(`question-${this.numberValue}`, this.currentAnswer);
  }
}
