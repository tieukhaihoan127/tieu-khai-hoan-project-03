export let param = {
    q: "" ,
    page: 1,
    limit: 8,
    category: "",
    sort:"",
    order:""
};
export const category = document.querySelector("#category");
export const inputSearch = document.querySelector("#search input");
export const buttonSearch = document.querySelector("#search button");
export const product = document.querySelector("#product");
export const paginationPrev = document.querySelector("#paginationPrev");
export const paginationNumber = document.querySelector("#paginationNumber");
export const paginationNext = document.querySelector("#paginationNext");
export const filter = document.querySelector("#filter");