import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BankAccounts from './components/BankAccounts';
import Credit from './components/Credit';
import StudentLoans from './components/StudentLoans';
import Taxes from './components/Taxes';
import Insurance from './components/Insurance';
import Investing from './components/Investing';
import Budgeting from './components/Budgeting';
import { AppContextProvider } from './components/context/appContext';

function App() {
  return (
    <AppContextProvider> 
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bank-accounts" element={<BankAccounts />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/student-loans" element={<StudentLoans />} />
          <Route path="/taxes" element={<Taxes />} />
          <Route path="/investing" element={<Investing />} />
          <Route path="/budgeting" element={<Budgeting />} />
          <Route path="/insurance" element={<Insurance />} />
        </Routes>
      </div>
    </AppContextProvider>
  );
}

export default App;
