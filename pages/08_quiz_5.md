---
layout: marketing-funnel-layout
title: quiz-5
permalink: /quiz-5/
javascript: |
    document.addEventListener('DOMContentLoaded', function() {
    const answerOptions = document.querySelectorAll('input[name="quiz-5"]');
    
    answerOptions.forEach(option => {
        option.addEventListener('change', function(event) {
            const questionId = 'quiz-5';
            const selectedAnswer = event.target.value;
            
            saveAnswer(questionId, selectedAnswer);

            const isChecked = [...answerOptions].some(option => option.checked);
            quiz5Button.disabled = !isChecked;
        });
    });
    });
---

{% include quiz-funnel/8-quiz-5.html %}
