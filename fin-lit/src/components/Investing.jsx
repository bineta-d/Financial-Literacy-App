import React from "react";
import '../App';
import { Link } from "react-router-dom";
import { AppContextProvider, VideoList} from "./context/appContext";

 const Investing = ()=> {
    return (
        <AppContextProvider searchTerm="investing for beginners">
        <div class="topic-container"> 
            <div className="topic-header">
            <h1 className="topic-title">Investing</h1>
            {/* Automatically render the VideoList component */}
            <div className="topic-description">
               <div> 
                <p>
        Investing is one of the best ways to build wealth over time. By putting your money into assets like stocks, bonds, and funds, you allow it to grow through compound interest and market gains. The key to successful investing is understanding the fundamentals—starting small, diversifying your investments, and knowing your risk tolerance. Whether you're saving for retirement, education, or other financial goals, getting started early and staying informed are essential steps toward achieving long-term success.
        Here are some trusted resources to help you get started:
        <ul>
            <li><a href="https://www.schwab.com" target="_blank">Charles Schwab</a></li>
            <li><a href="https://investor.vanguard.com" target="_blank">Vanguard</a></li>
            <li><a href="https://www.fidelity.com" target="_blank">Fidelity</a></li>
        </ul>
    </p></div>
        <div className="topic-img1"></div>
        
            </div>
            {/* <VideoList /> */}
           </div> 

        <div className="middle-section">

        <div className="resources">
         <h1 className="title">Resources</h1>
        {/* <div className=""> */}
            
          
            <div className="resource-container">
             
            <div className="resource-list">
    
    <h3>Beginner-Friendly Investing Resources</h3>
    <ul className="the-resources"> 
        {/* Beginner Guides */}
        <li className="resource-item">
            <a href="https://www.investopedia.com/basics-of-investing-5077470" target="_blank">Investopedia: Basics of Investing</a>
            <p> A comprehensive guide that explains the key concepts of investing, types of assets, and how to get started.</p>
        </li>

        <li className="resource-item">
            <a href="https://www.nerdwallet.com/article/investing/how-to-start-investing" target="_blank">NerdWallet: How to Start Investing</a>
            <p> A step-by-step guide on how to begin investing, including tips on choosing an investment account and asset allocation.</p>
        </li>

        <li className="resource-item">
            <a href="https://www.schwab.com/resource-center/investing/learn-to-invest" target="_blank">Charles Schwab: Learn to Invest</a>
            <p> This resource offers articles and tools for beginners to understand investing and develop their strategies.</p>
        </li>

        <li className="resource-item">
            <a href="https://www.vanguard.com/whatweoffer/investing-basics" target="_blank">Vanguard: Investing Basics</a>
            <p> A straightforward introduction to the basics of investing, explaining different investment options and strategies.</p>
        </li>

        <li className="resource-item">
            <a href="https://www.fidelity.com/learning-center/investment-products" target="_blank">Fidelity: Investment Products</a>
            <p> An overview of various investment products and how they can fit into your overall financial plan.</p>
        </li>
    </ul>
</div>

            <div className=" resource-right ">
                <h1>Glossary</h1>
                <ul>
    <li><strong>Asset:</strong> Any resource owned by an individual or entity that is expected to provide future economic benefits.</li>
    <li><strong>Investment:</strong> The allocation of money into an asset with the expectation of generating income or profit.</li>
    <li><strong>Portfolio:</strong> A collection of financial investments, such as stocks, bonds, and cash equivalents, held by an individual or institution.</li>
    <li><strong>Risk:</strong> The potential for loss or gain in an investment; understanding risk is crucial for making informed investment decisions.</li>
    <li><strong>Diversification:</strong> The strategy of spreading investments across various assets to reduce risk.</li>
    <li><strong>Stocks:</strong> Shares of ownership in a company, representing a claim on part of the company's assets and earnings.</li>
    <li><strong>Bonds:</strong> Debt securities issued by corporations or governments, promising to pay back the principal amount with interest.</li>
    <li><strong>Mutual Funds:</strong> Investment vehicles that pool money from multiple investors to purchase a diversified portfolio of stocks, bonds, or other securities.</li>
    <li><strong>Return on Investment (ROI):</strong> A measure of the profitability of an investment, calculated as the gain or loss relative to the initial investment cost.</li>
    <li><strong>Compound Interest:</strong> Interest calculated on the initial principal and also on the accumulated interest from previous periods, leading to exponential growth over time.</li>
</ul>

           
            </div> 
            
            </div>
           
            {/* <div className=" resource-right tips">
                <h1>Tips & Tricks:</h1>

                <div className="tip1"> Hello</div>

                <div className="tip1"> Hello</div>
                <div className="tip1"> Hello</div>
                <div className="tip1"> Hello</div>
                <div className="tip1"> Hello</div>
            </div>  */}

            </div>   {/* middle section*/}

             
            
        </div>

        </div> {/* middle section               */}
          
        <div className="explore-section">
            <div className="explore-section">
              <h1 className="title">Explore Content</h1>
              <VideoList />
              
              </div>
          
        {/* </div> */}
            
        </div> 
       
    </AppContextProvider>
    )
}
export default Investing; 