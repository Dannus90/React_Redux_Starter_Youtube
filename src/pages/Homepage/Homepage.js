import React from "react";
import Layout from "../../components/Layout/Layout";
import SummaryContainer from "../../components/Summary/Summary";
import "./Homepage.styles.scss";

const Homepage = () => {
    return (
        <Layout>
            <div className="homepage-wrapper">
                <form>
                    <div className="forms-container">
                        <div className="single-form-container">
                            <h2>Character 1</h2>
                            <label htmlFor="first-char-name">Firstname</label>
                            <input
                                type="text"
                                placeholder="First name"
                                name="first-char-name"
                            />
                            <label htmlFor="first-char-lastname">
                                Lastname
                            </label>
                            <input
                                type="text"
                                placeholder="Last name"
                                name="first-char-lastname"
                            />
                        </div>
                        <div className="single-form-container">
                            <h2>Character 2</h2>
                            <label htmlFor="second-char-name">Firstname</label>
                            <input
                                type="text"
                                placeholder="First name"
                                name="second-char-name"
                            />
                            <label htmlFor="second-char-lastname">
                                Lastname
                            </label>
                            <input
                                type="text"
                                placeholder="Last name"
                                name="second-char-lastname"
                            />
                        </div>
                        <div className="single-form-container">
                            <h2>Character 3</h2>
                            <label htmlFor="second-char-name">Firstname</label>
                            <input
                                type="text"
                                placeholder="First name"
                                name="second-char-name"
                            />
                            <label htmlFor="second-char-lastname">
                                Lastname
                            </label>
                            <input
                                type="text"
                                placeholder="Last name"
                                name="second-char-lastname"
                            />
                        </div>
                    </div>
                    <button type="submit" className="submit-button">
                        Submit To View Character Page
                    </button>
                </form>
                <SummaryContainer />
            </div>
        </Layout>
    );
};

export default Homepage;
