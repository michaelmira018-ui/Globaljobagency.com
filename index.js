function searchJobs() {
  alert("Searching available jobs...");
}

/* TOGGLE MENU */
function toggleMenu() {

  const nav = document.getElementById("navMenu");

  nav.classList.toggle("active");

  /* ADD HISTORY FOR BACK BUTTON */
  if(nav.classList.contains("active")){
    history.pushState({menu:true}, "");
  }
}

/* CLOSE MENU WITH PHONE BACK BUTTON */
window.onpopstate = function () {

  const nav = document.getElementById("navMenu");

  if(nav.classList.contains("active")){
    nav.classList.remove("active");
  }
};

/* CLOSE MENU WHEN SCREEN IS TAPPED */
document.addEventListener("click", function(event){

  const nav = document.getElementById("navMenu");

  const menuIcon = document.querySelector(".menu-icon");

  if(
    !nav.contains(event.target) &&
    !menuIcon.contains(event.target)
  ){
    nav.classList.remove("active");
  }

});
