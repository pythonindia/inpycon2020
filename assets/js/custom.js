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
    document.querySelector(".schedule-container.active").classList.remove("active");
    document.querySelector(schedule_id).classList.add("active");
    document.querySelector(".date.active").classList.remove("active")
    e.target.classList.add("active");
  })
})
