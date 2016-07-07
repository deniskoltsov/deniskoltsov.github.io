$(document).ready(function (){

	var total = 0;

	$('.math div').click(function(){
		var num = $(this).text()
		num = parseInt(num)
		total = total + num
		$('#out').html(total);
	})

	$('#out').click(reset)

	function reset () {
		total = 0
		$('#out').text(total)
		$('#out').css('background-color', 'white')
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