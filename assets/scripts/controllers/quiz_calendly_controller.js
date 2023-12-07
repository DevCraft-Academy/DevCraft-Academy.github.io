import {
  Controller,
} from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";
import { answerLabel } from "../lib/quiz_store.js";

export default class extends Controller {
  connect() {
    Calendly.initInlineWidget({
      url: "https://calendly.com/devcraftacademy/erstgesprach-quiz",
      parentElement: this.element,
      prefill: {
        customAnswers: {
          a3: answerLabel("question-1"),
          a4: answerLabel("question-2"),
          a5: answerLabel("question-3"),
          a6: answerLabel("question-4"),
          a7: answerLabel("question-5"),
        },
      },
    });
  }
}
