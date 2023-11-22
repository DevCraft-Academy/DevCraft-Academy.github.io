---
layout: marketing-funnel-layout
title: quiz-6
permalink: /quiz-6/
javascript: |
    document.addEventListener('DOMContentLoaded', function() {
    const answerOptions = document.querySelectorAll('input[name="quiz-6"]');
    
    answerOptions.forEach(option => {
        option.addEventListener('change', function(event) {
            const questionId = 'quiz-6';
            const selectedAnswer = event.target.value;
            
            saveAnswer(questionId, selectedAnswer);
        });
    });
    });
---

{% include quiz-funnel/9-quiz-6.html %}
