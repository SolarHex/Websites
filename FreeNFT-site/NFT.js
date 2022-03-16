
// Main functional of the website

const menu = document.querySelector('.menu');

menu.addEventListener('click', function(){
    const menu_bar = document.querySelector('.menu-bar');
    const return_bar = document.querySelector('.bar');
    const open = document.querySelector('.open');

    open.style.visibility = "hidden";

    menu_bar.style.visibility = "visible";
    return_bar.style.visibility = "hidden";

})


const menu_return = document.querySelector('.menu_bar');

menu_return.addEventListener('click', function(){
    const menu_bar = document.querySelector('.menu-bar');
    const return_bar = document.querySelector('.bar');
    const open = document.querySelector('.open');

    open.style.visibility = "visible";

    menu_bar.style.visibility = "hidden";
    return_bar.style.visibility = "visible";
})

// 
const heart = document.querySelector('.heart');

heart.addEventListener('click', function(){
    const red_heart = document.querySelector('.heart');

    red_heart.src = './img/red_heart.png';
})

const heart2 = document.querySelector('.heart-2');

heart2.addEventListener('click', function(){
    const red_heart2 = document.querySelector('.heart-2');

    red_heart2.src = './img/red_heart.png';
})

const heart3 = document.querySelector('.heart-3');

heart3.addEventListener('click', function(){
    const red_heart3 = document.querySelector('.heart-3');

    red_heart3.src = './img/red_heart.png';
})

const heart4 = document.querySelector('.heart-4');

heart4.addEventListener('click', function(){
    const red_heart4 = document.querySelector('.heart-4');

    red_heart4.src = './img/red_heart.png';
})

const heart5 = document.querySelector('.heart-5');

heart5.addEventListener('click', function(){
    const red_heart5 = document.querySelector('.heart-5');

    red_heart5.src = './img/red_heart.png';
})

const heart6 = document.querySelector('.heart-6');

heart6.addEventListener('click', function(){
    const red_heart6 = document.querySelector('.heart-6');

    red_heart6.src = './img/red_heart.png';
})
// 

const arrow_right = document.querySelector('.rught');
const arrow_left = document.querySelector('.left');

arrow_right.addEventListener('click', function(){
    const photo = document.querySelector('.slider-unnv');

    photo.src = './img/strange.png';
})

arrow_left.addEventListener('click', function(){
    const photo = document.querySelector('.slider-unnv');

    photo.src = './img/girl_dother.png';
})

const view = document.querySelector('.viewall');

view.addEventListener('click', function(){
    const pic1 = document.querySelector('.uda')
    const pic2 = document.querySelector('.georgy')
    const pic3 = document.querySelector('.dawn')
    const pic4 = document.querySelector('.magic_mar')
    const pic5 = document.querySelector('.medusa')

    pic1.src = './img/pic1.png';
    pic2.src = './img/pic2.png';
    pic3.src = './img/pic3.png';
    pic4.src = './img/pic4.png';
    pic5.src = './img/girl_dother.png';

})

const apple_pay = document.querySelector('.earn');

apple_pay.addEventListener('click', function(){
    
})