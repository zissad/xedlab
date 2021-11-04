const nav = document.querySelector('.nav-ul');
const hamburger = document.querySelector('.hamburger_icon');

hamburger.onclick = () => {
    nav.classList.toggle('active');
}

const ques_1 = document.querySelector('.ques-1');
const ques_2 = document.querySelector('.ques-2');
const ques_3 = document.querySelector('.ques-3');
const ques_4 = document.querySelector('.ques-4');

const ans_1 = document.querySelector('.ans-1');
const ans_2 = document.querySelector('.ans-2');
const ans_3 = document.querySelector('.ans-3');
const ans_4 = document.querySelector('.ans-4');

ques_1.onclick = () => {
    ans_1.classList.toggle('active');
    ques_1.classList.toggle('active');

    ans_2.classList.remove('active');
    ques_2.classList.remove('active');
    ans_3.classList.remove('active');
    ques_3.classList.remove('active');
    ans_4.classList.remove('active');
    ques_4.classList.remove('active');
}
ques_2.onclick = () => {
    ans_2.classList.toggle('active');
    ques_2.classList.toggle('active');

    ans_1.classList.remove('active');
    ques_1.classList.remove('active');
    ans_3.classList.remove('active');
    ques_3.classList.remove('active');
    ans_4.classList.remove('active');
    ques_4.classList.remove('active');
}
ques_3.onclick = () => {
    ans_3.classList.toggle('active');
    ques_3.classList.toggle('active');

    ans_1.classList.remove('active');
    ques_1.classList.remove('active');
    ans_2.classList.remove('active');
    ques_2.classList.remove('active');
    ans_4.classList.remove('active');
    ques_4.classList.remove('active');
}
ques_4.onclick = () => {
    ans_4.classList.toggle('active');
    ques_4.classList.toggle('active');

    ans_1.classList.remove('active');
    ques_1.classList.remove('active');
    ans_2.classList.remove('active');
    ques_2.classList.remove('active');
    ans_3.classList.remove('active');
    ques_3.classList.remove('active');
}
ScrollOut({
    targets: '.fade-left,.hero-left,.box'
})