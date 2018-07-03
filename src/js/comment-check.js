$(document).ready(function(){
	var commentCheck = (function(){
		var _form = $('#form');
		var _input = _form.find('textarea');
		var _error = _form.find('.error');

		 function init(){
			_setUpListeners();
		}

		function _setUpListeners() {
			_form.on('submit', function(event){
				_formValidate(event)
			})
		}

		function _formValidate(event) {
			if (_input.val().trim() == '') {
				_error.slideDown(500);
				event.preventDefault();
			}

			_input.on('keydown', function(){
				_error.slideUp(500);
			})
		}

		return { init }

	}());

	commentCheck.init();
})