$(document).ready(function () {
	$('.grid').masonry(
  		itemSelector: '.grid-item',
  		columnWidth: 358,
	})
	$('.grid').on( 'click', '.grid-item', function() {

  		$('.grid').masonry( 'remove', this )

    	.masonry('layout');
	});
})
