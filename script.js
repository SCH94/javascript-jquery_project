
  var makeGrid = function(){
    $('#Container').html("");

    var input = prompt("choose between 1 and 100 ");

      var Size = $('#Container').width()/input - 2;

      for(var i = 1; i <= input; i++){
        for(var j = 1; j <= input; j++){
          $('#Container').append('<div class="square"></div>');
        };
      }
      $('.square').css('width',Size);
      $('.square').css('height',Size);

      $('.square').mouseenter(function(){
            $(this).addClass('square_c');

      });
}

