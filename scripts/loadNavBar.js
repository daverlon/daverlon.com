
jQuery.ajaxSetup({ async: false });

var temp = window.location.href.split("/").pop().split(".")[0];
if (temp == "") {
  temp = "index";
}


$.get("templates/navbar.html", function (data) {
  $("#navbar-placeholder").replaceWith(data);
});

//console.log(temp);

// els = document.getElementsByClassName("nav-link");
// for (var i = 0; i < els.length; i++) {
//   const a = els[i].textContent.toLower();
//   //console.log(a);
// }




window.addEventListener('load', function () {
  console.log(temp);
  var navname = "nav-" + temp.split(".")[0];
  if (navname == "nav-index") return;
  console.log("Name: " + navname);
  var element = document.getElementById(navname);
  console.log(element);
  element.classList.add("active");
});



jQuery.ajaxSetup({async:true});