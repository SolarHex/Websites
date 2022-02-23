

const btn_1 = document.querySelector('.btn-1');
const btn_2 = document.querySelector('.btn-2');
const btn_3 = document.querySelector('.btn-3');

btn_2.addEventListener('click', function(){
    let first = document.querySelector('.first-pic');
    let sec = document.querySelector('.second-pic');
    let third = document.querySelector('.third-pic');

    first.style.visibility = 'hidden';
    third.style.visibility = 'hidden';
    sec.style.visibility = 'visible';


})

btn_1.addEventListener('click', function(){
    let first = document.querySelector('.first-pic');
    let sec = document.querySelector('.second-pic');
    let third = document.querySelector('.third-pic');

    first.style.visibility = 'visible';
    third.style.visibility = 'hidden';
    sec.style.visibility = 'hidden';


})

btn_3.addEventListener('click', function(){
    let first = document.querySelector('.first-pic');
    let sec = document.querySelector('.second-pic');
    let third = document.querySelector('.third-pic');

    first.style.visibility = 'hidden';
    third.style.visibility = 'visible';
    sec.style.visibility = 'hidden';


})

const cardigan = document.querySelector('.cardican');
const orange = document.querySelector('.orange');
const grey = document.querySelector('.grey');
const baag = document.querySelector('.baag');

let img_instead1 = document.querySelector('.apparel-link');
let img_instead2 = document.querySelector('.apparel2-link');
let img_instead3 = document.querySelector('.apparel3-link');
let img_instead4 = document.querySelector('.apparel4-link');

cardigan.addEventListener('click', function(){
    // counter = 0;
    let circle = document.querySelector('.circle');
    circle.style.visibility = 'visible';
    let no = document.querySelector('.counter');
    no.innerHTML++
})

orange.addEventListener('click', function(){
    // counter = 0;
    let circle = document.querySelector('.circle');
    circle.style.visibility = 'visible';
    let no = document.querySelector('.counter');
    no.innerHTML++
})

grey.addEventListener('click', function(){
    // counter = 0;
    let circle = document.querySelector('.circle');
    circle.style.visibility = 'visible';
    let no = document.querySelector('.counter');
    no.innerHTML++
})

baag.addEventListener('click', function(){
    // counter = 0;
    let circle = document.querySelector('.circle');
    circle.style.visibility = 'visible';
    let no = document.querySelector('.counter');
    no.innerHTML++
})

img_instead1.addEventListener('click', function(){
    // counter = 0;
    let circle = document.querySelector('.circle');
    circle.style.visibility = 'visible';
    let no = document.querySelector('.counter');
    no.innerHTML++
})

img_instead2.addEventListener('click', function(){
    // counter = 0;
    let circle = document.querySelector('.circle');
    circle.style.visibility = 'visible';
    let no = document.querySelector('.counter');
    no.innerHTML++
})

img_instead3.addEventListener('click', function(){
    // counter = 0;
    let circle = document.querySelector('.circle');
    circle.style.visibility = 'visible';
    let no = document.querySelector('.counter');
    no.innerHTML++
})

img_instead4.addEventListener('click', function(){
    // counter = 0;
    let circle = document.querySelector('.circle');
    circle.style.visibility = 'visible';
    let no = document.querySelector('.counter');
    no.innerHTML++
})


const mode_apparel = document.querySelector('.tshirt');

mode_apparel.addEventListener('click', function(){
    let img_1 = document.querySelector('.cardican');
    let img_2 = document.querySelector('.orange');
    let img_3 = document.querySelector('.grey');
    let img_4 = document.querySelector('.baag');

    let img_instead1 = document.querySelector('.apparel-link');
    let img_instead2 = document.querySelector('.apparel2-link');
    let img_instead3 = document.querySelector('.apparel3-link');
    let img_instead4 = document.querySelector('.apparel4-link');

    img_1.style.visibility = 'hidden';
    img_2.style.visibility = 'hidden';
    img_3.style.visibility = 'hidden';
    img_4.style.visibility = 'hidden';

    img_instead1.style.visibility = 'visible';
    img_instead2.style.visibility = 'visible';
    img_instead3.style.visibility = 'visible';
    img_instead4.style.visibility = 'visible';

    let imgl_1 = document.querySelector('.cardigan-under');
    let imgl_2 = document.querySelector('.orange-under');
    let imgl_3 = document.querySelector('.grey-under');
    let imgl_4 = document.querySelector('.baag-under');

    let img_instead1l = document.querySelector('.apparel-under');
    let img_instead2l = document.querySelector('.apparel2-under');
    let img_instead3l = document.querySelector('.apparel3-under');
    let img_instead4l = document.querySelector('.apparel4-under');

    imgl_1.style.visibility = 'hidden';
    imgl_2.style.visibility = 'hidden';
    imgl_3.style.visibility = 'hidden';
    imgl_4.style.visibility = 'hidden';

    img_instead1l.style.visibility = 'visible';
    img_instead2l.style.visibility = 'visible';
    img_instead3l.style.visibility = 'visible';
    img_instead4l.style.visibility = 'visible';

    let imgl_1b = document.querySelector('.cardigan-bucks');
    let imgl_2b = document.querySelector('.orange-bucks');
    let imgl_3b = document.querySelector('.grey-bucks');
    let imgl_4b = document.querySelector('.baag-bucks');

    let img_instead1lb = document.querySelector('.apparel-bucks');
    let img_instead2lb = document.querySelector('.apparel2-bucks');
    let img_instead3lb = document.querySelector('.apparel3-bucks');
    let img_instead4lb = document.querySelector('.apparel4-bucks');

    imgl_1b.style.visibility = 'hidden';
    imgl_2b.style.visibility = 'hidden';
    imgl_3b.style.visibility = 'hidden';
    imgl_4b.style.visibility = 'hidden';

    img_instead1lb.style.visibility = 'visible';
    img_instead2lb.style.visibility = 'visible';
    img_instead3lb.style.visibility = 'visible';
    img_instead4lb.style.visibility = 'visible';
})

const mode_apparel_reverse = document.querySelector('.new-1');

mode_apparel_reverse.addEventListener('click', function(){
    let img_1 = document.querySelector('.cardican');
    let img_2 = document.querySelector('.orange');
    let img_3 = document.querySelector('.grey');
    let img_4 = document.querySelector('.baag');

    let img_instead1 = document.querySelector('.apparel-link');
    let img_instead2 = document.querySelector('.apparel2-link');
    let img_instead3 = document.querySelector('.apparel3-link');
    let img_instead4 = document.querySelector('.apparel4-link');

    img_1.style.visibility = 'visible';
    img_2.style.visibility = 'visible';
    img_3.style.visibility = 'visible';
    img_4.style.visibility = 'visible';

    img_instead1.style.visibility = 'hidden';
    img_instead2.style.visibility = 'hidden';
    img_instead3.style.visibility = 'hidden';
    img_instead4.style.visibility = 'hidden';

    let imgl_1 = document.querySelector('.cardigan-under');
    let imgl_2 = document.querySelector('.orange-under');
    let imgl_3 = document.querySelector('.grey-under');
    let imgl_4 = document.querySelector('.baag-under');

    let img_instead1l = document.querySelector('.apparel-under');
    let img_instead2l = document.querySelector('.apparel2-under');
    let img_instead3l = document.querySelector('.apparel3-under');
    let img_instead4l = document.querySelector('.apparel4-under');

    imgl_1.style.visibility = 'visible';
    imgl_2.style.visibility = 'visible';
    imgl_3.style.visibility = 'visible';
    imgl_4.style.visibility = 'visible';

    img_instead1l.style.visibility = 'hidden';
    img_instead2l.style.visibility = 'hidden';
    img_instead3l.style.visibility = 'hidden';
    img_instead4l.style.visibility = 'hidden';

    let imgl_1b = document.querySelector('.cardigan-bucks');
    let imgl_2b = document.querySelector('.orange-bucks');
    let imgl_3b = document.querySelector('.grey-bucks');
    let imgl_4b = document.querySelector('.baag-bucks');

    let img_instead1lb = document.querySelector('.apparel-bucks');
    let img_instead2lb = document.querySelector('.apparel2-bucks');
    let img_instead3lb = document.querySelector('.apparel3-bucks');
    let img_instead4lb = document.querySelector('.apparel4-bucks');

    imgl_1b.style.visibility = 'visible';
    imgl_2b.style.visibility = 'visible';
    imgl_3b.style.visibility = 'visible';
    imgl_4b.style.visibility = 'visible';

    img_instead1lb.style.visibility = 'hidden';
    img_instead2lb.style.visibility = 'hidden';
    img_instead3lb.style.visibility = 'hidden';
    img_instead4lb.style.visibility = 'hidden';
})