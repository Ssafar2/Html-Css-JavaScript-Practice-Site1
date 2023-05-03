const faBars = document.querySelector('#faBars');
const menuUl = document.querySelector('.menuUl');
const faSun = document.querySelector('#faSun');
const docBody = document.body;
const menuImg = document.querySelectorAll('.menu-img');
const menuImgModule = document.querySelector('#menu-img-module');
const closeModal = document.querySelector('#close-modal');
const subsInput = document.querySelector('#subscribe-input');
const subsButton = document.querySelector('#subscribe-button');
const inputWarning = document.querySelector('.input-alert-warning');
const inputSuccess = document.querySelector('.input-alert-success');
const inputDanger = document.querySelector('.input-alert-danger');



const inputSituation = (inputType1, inputType2, inputType3, transform1, tranform2, inputContent) => {
    inputType1.style.transform = transform1;
    inputType2.style.transform = transform1;
    inputType3.style.transform = tranform2;
    inputType3.style.transition = '.3s';
    inputType3.textContent = inputContent;
    subsInput.value = '';

    let inputTypeIntervalNames = setInterval(() => {
        clearInterval(inputTypeIntervalNames);
        inputType3.style.transform = transform1;
    }, 3000);
}


subsButton.onclick = () => {

    if (subsInput.value === '' || subsInput.value === null) {

        inputSituation(inputSuccess, inputDanger, inputWarning, 'translateX(-1000px)', 'translateX(0px)', 'Xəta! Boş dəyər girmək olmaz!');

    }


    else if (!subsInput.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {

        inputSituation(inputWarning, inputSuccess, inputDanger, 'translateX(-1000px)', 'translateX(0px)', 'Xəta! Girilən dəyər mail @ tipində olmalıdır !');

    }

    else {

        inputSituation(inputWarning, inputDanger, inputSuccess, 'translateX(-1000px)', 'translateX(0px)', 'Abunə olduğunuz üçün təşəkkürlər');
    }
}


const menyu = [
    {
        title: 'Portağal şirəsi',
        content: 'Ləzzətli İçəcəklər burada',
        image: './image/drink1.jpg'
    },
    {
        title: 'Hamburer',
        content: 'Ləzzətli Hamburgerlər burada',
        image: './image/hamburger1.jpg'
    },
    {
        title: 'Toyuq qızartması',
        content: 'Ləzzətli Toyuq qızartmaları burada',
        image: './image/chicken.jpg'
    },
    {
        title: 'Pizza',
        content: 'Ləzzətli Pizzalar burada',
        image: './image/pizza1.jpg'
    },
    {
        title: 'Salat',
        content: 'Ləzzətli Salatlar burada',
        image: './image/salad.jpg'
    },
    {
        title: 'Sandwich',
        content: 'Ləzzətli Sandwichlər burada',
        image: './image/sandwich.jpg'
    },
    {
        title: 'Buzlu limon suyu',
        content: 'Ləzzətli İçəcəklər burada',
        image: './image/drink3.jpg'
    },
    {
        title: 'Hotdog',
        content: 'Ləzzətli Hotdoglar burada',
        image: './image/hotdog1.jpg'
    },
]


menuImg.forEach((value, index) => {

    value.addEventListener('click', () => {
        menuImgModule.style.display = 'block'

        menyu.map((val, ind) => {
            if (index === ind) {
                console.log('hi');
                menuImgModule.querySelector('img').src = val.image;
                menuImgModule.querySelector('h1').textContent = val.title;
                menuImgModule.querySelector('p').textContent = val.content;
            }
        })
    })
})

closeModal.onclick = () => {
    menuImgModule.style.display = 'none'
}

menuImgModule.ondblclick = () => {
    menuImgModule.style.display = 'none';
}


menuUl.style.maxHeight = '0px'
faBars.onclick = () => {

    if (menuUl.style.maxHeight === '0px') {

        menuUl.style.maxHeight = '240px'
    }
    else {
        menuUl.style.maxHeight = '0px'

    }
}


faSun.onclick = () => {

    docBody.classList.toggle('lightMode');
    faSun.classList.toggle('fa-moon');
    localStorage.setItem('light', docBody.classList);
    localStorage.setItem('darkModeIcon', faSun.classList)
}

if (localStorage.getItem('light') === '') {
    // docBody.classList.add(localStorage.getItem('light'))
    faSun.classList.replace('fa-moon', 'fa-sun')
}
else {
    docBody.classList.add(localStorage.getItem('light'))
    faSun.classList.add('fa-moon')

}




let section1Header={
    origin:'top',
    distance:'25rem',
    delay:200,
    duration:1000
}

let drinksHeader={
    origin:'top',
    distance:'25rem',
    delay:200,
    duration:1000
}


let workerHeader={
    origin:'top',
    distance:'25rem',
    delay:200,
    duration:1000
}

let goMenu2={
    origin:'top',
    distance:'25rem',
    delay:200,
    duration:1000
}


ScrollReveal().reveal('.section1-header',section1Header);
ScrollReveal().reveal('.drinks-header',drinksHeader);
ScrollReveal().reveal('.worker-header',workerHeader);
ScrollReveal().reveal('.go-menu2',goMenu2);



ScrollReveal().reveal('.menu-img-1', { delay: 250 });
ScrollReveal().reveal('.menu-img-2', { delay: 500 });
ScrollReveal().reveal('.menu-img-3', { delay: 750 });
ScrollReveal().reveal('.menu-img-4', { delay: 1000 });
ScrollReveal().reveal('.menu-img-5', { delay: 1250 });
ScrollReveal().reveal('.menu-img-6', { delay: 1500 });
ScrollReveal().reveal('.menu-img-7', { delay: 1750 });
ScrollReveal().reveal('.menu-img-8', { delay: 2000 });
ScrollReveal().reveal('.menyus', { delay: 3000 });




let leftAnimate1={
    origin:'top',
    distance:'25rem',
    delay:300,
    duration:1000
}

let rightAnimate1={
    origin:'bottom',
    distance:'25rem',
    delay:300,
    duration:1000
}

ScrollReveal().reveal('.sec1-content-left',leftAnimate1);
ScrollReveal().reveal('.sec1-content-right',rightAnimate1);



let worker1={
    origin:'top',
    distance:'25rem',
    delay:500,
    duration:1000
}

let worker2={
    origin:'bottom',
    distance:'25rem',
    delay:1500,
    duration:1000
}

let worker3={
    origin:'top',
    distance:'25rem',
    delay:2500,
    duration:1000
}

let worker4={
    origin:'bottom',
    distance:'25rem',
    delay:3500,
    duration:1000
}

ScrollReveal().reveal('.worker1',worker1);
ScrollReveal().reveal('.worker2',worker2);
ScrollReveal().reveal('.worker3',worker3);
ScrollReveal().reveal('.worker4',worker4);


let aboutReadyBack={
    origin:'top',
    distance:'25rem',
    delay:500,
    duration:1000
}

ScrollReveal().reveal('.about-ready-back',aboutReadyBack);

let footerLogo={
    origin:'top',
    distance:'25rem',
    delay:500,
    duration:1000
}

let footerContact={
    origin:'bottom',
    distance:'25rem',
    delay:1000,
    duration:1000
}

let footerSubscribe={
    origin:'top',
    distance:'25rem',
    delay:500,
    duration:1000
}

ScrollReveal().reveal('.footer-logo',footerLogo);
ScrollReveal().reveal('.footer-contact',footerContact);
ScrollReveal().reveal('.footer-subscribe',footerSubscribe);

