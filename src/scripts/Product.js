// This module creates an html representation of a product

const Product = (productObject) => {
    return `
        <section id="product--${productObject.id}" class="product">
            <h2>${productObject.title}</h2>
            <img src="${productObject.image}">
            <div>Description: ${productObject.description}</div>
            <div>Price: $${productObject.price}</div>
            <div>Number in stock: ${productObject.quantity}</div>
            <h4>Reviews:</h4>
        </section>
    `
}


export default Product