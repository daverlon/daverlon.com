
var temp = window.location.href.split("/").pop();
if (temp == "") {
  temp = "index.html";
}

$.get("templates/content/" + temp, function(data) {
  $("#content-placeholder").replaceWith(data);
});

