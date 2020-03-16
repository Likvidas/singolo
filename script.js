window.addEventListener('DOMContentLoaded', () => {
    /* Header */

    const navMenu = document.querySelector('.nav-list');

    navMenu.addEventListener('click', (event) => {
        navMenu.querySelectorAll('a').forEach((item) => item.classList.remove('active'));
        event.target.classList.add('active');
    });



    /* Slider */

    const btns = document.querySelectorAll('.main__btn');
    const slides = document.querySelector('.slide-2');
    const verticalPhone = document.querySelector('.vertical-iphone');
    const horizontaalPhone = document.querySelector('.horizontaal-iphone');
    const bgBlackVertical = document.querySelector('.bg-black-vertical');
    const bgBlackHorizontal = document.querySelector('.bg-black-horizontal');


    btns.forEach((elem) => {
        elem.addEventListener('click', () => {
            slides.classList.toggle('hidden');
        });
    });

    verticalPhone.addEventListener('click', () => {
        bgBlackVertical.classList.toggle('hidden');
    });

    bgBlackVertical.addEventListener('click', () => {
        bgBlackVertical.classList.toggle('hidden');
    });

    horizontaalPhone.addEventListener('click', () => {
        bgBlackHorizontal.classList.toggle('hidden');
    });

    bgBlackHorizontal.addEventListener('click', () => {
        bgBlackHorizontal.classList.toggle('hidden');
    })



    /* Portfolio */

    const portfolioFiltr = document.querySelector('.portfolio__btn-list');
    const portfolioList = document.querySelector('.portfolio__gallery-list');

    portfolioFiltr.addEventListener('click', (event) => {
        portfolioFiltr.querySelectorAll('li').forEach((item) => item.classList.remove('portfolio__active-btn'));
        event.target.classList.add('portfolio__active-btn');

        if (event.target === document.getElementById('all')) {
            portfolioList.innerHTML = `
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio8.jpg" alt="picture8" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio7.jpg" alt="picture7" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio6.jpg" alt="picture6" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio5.jpg" alt="picture5" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio3.jpg" alt="picture3" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio2.jpg" alt="picture2" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio1.jpg" alt="picture1" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio4.jpg" alt="picture4" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio12.jpg" alt="picture12" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio10.jpg" alt="picture10" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio11.jpg" alt="picture11" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio9.jpg" alt="picture9" class="portfolio__gallery-img"></li>
            `
        } else if (event.target === document.getElementById('web-desing')) {
            portfolioList.innerHTML = `
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio9.jpg" alt="picture9" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio1.jpg" alt="picture1" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio6.jpg" alt="picture6" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio12.jpg" alt="picture12" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio5.jpg" alt="picture5" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio3.jpg" alt="picture3" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio11.jpg" alt="picture11" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio10.jpg" alt="picture10" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio7.jpg" alt="picture7" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio8.jpg" alt="picture8" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio2.jpg" alt="picture2" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio4.jpg" alt="picture4" class="portfolio__gallery-img"></li>
            `
        } else if (event.target === document.getElementById('grafic-desing')) {
            portfolioList.innerHTML = `
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio10.jpg" alt="picture10" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio6.jpg" alt="picture6" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio3.jpg" alt="picture3" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio9.jpg" alt="picture9" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio7.jpg" alt="picture7" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio4.jpg" alt="picture4" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio11.jpg" alt="picture11" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio8.jpg" alt="picture8" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio1.jpg" alt="picture1" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio12.jpg" alt="picture12" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio5.jpg" alt="picture5" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio2.jpg" alt="picture2" class="portfolio__gallery-img"></li>
            `
        } else if (event.target === document.getElementById('artwork')) {
            portfolioList.innerHTML = `
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio12.jpg" alt="picture12" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio11.jpg" alt="picture11" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio10.jpg" alt="picture10" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio9.jpg" alt="picture9" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio8.jpg" alt="picture8" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio7.jpg" alt="picture7" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio6.jpg" alt="picture6" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio5.jpg" alt="picture5" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio4.jpg" alt="picture4" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio3.jpg" alt="picture3" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio2.jpg" alt="picture2" class="portfolio__gallery-img"></li>
            <li class="portfolio__gallery-item"><img src="./assets/img/portfolio1.jpg" alt="picture1" class="portfolio__gallery-img"></li>
            `
        }

    });

    portfolioList.addEventListener('click', (event) => {
        portfolioList.querySelectorAll('img').forEach((item) => {
            item.classList.remove('bordered');
        });
        event.target.classList.add('bordered');
    })


    /* Get a quote */

    const btnSubmit = document.querySelector('.btn-submit');
    const nameInp = document.querySelector('.name-inp');
    const emailInp = document.querySelector('.email-inp');
    const messageBlock = document.querySelector('.modal-block');
    const subjectOut = document.querySelector('.subject-out');
    const subjectInp = document.querySelector('.subject-inp');
    const describe = document.querySelector('.form__text');
    const describeOut = document.querySelector('.describe-out');

    btnSubmit.addEventListener('click', (event) => {
        if (nameInp.value !== '' && emailInp.value !== '') {
            event.preventDefault();
            messageBlock.classList.remove('hidden');
            if (subjectInp.value === '') {
                subjectOut.innerText = 'Без темы';
            } else if (subjectInp.value !== '') {
                subjectOut.innerText += ' ' + subjectInp.value;
            }
            if (describe.value === '') {
                describeOut.innerText = 'Без описания';
            } else if (describe.value !== '') {
                describeOut.innerText += ' ' + describe.value;
            }

        }
    })

    document.querySelector('.modal-block__btn').addEventListener('click', () => {
        document.querySelector('.quote__form').reset();
        messageBlock.classList.add('hidden');
    })

})