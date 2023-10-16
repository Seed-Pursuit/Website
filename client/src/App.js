import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './page/LandingPage';
import HomePage from './page/HomePage'; 
import { useAuth0 } from '@auth0/auth0-react'; 
import InvestmentPortfolioHomePage from './page/invest/InvestmentPortfolioPage';
import StartupPortfolioHomePage from './page/startup/StartupPortfolioPage';
import MyPortfolioPage from './page/individual/MyPortfolioPage';
import FindCoFounderPage from './page/social_media/FindCoFounderPage';

function App() {
  const { isAuthenticated } = useAuth0(); 

  return (
    <div className="bg-classic min-h-screen">
      <Router>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path='/' element={isAuthenticated ? <HomePage /> : <LandingPage />} exact />
          <Route path='/invest' element={isAuthenticated ? <InvestmentPortfolioHomePage/> : <LandingPage />} exact />
          <Route path='/start-up' element={isAuthenticated ? <StartupPortfolioHomePage/> : <LandingPage />} exact />
          <Route path='/my-portfolio' element={isAuthenticated ? <MyPortfolioPage/> : <LandingPage />} exact />
          <Route path='/find-co-founder' element={isAuthenticated ? <FindCoFounderPage/> : <LandingPage />} exact />
        </Routes>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
