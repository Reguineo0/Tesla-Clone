const fullpageEl = document.getElementById('fullpage')
const menuBtn = document.querySelector('.menu__btn')
const navigation = document.querySelector('.navigation')
const navCloseBtn = document.querySelector('.navigation__close__btn')
const blurOverlay = document.querySelector('.blur__overlay')
const IS_ACTIVE = 'is--active'

const toggleNavigation = () => {
	navigation.classList.toggle(IS_ACTIVE)
	blurOverlay.classList.toggle(IS_ACTIVE)

}

const CLICK = 'click'

menuBtn.addEventListener(CLICK, toggleNavigation)
navCloseBtn.addEventListener(CLICK, toggleNavigation)
blurOverlay.addEventListener(CLICK, toggleNavigation)

new fullpage('#fullpage', {
	autoScrolling: true,
	scrollBar: false,
})
function toggleMenu() {
	const menu = document.querySelector('.menu__btn');
	if (window.innerWidth < 1200) {
		menu.style.display = 'block';
	} else {
		menu.style.display = 'none';
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const navigation = document.querySelector('.navigation');
	
	function toggleNavigationVisibility() {
		if (window.innerWidth > 1199) {
			navigation.classList.add('hidden');
		} else {
			navigation.classList.remove('hidden');
		}
	}

	// Llamar a la función cuando se carga la página
	toggleNavigationVisibility();

	// Añadir event listener para el cambio de tamaño de la ventana
	window.addEventListener('resize', toggleNavigationVisibility);
});
// Ejecutar la función cuando la ventana cambia de tamaño
window.addEventListener('resize', toggleMenu);

// Ejecutar la función cuando la página se carga
window.addEventListener('load', toggleMenu);
