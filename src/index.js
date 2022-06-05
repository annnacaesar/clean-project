

// const btnOpen = document.querySelector('.js-open-menu');
// const btnClose = document.querySelector('.js-close-menu');
// const menu = document.querySelector('.header__menu');

// btnOpen.addEventListener('click', onOpenMenu);
// btnClose.addEventListener('click', onCloseMenu);

// function onOpenMenu () {
// 	menu.classList.add('is-open');
// }

// function onCloseMenu () {
// 	menu.classList.remove('is-open');
// }

// $(document).ready(function () {
// 	$('.header__burger').click(function (event) {
		
// 	})
// })

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
burger.addEventListener('click', onToggle);

function onToggle () {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	document.body.classList.toggle('lock');
}