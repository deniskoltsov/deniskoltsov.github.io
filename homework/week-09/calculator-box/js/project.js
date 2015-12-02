// great job!! only small thing is indentation of the final closing bracket for document ready function should be whole way to left

$(document).ready(function (){

	var total = 0;

	$('#a10').click(addTen)

	function addTen () {
		total += 10
		$('#out').text(total)
	}

	$('#a20').click(addTwenty)

	function addTwenty () {
		total += 20
		$('#out').text(total)
	}

	$('#a30').click(addThirty)

	function addThirty () {
		total += 30
		$('#out').text(total)
	}

	$('#n10').click(subtractTen)

	function subtractTen () {
		total -= 10
		$('#out').text(total)
	}

	$('#n20').click(subtractTwenty)

	function subtractTwenty () {
		total -= 20
		$('#out').text(total)
	}

	$('#n30').click(subtractThirty)

	function subtractThirty () {
		total -= 30
		$('#out').text(total)
	}

	$('#out').click(reset)

	function reset () {
		total = 0
		$('#out').text(total)
	}

	$('#red').click(turnRed)

	function turnRed () {
		$('#out').css('background-color', 'pink')
	}

	$('#blue').click(turnBlue)

	function turnBlue () {
		$('#out').css('background-color', 'blue')
	}


	})