
var temp = window.location.href.split("/").pop();
if (temp == "") {
  temp = "index.html";
}

$.get("page-content/" + temp, function(data) {
  $("#content-placeholder").replaceWith(data);
});

