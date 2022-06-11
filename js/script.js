// $(document).ready(function() {
//     $("clickable").click(function() {
//       $("#walrus").toggle();
//       $("#walrus-hidden").toggle();
//     });
//   })
$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeOut();
    $("#walrus-hidden").fadeOut();
  });
});