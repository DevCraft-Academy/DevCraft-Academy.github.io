import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";
import { areAllCorrect, isWrong } from "../lib/quiz_store.js";

export default class extends Controller {
  static targets = ["successMessage", "failureMessage", "questionFailureMessage"];

  connect() {
    if (areAllCorrect()) {
      this.successMessageTarget.hidden = false;
    } else {
      this.failureMessageTarget.hidden = false;
    }

    this.questionFailureMessageTargets
      .filter((message) => isWrong(message.dataset.questionId))
      .forEach((message) => message.hidden = false);
  }
}
