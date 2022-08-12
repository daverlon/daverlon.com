
var temp = window.location.href.split("/").pop();
if (temp == "") {
  temp = "index.html";
}

$.get("page-content/" + temp, function(data) {
  const content = document.createElement("div");
  content.innerHTML = data;
  $("#content-placeholder").append(content);
});

