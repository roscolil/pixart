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

// Create 100 div elements. Should this be 10x10 or inline down the page? In which case i would try a nested for loop
  $(document).ready(function () {
      var $newdiv;
      for (var i = 0; i < 100; i++) {
          $newdiv = $('<div class="square" />');
          $('body').append($newdiv);
      }
  });

// Change div colors
  $("body").on("click", function(event) {
    var $newBrushColor = $('input').val();
    var $div = $(event.target).css("background-color", $newBrushColor);
});
