$(document).ready(function() {
	
	$(".left-panel").customScrollbar({preventDefaultScroll: true});

	
	var inputEmail = $('#email').val();
	var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
	var formLogin = $('.login-page__form');

	formLogin.on('submit', function(event){
		event.preventDefault();
		if( inputEmail == "" || inputEmail !== pattern ){
			$('.error__title').fadeIn();
		}
	});

});