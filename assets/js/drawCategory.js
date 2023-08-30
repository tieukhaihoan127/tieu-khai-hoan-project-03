import { fetchApi } from "./fetchApi.js";
import { API_CATEGORY } from "./constants.JS";
import { category, param } from "./variables.js";
import { drawProdcuts } from "./drawProducts.js";

export const drawCategory = () => {
    fetchApi(API_CATEGORY)
    .then(data => {
    const arrayHTML = data.map(item => {
        return `
            <div class="category__item">
             ${item}
            </div>
        `;
    });
    const stringHTML = arrayHTML.join("");
    category.innerHTML = stringHTML;
    const listCategory = document.querySelectorAll("#category .category__item");
    listCategory.forEach(item => {
        item.addEventListener("click",() => {
            param.category = item.innerText;
            drawProdcuts();
        });
    });
})};