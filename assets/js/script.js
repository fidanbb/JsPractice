"use strict";

let currencyItems = document.querySelector(".currency-items");
let currency = document.querySelector(".currency");
let langItems = document.querySelector(".lang-items");
let lang = document.querySelector(".lang");
let body = document.querySelector("body");
let searchInput = document.querySelector(".search-modal");
let openSearchInput = document.querySelector(".open-search");
let openLoginModal = document.querySelector(".open-login-modal");
let loginModal = document.querySelector(".user-login");
let openCartSidebar = document.querySelector(".open-cart-sidebar");
let closeCartSidebar = document.querySelector(".cart-closer i");
let cartSidebar = document.querySelector(".cart-sidebar");
let cartOverlay = document.querySelector(".cart-overlay");
let openCosmeticProducts = document.querySelector(".cosmetic-open");
let cosmeticProducts = document.querySelector(".cosmetic-products");
let openCategory = document.querySelector(".category-open");
let category = document.querySelector(".category");
let openIncludePages = document.querySelector(".include-pages-open");
let includePages = document.querySelector(".include-pages");
let sliderAreas = document.querySelectorAll("#slider-area .images img");
let rightIcon = document.querySelector(
  "#slider-area .slider .icons i:nth-child(2)"
);
let leftIcon = document.querySelector(
  "#slider-area .slider .icons i:nth-child(1)"
);

currency.addEventListener("click", function (e) {
  currencyItems.classList.toggle("transform");

  if (langItems.classList.contains("transform")) {
    langItems.classList.remove("transform");
  }
});

lang.addEventListener("click", function (e) {
  langItems.classList.toggle("transform");
  if (currencyItems.classList.contains("transform")) {
    currencyItems.classList.remove("transform");
  }
});

openSearchInput.addEventListener("click", function () {
  searchInput.classList.toggle("transform");
});

openLoginModal.addEventListener("click", function () {
  loginModal.classList.toggle("transform");
});

openCartSidebar.addEventListener("click", function () {
  cartSidebar.classList.remove("transform-sidebar");
  cartOverlay.classList.remove("d-none");
});

closeCartSidebar.addEventListener("click", function () {
  cartSidebar.classList.add("transform-sidebar");
  cartOverlay.classList.add("d-none");
});

openCosmeticProducts.addEventListener("mouseover", function () {
  cosmeticProducts.classList.add("transform");
});

openCosmeticProducts.addEventListener("mouseout", function () {
  cosmeticProducts.classList.remove("transform");
});

openCategory.addEventListener("mouseover", function () {
  category.classList.add("transform");
});

openCategory.addEventListener("mouseout", function () {
  category.classList.remove("transform");
});

openIncludePages.addEventListener("mouseover", function () {
  includePages.classList.add("transform");
});

openIncludePages.addEventListener("mouseout", function () {
  includePages.classList.remove("transform");
});

rightIcon.addEventListener("click", rightSlider);
leftIcon.addEventListener("click", leftSlider);

function rightSlider() {
  let activeSlider = document.querySelector(".active-slider");
  let activeSliderContent = document.querySelector(".active-slider-text");
  if (
    activeSlider.nextElementSibling != null &&
    activeSliderContent.nextElementSibling != null
  ) {
    activeSlider.classList.remove("active-slider");
    activeSlider.nextElementSibling.classList.add("active-slider");
    activeSliderContent.classList.remove("active-slider-text");
    activeSliderContent.nextElementSibling.classList.add("active-slider-text");
  } else {
    activeSlider.classList.remove("active-slider");
    activeSlider.parentNode.firstElementChild.classList.add("active-slider");
    activeSliderContent.classList.remove("active-slider-text");
    activeSliderContent.parentNode.firstElementChild.classList.add(
      "active-slider-text"
    );
  }
}

function leftSlider() {
  let activeSlider = document.querySelector(".active-slider");
  let activeSliderContent = document.querySelector(".active-slider-text");

  if (
    activeSlider.previousElementSibling != null &&
    activeSliderContent.previousElementSibling != null
  ) {
    activeSlider.classList.remove("active-slider");
    activeSlider.previousElementSibling.classList.add("active-slider");
    activeSliderContent.classList.remove("active-slider-text");
    activeSliderContent.previousElementSibling.classList.add(
      "active-slider-text"
    );
  } else {
    activeSlider.classList.remove("active-slider");
    activeSlider.parentNode.lastElementChild.classList.add("active-slider");
    activeSliderContent.classList.remove("active-slider-text");
    activeSliderContent.parentNode.lastElementChild.classList.add(
      "active-slider-text"
    );
  }
}

setInterval(() => {
  rightSlider();
}, 5000);
