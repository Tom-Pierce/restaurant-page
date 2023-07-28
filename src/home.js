import { createParagraph } from "./tools";
import chefImg from "../imgs/chef.png"

export default function createHome() {
    const main = document.querySelector(".main");
    main.innerHTML = "";
    
    const home = document.createElement("div");
    home.classList.add("home");

    const chefImage = new Image();
    chefImage.src = chefImg;

    home.appendChild(createParagraph("Best Pizza in Ireland"));
    home.appendChild(createParagraph("Made with passion since 1908"));
    home.appendChild(chefImage);
    home.appendChild(createParagraph("Order online or visit us!"));

    main.appendChild(home);

    return home;
}