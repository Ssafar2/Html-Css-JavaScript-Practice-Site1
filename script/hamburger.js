const faBars = document.querySelector('#faBars');
const menuUl = document.querySelector('.menuUl');
const faSun = document.querySelector('#faSun');
const docBody = document.body;
const subsInput = document.querySelector('#subscribe-input');
const subsButton = document.querySelector('#subscribe-button');
const inputWarning = document.querySelector('.input-alert-warning');
const inputSuccess = document.querySelector('.input-alert-success');
const inputDanger = document.querySelector('.input-alert-danger');
const plusCounter = document.querySelectorAll('.plus-counter');
const minusCounter = document.querySelectorAll('.minus-counter');
let activePrice = document.querySelectorAll('.active-price');
let menuLimit = document.querySelectorAll('.menu-limit');
const foodImg = document.querySelectorAll('.food-img img')
const foodH1 = document.querySelectorAll('.food-h1');
const foodDel = document.querySelectorAll('.food-price del');
const basket = document.querySelector('#basket');
const basketCount = document.querySelector('#basket-count');
const sendBasket = document.querySelectorAll('#send-basket');
const closeBasketMenu = document.querySelector('#close-basket-menu');
const basketMenu = document.querySelector('.basket-menu');
let basketNameArray = [];
let basketCountArray = [];
let basketPriceArray = [];
let basketImgArray = [];




basketMenu.style.right = '-400px'
closeBasketMenu.onclick = () => {
    basketMenu.style.right = '-400px';
    basketMenu.style.transition = '1s';
}

basket.onclick = () => {
    basketMenu.style.right = '0';
    basketMenu.style.transition = '1s';
}


sendBasket.forEach((value, index) => {

    const totalPriceBody = document.createElement('div');
    const total = document.createElement('div');
    const totalText = document.createElement('p');
    const totalPrice = document.createElement('p');
    const totalManatSymbol = document.createElement('p');
    const button = document.createElement('button');


    totalPriceBody.classList.add('total-price-body')
    total.classList.add('total')
    totalPrice.classList.add('total-price')

    value.addEventListener('click', () => {

     

        menuLimit.forEach((val, ind) => {

            if (index === ind) {
                let basketValue = Number(basketCount.textContent) + Number(val.textContent);
                basketCount.textContent = basketValue;
            }
        })


        const basketMenuBody = document.createElement('div')
        const basketMenuName = document.createElement('div');
        const basketMenuImg = document.createElement('img');
        const basketMenuCount = document.createElement('p')
        const basketMenuPrice = document.createElement('div');
        const price = document.createElement('p');
        const manat = document.createElement('p');
        const xmark = document.createElement('i');
      

        basketMenuBody.classList.add('basket-menu-body')
        basketMenuImg.classList.add('basketMenuImg');
        basketMenuCount.classList.add('basketMenuCount');
        basketMenuPrice.classList.add('basketMenuPrice');
        price.classList.add('price');
        manat.classList.add('manat');
        xmark.classList.add('fa-solid');
        xmark.classList.add('fa-xmark');
      

        hamburgerMenu.forEach((ham, hamIndex) => {
            if (index === hamIndex) {
                menuLimit.forEach((limit, limitIndex) => {

                    if (index === limitIndex) {
                        basketMenuCount.textContent = limit.textContent;

                        limit.textContent = 1;

                        activePrice.forEach((activeValue, activeIndex) => {
                            if (index === activeIndex) {
                                price.textContent = activeValue.textContent;
                                activeValue.textContent = ham.content;
                            }
                        })
                    }
                })

                   
                basketMenuImg.setAttribute('src', ham.image);
                basketMenuName.textContent = ham.title
                manat.textContent = '₼';
                total.textContent='Total:';
                totalPrice.textContent= (Number(totalPrice.textContent) + Number(price.textContent)).toLocaleString(1);
                totalManatSymbol.textContent='₼';
                button.textContent='Sifariş et:'


                basketNameArray.push(basketMenuName.textContent)
                basketPriceArray.push(basketMenuPrice.textContent)
                basketCountArray.push(basketMenuCount.textContent)
                basketImgArray.push(basketMenuImg.src)

                localStorage.setItem('basketNameArray', basketNameArray)
                localStorage.setItem('basketPriceArray', basketPriceArray)
                localStorage.setItem('basketCountArray', basketCountArray)
                localStorage.setItem('basketImgArray', basketImgArray)


            }
        })


        basketMenuPrice.appendChild(price)
        basketMenuPrice.appendChild(manat)
        basketMenuBody.appendChild(basketMenuImg)
        basketMenuBody.appendChild(basketMenuName)
        basketMenuBody.appendChild(basketMenuCount)
        basketMenuBody.appendChild(basketMenuPrice)
        basketMenuBody.appendChild(xmark)
        total.appendChild(totalText)
        total.appendChild(totalPrice)
        total.appendChild(totalManatSymbol)
        totalPriceBody.appendChild(total)
        totalPriceBody.appendChild(button)
        basketMenu.appendChild(basketMenuBody)
        basketMenu.appendChild(totalPriceBody)

    })

})





var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



const hamburgerMenu = [
    {
        title: 'Angus Burger',
        priceDel: '12.99 ₼',
        content: 8.99,
        image: '../image-menu/hamburger1.jpg'
    },
    {
        title: 'Bufalo Burger',
        priceDel: '14.99 ₼',
        content: 9.99,
        image: '../image-menu/hamburger2.jpg'
    },
    {
        title: 'Cheesburger',
        priceDel: '6.99 ₼',
        content: 4.99,
        image: '../image-menu/hamburger3.jpg'
    },
    {
        title: 'Veggie Burger',
        priceDel: '7.99 ₼',
        content: 6.99,
        image: '../image-menu/hamburger4.jpg'
    },
    {
        title: 'Bean Burger',
        priceDel: '10.99 ₼',
        content: 8.99,
        image: '../image-menu/hamburger5.jpg'
    },
    {
        title: 'Chicken Burger',
        priceDel: '7.99 ₼',
        content: 4.99,
        image: '../image-menu/hamburger6.jpg'
    },
    {
        title: 'Crispy Fish Burger',
        priceDel: '14.99 ₼',
        content: 11.99,
        image: '../image-menu/hamburger7.jpg'
    },
    {
        title: 'Double Burger',
        priceDel: '16.99 ₼',
        content: 10.99,
        image: '../image-menu/hamburger8.webp'
    }
]



foodH1.forEach((value, index) => {
    hamburgerMenu.map((val, ind) => {
        index === ind ? value.textContent = val.title : value.textContent;
    })
})

foodDel.forEach((value, index) => {
    hamburgerMenu.map((val, ind) => {
        index === ind ? value.textContent = val.priceDel : value.textContent
    })
})

activePrice.forEach((value, index) => {
    hamburgerMenu.map((val, ind) => {
        index === ind ? value.textContent = val.content : value.textContent
    })
})

foodImg.forEach((value, index) => {
    hamburgerMenu.map((val, ind) => {
        index === ind ? value.setAttribute('src', val.image) : value.getAttribute('src')
    })
})




plusCounter.forEach((value, index) => {
    value.addEventListener('click', () => {
        hamburgerMenu.forEach((val, ind) => {
            if (index === ind) {
                activePrice.forEach((activeValue, activeIndex) => {
                    if (ind === activeIndex) {
                        menuLimit.forEach((limit, limitIndex) => {
                            if (ind === limitIndex)
                                if (limit.textContent < 30) {
                                    limit.textContent = +limit.textContent + 1
                                    let plusPriceCount = +activeValue.textContent + val.content;
                                    activeValue.textContent = plusPriceCount.toLocaleString(1)
                                }
                        })
                    }
                })
            }
        })
    })
})



minusCounter.forEach((value, index) => {
    value.addEventListener('click', () => {
        hamburgerMenu.map((val, ind) => {
            if (index === ind) {
                activePrice.forEach((activeValue, activeIndex) => {
                    if (ind === activeIndex) {
                        menuLimit.forEach((limit, limitIndex) => {
                            if (ind === limitIndex) {
                                if (limit.textContent > 0) {
                                    limit.textContent = +limit.textContent - 1
                                    let minusPriceCount = +activeValue.textContent - val.content;
                                    activeValue.textContent = minusPriceCount.toLocaleString(1)
                                }
                            }
                        })
                    }
                })
            }
        })
    })
})





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


    else if (window.innerWidth < 970 && window.innerWidth >= 720) {

        innerWidthNumber(618, 4825)
    }

    else if (window.innerWidth < 720) {

        innerWidthNumber(537, 6649)
    }
})