var squareGrid = function() {
    $('#gridContainer').html("");

    var input = prompt("Enter a number between 1 and 100.");
    var color = prompt("Enter a  Color i.e red,blue,black,yellow");
    var clr = color.toLowerCase();

      var squareSize = $('#gridContainer').width()/input - 2;

      for (var i = 1; i <= input; i++) {
        for (var j = 1; j <= input; j++) {
          $('#gridContainer').append('<div class="square"></div>');
        };
      }
      $('.square').css('width',squareSize);
      $('.square').css('height',squareSize);

      $('.square').mouseenter(function(){
         if (clr==="black") {
          $(this).addClass('black');
          }
          else if (clr==="red") {
          $(this).addClass('red');
          }
          else if (clr==="blue") {
          $(this).addClass('blue');
          }
          else if (clr==="yellow") {
          $(this).addClass('yellow');
          }
      });
}

