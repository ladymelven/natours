const toggleNavBtn = document.querySelector(".toggle-btn");
const navigation = document.querySelector("nav");
const navLink = document.querySelectorAll("nav a");
const popup = document.getElementById("popup");
const popupContainer = document.querySelector(".popup__container");
const popupClose = document.querySelector(".popup__close");

function toggleNavHandler() {
  navigation.classList.remove("nav_folded");
  if (navigation.classList.contains("nav_visible")) {
    navigation.classList.add("nav_folded");
  }
  navigation.classList.toggle("nav_visible");
  toggleNavBtn.classList.toggle("toggle-btn_active");
  toggleNavBtn.classList.toggle("toggle-btn_inactive");
}

toggleNavBtn.addEventListener("click", toggleNavHandler);
navLink.forEach(link =>
  link.addEventListener("click", () =>
    navigation.classList.remove("nav_visible")
  )
);

popup.addEventListener("click", event => {
  if (event.target === popupContainer) {
    return;
  }
  popupClose.click();
});
