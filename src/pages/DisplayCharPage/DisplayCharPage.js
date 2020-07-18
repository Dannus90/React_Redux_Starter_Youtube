import React from "react";
import "./DisplayCharPage.styles.scss";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";

const DisplayCharPage = () => {
    return (
        <Layout>
        <div className="char-page-container">
            <h2>Char Page</h2>
            <h3>Char 1</h3>
            <p>Firstname: John</p>
            <p>Lastname: Doe</p>
            <h3>Char 2</h3>
            <p>Firstname: Jordan</p>
            <p>Lastname: Peterson</p>
            <h3>Char 3</h3>
            <p>Firstname: George</p>
            <p>Lastname: Lyles</p>

            <Link to="/" className="navigation-link">BACK TO HOMEPAGE</Link>
        </div>
        </Layout>
    );
};

export default DisplayCharPage;
