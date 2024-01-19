"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const hambIcon = document.querySelector(".hamburger i");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("show");
    hambIcon.classList.toggle("fa-bars");
    hambIcon.classList.toggle("fa-xmark");
  };

  hamburgerButton.addEventListener("click", toggleMenu);

  mobileMenu.addEventListener("click", (e) => {
    if (e.target.closest(".mobile-menu")) {
      toggleMenu();
    }
  });

  // Reset menu state when the DOM is loaded
  window.addEventListener("load", () => {
    mobileMenu.classList.remove("show");
    hambIcon.classList.remove("fa-xmark");
    hambIcon.classList.add("fa-bars");
  });
});

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// scrollReveal

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
};

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

// darkmode

const switchTheme = document.querySelector("#switch");

switchTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
