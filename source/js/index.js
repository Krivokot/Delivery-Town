let form = document.querySelector('.main-form');
let button = document.querySelector('.page-header__button');
let submit = document.querySelector('.main-form-fieldset__item-button');
let order = document.querySelector('.page-header__order');
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
        order.style.visibility = "hidden";
    } else {
        form.classList.remove('main-form--open');
        form.classList.add('main-form');
        form.style.animationFillMode = "forwards";
        form.style.visibility = "visible";
        order.style.visibility = "visible";
    }
};

function disableSubmit() {
    submit.onsubmit = function() {
        submit.disabled=true;
    }
}


function loop() {
    $(button)
        .delay(3000)
        .animate({marginLeft: '+=20px'}, 100)
        .animate({marginRight: '+=40px'}, 100)
        .animate({marginRight: '-=20px'}, 100,
        function () {
            loop();
        })
};

loop();
