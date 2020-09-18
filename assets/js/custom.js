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


let sponsorLogos = document.getElementsByClassName('sponsor-logo-image')

for(let domElem of sponsorLogos){
      let hoverContentContainer = domElem.parentNode.parentNode.querySelector('.hover-container-content')
      hoverContentContainer.style.display = 'none'
      domElem.addEventListener('click',sponsorLogoClickHandler)
}

function sponsorLogoClickHandler(e){
   let hoverContentContainers = document.getElementsByClassName('hover-container-content');
   console.log(hoverContentContainers)
   for(let domeElem of hoverContentContainers){
     console.log(domeElem)
     domeElem.style.display = 'none'
   }

   let clickedHoverContentContainer = e.target.parentNode.parentNode.querySelector('.hover-container-content')
   clickedHoverContentContainer.style.display = 'block'
}

let hoverContainerContentCloseBtns = document.getElementsByClassName('hover-container-content-close-btn')

for(let domElem of hoverContainerContentCloseBtns){
  domElem.addEventListener('click', function(event){
    console.log(event)
    event.target.parentNode.parentNode.style.display = 'none'
  })
   
}
