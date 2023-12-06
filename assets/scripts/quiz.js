import {
  Application,
} from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";
import QuizQuestionController from "./controllers/quiz_question_controller.js";

window.Stimulus = Application.start();

Stimulus.register("quiz-question", QuizQuestionController);
