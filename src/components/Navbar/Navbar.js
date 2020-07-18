import React from "react";
import "./Navbar.styles.scss";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <h1>Redux-In-React</h1>
            <div className="dropdown">
                <p>Click to View Characters</p>
                <div className="char-display">
                    <h3>Char 1</h3>
                    <p>Firstname: John</p>
                    <p>Lastname: Doe</p>
                    <h3>Char 2</h3>
                    <p>Firstname: Jordan</p>
                    <p>Lastname: Peterson</p>
                    <h3>Char 3</h3>
                    <p>Firstname: George</p>
                    <p>Lastname: Lyles</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
