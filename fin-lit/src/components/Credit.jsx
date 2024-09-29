import React from "react";
import '../App';
import { Link } from "react-router-dom";
import { AppContextProvider, VideoList } from "./context/appContext";

const Credit = () => {
    return (
        <AppContextProvider searchTerm="credit for beginners">
            <div className="topic-container"> 
                <div className="topic-header">
                    <h1 className="topic-title">Credit Cards and Building Credit</h1>
                    <div className="topic-description">
                        <div> 
                            <p>
                                Understanding credit cards and how to build credit is essential for achieving financial independence. Credit cards can provide a convenient way to make purchases, but they also come with responsibilities. Using credit wisely can help you establish a positive credit history, which is crucial for obtaining loans, mortgages, and favorable interest rates. It's important to know how to manage credit cards effectively—making timely payments, keeping balances low, and understanding the terms of your credit agreements.
                                Here are some trusted resources to help you get started:
                                <ul>
                                    <li><a href="https://www.consumerfinance.gov/learnmore/" target="_blank">Consumer Financial Protection Bureau</a></li>
                                    <li><a href="https://www.myfico.com" target="_blank">myFICO</a></li>
                                    <li><a href="https://www.creditkarma.com" target="_blank">Credit Karma</a></li>
                                </ul>
                            </p>
                        </div>
                        <div className="topic-img7"></div>
                    </div>
                </div> 

                <div className="middle-section">
                    <div className="resources">
                        <h1 className="title">Resources</h1>
                        <div className="resource-container">
                            <div className="resource-list">
                                <h3>Beginner-Friendly Credit Card Resources</h3>
                                <ul> 
                                    <li className="resource-item">
                                        <a href="https://www.investopedia.com/terms/c/creditcard.asp" target="_blank">Investopedia: Credit Card Basics</a>
                                        <p>A comprehensive overview of how credit cards work, including terms and benefits.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.nerdwallet.com/article/credit-cards/how-to-use-a-credit-card" target="_blank">NerdWallet: How to Use a Credit Card</a>
                                        <p>Tips on using credit cards effectively and building your credit score.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.bankrate.com/finance/credit-cards/how-to-build-credit-with-a-credit-card.aspx" target="_blank">Bankrate: Building Credit with a Credit Card</a>
                                        <p>Step-by-step guidance on using credit cards to establish and improve your credit.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.creditcards.com/credit-card-news/how-to-build-credit-quickly/" target="_blank">CreditCards.com: How to Build Credit Quickly</a>
                                        <p>Strategies to quickly improve your credit score using credit cards.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.experian.com/blogs/news/2020/09/credit-card-tips-to-build-credit" target="_blank">Experian: Credit Card Tips</a>
                                        <p>Useful tips for using credit cards to build and maintain good credit.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="resource-right">
                                <h1>Glossary</h1>
                                <ul>
                                    <li><strong>Credit Score:</strong> A numerical representation of a person's creditworthiness, based on credit history.</li>
                                    <li><strong>Credit Limit:</strong> The maximum amount of credit that a lender extends to a borrower.</li>
                                    <li><strong>APR (Annual Percentage Rate):</strong> The yearly interest rate charged on borrowed money.</li>
                                    <li><strong>Credit Utilization Ratio:</strong> The percentage of available credit that is being used; a key factor in credit scoring.</li>
                                    <li><strong>Payment History:</strong> A record of your payments on credit accounts, which is critical for credit scoring.</li>
                                    <li><strong>Secured Credit Card:</strong> A credit card backed by a cash deposit, often used by individuals looking to build or rebuild credit.</li>
                                    <li><strong>Unsecured Credit Card:</strong> A credit card not backed by collateral, typically requiring a higher credit score for approval.</li>
                                    <li><strong>Credit Inquiry:</strong> A request for your credit report, which can be either a hard or soft inquiry, affecting your credit score differently.</li>
                                    <li><strong>Minimum Payment:</strong> The smallest amount you can pay on your credit card bill without incurring a late fee.</li>
                                    <li><strong>Credit History:</strong> A record of a borrower's responsible repayment of debts, which influences credit scores.</li>
                                </ul>
                            </div> 
                        </div>
                    </div> 
                </div>

                <div className="explore-section">
                    <h1 className="title">Explore Content</h1>
                    <VideoList />
                </div> 
            </div>
        </AppContextProvider>
    )
}

export default Credit;