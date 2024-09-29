import React from "react";
import '../App';
import { Link } from "react-router-dom";
import { AppContextProvider, VideoList } from "./context/appContext";

const BankAccounts = () => {
    return (
        <AppContextProvider searchTerm="bank accounts for beginners">
            <div className="topic-container"> 
                <div className="topic-header">
                    <h1 className="topic-title">Bank Accounts</h1>
                    <div className="topic-description">
                        <div> 
                            <p>
                                Understanding bank accounts is fundamental to managing your finances effectively. Bank accounts allow you to store your money securely, access funds easily, and manage your day-to-day transactions. There are various types of bank accounts, including checking accounts for everyday spending, savings accounts for accumulating interest, and money market accounts that offer higher interest rates with certain restrictions. Knowing how to choose the right bank account and understanding associated fees can help you make the most of your financial resources.
                                Here are some trusted resources to help you get started:
                                <ul>
                                    <li><a href="https://www.bankrate.com/banking/bank-accounts/" target="_blank">Bankrate: Bank Accounts Overview</a></li>
                                    <li><a href="https://www.nerdwallet.com/best/banking/checking-accounts" target="_blank">NerdWallet: Best Checking Accounts</a></li>
                                    <li><a href="https://www.investopedia.com/bank-account-5118200" target="_blank">Investopedia: Types of Bank Accounts</a></li>
                                </ul>
                            </p>
                        </div>
                        <div className="topic-img3"></div>
                    </div>
                </div> 

                <div className="middle-section">
                    <div className="resources">
                        <h1 className="title">Resources</h1>
                        <div className="resource-container">
                            <div className="resource-list">
                                <h3>Beginner-Friendly Bank Account Resources</h3>
                                <ul> 
                                    <li className="resource-item">
                                        <a href="https://www.nerdwallet.com/article/banking/open-bank-account" target="_blank">NerdWallet: How to Open a Bank Account</a>
                                        <p>A guide on the steps to open a bank account and what to expect during the process.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.investopedia.com/best-online-banks-5186986" target="_blank">Investopedia: Best Online Banks</a>
                                        <p>Information on the best online banks for various banking needs.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.bankrate.com/banking/opening-a-bank-account/" target="_blank">Bankrate: Opening a Bank Account</a>
                                        <p>Insights on how to choose the right bank account based on your financial situation.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-bank-account-en-227/" target="_blank">Consumer Financial Protection Bureau: What is a Bank Account?</a>
                                        <p>Basic information about bank accounts and their benefits.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.creditkarma.com/advice/i/opening-a-bank-account" target="_blank">Credit Karma: Opening a Bank Account</a>
                                        <p>Advice on opening a bank account, including common pitfalls to avoid.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="resource-right">
                                <h1>Glossary</h1>
                                <ul>
                                    <li><strong>Checking Account:</strong> A bank account that allows for deposits and withdrawals, typically used for everyday transactions.</li>
                                    <li><strong>Savings Account:</strong> A bank account that earns interest on deposits and is used for saving money over time.</li>
                                    <li><strong>CD (Certificate of Deposit):</strong> A time deposit that earns a fixed interest rate for a specified term, often with higher interest rates than savings accounts.</li>
                                    <li><strong>ATM (Automated Teller Machine):</strong> A machine that allows customers to perform basic banking transactions without the need for a bank teller.</li>
                                    <li><strong>Bank Fees:</strong> Charges imposed by banks for various services, which can include monthly maintenance fees, ATM fees, and overdraft fees.</li>
                                    <li><strong>Direct Deposit:</strong> An electronic payment method that deposits funds directly into a bank account, commonly used for salaries and benefits.</li>
                                    <li><strong>Overdraft:</strong> A situation where withdrawals from a bank account exceed the available balance, potentially resulting in fees.</li>
                                    <li><strong>Online Banking:</strong> A service that allows customers to conduct financial transactions via the internet through their bank's website or app.</li>
                                    <li><strong>Mobile Banking:</strong> Accessing banking services through a mobile device, often via an app provided by the bank.</li>
                                    <li><strong>Interest Rate:</strong> The percentage at which interest is paid on deposits or charged on loans, typically expressed as an annual percentage.</li>
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

export default BankAccounts;
