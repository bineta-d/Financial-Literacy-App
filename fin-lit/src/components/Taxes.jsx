import React from "react";
import '../App';
import { Link } from "react-router-dom";
import { AppContextProvider, VideoList } from "./context/appContext";

const Taxes = () => {
    return (
        <AppContextProvider searchTerm="taxes for beginners">
            <div className="topic-container"> 
                <div className="topic-header">
                    <h1 className="topic-title">Taxes</h1>
                    <div className="topic-description">
                        <div> 
                            <p>
                                Understanding taxes is essential for managing your finances effectively. Taxes are mandatory contributions to state revenue, levied on income, profits, and sales. Learning about different types of taxes—such as income tax, sales tax, and property tax—can help you navigate the complexities of the tax system. Additionally, being aware of tax deductions and credits can maximize your tax savings and minimize your liability. Staying informed about tax laws and regulations is key to financial planning and compliance.
                                Here are some trusted resources to help you get started:
                                <ul>
                                    <li><a href="https://www.irs.gov" target="_blank">IRS: Internal Revenue Service</a></li>
                                    <li><a href="https://www.kiplinger.com/taxes" target="_blank">Kiplinger: Taxes</a></li>
                                    <li><a href="https://www.nolo.com/legal-encyclopedia/tax-basics-beginners-29008.html" target="_blank">Nolo: Tax Basics for Beginners</a></li>
                                </ul>
                            </p>
                        </div>
                        <div className="topic-img6"></div>
                    </div>
                </div> 

                <div className="middle-section">
                    <div className="resources">
                        <h1 className="title">Resources</h1>
                        <div className="resource-container">
                            <div className="resource-list">
                                <h3>Beginner-Friendly Tax Resources</h3>
                                <ul> 
                                    <li className="resource-item">
                                        <a href="https://www.irs.gov/filing" target="_blank">IRS: Filing Your Taxes</a>
                                        <p>A comprehensive guide on how to file your taxes, including forms, deadlines, and requirements.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.nerdwallet.com/article/taxes/tax-guide" target="_blank">NerdWallet: Tax Guide</a>
                                        <p>A step-by-step guide to understanding your tax obligations and maximizing deductions and credits.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.hrb.com/tax-tips" target="_blank">H&R Block: Tax Tips</a>
                                        <p>Expert tips and advice for tax planning and filing to help you save money and avoid mistakes.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.thebalance.com/taxes-4072726" target="_blank">The Balance: Taxes Explained</a>
                                        <p>An overview of key tax concepts and important information to help you navigate your tax responsibilities.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.taxact.com/education/tax-basics" target="_blank">TaxAct: Tax Basics</a>
                                        <p>A beginner's guide to understanding taxes, including common terms and essential information for filing.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="resource-right">
                                <h1>Glossary</h1>
                                <ul>
                                    <li><strong>Tax Bracket:</strong> The range of income taxed at a particular rate; tax rates increase as income rises.</li>
                                    <li><strong>Deduction:</strong> An expense that reduces taxable income, lowering the overall tax liability.</li>
                                    <li><strong>Credit:</strong> An amount that can be subtracted directly from taxes owed, reducing tax liability dollar-for-dollar.</li>
                                    <li><strong>Withholding:</strong> The portion of an employee's paycheck withheld by the employer to cover anticipated taxes.</li>
                                    <li><strong>Filing Status:</strong> A classification that affects tax rates and eligibility for tax deductions and credits, such as single or married filing jointly.</li>
                                    <li><strong>Form 1040:</strong> The standard IRS form used by individuals to file their annual income tax returns.</li>
                                    <li><strong>Audit:</strong> A review of an individual's or business's tax return by the IRS to verify accuracy and compliance.</li>
                                    <li><strong>Taxable Income:</strong> The amount of income subject to taxes after deductions and exemptions are applied.</li>
                                    <li><strong>Estimated Taxes:</strong> Taxes paid on income not subject to withholding, typically for self-employed individuals or freelancers.</li>
                                    <li><strong>State Income Tax:</strong> A tax imposed by individual states on income earned within that state, in addition to federal income tax.</li>
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

export default Taxes;
