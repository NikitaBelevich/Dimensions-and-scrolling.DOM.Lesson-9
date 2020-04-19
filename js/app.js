'use strict';

//TODO Task 1
const btn1 = document.querySelector('.task1 button');
btn1.addEventListener('click', scrollFromBottom);

function scrollFromBottom() {
    const scrollBlock1 = document.querySelector('.scroll-block-1');

    let scrollTop = scrollBlock1.scrollTop;
    let scrollHeight = scrollBlock1.scrollHeight;
    let clientHeight = scrollBlock1.clientHeight;

    const scrollBottom = scrollHeight - scrollTop - clientHeight;
    
    console.log('Прокручено от низа', scrollBottom);
}
//TODO Task 1

//TODO Task 2
const btn2 = document.querySelector('.task2 button');
btn2.addEventListener('click', widthScrollbar);

function widthScrollbar() {
    const scrollBlock2 = document.querySelector('.scroll-block-2');
    const widthScroll = scrollBlock2.offsetWidth - scrollBlock2.clientWidth;
    console.log('Width Scrollbar: ', widthScroll);
}
//TODO Task 2

//TODO Task 3
const btn3 = document.querySelector('.task3 button');
btn3.addEventListener('click', midfield);

function midfield() {
    const field = document.getElementById('field');
    const ball = document.getElementById('ball');

    let clientWidthField = field.clientWidth;
    let clientHeightField = field.clientHeight;
    let clientWidthBall = ball.clientWidth;
    let clientHeightBall = ball.clientHeight;

    ball.style.left = Math.round((clientWidthField / 2) - (clientWidthBall / 2))  + 'px';
    ball.style.top = Math.round((clientHeightField / 2) - (clientHeightBall / 2)) + 'px';
}
//TODO Task 3


