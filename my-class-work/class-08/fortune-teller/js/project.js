$(document).ready(function () {

	$('#clickme').click(getFortune)

	function getFortune () {

		// 1. Get your inputs

		var hometown = $('#hometown').val();
		var partner = $('#partner').val();
		var numKids = $('#num-kids').val();
		var jobTitle = $('#job-title').val();
		
		// 2. Run your function logic.

		var fortuneStr = "You will be a " + jobTitle + " living in " 
		+ hometown + " married to " + partner + " with " + numKids + " kids."

		// 3. Output

		$('#output').text(fortuneStr)

	// innerHTML inserts text into "output". It overwrites anything inside resets it

} // end getFortune


})