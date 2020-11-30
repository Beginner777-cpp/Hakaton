  
/*================================= burger ======================================*/
var burger_icon = document.querySelector('.header_burger');
var header_list = document.querySelectorAll('.header_list li');
var header__content_top = document.querySelector('.header_bottom');
burger_icon.addEventListener('click', function () {
    if (!burger_icon.classList.contains('clicked')) {
        burger_icon.classList.add('clicked');

    }
    else {
        burger_icon.classList.remove('clicked');
    }

    if (burger_icon.classList.contains('clicked')) {
        header__content_top.classList.add('active');
    }
    else {
        header__content_top.classList.remove('active');
    }
})

/*================================= burger ======================================*/

const click_icon = document.querySelector('.click_icon');
const header_clickMark_text = document.querySelector('.header_clickMark_text');
const header_top_text = document.querySelector('.header_top_text');
click_icon.addEventListener('click',()=>{
    click_icon.classList.toggle('clicked');

})