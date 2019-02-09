// This module adds html representations of each product to the DOM

import ProductData from "./ProductData"
import Product from "./Product"
import ReviewList from "./ReviewList"


const productListEl = document.querySelector("#productList")

const ProductList = () => {
    ProductData()
        .then(productArray => {
            let htmlProductArray = productArray.map(currentProductObject => {
                return Product(currentProductObject)
            })
            return htmlProductArray
        })
        .then(htmlProductArray => {
            htmlProductArray.forEach(element => {
                productListEl.innerHTML += element
            });
        })
        .then(() => {
            ReviewList()
        })

}


export default ProductList