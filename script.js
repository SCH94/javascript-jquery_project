var strt = function(value){
$('#cont').html("");
var input = prompt('Type Number of squares');

var sqrs = $('#cont').width()/input - 2; 
 
for(var i=1;i<=input,i++){
	for(var j =1;j<=input;j++){
		$('#cont').append("<div class='sqr'></div>");
	}
	$('#cont').append('<div class="nsqr"></div>');
}
$('.sqr').css('width',sqrs);
$('.sqr').css('height',sqrs);

$('.sqr').hover(function(){
	switch(value){
		case 1:
	$(this).addClass('act');
	break;
	}
	});


};
