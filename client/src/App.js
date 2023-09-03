import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './page/LandingPage';
import HomePage from './page/HomePage'; 
import { useAuth0 } from '@auth0/auth0-react'; 

function App() {
  const { isAuthenticated } = useAuth0(); 

  return (
    <div className="bg-soft min-h-screen">
      <Router>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path='/' element={isAuthenticated ? <HomePage /> : <LandingPage />} exact />
        </Routes>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
