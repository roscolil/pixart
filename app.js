// Event listener for button click event
$("button").on("click", function() {
  var $brushBox = $(".brush-box");
  var $newBrushColor = $('input').val();
  $brushBox.css("background-color", $newBrushColor);
});

// Event listener for input box keypress event
$("input").keypress(function() {
  var $brushBox = $(".brush-box");
  var $newBrushColor = $('input').val();
  $brushBox.css("background-color", $newBrushColor);
  });

  $(document).ready(function () {
      var $newdiv;
      for (var i = 0; i < 100; i++) {
          $newdiv = $('<div class="square" />');
          $('body').append($newdiv);
      }
  });
