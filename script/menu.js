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
    }
]

const hamburgerMenu = [
    {
        title: 'Angus Burger',
        content: 'Ləzzətli Angus Burgerlər burada',
        image: '../image-menu/hamburger1.jpg'
    },
    {
        title: 'Bufalo Burger',
        content: 'Ləzzətli Bufalo Burgerlər burada',
        image: '../image-menu/hamburger2.jpg'
    },
    {
        title: 'Cheesburger',
        content: 'Ləzzətli Cheesburgerlər burada',
        image: '../image-menu/hamburger3.jpg'
    },
    {
        title: 'Veggie Burger',
        content: 'Ləzzətli Veggie Burgerlər burada',
        image: '../image-menu/hamburger4.jpg'
    },
    {
        title: 'Bean Burger',
        content: 'Ləzzətli Bean Burgerlər burada',
        image: '../image-menu/hamburger5.jpg'
    },
    {
        title: 'Chicken Burger',
        content: 'Ləzzətli Chicken Burgerlər burada',
        image: '../image-menu/hamburger6.jpg'
    },
    {
        title: 'Crispy Fish Burger',
        content: 'Ləzzətli Crispy Fish Burgerlər burada',
        image: '../image-menu/hamburger7.webp'
    },
    {
        title: 'Double Burger',
        content: 'Ləzzətli Double Burgerlər burada',
        image: '../image-menu/hamburger8.webp'
    }
]

const saladMenu = [
    {
        title: 'Çoban Salatı',
        content: 'Ləzzətli Çoban Salatlar burada',
        image: '../image-menu/salad1.webp'
    },
    {
        title: 'Patyaxt Salatı',
        content: 'Ləzzətli Paytaxt Salatlar burada',
        image: '../image-menu/salad2.jpg'
    },
    {
        title: 'Mimoza Salatı',
        content: 'Ləzzətli Mimoza Salatlar burada',
        image: '../image-menu/salad3.jpg'
    },
    {
        title: 'Sezar Salatı',
        content: 'Ləzzətli Sezar Salatlar burada',
        image: '../image-menu/salad4.jpg'
    },
    {
        title: 'Toyuq Salatı',
        content: 'Ləzzətli Bean Burgerlər burada',
        image: '../image-menu/salad5.jpg'
    },
    {
        title: 'Göbələk Salatı',
        content: 'Ləzzətli Göbələk Salatlar burada',
        image: '../image-menu/salad6.jpg'
    },
    {
        title: 'Avakado Salatı',
        content: 'Ləzzətli Avakado Salatlar burada',
        image: '../image-menu/salad7.jpg'
    },
    {
        title: 'Yumurta Salatı',
        content: 'Ləzzətli Yumurta Salatlar burada',
        image: '../image-menu/salad8.jpg'
    }
]

const sandwichMenu = [
    {
        title: 'Grilled Sandwich',
        content: 'Ləzzətli Grilled Sandwichlər burada',
        image: '../image-menu/sandwich1.webp'
    },
    {
        title: 'Panini Sandwich',
        content: 'Ləzzətli Panini Sandwichlər burada',
        image: '../image-menu/sandwich2.webp'
    },
    {
        title: 'Caprese Sandwich',
        content: 'Ləzzətli Caprese Sandwichlər burada',
        image: '../image-menu/sandwich3.jpg'
    },
    {
        title: 'Chicken Sandwich',
        content: 'Ləzzətli Chicken Sandwichlər burada',
        image: '../image-menu/sandwich4.jpg'
    },
    {
        title: 'Club Sandwich',
        content: 'Ləzzətli Club Sandwichlər burada',
        image: '../image-menu/sandwich5.jpg'
    },
    {
        title: 'Montreal Smoked Meat Sandwich',
        content: 'Ləzzətli Montreal Smoked Meat Sandwichlər burada',
        image: '../image-menu/sandwich6.jpg'
    },
    {
        title: `Schwartz's Sandwich`,
        content: `Ləzzətli Schwartz's Sandwichlər burada`,
        image: '../image-menu/sandwich7.jpg'
    },
    {
        title: 'Mortadella Sandwich',
        content: 'Ləzzətli Mortadella Sandwichlər burada',
        image: '../image-menu/sandwich8.jpg'
    }
]

const coctailsMenu = [
    {
        title: 'Mojito',
        content: 'Dadlı Mojito İçkilər burada',
        image: '../image-menu/drinks1.jpg'
    },
    {
        title: 'Pina Colada',
        content: 'Dadlı Pina Colada İçkilər burada',
        image: '../image-menu/drinks2.jpg'
    },
    {
        title: 'Grashoper',
        content: 'Dadlı Grashopper İçkilər burada',
        image: '../image-menu/drinks3.jpg'
    },
    {
        title: 'Margarita',
        content: 'Dadlı Margarita İçkilər burada',
        image: '../image-menu/drinks4.jpg'
    },
    {
        title: 'Cuba Libre',
        content: 'Dadlı Cuba Libre İçkilər burada',
        image: '../image-menu/drinks5.webp'
    },
    {
        title: 'Mai Tai',
        content: 'Dadlı Mai Tai İçkilər burada',
        image: '../image-menu/drinks6.jpg'
    },
    {
        title: 'Blue Lagoon',
        content: `Dadlı Blue Lagoon İçkilər burada`,
        image: '../image-menu/drinks7.jpg'
    },
    {
        title: 'Tequila Sunrise',
        content: 'Dadlı Tequila Sunrise İçkilər burada',
        image: '../image-menu/drinks8.jpg'
    }
]

const juiceMenu = [
    {
        title: 'Fanta',
        content: 'Dadlı Fanta İçkilər burada',
        image: '../image-menu/drinks9.jpg'
    },
    {
        title: 'Kola',
        content: 'Dadlı Kola İçkilər burada',
        image: '../image-menu/drinks10.webp'
    },
    {
        title: 'Sprite',
        content: 'Dadlı Sprite İçkilər burada',
        image: '../image-menu/drinks11.jpg'
    },
    {
        title: 'Pepsi',
        content: 'Dadlı Pepsi İçkilər burada',
        image: '../image-menu/drinks12.webp'
    },
    {
        title: 'Portağal Şirəsi',
        content: 'Dadlı Portağal Şirələri burada',
        image: '../image-menu/drinks13.jpg'
    },
    {
        title: 'Alma Şirəsi',
        content: 'Dadlı Alma Şirələri burada',
        image: '../image-menu/drinks14.jpg'
    },
    {
        title: 'Ananas Şirəsi',
        content: `Dadlı Ananas Şirələri burada`,
        image: '../image-menu/drinks15.jpg'
    },
    {
        title: 'Albalı Şirəsi',
        content: 'Dadlı Albalı Şirələri burada',
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
                }
            })

        })
    })
}


modalImgs(pizzaImgs,pizzaMenu,menuImgModal);
modalImgs(hamburgerImgs,hamburgerMenu,menuImgModal2);
modalImgs(saladImgs,saladMenu,menuImgModal3);
modalImgs(sandwichImgs,sandwichMenu,menuImgModal4);
modalImgs(coctailImgs,coctailsMenu,menuImgModal5);
modalImgs(juiceImgs,juiceMenu,menuImgModal6);



const closeImgModal=(menuImg)=>{
    menuImg.style.display = 'none';
}

closeModal.forEach(val=>{
    val.onclick = () => {
       closeImgModal(menuImgModal);
       closeImgModal(menuImgModal2);
       closeImgModal(menuImgModal3);
       closeImgModal(menuImgModal4);
       closeImgModal(menuImgModal5);
       closeImgModal(menuImgModal6);
    }
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