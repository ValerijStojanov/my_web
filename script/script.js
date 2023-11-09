let burgerButton = document.getElementById('menu-btn');
let navListContent = document.getElementById('nav-list-content');
let navList = document.getElementById('nav-list');
let menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;



document.getElementById('portfolio_link').addEventListener('click', function() {
    const StripePortfolio = document.getElementById('stripe_project');

    if (StripePortfolio) {
        StripePortfolio.scrollIntoView({ behavior: 'smooth' });
    }
});


menuBtn.addEventListener('click', ()=> {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen=true;
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen=false;
    }
});

burgerButton.addEventListener('click', (event) =>  {
    if (navList.classList.contains('active')) {
        navList.classList.remove('active')    
    } else {
        navList.classList.add('active')
        console.log('удаляю')
    }
    
});










// Обработчик клика на бургер-кнопку
// burgerButton.addEventListener('click', () => {
//     // Переключаем видимость меню при клике на бургер-кнопку
//     if (navList.className('active') != 'active') {
//         // navList.classList.remove('active')
//         navList.style.display = 'none';
//     } else {
//         navList.style.display = 'flex';
//         navList.classList.add('active')
//         navListContent.style.display = 'flex';
//         navListContent.style.flexDirection = 'column';
//     }
// });




// if (navList.style.display === 'flex') {
//     navList.classList.remove('active')
//     navList.style.display = 'none';