let form = document.querySelector('.main-form');
let button = document.querySelector('.page-header__button');
let submit = document.querySelector('.main-form-fieldset__item-button');
// document.querySelector(".main-form").style.animationPlayState = "play";
if (window.matchMedia('(min-width: 768px)').matches) {
    form.classList.remove('main-form');
    form.classList.add('main-form--open');
    form.style.animationDelay = "1s";
    form.style.animationFillMode = "backwards";
};

button.onclick = function() {
    if (form.className == 'main-form') {
        form.classList.remove('main-form');
        form.classList.add('main-form--open');
    } else {
        form.classList.remove('main-form--open');
        form.classList.add('main-form');
        form.style.animationFillMode = "forwards";
        document.querySelector(".main-form").style.visibility = "visible";
    }
};

function disable_button()
{
    submit.disabled = true;
}
