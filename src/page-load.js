import backgroundImg from "../imgs/background.jpg"
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

    // populate footer
    footer.appendChild(createParagraph("Copyright © 2022 Thom"));
}
