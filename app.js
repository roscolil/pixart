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
