$(document).ready(function(){

	var loginFormCheck = (function(){

		var _form = $('#login-form');
		var _input = _form.find('.input');
		var _email = _form.find('[type="email"]');
		var _password = _form.find('[type="password"]');

		var init = function(){
			_setUpListeners();
		}

		var _setUpListeners = function(){
			_form.on('submit', function(e){
				_validateForm(e);
			});
		}

		var _validateForm = function(e){
			e.preventDefault();

			$.each(_input, function(index, val){
				var input = $(val),
				value = input.val().trim(),
				textError = input.attr('placeholder').toLowerCase(),
				errorMsg = $('<div class="error"><div class="error__title">Введите ' + textError + '</div></div>'),
				errorMsgData = $('<div class="error">' 
					+'<div class="error__title error__title--with-desc">Неверный email или пароль</div>'
					+'<div class="error__desc"><p>Введите верные данные для входа или воспользуйтесь <a href="#">восстановлением пароля, </a>чтобы войти на сайт.</p>'
					+'</div></div>'),
				pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
				emailVal = _email.val().trim(),
				passwordVal = _password.val().trim();

				if (value.length === 0) {
					input.next('.error').slideUp(500, function(){$(this).remove()});
					errorMsg.insertAfter(input).hide().slideDown(500);
				}

				if (input.attr('type') === 'email') {
					if (pattern.test(value)) {
						if (emailVal == 'mail@mail.com' && passwordVal == '123') {
							_form.unbind('submit').submit();
							// console.log('Yeeep');
						} else if (passwordVal.length > 0){
							input.siblings('.error').slideUp(500, function(){$(this).remove()});
							errorMsgData.insertBefore(_form.find('.login-page__form-helpers')).hide().slideDown(500);
						}
					} else if (value.length > 0) {
						input.next('.error').slideUp(500, function(){$(this).remove()});
						errorMsg = $('<div class="error"><div class="error__title">Неверный формат ' + textError + '</div></div>');
						errorMsg.insertAfter(input).hide().slideDown(500);
					}
				} 	

				input.on('focus', function(){
					input.next('.error').slideUp(500, function(){$(this).remove()});
				});
			})
		}

		return { init }
	}());

loginFormCheck.init();

});