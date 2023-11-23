---
layout: marketing-funnel-layout
title: quiz-1
permalink: /quiz-1/
javascript: |
    document.addEventListener('DOMContentLoaded', function() {
    const answerOptions = document.querySelectorAll('input[name="quiz-1"]');
    
    answerOptions.forEach(option => {
        option.addEventListener('change', function(event) {
            const questionId = 'quiz-1';
            const selectedAnswer = event.target.value;
            
            saveAnswer(questionId, selectedAnswer);

            const isChecked = [...answerOptions].some(option => option.checked);
            quiz1Button.disabled = !isChecked;
        });
    });
    });
---

{% include quiz-funnel/4-quiz-1.html %}
