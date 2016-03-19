var squareGrid = function(){
    $('#gridContainer').html("");

    var input = prompt("Enter a number between 1 and 100.");

      var squareSize = $('#gridContainer').width()/input - 2;

      for(var i = 1; i <= input; i++){
        for(var j = 1; j <= input; j++){
          $('#gridContainer').append('<div class="square"></div>');
        };
      }
      $('.square').css('width',squareSize);
      $('.square').css('height',squareSize);

      $('.square').mouseenter(function(){
            $(this).addClass('square_change');

      });
}
