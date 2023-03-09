const toggleBtn = document.getElementById("nav-toggle");
const closeBtn = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    navMenu.classList.add("show_menu");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show_menu");
  });
}

function linkAction() {
  navMenu.classList.remove("show_menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

var typed = new Typed(".sub-span", {
  strings: ["Kingsley ", " a Software Engineer", "a Technical Writer"],

  typeSpeed: 40,
  backSpeed: 60,
  loop: true,
});

$(".backToTop").on("click", function () {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    2000
  );
});

/*==================== Nav background changer  ====================
function scrollHeader() {
  const nav = document.getElementsByClassName("nav");
  //When the scroll is higher than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/* ====================SKILLS ACCORDION =========*/
const skillsHeader = document.querySelectorAll(".skills_header");
const skillsContent = document.getElementsByClassName("skills_content");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    //Set the first index to close the skillsContent
    skillsContent[i].className == "skills_content skills_close";
  }

  //If the skills content is closed...
  if (itemClass === "skills_content skills_close") {
    //Open the new one
    this.parentNode.className = "skills_content skills_open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== Theme Changer  ====================*/
const themeBtn = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

//Previously selected theme
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//We obtain the current selected theme by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

//Validate user choice
if (selectedTheme) {
  //If the validation is fullfilled, we activate dark them or light theme
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeBtn.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

themeBtn.addEventListener("click", () => {
  //Add/ remove dark theme manually
  document.body.classList.toggle(darkTheme);
  themeBtn.classList.toggle(iconTheme);

  //save the theme and icon of the user choice in localstorage
  localStorage.setItem("selectedTheme", getCurrentTheme);
  localStorage.setItem("selectedIcon", getCurrentIcon);
});
