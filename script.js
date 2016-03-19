$(document).ready(function(){
var start = function(option){
	$('#cont').html("");

	var input = prompt('Type square 1 and 100');

	if (input >= 1 && input <= 100){	// Check validity of input
		var sqr_size = $('#cont').width()/input - 2;	

		for(var i = 1; i <= input; i++){
			for(var j = 1; j <= input; j++){
				$('#cont').append('<div class="sqr"></div>');
			}
			$('#cont').append('<div class="nsqr"></div>');
		}
		$('.sqr').css('width',sqr_size);
		$('.sqr').css('height',sqr_size);

		$('.sqr').hover(function(){
			switch(option){
				case 1:
					$(this).addClass('act');
					break;
				case 2:
					$(this).addClass('act2');
					}
					break;
			
			}
		});
	}
	else{
		window.alert('Plz,Dont Leave.');
	}
}
});
