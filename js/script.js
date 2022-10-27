const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const mobileDropdown = document.querySelector(".mobile-dropdown");
const mobileDropdownContent = document.querySelector(
  ".mobile-dropdown-content"
);
const mobileDropdown2 = document.querySelector(".mobile-dropdown2");
const mobileDropdownContent2 = document.querySelector(
  ".mobile-dropdown-content2"
);

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
  overlay.classList.toggle("overlay");
  // console.log(50);
});

overlay.addEventListener("click", () => {
  nav.classList.remove("open");
});

mobileDropdown.addEventListener("click", () => {
    mobileDropdownContent.style.display = "flex";

});

mobileDropdown2.addEventListener("click", () => {
  mobileDropdownContent2.style.display = "flex";
});
