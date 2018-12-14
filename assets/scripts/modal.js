$(document).ready(function () {
  $(".company-card").on("click", function () {
      $(this).next().fadeIn("fast");
  });
});