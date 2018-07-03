$(document).ready(function() {

	var cardTitle = $('.card-post__title');
	var titleLength = 43;
	$.each(cardTitle, function(index, value){
		if ($(this).text().length > titleLength) {
			$(this).text($(this).text().slice(0, titleLength) + ' ...');
		}
	})

});