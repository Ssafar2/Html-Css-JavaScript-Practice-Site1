const faBars = document.querySelector('#faBars');
const menuUl = document.querySelector('.menuUl');
const faSun = document.querySelector('#faSun');
const docBody = document.body;
const subsInput = document.querySelector('#subscribe-input');
const subsButton = document.querySelector('#subscribe-button');
const inputWarning = document.querySelector('.input-alert-warning');
const inputSuccess = document.querySelector('.input-alert-success');
const inputDanger = document.querySelector('.input-alert-danger');
const contactInputsEmail = document.getElementById('contact-email');
const contactButton = document.getElementById('contact-button');
const checkProfile = document.getElementById('file');
const profileImg = document.getElementById('profile-img');
const resetButton = document.querySelector('#contact-reset-button');
const textArea = document.querySelector('#textarea');
const textLength = document.querySelector('.text-length');
const contactName = document.querySelector('#name');
const contactsurName = document.querySelector('#surname');
const contactDate = document.querySelector('#contact-date');
const contactMale = document.querySelector('#male');
const contactFemale = document.querySelector('#female');




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


contactInputsEmail.onkeyup = () => {


    if (!contactInputsEmail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {

        contactInputsEmail.style.border = '3px solid #bf0603'

    } else {

        contactInputsEmail.style.border = '3px solid #38b000'
    }
}




checkProfile.onchange = () => {
    profileImg.setAttribute('src', URL.createObjectURL(checkProfile.files[0]))
    localStorage.setItem('profileImg', profileImg.src);
}



const inputLocal = (names, type, eTargetValue, localType) => {

    names.addEventListener(`${type}`, e => {
        eTargetValue = e.target.value;
        localStorage.setItem(`${localType}`, eTargetValue);
    });
}

inputLocal(contactName, 'input', contactName.value, 'name');
inputLocal(contactsurName, 'input', contactsurName.value, 'surname');
inputLocal(contactInputsEmail, 'input', contactInputsEmail.value, 'email');
inputLocal(contactDate, 'change', contactDate.value, 'date');
inputLocal(textArea, 'input', textArea.value, 'textarea');



window.onload = () => {
    profileImg.src = localStorage.getItem('profileImg');
    contactName.value = localStorage.getItem('name');
    contactsurName.value = localStorage.getItem('surname');
    contactInputsEmail.value = localStorage.getItem('email');
    contactDate.value = localStorage.getItem('date');
    textArea.value = localStorage.getItem('textarea');
}





resetButton.addEventListener('click', () => {
    profileImg.src = '#';
    localStorage.setItem('profileImg', profileImg.src);
    textLength.textContent = 0;
    contactInputsEmail.value = '';
    contactName.value = localStorage.setItem('name', '')
    contactsurName.value = localStorage.setItem('surname', '')
    contactInputsEmail.value = localStorage.setItem('email', '')
    contactDate.onchange = localStorage.setItem('date', '')
    textArea.value = localStorage.setItem('textarea', '')
})






let limit = 150;
textArea.addEventListener('input', () => {

    textLength.textContent = textArea.value.length;


    if (textArea.value.length === 150) {
        textLength.style.color = '#bf0603'
    }
    else {

        textLength.style.color = 'var(--txtColor)'
    }

})




let jobFormHeader={
    origin:'top',
    distance:'25rem',
    delay:300,
    duration:1000
}

let contactHeader={
    origin:'top',
    distance:'25rem',
    delay:300,
    duration:1000
}

ScrollReveal().reveal('.job-form-header',jobFormHeader);
ScrollReveal().reveal('.contact-header',contactHeader);





let contactUs={
    origin:'left',
    distance:'25rem',
    delay:600,
    duration:1000
}

let jobForm={
    origin:'right',
    distance:'25rem',
    delay:1200,
    duration:1000
}

ScrollReveal().reveal('.contact-us',contactUs);
ScrollReveal().reveal('.job-form',jobForm);









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







