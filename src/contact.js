import { createDiv, createParagraph } from "./tools";
import mapImg from "../imgs/map.png"

export default function createContact(){
    const main = document.querySelector(".main");
    main.innerHTML = "";

    const contactDetails = createDiv("", "", "contact-details");
    main.appendChild(contactDetails);

    contactDetails.appendChild(createParagraph("📞 01 415 3100"));
    contactDetails.appendChild(createParagraph("📍 Hopland 53, 2000 Antwerpen, Belgium"));
    
    const map = new Image();
    map.src = mapImg;
    contactDetails.appendChild(map);
}