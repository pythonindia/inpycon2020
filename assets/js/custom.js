window.onscroll = function() { toggleSticky() };

var header = document.getElementById("navigation-menu");
var about = document.getElementById("about");
var sticky = header.offsetTop;

function toggleSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    about.classList.add("sticky-enable");
  } else {
    header.classList.remove("sticky");
    about.classList.remove("sticky-enable");
  }
}