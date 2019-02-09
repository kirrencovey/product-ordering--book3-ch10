// Practice: Product Ordering
// Your task is to simulate a product listing page like you would find on Etsy, Amazon, or Ebay. This application should implement the following features.

// 1. Display an individual product component. Each product should have a title, short description, price, quantity, and an image.
// 2. Display the application information in a navigation bar at the top of the page.
//      i. The name of the company - Betsy
//      ii. Three links: Categories, Orders, and Log Out (_these links won't actually do anything, you're just practicing making the navigation bar a component)
// 3. Display a review list component that contains a maximum of 3 product review components beneath a product. You can use hipster ipsum for the reviews themselves.

// Technical Requirements
// 1. While you are developing, make sure Grunt is verifying your JavaScript syntax every time you save a file.
// 2. Grunt should be compiling your modules each time you save a JavaScript file.
// 3. Grunt should be minifying your code each time you save a JavaScript file.

import Nav from "./Nav"
import ProductList from "./ProductList"


ProductList()