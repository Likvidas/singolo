window.addEventListener('DOMContentLoaded', () => {
    /* Header */

    const navMenu = document.querySelector('.nav-list');
    const links = navMenu.querySelectorAll('a');

    navMenu.addEventListener('click', (event) => {
        links.forEach((item) => item.classList.remove('active'));
        event.target.classList.add('active');
    });

    document.addEventListener('scroll', () => {
        const currentPosition = window.pageYOffset;
        const headerHeight = 95;
        const servicesPosition = document.querySelector(".service").offsetTop - headerHeight;
        const portfolioPosition = document.querySelector(".portfolio").offsetTop - headerHeight;
        const aboutPosition = document.querySelector(".about").offsetTop - headerHeight;
        const contactPosition = document.querySelector(".quote").offsetTop - headerHeight;


        if (currentPosition < servicesPosition) {
            activeLink(0);
        } else if (currentPosition >= servicesPosition && currentPosition < portfolioPosition) {
            activeLink(1);
        } else if (currentPosition >= portfolioPosition && currentPosition < aboutPosition) {
            activeLink(2);
        } else if (currentPosition >= aboutPosition && currentPosition < contactPosition && !scrollEnd()) {
            activeLink(3);
        } else if (currentPosition >= contactPosition || scrollEnd()) {
            activeLink(4);
        }

        function activeLink(i) {
            links.forEach((a) => {
                a.classList.remove('active');
            })
            links[i].classList.add('active');
        };

        function scrollEnd() {
            return window.pageYOffset >= document.documentElement.offsetHeight - innerHeight;
        }

    });





    /* Slider */

    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const slides = document.querySelectorAll('.slide-2');
    const verticalPhone = document.querySelector('.vertical-iphone');
    const horizontaalPhone = document.querySelector('.horizontaal-iphone');
    const bgBlackVertical = document.querySelector('.bg-black-vertical');
    const bgBlackHorizontal = document.querySelector('.bg-black-horizontal');
    const corouseContainer = document.querySelector('.main__content');


    let step = 1;


    // prevBtn.addEventListener('click', () => {

    //     if (step % 2 !== 0) {
    //         slides[0].style.transform = `translateX(-100%)`
    //     } else {
    //         slides[0].style.transform = `translateX(-200%)`;
    //         slides[0].style.visibility = `hidden`;
    //         step = 0;
    //     }
    //     step++;

    // })

    // corouseContainer.style.transform = `translateX(-${size * counter}px)`




    // btns.forEach((elem) => {
    //     elem.addEventListener('click', () => {
    //         slides.classList.toggle('hidden');
    //     });
    // });

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
        portfolioFiltr.querySelectorAll('li').forEach((item) => {
            item.classList.remove('portfolio__active-btn');

        });
        event.target.classList.add('portfolio__active-btn');

        portfolioList.querySelectorAll('li').forEach((element) => {
            element.style.order = Math.floor(((Math.random() * 12) + 1));
        });


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