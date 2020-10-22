let form = document.querySelector('.main-form');
let button = document.querySelector('.page-header__button');
// document.querySelector(".main-form").style.animationPlayState = "play";

button.onclick = function() {
    if (form.className == 'main-form') {
        form.classList.remove('main-form');
        form.classList.add('main-form--open');
    } else {
        form.classList.remove('main-form--open');
        form.classList.add('main-form');
        document.querySelector(".main-form").style.visibility = "visible";
    }
};


