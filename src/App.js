import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <Router>
      <Routes>
      <div>
        <NavBar/>
      </div>
        <Route path='/' element={<Home/>} exact/>
      </Routes>
      <div>
        <Footer/>
      </div>
      </Router>
    </div>
  );
}

export default App;
