let navDropDown = document.querySelector(".drop__name");
let dropDownMenu = document.querySelector(".navbar__dropdown");
let downArrow = document.querySelector("ion-icon[name='chevron-down']");
let smScreenMenu = document.querySelector(".navbar__smallScreen");
let navbarMenu = document.querySelector(".navbar__list");
let smScreenMenuIcon = document.querySelector(".navbar__smallScreen ion-icon");

navDropDown.addEventListener("click", () => {
  dropDownMenu.classList.toggle("active");
  downArrow.classList.toggle("active");
});

smScreenMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

if (window.innerWidth <= 785) {
  navDropDown.style.pointerEvents = "none";
} else {
  navDropDown.style.pointerEvents = "all";
}

window.addEventListener("resize", (e) => {
  if (window.innerWidth <= 785) {
    navDropDown.style.pointerEvents = "none";
  } else {
    navDropDown.style.pointerEvents = "all";
  }
});

// ************************** - NAVBAR ENDS - *******************************
