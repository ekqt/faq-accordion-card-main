let question = document.querySelectorAll(".question");
let arrow = document.querySelectorAll(".arrow");
let answer = document.querySelectorAll (".answer");

let question0Display = function () {
    if (question[0].classList.value == "question question-default"){
        question[0].classList.replace("question-default", "question");
        arrow[0].classList.replace("arrow-default", "arrow");
        answer[0].classList.replace("answer-default", "answer");
    } else {
        question[0].classList.add("question-default");
        arrow[0].classList.add("arrow-default");
        answer[0].classList.add("answer-default");
    }
}

question[0].addEventListener ("click", question0Display, true)
arrow[0].addEventListener ("click", question0Display, true);

let question1Display = function () {
    if (question[1].classList.value == "question question-default"){
        question[1].classList.value = "question";
        arrow[1].classList.value = "arrow";
        answer[1].classList.value = "answer"
    } else {
        question[1].classList.value = "question question-default";
        arrow[1].classList.value = "arrow arrow-default";
        answer[1].classList.value = "answer answer-default";
    }
}

question[1].addEventListener ("click", question1Display, true);
arrow[1].addEventListener ("click", question1Display, true);

let question2Display = function () {
    if (question[2].classList.value == "question question-default"){
        question[2].classList.value = "question";
        arrow[2].classList.value = "arrow";
        answer[2].classList.value = "answer"
    } else {
        question[2].classList.value = "question question-default";
        arrow[2].classList.value = "arrow arrow-default";
        answer[2].classList.value = "answer answer-default";
    }
}

question[2].addEventListener ("click", question2Display, true);
arrow[2].addEventListener ("click", question2Display, true);

let question3Display = function () {
    if (question[3].classList.value == "question question-default"){
        question[3].classList.value = "question";
        arrow[3].classList.value = "arrow";
        answer[3].classList.value = "answer"
    } else {
        question[3].classList.value = "question question-default";
        arrow[3].classList.value = "arrow arrow-default";
        answer[3].classList.value = "answer answer-default";
    }
}

question[3].addEventListener ("click", question3Display, true);
arrow[3].addEventListener ("click", question3Display, true);

let question4Display = function () {
    if (question[4].classList.value == "question question-default"){
        question[4].classList.value = "question";
        arrow[4].classList.value = "arrow";
        answer[4].classList.value = "answer"
    } else {
        question[4].classList.value = "question question-default";
        arrow[4].classList.value = "arrow arrow-default";
        answer[4].classList.value = "answer answer-default";
    }
}

question[4].addEventListener ("click", question4Display, true);
arrow[4].addEventListener ("click", question4Display, true);




