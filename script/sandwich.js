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
const foodCard = document.querySelectorAll('.food-card')

const basket = document.querySelector('#basket');
const basketCount = document.querySelector('#basket-count');
const sendBasket = document.querySelectorAll('#send-basket');
const closeBasketMenu = document.querySelector('#close-basket-menu');
const basketMenu = document.querySelector('.basket-menu');
const totalPrice = document.querySelector('#total-price');
const totalPriceBody = document.querySelector('.total-price-body');

const foodPayOrder = document.querySelectorAll('#take-order');
const payModal2 = document.querySelector('#payModal2');
const closePayBox2 = document.querySelector('#closePayBox2');
const totalValue2 = document.querySelector('#totalValue2');
const order2 = document.querySelector('#order2')


const clearBasketMenu = document.querySelector('#clearBasket');
const payOrder = document.querySelector('#pay-order');
const payModal = document.querySelector('#payModal');
const closePayBox = document.querySelector('#closePayBox');
const totalValue = document.querySelector('#totalValue');
const order = document.querySelector('#order');
const search = document.querySelector('#search');
let activePriceArray = [];





const sandwichMenu = [
    {
        title: 'Grilled Sandwich',
        priceDel: '13.99 ₼',
        content: 11.99,
        image: '../image-menu/sandwich1.webp',
        count:1,
    },
    {
        title: 'Panini Sandwich',
        priceDel: '17.99 ₼',
        content: 14.99,
        image: '../image-menu/sandwich2.webp',
        count:1,
    },
    {
        title: 'Caprese Sandwich',
        priceDel: '17.99 ₼',
        content: 15.99,
        image: '../image-menu/sandwich3.jpg',
        count:1,
    },
    {
        title: 'Chicken Sandwich',
        priceDel: '12.99 ₼',
        content: 9.99,
        image: '../image-menu/sandwich4.jpg',
        count:1,
    },
    {
        title: 'Club Sandwich',
        priceDel: '8.99 ₼',
        content: 7.99,
        image: '../image-menu/sandwich5.jpg',
        count:1,
    },
    {
        title: 'Montreal Sandwich',
        priceDel: '17.99 ₼',
        content: 15.99,
        image: '../image-menu/sandwich6.jpg',
        count:1,
    },
    {
        title: `Schwartz's Sandwich`,
        priceDel: '20.99 ₼',
        content: 17.99,
        image: '../image-menu/sandwich7.jpg',
        count:1,
    },
    {
        title: 'Mortadella Sandwich',
        priceDel: '16.99 ₼',
        content: 13.99,
        image: '../image-menu/sandwich8.jpg',
        count:1,
    }
]


search.addEventListener('keyup', e => {

    const filterValue = e.target.value.toLowerCase().trim();

    foodCard.forEach(value => {

        if (value.children[1].textContent.toLowerCase().trim().includes(filterValue)) {
            value.setAttribute('style', 'display:block')
        }
        else {
            value.setAttribute('style', 'display:none')
        }
    })
})






//*****************************! ADD TO BASKET  *************************/

sendBasket.forEach((send, sendIndex) => {

    sandwichMenu.forEach((hamb, hambIndex) => {

        send.addEventListener('click', () => {

            if (hambIndex === sendIndex) {

                menuLimit.forEach((limit, limitIndex) => {

                    if (limitIndex === sendIndex) {

                        activePrice.forEach((activePriceValue, activePriceIndex) => {

                            if (activePriceIndex === sendIndex) {

                                createBasketMenuUI(hamb, limit, activePriceValue);
                            }
                        })

                    }
                })
            }
        })
    })

})



//*****************************! SHOW BASKET STORAGE  *************************/

window.onload = () => {

    totalPrice.textContent = localStorage.getItem('totalPrice');
    basketCount.textContent = localStorage.getItem('basketCount');
    totalValue.textContent = localStorage.getItem('totalPrice');

    checkBasketPriceFromStorage();
    checkBasketMenuFromStorage();

    checkedMenu.forEach((value, index) => {
        activePriceArray.forEach((val, ind) => {

            if (index === ind) {

                const createBasketMenuBody = document.createElement('div');
                createBasketMenuBody.classList.add('basket-menu-body')
                createBasketMenuBody.innerHTML =

                    `
                        <img src=${value.image}>
                        <p class="basketMenuName">${value.title}</p>
                        <p class="basketMenuCount">${value.count}</p>
                        <div class="basketMenuPrice">
                            <p class="price">${val}</p>
                            <p class="manat">₼</p>
                        </div>
    
                      `

                basketMenu.insertBefore(createBasketMenuBody, totalPriceBody);

                clearBasketMenu.addEventListener('click', () => {

                    createBasketMenuBody.remove();
                })

                order.addEventListener('click', () => {

                    totalPrice.textContent = 0;
                    createBasketMenuBody.remove();
                })
            }
        })
    })

}



//*****************************! SHOW BASKET UI  *************************/

const createBasketMenuUI = (hamb, limit, activePriceValue) => {

    const createBasketMenuBody = document.createElement('div');
    createBasketMenuBody.classList.add('basket-menu-body')
    createBasketMenuBody.innerHTML =

        `
        <img src=${hamb.image}>
        <p class="basketMenuName">${hamb.title}</p>
        <p class="basketMenuCount">${hamb.count}</p>
        <div class="basketMenuPrice">
            <p class="price">${activePriceValue.textContent}</p>
            <p class="manat">₼</p>
        </div>

    `


    checkBasketMenuFromStorage();

    checkedMenu.push(hamb)
    localStorage.setItem('basketMenu', JSON.stringify(checkedMenu))

    activePriceArray.push(activePriceValue.textContent)
    localStorage.setItem('activePrice', JSON.stringify(activePriceArray))

    totalPrice.textContent = (Number(totalPrice.textContent) + Number(activePriceValue.textContent)).toFixed(2);
    localStorage.setItem('totalPrice', totalPrice.textContent);

    limit.textContent = 1;
    hamb.count = 1;
    activePriceValue.textContent = hamb.content;
    basketMenu.insertBefore(createBasketMenuBody, totalPriceBody);
    basketCount.textContent = +basketCount.textContent + 1;
    localStorage.setItem('basketCount', basketCount.textContent);

    clearBasketMenu.addEventListener('click', () => {

        createBasketMenuBody.remove();
    })

    order.addEventListener('click', () => {

        totalPrice.textContent = 0;
        createBasketMenuBody.remove();
    })

}


//*****************************! CLEAR BUTTON  *************************/

clearBasketMenu.addEventListener('click', () => {

    if (totalPrice.textContent == 0) {
        alert('Xəta! Təmizləmək üçün səbətinizdə məhsul mövcud olmalıdır..');
    }
    basketCount.textContent = 0;

    checkBasketMenuFromStorage();

    checkedMenu = [];
    localStorage.setItem('basketMenu', JSON.stringify(checkedMenu));

    activePriceArray = [];
    localStorage.setItem('activePrice', JSON.stringify(activePriceArray));

    totalPrice.textContent = 0;
    localStorage.setItem('totalPrice', totalPrice.textContent)


    basketCount.textContent = 0;
    localStorage.setItem('basketCount', basketCount.textContent);
})



//*****************************! CHECK BASKET MENU STORAGE  *************************/

const checkBasketMenuFromStorage = () => {

    if (localStorage.getItem('basketMenu') === null) {
        checkedMenu = [];
    }
    else {
        checkedMenu = JSON.parse(localStorage.getItem('basketMenu'));
    }

    return checkedMenu;
}



//*****************************! CHECK ACTIVE PRICE STORAGE  *************************/

const checkBasketPriceFromStorage = () => {

    if (localStorage.getItem('activePrice') === null) {
        activePriceArray = [];
    }
    else {
        activePriceArray = JSON.parse(localStorage.getItem('activePrice'));
    }

    return activePriceArray;
}



//*****************************! PAY-ORDER SECTION  *************************/


payOrder.addEventListener('click', () => {

    if (totalPrice.textContent == 0) {
        alert('Xəta! Sifariş etmək üçün səbətinizdə məhsul mövcud olmalıdır..');
    }
    else {
        payModal.style.display = 'flex';
        basketMenu.style.right = '-400px';
        totalValue.textContent = totalPrice.textContent;

        order.addEventListener('click', () => {
            alert('Ödəniş uğurla tamamlandı. Bizi seçdiyiniz üçün təşəkkürlər :)))')
            payModal.style.display = 'none';

            checkBasketMenuFromStorage();

            checkedMenu = [];
            localStorage.setItem('basketMenu', JSON.stringify(checkedMenu));

            activePriceArray = [];
            localStorage.setItem('activePrice', JSON.stringify(activePriceArray));

            totalPrice.textContent = 0;
            localStorage.setItem('totalPrice', totalPrice.textContent)


            basketCount.textContent = 0;
            localStorage.setItem('basketCount', basketCount.textContent);
        })
    }
})


closePayBox.addEventListener('click', () => {
    payModal.style.display = 'none'
})


foodPayOrder.forEach((value, index) => {
    value.addEventListener('click', () => {
        activePrice.forEach((val, ind) => {
            if (index === ind) {
                payModal2.style.display = 'flex';
                totalValue2.textContent = val.textContent;


            }
        })
    })
})


closePayBox2.addEventListener('click', () => {
    payModal2.style.display = 'none';
})


order2.addEventListener('click', () => {
    alert('Ödəniş uğurla tamamlandı. Bizi seçdiyiniz üçün təşəkkürlər :)))')
    payModal2.style.display = 'none';
    search.value = '';
    foodCard.forEach(value => {
        value.setAttribute('style', 'display:block')
    })
})




//*****************************! MENU SLIDER  *************************/


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



//*****************************! BASKET BAR  *************************/

basketMenu.style.right = '-400px'
closeBasketMenu.onclick = () => {
    basketMenu.style.right = '-400px';
    basketMenu.style.transition = '.7s';
}

basket.onclick = () => {
    basketMenu.style.right = '0';
    basketMenu.style.transition = '.7s';
}




//*****************************! CARD INFORMATION  *************************/

foodH1.forEach((value, index) => {
    sandwichMenu.map((val, ind) => {
        index === ind ? value.textContent = val.title : value.textContent;
    })
})

foodDel.forEach((value, index) => {
    sandwichMenu.map((val, ind) => {
        index === ind ? value.textContent = val.priceDel : value.textContent
    })
})

activePrice.forEach((value, index) => {
    sandwichMenu.map((val, ind) => {
        index === ind ? value.textContent = val.content : value.textContent
    })
})

foodImg.forEach((value, index) => {
    sandwichMenu.map((val, ind) => {
        index === ind ? value.setAttribute('src', val.image) : value.getAttribute('src')
    })
})

menuLimit.forEach((value, index) => {
    sandwichMenu.map((val, ind) => {
        index === ind ? value.textContent = val.count : value.textContent
    })
})





//*****************************! PLUS COUNTER  *************************/

plusCounter.forEach((plus, plusIndex) => {
    plus.addEventListener('click', () => {
        activePrice.forEach((activePrice, activePriceIndex) => {
            if (plusIndex === activePriceIndex) {
                sandwichMenu.forEach((hamb, hambIndex) => {
                    if (activePriceIndex === hambIndex) {
                        menuLimit.forEach((limit, limitIndex) => {
                            if (hambIndex === limitIndex) {
                                if (hamb.count < 30) {

                                    hamb.count = hamb.count + 1
                                    limit.textContent = hamb.count;


                                    let activePriceNum = +activePrice.textContent + +hamb.content;
                                    activePrice.textContent = +activePriceNum.toFixed(3);
                                }

                            }
                        })

                    }
                })
            }
        })
    })
})


//*****************************! MINUS COUNTER   *************************/




minusCounter.forEach((minus, minusIndex) => {
    minus.addEventListener('click', () => {
        activePrice.forEach((activePrice, activePriceIndex) => {
            if (minusIndex === activePriceIndex) {
                sandwichMenu.forEach((hamb, hambIndex) => {
                    if (activePriceIndex === hambIndex) {
                        menuLimit.forEach((limit, limitIndex) => {
                            if (hambIndex === limitIndex) {
                                if (hamb.count > 1) {

                                    hamb.count = hamb.count - 1
                                    limit.textContent = hamb.count;



                                    let activePriceNum = +activePrice.textContent - +hamb.content;
                                    activePrice.textContent = +activePriceNum.toFixed(3);
                                }

                            }
                        })

                    }
                })
            }
        })
    })
})





//*****************************! SUBSCRIBE BUTTON VALIDATION *************************/

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


//*****************************! MENU BAR *************************/

menuUl.style.maxHeight = '0px'
faBars.onclick = () => {

    if (menuUl.style.maxHeight === '0px') {

        menuUl.style.maxHeight = '240px'
    }
    else {
        menuUl.style.maxHeight = '0px'

    }
}


//*****************************! DARK MODE *************************/

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




//*****************************! WINDOW SCROLL *************************/

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




