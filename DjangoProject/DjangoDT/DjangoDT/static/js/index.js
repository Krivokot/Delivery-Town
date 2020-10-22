let form = document.querySelector('.main-form');
let button = document.querySelector('.page-header__button');

button.onclick = function() {
    if (form.className == 'main-form') {
        form.classList.remove('main-form');
        form.classList.add('main-form--open');
    } else {
        form.classList.remove('main-form--open');
        form.classList.add('main-form');
    }
};

function disable_button()
{
    document.getElementById('form__submit').disabled = true;
}
