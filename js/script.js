const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

});

 document.querySelector('#menu-btn').addEventListener('click', function () {
     document.querySelector('#menu-list').classList.toggle('menu-list-active')
 })

// let btn = document.querySelector('#menu-btn');
// console.log(btn);
// let menu = document.querySelector('#menu-list');
// console.log(menu);
// btn.onclick = function () {
//     menu.classList.toggle('menu-list-active');
// };