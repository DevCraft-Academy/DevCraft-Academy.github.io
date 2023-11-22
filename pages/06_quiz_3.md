---
layout: marketing-funnel-layout
title: quiz-3
permalink: /quiz-3/
javascript: |
    document.addEventListener('DOMContentLoaded', function() {
    const answerOptions = document.querySelectorAll('input[name="quiz-3"]');
    
    answerOptions.forEach(option => {
        option.addEventListener('change', function(event) {
            const questionId = 'quiz-3';
            const selectedAnswer = event.target.value;
            
            saveAnswer(questionId, selectedAnswer);
        });
    });
    });
---

{% include quiz-funnel/6-quiz-3.html %}
