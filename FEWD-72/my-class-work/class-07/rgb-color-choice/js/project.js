document.getElementById('color-button').onclick = changeColor;

function changeColor () {
	var red = document.getElementById('red').value;
	var green = document.getElementById('green').value;
	var blue = document.getElementById('blue').value;

	var rgbString = 'rgb(' + red + ',' + green + ',' + blue + ')';

	console.log (rgbString);

	document.getElementById('colorful-text').innerHTML = rgbString;
	document.body.style.backgroundColor = rgbString;

}

