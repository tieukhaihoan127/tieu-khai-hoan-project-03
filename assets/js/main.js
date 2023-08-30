import { drawProdcuts } from "./drawProducts.js";
import { param, buttonSearch, inputSearch, paginationNext, paginationNumber, paginationPrev, filter } from"./variables.js";
import { drawCategory } from "./drawCategory.js";


drawCategory();
drawProdcuts();

const search = () => {
    param.q = inputSearch.value;
    drawProdcuts();
}

buttonSearch.addEventListener("click",function() {
    search();
})

inputSearch.addEventListener("keyup",function(e){
    if(e.key == "Enter"){
        search();
    }
})

paginationNext.addEventListener("click",() => {
    param.page = param.page + 1;
    paginationNumber.innerHTML = param.page;
    drawProdcuts();
})

paginationPrev.addEventListener("click",() => {
    if(param.page > 1){
        param.page = param.page - 1;
        paginationNumber.innerHTML = param.page;
        drawProdcuts();
    }
})

filter.addEventListener("change",(e) =>{
    switch (e.target.value) {
        case "mac-dinh":
            param.sort = ``;
            param.order = ``;
            break;
        case "gia-thap-den-cao":
            param.sort = `price`;
            param.order = `asc`;
            break;
        case "gia-cao-den-thap":
            param.sort = `price`;
            param.order = `desc`;
            break;
        case "giam-gia-nhieu":
            param.sort = `discountPercentage`;
            param.order = `desc`;
            break;
        default:
            break;
    }
    drawProdcuts();
});




