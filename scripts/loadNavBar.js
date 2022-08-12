
$.get("templates/navbar.html", function(data) {
  $("#navbar-placeholder").replaceWith(data);
});
