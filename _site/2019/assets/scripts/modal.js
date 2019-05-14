// Truncate descriptions if necessary
/*
$(".card-description").each(function() {
  const limit = 250;
  let text = $(this).text();
  if (text.length > limit) {
    text = text.substring(0, limit) + "...";
    $(this).text(text);
  }
}); */

$(".company-card").on("click", function() {
  $(this)
    .next()
    .fadeIn("fast");
});

$(".close-modal-btn").on("click", function() {
  $(this)
    .closest(".modal-overlay")
    .fadeOut("fast");
});

$(document).keyup(function(e) {
  if (e.keyCode === 27) {
    $(".modal-overlay").fadeOut("fast");
  }
});
