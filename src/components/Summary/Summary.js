import React from "react";
import "./Summary.styles.scss";

const Summary = () => {
    return (
        <div className="summary-container">
            <div className="char-container">
                <h3>Char 1</h3>
                <p>FirstName: John</p>
                <p>Lastname: Doe</p>
            </div>

            <div className="char-container">
                <h3>Char 2</h3>
                <p>FirstName: Jordan</p>
                <p>Lastname: Peterson</p>
            </div>

            <div className="char-container">
                <h3>Char 3</h3>
                <p>FirstName: George</p>
                <p>Lastname: Lyles</p>
            </div>
        </div>
    );
};

export default Summary;
