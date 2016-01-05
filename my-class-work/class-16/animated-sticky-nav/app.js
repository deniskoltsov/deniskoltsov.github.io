$(document).ready(function () {

	$(window).scroll(function () {

		// console.log($(this).scrollTop())

		if ($(this).scrollTop() > 100) {
			$('header').addClass('sticky')
		} else {
			$('header').removeClass('sticky')
		}
	})

})
