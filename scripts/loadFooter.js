

$.get("templates/footer.html", function(data) {
  $("#footer-placeholder").replaceWith(data);
});