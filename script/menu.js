const faBars = document.querySelector('#faBars');
const menuUl = document.querySelector('.menuUl');
const faSun = document.querySelector('#faSun');
const docBody = document.body;
const subsInput = document.querySelector('#subscribe-input');
const subsButton = document.querySelector('#subscribe-button');
const inputWarning = document.querySelector('.input-alert-warning');
const inputSuccess = document.querySelector('.input-alert-success');
const inputDanger = document.querySelector('.input-alert-danger');
const pizzaImgs=document.querySelectorAll('.menu-img');
const menuImgModal=document.querySelector('#menu-img-module');
const closeModal=menuImgModal.querySelector('#close-modal');







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


    else if (subsInput.validity.typeMismatch) {

        inputSituation(inputWarning, inputSuccess, inputDanger, 'translateX(-1000px)', 'translateX(0px)', 'Xəta! Girilən dəyər mail @ tipində olmalıdır !');
        
    }

    else {

        inputSituation(inputWarning, inputDanger, inputSuccess, 'translateX(-1000px)', 'translateX(0px)', 'Abunə olduğunuz üçün təşəkkürlər');
    }
}


const pizzaMenu = [
    {
        title: 'White Pizza',
        content: 'Ləzzətli White Pizzalar burada',
        image: '../image-menu/pizza1.jfif'
    },
    {
        title: 'Supreme Pizza',
        content: 'Ləzzətli Supreme Pizzalar burada',
        image: '../image-menu/pizza2.jpg'
    },
    {
        title: 'Margherita Pizza',
        content: 'Ləzzətli Margherita Pizzalar burada',
        image: '../image-menu/pizza3.jpg'
    },
    {
        title: 'Gennaro Pizza',
        content: 'Ləzzətli Gennaro Pizzalar burada',
        image: '../image-menu/pizza4.jpg'
    },
    {
        title: 'Pepperoni Pizza',
        content: 'Ləzzətli Pepperoni Pizzalar burada',
        image: '../image-menu/pizza5.jpg'
    },
    {
        title: 'Veggie Pizza',
        content: 'Ləzzətli Veggie Pizzalar burada',
        image: '../image-menu/pizza6.jpg'
    },
    {
        title: 'Portofino Pizza',
        content: 'Ləzzətli Portofino Pizzalar burada',
        image: '../image-menu/pizza7.jpg'
    },
    {
        title: 'Cheese Pizza',
        content: 'Ləzzətli Cheese Pizzalar burada',
        image: '../image-menu/pizza8.jpg'
    },
]

const HamburgerMenu = [
    {
        title: 'White Pizza',
        content: 'Ləzzətli White Pizzalar burada',
        image: '../image-menu/pizza1.jfif'
    },
    {
        title: 'Supreme Pizza',
        content: 'Ləzzətli Supreme Pizzalar burada',
        image: '../image-menu/pizza2.jpg'
    },
    {
        title: 'Margherita Pizza',
        content: 'Ləzzətli Margherita Pizzalar burada',
        image: '../image-menu/pizza3.jpg'
    },
    {
        title: 'Gennaro Pizza',
        content: 'Ləzzətli Gennaro Pizzalar burada',
        image: '../image-menu/pizza4.jpg'
    },
    {
        title: 'Pepperoni Pizza',
        content: 'Ləzzətli Pepperoni Pizzalar burada',
        image: '../image-menu/pizza5.jpg'
    },
    {
        title: 'Veggie Pizza',
        content: 'Ləzzətli Veggie Pizzalar burada',
        image: '../image-menu/pizza6.jpg'
    },
    {
        title: 'Portofino Pizza',
        content: 'Ləzzətli Portofino Pizzalar burada',
        image: '../image-menu/pizza7.jpg'
    },
    {
        title: 'Cheese Pizza',
        content: 'Ləzzətli Cheese Pizzalar burada',
        image: '../image-menu/pizza8.jpg'
    },
]




pizzaImgs.forEach((value,index)=>{
  value.addEventListener('click',()=>{

    pizzaMenu.map((val,ind)=>{
        if(index===ind){
            menuImgModal.style.display='block'
            menuImgModal.querySelector('img').setAttribute('src',val.image);
            menuImgModal.querySelector('h1').textContent=val.title;
            menuImgModal.querySelector('p').textContent=val.content;
        }
    })

  })
})



closeModal.onclick=()=>{
    menuImgModal.style.display='none'
}


















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