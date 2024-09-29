import React from 'react';
import '../App';
import {Link} from 'react-router-dom';

export const Navbar =() =>{
    return ( 
        <div className='nav-bar'>
            <ul className='nav-list'>
            <Link to ="/">  <li>Home</li></Link>
              <Link to ="/bank-accounts">  <li>Bank Accounts</li></Link>
            <Link  to ="/credit" > <li>Credit</li></Link>
            <Link to ="/budgeting" >  <li>Budgeting</li></Link>
            <Link to="/insurance" > <li>Insurance</li></Link>
            <Link to ="/Taxes" >  <li>Taxes</li></Link>
            <Link to ="/student-loans" > <li>Student Loans</li></Link>
            <Link to ="/investing" > <li>Investing</li></Link>


            </ul>
            
        </div>
    )

}
export default Navbar; 