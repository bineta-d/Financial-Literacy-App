import React from "react";
import '../App';
import { useAppContext } from "./context/appContext";
import { Link } from "react-router-dom";

const Home = () => {
    const { userInput, setUserInput, chatbotResponse, handleChatbot, isLoading } = useAppContext();

    return (
        <div className="container home-container">
            {/* Header Section */}
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Financial Literacy</h1>
                    <h2>"An investment in knowledge pays the best interest."</h2>
                </div>
            </div>

            {/* Intro Section */}
            <div className="row intro">
                <div className="col-12">
                    <p>Welcome to our Financial Literacy Resource Hub! Our mission is to provide detailed, easy-to-understand
                        information on critical financial topics such as bank accounts, credit, taxes, budgeting, student loans and financing,
                        insurance, and investing. We aim to increase the reach of financial literacy, especially in underrepresented communities.
                        Our goal is to empower everyone to take charge of their financial future by providing the knowledge to make informed decisions,
                        avoid debt, and manage their finances responsibly. Whether you’re a beginner or looking to expand your financial understanding, 
                        our site is designed to be a comprehensive guide, breaking down complex concepts and making them accessible to all.
                    </p>
                </div>
            </div>

            {/* Resources Section */}
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Resources</h1>
                </div>
            </div>

            <div className="row  topics-container ">
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <Link to="/bank-accounts"><div className="topic-item "><h1>Bank Accounts</h1></div></Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <Link to="/credit"><div className="topic-item"><h1>Credit</h1></div></Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <Link to="/taxes"><div className="topic-item"><h1>Taxes</h1></div></Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <Link to="/budgeting"><div className="topic-item"><h1>Budgeting</h1></div></Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <Link to="/student-loans"><div className="topic-item"><h1>Student Loans</h1></div></Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <Link to="/insurance"><div className="topic-item"><h1>Insurance</h1></div></Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <Link to="/investing"><div className="topic-item"><h1>Investing</h1></div></Link>
                </div>
            </div>

            {/* Inspiration Section */}
            <div className="row about-section">
                <div className="col-12 text-center">
                    <h1 className="title">Inspiration</h1>
                </div>
                <div className="col-12">
                    <p>This project was also motivated by the clear financial literacy gap seen in different communities. Research has shown that Black and Hispanic
                        individuals, both in their youth and adulthood, tend to have lower financial literacy rates compared to their counterparts.
                        I wanted to create a resource that could help close this gap, providing accessible and comprehensive financial knowledge to those who need it most, 
                        so they can take control of their financial futures and reach their goals.
                    </p>
                </div>
            </div>

            <hr />

            {/* Chatbot Section */}
            <div className="row chatbot-section">
                <div className="col-12 text-center">
                    <h3>Ask Our Financial Assistant</h3>
                </div>
                <div className="col-12 col-md-8 offset-md-2 d-flex justify-content-center">
                    <textarea
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Ask me anything about financial literacy..."
                        rows="4"
                        className="form-control mb-2"
                    /></div>
                   <div> <button className="btn btn-primary btn-block mt-0" onClick={handleChatbot} disabled={isLoading}>
                        {isLoading ? "Thinking..." : "Ask"}
                    </button>
                    {chatbotResponse && (
                        <div className="chatbot-response mt-3">
                            <h4>Chatbot Response:</h4>
                            <p>{chatbotResponse}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
