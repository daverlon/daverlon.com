


$.get("templates/head.html", function(data) {
  // console.log($("#head-content")); // should return the div element with ID "head-content"
  $("head").append(data);
  // console.log($("#head-content")); // should return an empty object (if the replacement was successful)
});