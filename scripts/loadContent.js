
var temp = window.location.href.split("/").pop();
if (temp == "") {
  temp = "index.html";
}





  $.get("page-content/" + temp, function (data) {
    const content = document.createElement("div");
    content.classList.add("main-content-section");
    content.innerHTML = data;
    $("#content-placeholder").append(content);
  });