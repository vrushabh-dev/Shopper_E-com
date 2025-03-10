import React from "react";
import "./Navbar.css"
import logo from '../Assets/logo.png'
// import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <p>SHOPPER</p>
                </div>
                <ul className="nav-menu">
                    <li>Shop</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;