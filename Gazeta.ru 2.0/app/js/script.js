$(function () {
	$('.btn-touch').on('click', function(){
		$('.float-bar .form-group').slideToggle();
	});
	$('#btn-touch').on('click', function(){
		$('.app .menu-bar').slideToggle();
	});
	$('#btn-mobil').on('click', function(){
		$('.app .mobil-menu').slideToggle();
	});
	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: 160
	});

	// $('.grid').masonry({
	// 	itemSelector: '.grid-item',
	// 	columnWidth: '.grid-sizer',
	// 	percentPosition: true
	// });
});


