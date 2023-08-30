import { fetchApi } from "./fetchApi.js";
import { paginationNext, param } from"./variables.js";
import { product } from "./variables.js";
import { API__PRODUCTS } from "./constants.js";
export const drawProdcuts = () => {
    let category = "";
    if(param.category != ""){
        category = `&category=${param.category}`;
    }
    const api = `${API__PRODUCTS}?q=${param.q}&_page=${param.page}&_limit=${param.limit}&_sort=${param.sort}&_order=${param.order}${category}`;
    fetchApi(api)
    .then(data => {
    const arrayHTML = data.map(item => {
        return `
        <div class="product__item">
        <div class="product__image">
            <img src="${item.thumbnail}" alt="${item.title}">
            <div class="product__percent">
            ${item.discountPercentage}%
            </div>
        </div>
    <div class="product__content">
        <div class="product_title">${item.title}</div>
        <div class="product__meta">
            <div class="product__price">
            ${item.price}$
            </div>
            <div class="product__stock">
                Còn lại: ${item.stock} sp
            </div>
        </div>
    </div>
    </div>
        `;
    });
    const stringHTML = arrayHTML.join("");
    product.innerHTML = stringHTML;

    if(data.length < param.limit){
        paginationNext.style.display = "none";
    }
    else{
        paginationNext.style.display = "inline-block";
    }
})};