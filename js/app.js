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






