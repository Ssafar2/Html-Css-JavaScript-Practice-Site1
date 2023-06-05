const faBars = document.querySelector('#faBars');
const menuUl = document.querySelector('.menuUl');
const faSun = document.querySelector('#faSun');
const docBody = document.body;
const subsInput = document.querySelector('#subscribe-input');
const subsButton = document.querySelector('#subscribe-button');
const inputWarning = document.querySelector('.input-alert-warning');
const inputSuccess = document.querySelector('.input-alert-success');
const inputDanger = document.querySelector('.input-alert-danger');
const pizzaImgs = document.querySelectorAll('.menu-img');
const hamburgerImgs = document.querySelectorAll('.menu-img2');
const saladImgs = document.querySelectorAll('.menu-img3');
const sandwichImgs = document.querySelectorAll('.menu-img4');
const coctailImgs = document.querySelectorAll('.menu-img5');
const juiceImgs = document.querySelectorAll('.menu-img6');
const menuImgModal = document.querySelector('#menu-img-module');
const menuImgModal2 = document.querySelector('#menu-img-module2');
const menuImgModal3 = document.querySelector('#menu-img-module3');
const menuImgModal4 = document.querySelector('#menu-img-module4');
const menuImgModal5 = document.querySelector('#menu-img-module5');
const menuImgModal6 = document.querySelector('#menu-img-module6');
const closeModal = document.querySelectorAll('#close-modal');









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



const pizzaMenu = [
    {
        title: 'White Pizza',
        priceDel: '18.99 ₼',
        content: '16.99 ₼',
        image: '../image-menu/pizza1.jpg'
    },
    {
        title: 'Supreme Pizza',
        priceDel: '19.99 ₼',
        content: '17.99 ₼',
        image: '../image-menu/pizza2.jpg'
    },
    {
        title: 'Margherita Pizza',
        priceDel: '22.99 ₼',
        content: '18.99 ₼',
        image: '../image-menu/pizza3.jpg'
    },
    {
        title: 'Gennaro Pizza',
        priceDel: '25.99 ₼',
        content: '21.99 ₼',
        image: '../image-menu/pizza4.jpg'
    },
    {
        title: 'Pepperoni Pizza',
        priceDel: '22.99 ₼',
        content: '19.99 ₼',
        image: '../image-menu/pizza5.jpg'
    },
    {
        title: 'Veggie Pizza',
        priceDel: '28.99 ₼',
        content: '23.99 ₼',
        image: '../image-menu/pizza6.jpg'
    },
    {
        title: 'Portofino Pizza',
        priceDel: '30.99 ₼',
        content: '25.99 ₼',
        image: '../image-menu/pizza7.jpg'
    },
    {
        title: 'Cheese Pizza',
        priceDel: '23.99 ₼',
        content: '20.99 ₼',
        image: '../image-menu/pizza8.jpg'
    }
]

const hamburgerMenu = [
    {
        title: 'Angus Burger',
        priceDel: '12.99 ₼',
        content: '8.99 ₼',
        image: '../image-menu/hamburger1.jpg'
    },
    {
        title: 'Bufalo Burger',
        priceDel: '14.99 ₼',
        content: '9.99 ₼',
        image: '../image-menu/hamburger2.jpg'
    },
    {
        title: 'Cheesburger',
        priceDel: '6.99 ₼',
        content: '4.99 ₼',
        image: '../image-menu/hamburger3.jpg'
    },
    {
        title: 'Veggie Burger',
        priceDel: '7.99 ₼',
        content: '6.99 ₼',
        image: '../image-menu/hamburger4.jpg'
    },
    {
        title: 'Bean Burger',
        priceDel: '10.99 ₼',
        content: '8.99 ₼',
        image: '../image-menu/hamburger5.jpg'
    },
    {
        title: 'Chicken Burger',
        priceDel: '7.99 ₼',
        content: '4.99 ₼',
        image: '../image-menu/hamburger6.jpg'
    },
    {
        title: 'Crispy Fish Burger',
        priceDel: '14.99 ₼',
        content: '11.99 ₼',
        image: '../image-menu/hamburger7.jpg'
    },
    {
        title: 'Double Burger',
        priceDel: '16.99 ₼',
        content: '10.99 ₼',
        image: '../image-menu/hamburger8.webp'
    }
]

const saladMenu = [
    {
        title: 'Çoban Salatı',
        priceDel: '4.99 ₼',
        content: '3.99 ₼',
        image: '../image-menu/salad1.webp'
    },
    {
        title: 'İtalyan Salatı',
        priceDel: '13.99 ₼',
        content: '12.99 ₼',
        image: '../image-menu/salad2.webp'
    },
    {
        title: 'Mimoza Salatı',
        priceDel: '5.99 ₼',
        content: '4.99 ₼',
        image: '../image-menu/salad3.jpg'
    },
    {
        title: 'Sezar Salatı',
        priceDel: '14.99 ₼',
        content: '12.99 ₼',
        image: '../image-menu/salad4.jpg'
    },
    {
        title: 'Toyuq Salatı',
        priceDel: '7.99 ₼',
        content: '6.99 ₼',
        image: '../image-menu/salad5.jpg'
    },
    {
        title: 'Göbələk Salatı',
        priceDel: '13.99 ₼',
        content: '9.99 ₼',
        image: '../image-menu/salad6.jpg'
    },
    {
        title: 'Avakado Salatı',
        priceDel: '21.99 ₼',
        content: '16.99 ₼',
        image: '../image-menu/salad7.jpg'
    },
    {
        title: 'Yumurta Salatı',
        priceDel: '7.99 ₼',
        content: '4.99 ₼',
        image: '../image-menu/salad8.jpg'
    }
]

const sandwichMenu = [
    {
        title: 'Grilled Sandwich',
        priceDel: '13.99 ₼',
        content: '11.99 ₼',
        image: '../image-menu/sandwich1.webp'
    },
    {
        title: 'Panini Sandwich',
        priceDel: '17.99 ₼',
        content: '14.99 ₼',
        image: '../image-menu/sandwich2.webp'
    },
    {
        title: 'Caprese Sandwich',
        priceDel: '17.99 ₼',
        content: '15.99 ₼',
        image: '../image-menu/sandwich3.jpg'
    },
    {
        title: 'Chicken Sandwich',
        priceDel: '12.99 ₼',
        content: '9.99 ₼',
        image: '../image-menu/sandwich4.jpg'
    },
    {
        title: 'Club Sandwich',
        priceDel: '8.99 ₼',
        content: '7.99 ₼',
        image: '../image-menu/sandwich5.jpg'
    },
    {
        title: 'Montreal Smoked Meat Sandwich',
        priceDel: '17.99 ₼',
        content: '15.99 ₼',
        image: '../image-menu/sandwich6.jpg'
    },
    {
        title: `Schwartz's Sandwich`,
        priceDel: '20.99 ₼',
        content: '17.99 ₼',
        image: '../image-menu/sandwich7.jpg'
    },
    {
        title: 'Mortadella Sandwich',
        priceDel: '16.99 ₼',
        content: '13.99 ₼',
        image: '../image-menu/sandwich8.jpg'
    }
]

const coctailsMenu = [
    {
        title: 'Mojito',
        priceDel: '7.99 ₼',
        content: '5.99 ₼',
        image: '../image-menu/drinks1.jpg'
    },
    {
        title: 'Pina Colada',
        priceDel: '9.99 ₼',
        content: '8.99 ₼',
        image: '../image-menu/drinks2.jpg'
    },
    {
        title: 'Grashoper',
        priceDel: '5.99 ₼',
        content: '3.99 ₼',
        image: '../image-menu/drinks3.jpg'
    },
    {
        title: 'Margarita',
        priceDel: '13.99 ₼',
        content: '9.99 ₼',
        image: '../image-menu/drinks4.jpg'
    },
    {
        title: 'Cuba Libre',
        priceDel: '15.99 ₼',
        content: '13.99 ₼',
        image: '../image-menu/drinks5.webp'
    },
    {
        title: 'Mai Tai',
        priceDel: '8.99 ₼',
        content: '6.99 ₼',
        image: '../image-menu/drinks6.jpg'
    },
    {
        title: 'Blue Lagoon',
        priceDel: '16.99 ₼',
        content: '12.99 ₼',
        image: '../image-menu/drinks7.jpg'
    },
    {
        title: 'Tequila Sunrise',
        priceDel: '14.99 ₼',
        content: '11.99 ₼',
        image: '../image-menu/drinks8.jpg'
    }
]

const juiceMenu = [
    {
        title: 'Fanta',
        priceDel: '3.99 ₼',
        content: '2.99 ₼',
        image: '../image-menu/drinks9.jpg'
    },
    {
        title: 'Kola',
        priceDel: '3.99 ₼',
        content: '2.99 ₼',
        image: '../image-menu/drinks10.webp'
    },
    {
        title: 'Sprite',
        priceDel: '3.99 ₼',
        content: '2.99 ₼',
        image: '../image-menu/drinks11.jpg'
    },
    {
        title: 'Pepsi',
        priceDel: '3.99 ₼',
        content: '2.99 ₼',
        image: '../image-menu/drinks12.webp'
    },
    {
        title: 'Portağal Şirəsi',
        priceDel: '5.99 ₼',
        content: '4.99 ₼',
        image: '../image-menu/drinks13.jpg'
    },
    {
        title: 'Alma Şirəsi',
        priceDel: '5.99 ₼',
        content: '4.99 ₼',
        image: '../image-menu/drinks14.jpg'
    },
    {
        title: 'Ananas Şirəsi',
        priceDel: '8.99 ₼',
        content: '6.99 ₼',
        image: '../image-menu/drinks15.jpg'
    },
    {
        title: 'Albalı Şirəsi',
        priceDel: '5.99 ₼',
        content: '4.99 ₼',
        image: '../image-menu/drinks16.jpg'
    }
]




const modalImgs = (typeImg, typeMap, imgModal) => {

    typeImg.forEach((value, index) => {
        value.addEventListener('click', () => {

            typeMap.map((val, ind) => {
                if (index === ind) {
                    imgModal.style.display = 'block'
                    imgModal.querySelector('img').setAttribute('src', val.image);
                    imgModal.querySelector('h1').textContent = val.title;
                    imgModal.querySelector('p').textContent = val.content;
                    imgModal.querySelector('span').textContent = val.priceDel;  
                }
            })

        })
    })
}


modalImgs(pizzaImgs, pizzaMenu, menuImgModal);
modalImgs(hamburgerImgs, hamburgerMenu, menuImgModal2);
modalImgs(saladImgs, saladMenu, menuImgModal3);
modalImgs(sandwichImgs, sandwichMenu, menuImgModal4);
modalImgs(coctailImgs, coctailsMenu, menuImgModal5);
modalImgs(juiceImgs, juiceMenu, menuImgModal6);



pizzaImgs.forEach((val,ind)=>{
    val.addEventListener('click',()=>{
        pizzaMenu.map((value,index)=>{

            if(ind===index){
              menuImgModal.querySelector('a').addEventListener('click',()=>{
                window.open(`../pages/hamburger.html`)
              })
            }
        })        
    })
})



const closeImgModal = (menuImg) => {
    menuImg.style.display = 'none';
}

closeModal.forEach(val => {
    val.onclick = () => {
        closeImgModal(menuImgModal);
        closeImgModal(menuImgModal2);
        closeImgModal(menuImgModal3);
        closeImgModal(menuImgModal4);
        closeImgModal(menuImgModal5);
        closeImgModal(menuImgModal6);
    }
})

const clickCloseMenuImgModal = (imgModalType) => {

    imgModalType.ondblclick = () => {
        imgModalType.style.display = 'none'
    }
}

clickCloseMenuImgModal(menuImgModal)
clickCloseMenuImgModal(menuImgModal2)
clickCloseMenuImgModal(menuImgModal3)
clickCloseMenuImgModal(menuImgModal4)
clickCloseMenuImgModal(menuImgModal5)
clickCloseMenuImgModal(menuImgModal6)




menuUl.style.maxHeight = '0px'
faBars.addEventListener('click', () => {

    if (menuUl.style.maxHeight === '0px') {

        menuUl.style.maxHeight = '240px'
    }
    else {
        menuUl.style.maxHeight = '0px'

    }
})





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


    else if (window.innerWidth < 970 && window.innerWidth >= 635) {

        innerWidthNumber(918, 7150)
    }

    else if (window.innerWidth < 635) {

        innerWidthNumber(587, 14087)

    }


})
