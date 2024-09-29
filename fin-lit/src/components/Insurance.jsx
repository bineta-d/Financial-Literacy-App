import React from "react";
import '../App';
import { Link } from "react-router-dom";
import { AppContextProvider, VideoList } from "./context/appContext";

const Insurance = () => {
    return (
        <AppContextProvider searchTerm="insurance for beginners">
            <div className="topic-container"> 
                <div className="topic-header">
                    <h1 className="topic-title">Insurance</h1>
                    <div className="topic-description">
                        <div> 
                            <p>
                                Insurance is a vital financial tool that provides protection against unexpected events. It can help safeguard your finances in situations like accidents, health emergencies, or natural disasters. Understanding the various types of insurance, such as health, auto, home, and life insurance, is crucial for making informed decisions about coverage and premiums. Having the right insurance can offer peace of mind and financial security, ensuring that you and your loved ones are protected against unforeseen circumstances.
                                Here are some trusted resources to help you get started:
                                <ul>
                                    <li><a href="https://www.naic.org" target="_blank">National Association of Insurance Commissioners (NAIC)</a></li>
                                    <li><a href="https://www.nerdwallet.com/article/insurance/types-of-insurance" target="_blank">NerdWallet: Types of Insurance</a></li>
                                    <li><a href="https://www.investopedia.com/terms/i/insurance.asp" target="_blank">Investopedia: Insurance Explained</a></li>
                                </ul>
                            </p>
                        </div>
                        <div className="topic-img5"></div>
                    </div>
                </div> 

                <div className="middle-section">
                    <div className="resources">
                        <h1 className="title">Resources</h1>
                        <div className="resource-container">
                            <div className="resource-list">
                                <h3>Beginner-Friendly Insurance Resources</h3>
                                <ul> 
                                    <li className="resource-item">
                                        <a href="https://www.iii.org/article/understanding-insurance" target="_blank">Insurance Information Institute: Understanding Insurance</a>
                                        <p>A comprehensive guide that explains the basics of insurance, different types of coverage, and how policies work.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.policygenius.com/insurance/" target="_blank">Policygenius: Insurance 101</a>
                                        <p>A resource that breaks down various types of insurance and helps you find the right coverage for your needs.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.zillow.com/mortgage-learning/insurance/" target="_blank">Zillow: Understanding Insurance</a>
                                        <p>Information on how insurance works, its importance in real estate, and tips for choosing the right coverage.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.thebalance.com/what-is-insurance-527091" target="_blank">The Balance: What is Insurance?</a>
                                        <p>An introduction to the concept of insurance, including how it works and common types of policies.</p>
                                    </li>
                                    <li className="resource-item">
                                        <a href="https://www.consumer.gov/insurance" target="_blank">Consumer.gov: Insurance Basics</a>
                                        <p>A guide that explains the fundamentals of insurance, helping you understand your options and rights as a consumer.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="resource-right">
                                <h1>Glossary</h1>
                                <ul>
                                    <li><strong>Premium:</strong> The amount paid for an insurance policy, usually on a monthly or annual basis.</li>
                                    <li><strong>Deductible:</strong> The amount you pay out of pocket before your insurance coverage kicks in.</li>
                                    <li><strong>Coverage:</strong> The extent of protection provided by an insurance policy against specific risks.</li>
                                    <li><strong>Exclusion:</strong> Specific conditions or circumstances that are not covered by an insurance policy.</li>
                                    <li><strong>Claim:</strong> A request made by the insured to the insurance company for payment based on a covered event.</li>
                                    <li><strong>Beneficiary:</strong> A person or entity designated to receive the benefits of an insurance policy upon the insured's death.</li>
                                    <li><strong>Underwriting:</strong> The process by which insurers assess risk and determine the terms of coverage.</li>
                                    <li><strong>Policy:</strong> A contract between the insurer and the insured outlining the terms of coverage and obligations.</li>
                                    <li><strong>Rider:</strong> An additional provision added to an insurance policy that modifies its coverage.</li>
                                    <li><strong>Liability Insurance:</strong> Coverage that protects against claims resulting from injuries and damage to people or property.</li>
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

export default Insurance;
