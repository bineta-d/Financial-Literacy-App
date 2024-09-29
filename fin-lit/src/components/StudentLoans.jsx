import React from "react";
import '../App';
import { Link } from "react-router-dom";
import { AppContextProvider, VideoList } from "./context/appContext";

const StudentLoans = () => {
    return (
        <AppContextProvider searchTerm="student loans and financing for beginners">
            <div className="topic-container"> 
                <div className="topic-header">
                    <h1 className="topic-title">Student Loans and Financing</h1>
                    <div className="topic-description">
                        <div> 
                            <p>
                                Understanding student loans and financing options is crucial for anyone looking to pursue higher education. Student loans can help cover the costs of tuition, fees, and living expenses, but it’s important to understand the terms, interest rates, and repayment options associated with these loans. There are federal and private loan options, each with unique benefits and responsibilities. Being informed about loan types, interest rates, and repayment plans can help you make sound financial decisions and manage your debt effectively after graduation.
                                Here are some trusted resources to help you get started:
                                <ul>
                                    <li><a href="https://studentaid.gov" target="_blank">Federal Student Aid</a></li>
                                    <li><a href="https://www.nerdwallet.com/article/loans/student-loans" target="_blank">NerdWallet: Student Loans</a></li>
                                    <li><a href="https://www.investopedia.com/terms/s/studentloan.asp" target="_blank">Investopedia: Student Loans Explained</a></li>
                                </ul>
                            </p>
                        </div>
                        <div className="topic-img4"></div> 
                    </div>
                </div> 

                <div className="middle-section">
                    <div className="resources">
                        <h1 className="title">Resources</h1>
                        <div className="resource-container">
                            <div className="resource-list">
                                <h3>Beginner-Friendly Student Loan Resources</h3>
                                <ul> 
                                    <li className="resource-item">
                                        <a href="https://www.consumerfinance.gov/borrowers/student-loans/" target="_blank">Consumer Financial Protection Bureau: Student Loans</a>
                                        <p>A comprehensive overview of student loans, including types, repayment options, and borrower rights.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.ed.gov/college/pay" target="_blank">U.S. Department of Education: Paying for College</a>
                                        <p>Information on financing options for college, including loans, grants, and scholarships.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.finaid.org/loans/" target="_blank">Finaid: Loans</a>
                                        <p>A detailed guide on student loans, including federal and private loan options.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.collegedata.com/resources/financial-aid/how-to-get-student-loans" target="_blank">CollegeData: How to Get Student Loans</a>
                                        <p>Steps and tips for applying for student loans and understanding the borrowing process.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.salliemae.com/student-loans/" target="_blank">Sallie Mae: Student Loans</a>
                                        <p>An overview of student loan options offered by Sallie Mae, including details on repayment plans.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="resource-right">
                                <h1>Glossary</h1>
                                <ul>
                                    <li><strong>Federal Student Loans:</strong> Loans provided by the federal government, typically offering lower interest rates and more flexible repayment options.</li>
                                    <li><strong>Private Student Loans:</strong> Loans offered by private lenders that may have higher interest rates and stricter repayment terms.</li>
                                    <li><strong>Interest Rate:</strong> The percentage charged on the borrowed amount, determining how much money will need to be repaid in addition to the principal.</li>
                                    <li><strong>Grace Period:</strong> The period after graduation during which you are not required to make loan payments, typically lasting six months for federal loans.</li>
                                    <li><strong>Loan Servicer:</strong> The company that manages your student loan and is responsible for billing and other customer service.</li>
                                    <li><strong>Repayment Plan:</strong> The schedule outlining how and when you will repay your student loans, which can vary based on loan type.</li>
                                    <li><strong>Deferment:</strong> A temporary postponement of loan payments, usually granted under specific circumstances such as returning to school.</li>
                                    <li><strong>Forbearance:</strong> A temporary reduction or suspension of loan payments granted due to financial hardship or other qualifying circumstances.</li>
                                    <li><strong>Consolidation:</strong> The process of combining multiple student loans into one, which can simplify repayment but may alter terms.</li>
                                    <li><strong>Loan Forgiveness:</strong> A program that cancels all or part of your student loan debt after meeting certain requirements, such as working in public service.</li>
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

export default StudentLoans;
