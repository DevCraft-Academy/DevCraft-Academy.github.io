---
layout: marketing-funnel-layout
title: quiz-2
permalink: /quiz-2/
javascript: |
    document.addEventListener('DOMContentLoaded', function() {
    const answerOptions = document.querySelectorAll('input[name="quiz-2"]');
    
    answerOptions.forEach(option => {
        option.addEventListener('change', function(event) {
            const questionId = 'quiz-2';
            const selectedAnswer = event.target.value;
            
            saveAnswer(questionId, selectedAnswer);

            const isChecked = [...answerOptions].some(option => option.checked);
            quiz2Button.disabled = !isChecked;
        });
    });
    });
---

{% include quiz-funnel/5-quiz-2.html %}
