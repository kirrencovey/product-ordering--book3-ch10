// This module retrieves product data

const ProductData = () => {
    return fetch("http://localhost:8088/products")
        .then(response => response.json())
}


export default ProductData