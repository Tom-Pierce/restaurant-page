import backgroundImg from "../imgs/background.jpg"
import createHome from "./home";
import { createParagraph, createDiv} from "./tools";

export default function pageLoad() {
    document.body.innerHTML = "";
    document.body.style.backgroundImage = `url(${backgroundImg})`;

    //create the main page layout
    const header = document.createElement("div");
    header.classList.add("header");
    document.body.appendChild(header);
    const main = document.createElement("div");
    main.classList.add("main");
    document.body.appendChild(main);
    const footer = document.createElement("div");
    footer.classList.add("footer");
    document.body.appendChild(footer);
    
    // populate header content
    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Mozzafiato"
    restaurantName.classList.add("restaurant-name")
    header.appendChild(restaurantName);
    
    //create each seperate tab div
    const tabBar = document.createElement("div");
    tabBar.classList.add("tab-bar");
    header.appendChild(tabBar);
    
    tabBar.appendChild(createDiv("Home", "home-tab-selector", "tab-selector", "active"));
    tabBar.appendChild(createDiv("Menu", "menu-tab-selector", "tab-selector"));
    tabBar.appendChild(createDiv("Contact", "contact-tab-selector", "tab-selector"));

    // const homeTab = document.createElement("div");
    // homeTab.classList.add("tab-selector", "active");
    // homeTab.textContent = "Home";
    // tabBar.appendChild(homeTab);
    // homeTab.addEventListener("click", () =>{
    //     if(homeTab.classList.contains("active")) return;
    //     console.log("home");
    //     createHome();
    // });

    // const menuTab = document.createElement("div");
    // menuTab.classList.add("tab-selector");
    // menuTab.textContent = "Menu";
    // tabBar.appendChild(menuTab);
    // menuTab.addEventListener("click", () =>{
    //     if(menuTab.classList.contains("active")) return;
    //     console.log("menu")
    // });


    // const contactTab = document.createElement("div");
    // contactTab.classList.add("tab-selector");
    // contactTab.textContent = "Contact";
    // tabBar.appendChild(contactTab);
    // contactTab.addEventListener("click", () =>{
    //     if(contactTab.classList.contains("active")) return;
    //     console.log("contact")
    // });
    
    // populate footer
    footer.appendChild(createParagraph("Copyright © 2022 Thom"));
}
