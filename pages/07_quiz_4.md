---
layout: marketing-funnel-layout
title: quiz-4
permalink: /quiz-4/
javascript: |
    document.addEventListener('DOMContentLoaded', function() {
    const answerOptions = document.querySelectorAll('input[name="quiz-4"]');
    
    answerOptions.forEach(option => {
        option.addEventListener('change', function(event) {
            const questionId = 'quiz-4';
            const selectedAnswer = event.target.value;
            
            saveAnswer(questionId, selectedAnswer);

            const isChecked = [...answerOptions].some(option => option.checked);
            quiz4Button.disabled = !isChecked;
        });
    });
    });
---

{% include quiz-funnel/7-quiz-4.html %}
