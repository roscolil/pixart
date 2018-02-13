$("button").on("click", function() {
  var $brushBox = $(".brush-box");
  var $newBrushColor = $('input').val();

  $brushBox.css("background-color", $newBrushColor);
});
