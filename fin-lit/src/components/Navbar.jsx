import React from 'react';
import '../App';
import {Link} from 'react-router-dom';

export const Navbar =() =>{
    return ( <nav class="navbar navbar-expand-lg" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
  <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
</svg>
</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav nav-fill w-100">
        <li class="nav-item">
          <Link to ="/" class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to ="/bank-accounts" class="nav-link" >Bank Accounts </Link>
        </li>
        
        <li class="nav-item">
          <Link to ="/credit" class="nav-link" >Credit</Link>
        </li>
        <li class="nav-item">
          <Link to ="/taxes" class="nav-link" >Taxes</Link>
        </li>
        <li class="nav-item">
          <Link to ="/budgeting" class="nav-link" >Budgeting</Link>
        </li>
        <li class="nav-item">
          <Link to ="/student-loans" class="nav-link"  >Student Loans</Link>
        </li>
        <li class="nav-item">
          <Link to ="/insurance" class="nav-link" >Insurance</Link>
        </li>
        <li class="nav-item">
          <Link to ="/investing" class="nav-link" >Investing</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
       
    )

}
export default Navbar; 