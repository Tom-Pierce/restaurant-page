import "./styles.css";
import pageLoad from "./page-load.js";
import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

function changeTab(e) {
  if (e.target.classList.contains("active")) return;
  const tabId = e.target.id;

  // remove "active" class from the current tab
  const tabSelectors = document.querySelectorAll(".tab-selector");
  tabSelectors.forEach((tab) => {
    tab.classList.remove("active");
  });
  
  switch (tabId) {
    case "home-tab-selector":
      e.target.classList.add("active");
      createHome();

      break;
    case "menu-tab-selector":
      e.target.classList.add("active");
      createMenu();
      break;
    case "contact-tab-selector":
      e.target.classList.add("active");
      createContact();
      break;
  }
}
pageLoad();
createHome();

(function addClick() {
  const tabSelectors = document.querySelectorAll(".tab-selector");
  tabSelectors.forEach((tab) => {
    tab.addEventListener("click", changeTab);
  });
})();