/**
 * Мобрільна навігація - я створюю власний JavaScript для мобільної навігації.
 * Ця функція змінюватиме висоту секції мобільних навігаційних посилань, коли
 * буде натиснуто іконку гамбургера, з допомогою анімацій CSS для плавного переходу.
 */
document.getElementById('menu-icon').addEventListener('click', function () {
	// Отримуємо мобільні навігаційні посилання та іконку з HTML DOM
	const navLinks = document.getElementById('mobile-nav-links');
	const icon = document.getElementById('menu-icon').querySelector('i');

	// Якщо висота мобільних навігаційних посилань дорівнює 0px або не встановлена, то встановлюємо її рівною прокручуваній висоті посилань
	if (navLinks.style.height === '0px' || !navLinks.style.height) {
		// Встановлюємо висоту мобільних навігаційних посилань рівною прокручуваній висоті, щоб інші елементи не були перекриті
		navLinks.style.height = navLinks.scrollHeight + 'px';
		// Змінюємо іконку з гамбургера на іконку закриття
		icon.classList.remove('fa-bars');
		icon.classList.add('fa-times', 'icon-toggle');
	} else {
		// Якщо висота мобільних навігаційних посилань не дорівнює 0px, то встановлюємо її рівною 0px для закриття посилань
		navLinks.style.height = '0px';
		// Змінюємо іконку з закриття на іконку гамбургера
		icon.classList.remove('fa-times');
		icon.classList.add('fa-bars', 'icon-toggle');
	}
});
