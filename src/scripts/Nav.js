// This module creates the nav bar and adds it to the DOM

const navBar = document.querySelector("#navBar")

const Nav = () => {
    navBar.innerHTML = `
        <h1 id="navTitle">BETSY</h1>
        <div id="navLinks">
            <a href="" class="navLink">Categories</a>
            <a href="" class="navLink">Orders</a>
            <a href="" class="navLink">Log Out</a>
        </div>
    `
}


export default Nav