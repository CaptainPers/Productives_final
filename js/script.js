"use strict"

document.addEventListener("click", documentActions);

function documentActions(e) {
    const targetElement = e.target;

    if (targetElement.closest('.icon-menu')) {             /*step 2*/
        document.documentElement.classList.toggle('menu-open');     /*создаем класс menu-open*/
    }

    if (targetElement.closest('[data-goto]')) {
        document.documentElement.classList.contains('menu-open') ?              /*при выборе пункта меню закрывается*/
            document.documentElement.classList.remove('menu-open') : null;      /*при выборе пункта меню закрывается*/
        const goTo = targetElement.closest('[data-goto]').dataset.goto;
        const goToElement = document.querySelector(goTo);
        const headerHeight = document.querySelector('.header').offsetHeight;

        if (goToElement) {
            window.scrollTo({
                top: goToElement.offsetTop - (headerHeight + 15),
                behavior: "smooth"
            });
        }
        e.preventDefault();         /*На этом моменте уже работают ссылки меню*/
    }

        //TAABS
        if (targetElement.closest('.tabs_item')) {
            const tabNavItem = targetElement.closest('.tabs_item');
            if (!tabNavItem.classList.contains('active')) {
                const activeTabNavItem = document.querySelector('.tabs_item.active');
                activeTabNavItem.classList.remove('active');
                tabNavItem.classList.add('active');

                const tabItems = document.querySelectorAll('.tab_1');
                const activeTabItems = document.querySelector('.tab_1.active');

                activeTabItems.classList.remove('active');
                tabItems[getIndex(tabNavItem)].classList.add('active');
            }
        }
        function getIndex(el) {
            return Array.from(el.parentNode.children).indexOf(el);
        }
        //TAABS
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    }
  });

