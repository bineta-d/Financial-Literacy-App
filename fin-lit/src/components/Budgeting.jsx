import React from "react";
import '../App';
import { Link } from "react-router-dom";
import { AppContextProvider, VideoList } from "./context/appContext";
import CourseList from "./CourseList";

const Budgeting = () => {
    return (
        <AppContextProvider searchTerm="budgeting for beginners">
            <div className="topic-container" > 
                <div className="topic-header">
                    <h1 className="topic-title">Budgeting</h1>
                    <div className="topic-description">
                        <div> 
                            <p>
                                Budgeting is a crucial skill for managing your finances effectively. It involves tracking your income and expenses to ensure you spend within your means and save for future goals. By creating a budget, you can prioritize essential expenses, identify areas for savings, and work towards financial stability. Whether you're aiming to save for a big purchase or pay down debt, mastering budgeting will set you on the path to achieving your financial objectives.
                                Here are some trusted resources to help you get started:
                                <ul>
                                    <li><a href="https://www.mint.com" target="_blank">Mint</a></li>
                                    <li><a href="https://www.youneedabudget.com" target="_blank">You Need a Budget (YNAB)</a></li>
                                    <li><a href="https://www.everydollar.com" target="_blank">EveryDollar</a></li>
                                </ul>
                            </p>
                        </div>
                        <div className="topic-img2"></div>
                    </div>
                </div> 

                <div className="middle-section">
                    <div className="resources">
                        <h1 className="title">Resources</h1>
                        <div className="resource-container">
                            <div className="resource-list">
                                <h3>Beginner-Friendly Budgeting Resources</h3>
                                <ul> 
                                    <li className="resource-item">
                                        <a href="https://www.investopedia.com/articles/personal-finance/121815/how-start-budgeting.asp" target="_blank">Investopedia: How to Start Budgeting</a>
                                        <p>A detailed guide on how to create a budget, including tips on tracking expenses and setting financial goals.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.nerdwallet.com/article/finance/how-to-make-a-budget" target="_blank">NerdWallet: How to Make a Budget</a>
                                        <p>A comprehensive overview of budgeting methods and tools to help you manage your finances.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.consumer.gov/section/budgeting" target="_blank">Consumer.gov: Budgeting</a>
                                        <p>Practical tips and tools for creating a budget that fits your lifestyle and financial goals.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.bankrate.com/banking/budgeting-tips/" target="_blank">Bankrate: Budgeting Tips</a>
                                        <p>Expert advice on how to create and stick to a budget that works for you.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.apa.org/topics/stress/budgeting" target="_blank">American Psychological Association: Budgeting</a>
                                        <p>Insight into the psychological aspects of budgeting and how it can reduce financial stress.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="resource-right">
                                <h1>Glossary</h1>
                                <ul>
                                    <li><strong>Budget:</strong> A plan that outlines expected income and expenses over a specific period.</li>
                                    <li><strong>Fixed Expenses:</strong> Regular, unchanging costs, such as rent or mortgage payments.</li>
                                    <li><strong>Variable Expenses:</strong> Costs that can fluctuate, like groceries or entertainment.</li>
                                    <li><strong>Savings Rate:</strong> The percentage of income that is set aside for savings.</li>
                                    <li><strong>Discretionary Spending:</strong> Non-essential expenses that can be adjusted or eliminated.</li>
                                    <li><strong>Emergency Fund:</strong> Savings set aside for unexpected expenses or financial emergencies.</li>
                                    <li><strong>Debt-to-Income Ratio:</strong> A measure of an individual's monthly debt payments compared to their monthly income.</li>
                                    <li><strong>Cash Flow:</strong> The total amount of money coming in and going out over a specific period.</li>
                                    <li><strong>Expense Tracking:</strong> Monitoring and recording all spending to identify patterns and areas for improvement.</li>
                                    <li><strong>Financial Goals:</strong> Specific objectives set to guide budgeting and saving efforts, such as saving for a vacation or a new car.</li>
                                </ul>
                            </div> 
                        </div>


                    </div> 
                </div>

                <div className="explore-section">
                    <h1 className="title">Explore Content</h1>
                    <VideoList />
                </div> 


                {/* CourseList */}
                <div className="course-list-section">
                    
                </div>
            </div>
        </AppContextProvider>
    )
}

export default Budgeting;