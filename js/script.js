window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu');
	menuitem = document.querySelectorAll('.menu_items');
	hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('menu_active');
	});

	menuitem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('menu_active');
		})
	})
})