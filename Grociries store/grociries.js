
const right = document.querySelector('.right')
const left = document.querySelector('.left')

right.addEventListener('click', function(){
    const list_1 = document.querySelector('.paper');
    const prod_veg = document.querySelector('.product-veg');
    const price_veg = document.querySelector('.price-veg');

    const lista_1 = document.querySelector('.ginger');
    const proda_veg = document.querySelector('.productv2');
    const pricea_veg = document.querySelector('.pricev2');

    prod_veg.innerHTML = 'King carrot';
    price_veg.innerHTML = '$1.99';
    list_1.src = './img/carrot.jpg';

    proda_veg.innerHTML = 'Tomato';
    pricea_veg.innerHTML = '$4.99';
    lista_1.src = './img/tomato.png';

    list_1.classList.remove('paper');
    list_1.classList.add('carrot');

    lista_1.classList.remove('ginger');
    lista_1.classList.add('tomato');


})
