(function($) {
	$(document).on('click', '[data-scroll-to]', function (e) {
		e.preventDefault();

		const id = $(this).data('scroll-to');
		const $target = $('#' + id);

		if (!$target.length) return;

		// --- НОВА ЛОГІКА ДЛЯ МОБІЛЬНОГО МЕНЮ ---
		const $mobileMenu = $('#mobile-menu');
		const $dashboardMenu = $('#dashboard-options-menu');
		const $shadowFilm = $('.shadow-film');

		// Якщо мобільне меню відкрите, закриваємо його
		if ($mobileMenu.hasClass('open')) {
			$mobileMenu.removeClass('open').addClass('closed');
			$shadowFilm.removeClass('open').addClass('closed');
		}

		// Якщо дашборд меню відкрите (на всяк випадок)
		if ($dashboardMenu.hasClass('open')) {
			$dashboardMenu.removeClass('open').addClass('closed');
			$shadowFilm.removeClass('open').addClass('closed');
		}

		$('html, body').animate({
			scrollTop: $target.offset().top
		}, 600);
	});
})(jQuery);



// кнопка scrollBtn
const scrollBtn = document.getElementById("scrollTopBtn");
// показати кнопку при прокрутці
window.addEventListener("scroll", () => {
	if (window.scrollY > 200) { // після 200px прокрутки
		scrollBtn.classList.add("show");
	} else {
		scrollBtn.classList.remove("show");
	}
});
// плавний скролл до верху
scrollBtn.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});
