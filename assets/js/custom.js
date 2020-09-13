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

document.querySelectorAll(".date").forEach(function(element) {
  element.addEventListener("click", function(e) {
    var schedule_id = e.target.attributes["data-target"].value;
    document.querySelectorAll(".schedule-container.active").forEach(function(element) {
      element.classList.remove("active");
    });
    document.querySelector(schedule_id).classList.add("active");
    document.querySelectorAll(".date.active").forEach(function(element) {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  })
})
