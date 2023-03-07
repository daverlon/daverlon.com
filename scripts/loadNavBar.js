
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



// darkmode css element
var darkcss = document.createElement("link");
darkcss.setAttribute("rel", "stylesheet");
darkcss.setAttribute("type", "text/css");
darkcss.setAttribute("href", "styles/darkmode.css");

var lightcss = document.createElement("link");
lightcss.setAttribute("rel", "stylesheet");
lightcss.setAttribute("type", "text/css");
lightcss.setAttribute("href", "styles/lightmode.css");

// document.head.appendChild(darkcss);

let toggleButton = $("#darkmode-toggle-button");
let nav = $("#mynav");

// dark mode toggle button
$("#darkmode-toggle-button").click(function() {
  event.preventDefault();

    // dark mode already enabled
    let isDarkModeEnabled = localStorage.getItem('isDarkModeEnabled');
    if (isDarkModeEnabled) {
      enableLightMode();
    }
    // dark mode not already enabled (the element doesnt exist)
    else if (!isDarkModeEnabled) {
      // console.log("Enabling dark mode.");
      enableDarkMode();
    }
});


function enableDarkMode() {
  localStorage.setItem('isDarkModeEnabled', true);
  lightcss.remove();
  document.head.appendChild(darkcss);
  // toggleButton.src = "images/moon-dark.png";
  $('#darkmode-toggle-button').attr('src', 'images/moon-light.png');
  nav.removeClass("navbar-light");
  nav.addClass("navbar-dark");
  $('#github-logo-footer').attr('src', 'images/github-mark-white.png');
}

function enableLightMode() {
  console.log("Disabling dark mode.");
  localStorage.removeItem('isDarkModeEnabled');
  darkcss.remove(); 
  document.head.append(lightcss);
  $('#darkmode-toggle-button').attr('src', 'images/moon-dark.png');
  nav.removeClass("navbar-dark");
  nav.addClass("navbar-light");
  $('#github-logo-footer').attr('src', 'images/github-mark.png');
}


// on window loaded
window.addEventListener('load', function () {
  console.log(temp);
  var navname = "nav-" + temp.split(".")[0];
  //if (navname == "nav-index") return;
  console.log("Name: " + navname);
  var element = document.getElementById(navname);
  console.log(element);
  element.classList.add("active");

  let isDarkModeEnabled = localStorage.getItem('isDarkModeEnabled');
  if (isDarkModeEnabled) {
    enableDarkMode(); 
  }
  else {
    enableLightMode();
  }
  
    $('#top-logo').attr('src', 'images/fantano-icon.png');
});



jQuery.ajaxSetup({async:true});
