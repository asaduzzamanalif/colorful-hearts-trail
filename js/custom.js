'use strict';

document.addEventListener('mousemove',(e)=> {
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x+'px';
    heart.style.top = y+'px';
    let size = Math.random()* 100;
    heart.style.width = size+'px';
    heart.style.height = size+'px';
    body.appendChild(heart);
    setTimeout( ()=> {
        heart.remove();
    },2000);
})
