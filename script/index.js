const faBars = document.querySelector('#faBars');
const menuUl = document.querySelector('.menuUl');
const faSun = document.querySelector('#faSun')
const docBody = document.body;






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