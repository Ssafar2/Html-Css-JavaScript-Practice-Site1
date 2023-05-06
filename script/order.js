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
    let emailRegex=/(^[a-zA-Z]+)([\w0-9]+)?([\.\-\_])?([a-zA-Z]+)([\w0-9]+)?\@([a-zA-Z]+)\.([a-zA-Z]+){2,5}/gi

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




window.addEventListener('scroll', () => {

    let winScrollY = window.scrollY;


    console.log(winScrollY);

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


    else if (window.innerWidth < 970 && window.innerWidth >= 720) {

        innerWidthNumber(618, 4825)
    }

    else if (window.innerWidth < 720) {

        innerWidthNumber(537, 6649)
    }
})