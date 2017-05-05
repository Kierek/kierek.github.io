$(document).ready(function(){

			$('.flag').click(function(){

				$('.lang').hide();
				$('.lang.lang-'+$(this).data('lang')).show();

			});

		});
