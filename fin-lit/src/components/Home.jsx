import React from "react";
import '../App';
import { useAppContext } from "./context/appContext";
import { Link } from "react-router-dom";

const Home = () => {
const{userInput, setUserInput, chatbotResponse, handleChatbot, isLoading} = useAppContext();

    return (
        <div className="home-container">
            <div className="header">
                <section>
                    <header>
                        <h1>Financial Literacy</h1>
                        <h2>"An investment in knowledge pays the best interest."</h2>
                    </header>
                </section>
            </div>



            <div className="intro">
                <p>Welcome to our Financial Literacy Resource Hub! Our mission is to provide detailed, easy-to-understand 
                    information on critical financial topics such as bank accounts, credit, taxes, budgeting, student loans and financing,
                     insurance, and investing. We aim to increase the reach of financial literacy, especially
                     Our goal is to empower everyone to take charge of their financial future, providing them with the knowledge to make informed decisions, avoid debt, and manage their finances responsibly. Whether you’re 
                      a beginner or looking to expand your financial understanding, our site is designed to be a comprehensive guide, breaking down complex concepts and making 
                      them accessible to all.</p> 
            </div>

            <div className="title resource"><h1>Resources</h1></div>
            <div className="topics-container">
                <Link to="/bank-accounts"><div className="topic-item item1"><h1>Bank Accounts</h1></div></Link>
                <Link to="/credit"><div className="topic-item item2"><h1>Credit</h1></div></Link>
                <Link to="/taxes"><div className="topic-item item3"><h1>Taxes</h1></div></Link>
                <Link to="/budgeting"><div className="topic-item item4"><h1>Budgeting</h1></div></Link>
                <Link to="/student-loans"><div className="topic-item item5"><h1>Student Loans</h1></div></Link>
                <Link to="/insurance"><div className="topic-item item6"><h1>Insurance</h1></div></Link>
                <Link to="/investing"><div className="topic-item item7"><h1>Investing</h1></div></Link>
            </div>

            <div className="about-section">
                <div className="title"><h1 className="title">Inspiration</h1></div>
                <div><p>This project was also motivated by the clear financial literacy gap seen in different communities. Research has shown that Black and Hispanic
                     individuals, both in their youth and adulthood, tend to have lower financial literacy rates compared to their counterparts.
                      I wanted to create a resource that could help close this gap, providing accessible and comprehensive financial knowledge to those who need it most, 
                      so they can take control of their financial futures and reach their goals.</p></div> 
            </div>

<hr/>

            <div className="chatbot-section">
              <div>  <h3>Ask Our Financial Assistant</h3></div>
             <div className="textarea">   <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ask me anything about financial literacy..."
                    rows="4"
                    cols="50"
                /> </div>
               <div> <button onClick={handleChatbot} disabled={isLoading}>
                    {isLoading ? "Thinking..." : "Ask"}
                </button></div>
                {chatbotResponse && (
                    <div className="chatbot-response">
                        <h4>Chatbot Response:</h4>
                        <p>{chatbotResponse}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
