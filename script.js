var start = function(option){
	$('#cont').html("");

	var input = prompt('Type an integer between 1 and 128');

	if (input >= 1 && input <= 128){	// Check for non-ridiculous input
		var sqr_size = $('#cont').width()/input - 2;	// The -2 accounts for border size

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
		alert('Plz,Dont Leave.');
	}
}
