
$.get("templates/navbar.html", function(data) {
  $("#navbar-placeholder").replaceWith(data);
});

var temp = window.location.href.split("/").pop().split(".")[0];
if (temp == "") {
  temp = "index";
}
console.log(temp);

els = document.getElementsByClassName("nav-link");
for (var i = 0; i < els.length; i++) {
  const a = els[i].textContent.toLower();
  console.log(a);
}