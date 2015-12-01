document.getElementById('click-me').onclick = calculateLifetimeDrinks;

function calculateLifetimeDrinks () {

	// console.log ('you are cool')
	
	var currentAge = document.getElementById('age').value;
	var maxAge = document.getElementById('max-age').value;
	var favDrink = document.getElementById('item').value;
	var numPerDay = document.getElementById('num-per-day').value;

	// console.log(currentAge, maxAge, favDrink, numPerDay);

	var lifeTimeDrinks = (maxAge - currentAge) * 365 * numPerDay;

	// console.log(lifeTimeDrinks);	

	document.getElementById('solution').innerHTML = lifeTimeDrinks;
	document.getElementById('drink').innerHTML = favDrink;


}