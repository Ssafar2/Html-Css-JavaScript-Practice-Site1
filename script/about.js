const faBars = document.querySelector('#faBars');
const menuUl = document.querySelector('.menuUl');
const faSun = document.querySelector('#faSun');
const docBody = document.body;
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


    else  if (!subsInput.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {

        inputSituation(inputWarning, inputSuccess, inputDanger, 'translateX(-1000px)', 'translateX(0px)', 'Xəta! Girilən dəyər mail @ tipində olmalıdır !');
        
    }

    else {

        inputSituation(inputWarning, inputDanger, inputSuccess, 'translateX(-1000px)', 'translateX(0px)', 'Abunə olduğunuz üçün təşəkkürlər');
    }
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
    localStorage.setItem('light',docBody.classList);
    localStorage.setItem('darkModeIcon',faSun.classList)
}

if (localStorage.getItem('light')==='') {
    // docBody.classList.add(localStorage.getItem('light'))
    faSun.classList.replace('fa-moon','fa-sun')
}
else {
    docBody.classList.add(localStorage.getItem('light'))
    faSun.classList.add('fa-moon')

}



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




window.addEventListener('scroll', () => {
    let winScrollY = window.scrollY;

    const innerWidthNumber = (num1, num2) => {

        if (winScrollY > num1) {
         
            document.querySelector('.top-arrow').classList.add('show-top-arrow')
        }
        else {
            document.querySelector('.top-arrow').classList.remove('show-top-arrow')
        }

        if (winScrollY < num2) {
            document.querySelector('.bottom-arrow').classList.add('show-bottom-arrow')
        }
        else {

            document.querySelector('.bottom-arrow').classList.remove('show-bottom-arrow')
        }

    }



    if (window.innerWidth > 970) {

        innerWidthNumber(532, 4680)
    }


    else if (window.innerWidth < 970 && window.innerWidth >= 635) {

        innerWidthNumber(918, 7150)
    }

    else if (window.innerWidth < 635) {

        innerWidthNumber(587, 14087)

    }


})



let worker1={
    origin:'top',
    distance:'25rem',
    delay:500,
    duration:1000
}

let worker2={
    origin:'top',
    distance:'25rem',
    delay:1000,
    duration:1000
}

let worker3={
    origin:'top',
    distance:'25rem',
    delay:1500,
    duration:1000
}

let worker4={
    origin:'top',
    distance:'25rem',
    delay:2000,
    duration:1000
}


ScrollReveal().reveal('.worker1',worker1);
ScrollReveal().reveal('.worker2',worker2);
ScrollReveal().reveal('.worker3',worker3);
ScrollReveal().reveal('.worker4',worker4);




let aboutManager={
    origin:'top',
    distance:'25rem',
    delay:2000,
    duration:1000
}


ScrollReveal().reveal('.about-manager',aboutManager);