import { menuItems } from "./menu-items";
import { createParagraph } from "./tools";

export default function createMenu(){
    const main = document.querySelector(".main");
    main.innerHTML = "";

    const menu = document.createElement("div");
    menu.classList.add("menu");
    main.appendChild(menu);
    console.log(menu);

    menuItems.forEach((dish) => {
        menu.appendChild(createDishDiv(dish.name, dish.ingredients, dish.img));
    });
}

function createDishDiv(name, ingredients, img){
    const dish = document.createElement("div");
    dish.classList.add("dish");
    const dishName = document.createElement("h3");
    dishName.classList.add("dish-name");
    dishName.textContent = name;
    const dishImg = document.createElement("img");
    dishImg.src = img;

    dish.appendChild(dishImg);
    dish.appendChild(dishName);
    dish.appendChild(createParagraph(ingredients));

    return dish;
}