import backgroundImg from "../imgs/background.jpg"
import chefImg from "../imgs/chef.png"
import { createParagraph } from "./tools";

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

    let homeBar = document.createElement("div");
    homeBar.classList.add("tab-selector", "active");
    homeBar.textContent = "Home"
    tabBar.appendChild(homeBar);

    let menuBar = document.createElement("div");
    menuBar.classList.add("tab-selector");
    menuBar.textContent = "Menu"
    tabBar.appendChild(menuBar);

    let contactBar = document.createElement("div");
    contactBar.classList.add("tab-selector");
    contactBar.textContent = "Contact"
    tabBar.appendChild(contactBar);

    //populate main content
    const home = document.createElement("div");
    home.classList.add("home");
    main.appendChild(home);

    const chefImage = new Image();
    chefImage.src = chefImg;

    home.appendChild(createParagraph("Best Pizza in Ireland"));
    home.appendChild(createParagraph("Made with passion since 1908"));
    home.appendChild(chefImage);
    home.appendChild(createParagraph("Order online or visit us!"));

    // populate footer
    footer.appendChild(createParagraph("Copyright © 2022 Thom"));
}
