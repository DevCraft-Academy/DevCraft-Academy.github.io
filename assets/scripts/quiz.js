import {
  Application,
} from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";
import QuizQuestionController from "./controllers/quiz_question_controller.js";
import QuizResultController from "./controllers/quiz_result_controller.js";
import QuizCalendlyController from "./controllers/quiz_calendly_controller.js";

window.Stimulus = Application.start();

Stimulus.register("quiz-question", QuizQuestionController);
Stimulus.register("quiz-result", QuizResultController);
Stimulus.register("quiz-calendly", QuizCalendlyController);
