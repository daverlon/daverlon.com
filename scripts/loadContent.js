
var temp = window.location.href.split("/").pop();
if (temp == "") {
  temp = "index.html";
}




$.get("page-content/" + temp, function (data) {

  

  pagename = temp.split(".")[0];

  const content = document.createElement("div");
  content.classList.add("main-content-section");
  content.innerHTML = data;
  $("#content-placeholder").append(content);
});

