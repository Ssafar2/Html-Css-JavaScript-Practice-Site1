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
    let emailRegex = /(^[a-zA-Z]+)([\w0-9]+)?([\.\-\_])?([a-zA-Z]+)([\w0-9]+)?\@([a-zA-Z]+)\.([a-zA-Z]+){2,5}/gi

    if (subsInput.value === '' || subsInput.value === null) {

        inputSituation(inputSuccess, inputDanger, inputWarning, 'translateX(-1000px)', 'translateX(0px)', 'Xəta! Boş dəyər girmək olmaz!');
    }
    else if (!subsInput.value.match(emailRegex)) {

        inputSituation(inputWarning, inputSuccess, inputDanger, 'translateX(-1000px)', 'translateX(0px)', 'Xəta! Girilən dəyər mail tipində olmalıdır !');
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

    let emailRegex = /(^[a-zA-Z]+)([\w0-9]+)?([\.\-\_])?([a-zA-Z]+)([\w0-9]+)?\@([a-zA-Z]+)\.([a-zA-Z]+){2,5}/gi

    if (!contactInputsEmail.value.match(emailRegex)) {

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
    textLength.textContent = localStorage.getItem('textLength');
}




resetButton.addEventListener('click', () => {
    profileImg.src = '#';
    localStorage.setItem('profileImg', profileImg.src);
    textLength.textContent = 0;
    contactInputsEmail.value = '';
    contactName.value = localStorage.setItem('name', '');
    contactsurName.value = localStorage.setItem('surname', '');
    contactInputsEmail.value = localStorage.setItem('email', '');
    contactDate.onchange = localStorage.setItem('date', '');
    textArea.value = localStorage.setItem('textarea', '');
    textLength.textContent = localStorage.setItem('textLength', 0);
})



let limit = 150;
textArea.addEventListener('input', () => {

    textLength.textContent = textArea.value.length;
    localStorage.setItem('textLength', textLength.textContent)

    if (textArea.value.length === 150) {

        textLength.style.color = '#bf0603'
    }
    else {

        textLength.style.color = 'var(--txtColor)'
    }

})



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

        innerWidthNumber(407, 407)
    }
    else if (window.innerWidth < 970 && window.innerWidth >= 635) {

        innerWidthNumber(500, 500)
    }
    else if (window.innerWidth < 635) {

        innerWidthNumber(600, 600)
    }
})

