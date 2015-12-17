$(document).ready(function () {

	$('.darkgray').click(turnBlue)

	function turnBlue () {
		$('.darkgray').css('background-color', 'darkblue' )
		.css({'height': '500px', 'width': '500px'})
		.text('I am a box')
	}

	$('.lightgray').click(turnRed)

	function turnRed () {
		$('.lightgray').css('background-color', 'darkred' )
		$('.lightgray').css({'height': '500px', 'width': '500px'})
	}

})
