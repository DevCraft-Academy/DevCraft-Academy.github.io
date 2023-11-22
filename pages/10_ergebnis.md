---
layout: marketing-funnel-layout
title: ergebnis
permalink: /ergebnis/
javascript: |
    function loadUserAnswersFromLocalStorage() {
    const storedUserAnswers = localStorage.getItem('userAnswers');
    if (storedUserAnswers) {
        return JSON.parse(storedUserAnswers);
    }
    return {};
    }
    userAnswers = loadUserAnswersFromLocalStorage();
    window.onload = function() {
        showResults();
    };
---

{% include quiz-funnel/10-ergebnis.html %}
