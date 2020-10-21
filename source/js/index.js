// var button = document.querySelector(".page-header__button");
// var popup = document.querySelector(".main-form");

// button.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     popup.classList.toggle("main-form--open");
//   });

// $('.page-header__button').on('click', function() {
//     $('.main-form').toggleClass('.main-form--open');
// });

let form = document.querySelector('.main-form');
let button = document.querySelector('.page-header__button');

button.onclick = function() {
    if (form) {
        form.classList.remove('main-form');
        form.classList.add('main-form--open');
    }
    // form.classList.remove('main-form');
    // form.classList.add('main-form--open');
    // form.classList.toggle('main-form');
};


