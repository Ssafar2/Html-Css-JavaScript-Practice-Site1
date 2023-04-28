const faBars = document.querySelector('#faBars');
const menuUl = document.querySelector('.menuUl');
const faSun = document.querySelector('#faSun');
const docBody = document.body;
const menuImg = document.querySelectorAll('.menu-img');
const menuImgModule = document.querySelector('#menu-img-module');
const closeModal=document.querySelector('#close-modal')







const menyu = [
    {
        title: 'Portağal şirəsi',
        content: 'Ləzzətli İçəcəklər burada',
        image:'./image/drink1.jpg'
    },
    {
        title: 'Hamburer',
        content: 'Ləzzətli Hamburgerlər burada',
        image:'./image/hamburger1.jpg'
    },
    {
        title: 'Toyuq qızartması',
        content: 'Ləzzətli Toyuq qızartmaları burada',
        image:'./image/chicken.jpg'
    },
    {
        title: 'Pizza',
        content: 'Ləzzətli Pizzalar burada',
        image:'./image/pizza1.jpg'
    },
    {
        title: 'Salat',
        content: 'Ləzzətli Salatlar burada',
        image:'./image/salad.jpg'
    },
    {
        title: 'Sandwich',
        content: 'Ləzzətli Sandwichlər burada',
        image:'./image/sandwich.jpg'
    },
    {
        title: 'Buzlu limon suyu',
        content: 'Ləzzətli İçəcəklər burada',
        image:'./image/drink3.jpg'
    },
    {
        title: 'Hotdog',
        content: 'Ləzzətli Hotdoglar burada',
        image:'./image/hotdog1.jpg'
    },
]






menuImg.forEach((value, index) => {

    value.addEventListener('click', () => {
        menuImgModule.style.display = 'block'

        menyu.map((val,ind)=>{
            if(index===ind){
                console.log('hi');
                menuImgModule.querySelector('img').src=val.image;
                menuImgModule.querySelector('h1').textContent=val.title;
                menuImgModule.querySelector('p').textContent=val.content;
            }
        })
    })
})

closeModal.addEventListener('click',()=>{
    menuImgModule.style.display='none'
})






menuUl.style.maxHeight = '0px'
faBars.addEventListener('click', () => {

    if (menuUl.style.maxHeight === '0px') {

        menuUl.style.maxHeight = '240px'
    }
    else {
        menuUl.style.maxHeight = '0px'

    }
})

faSun.addEventListener('click', () => {
    docBody.classList.toggle('lightMode');

    if (docBody.classList.contains('lightMode')) {
        faSun.classList.replace('fa-sun', 'fa-moon')

    }
    else {
        faSun.classList.replace('fa-moon', 'fa-sun')

    }


})