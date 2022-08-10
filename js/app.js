const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar__list');
const body = document.querySelector('.body');
const links = document.querySelector('.navbar__links__container');

wow = new WOW({
	mobile: false,  // не запускать анимацию на смартфонах
	live: true  // всё время проверять появление новых wow-элементов
});
wow.init();

function slider(){
	burger.addEventListener('click', ()=>{
		burger.classList.toggle('toggle');
		nav.classList.toggle('navbar-active');
		links.classList.toggle('links-active');
		body.classList.toggle('body-active');
	})
}

$(document).ready(function(){
	$(".navbar__list", ".footer__first__container").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1100);
	});
});

$(document).mouseup(function (e) {
    var container = $(".burger");
	var hideDiv = $(".navbar__list");
	var hideLink = $(".navbar__links__container");
	var hideBody = $(".body");
    if (container.has(e.target).length === 0){
        hideDiv.removeClass('navbar-active');
		hideLink.removeClass('links-active');
		hideBody.removeClass('body-active');
		container.removeClass('toggle');
    }
});


slider()